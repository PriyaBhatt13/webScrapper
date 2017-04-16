'use strict';

let express = require('express');
let app = express();
let cherrio = require('cheerio');
let curl = require('curl');

app.use(express.static('frontend'));

app.get('/api/heartbeat', function (req, res) {
    res.send('service up and running!')
});


let getHtmlPage = (code, body) => {
    return (code < 500) ? cherrio.load(body) : null
};

let getHeaderDetails = (headings) => {
    let headingList = {};
    headings.map((key, heading) => {
        if (!headingList[heading.name]) {
            headingList[heading.name] = 1;
        } else {
            headingList[heading.name] += 1;
        }
    });
    return headingList;
};

let urlIdentifier = (url) => {
    let re = new RegExp('^(?:[a-z]+:)?//', 'i');
    return re.test(url);
};

let getAllLinkDetails = (links) => {
    let linkList = {
        external: [],
        internal: [],
        inAccessible: []
    };
    links.map((key, link) => {
        if (link.attribs.hasOwnProperty('href')) {
            urlIdentifier(link.attribs.href) ? linkList.external.push(link.attribs.href) : linkList.internal.push(link.attribs.href);
        } else {
            linkList.inAccessible.push(link.name);
        }
    });
    return linkList;
};

let extractPageProperties = ($) => {
    if ($) {
        return {
            title: $('title').text(),
            headings: {
                numberOfHeadings: $(':header').length,
                headingList: getHeaderDetails($(':header'))
            },
            links: {
                numberOfLinks: $('a:link').length,
                linksList: getAllLinkDetails($('a:link'))
            },
            pageHasLogin: $('input[type="password"]') ? !!$('input[type="password"]').length : false
        }
    }
};

app.post('/api/analyzePage', function (req, response) {
    let url = req.query.pageURL;
    curl.get(url, {}, (err, res, body) => {
        let page = getHtmlPage(res.statusCode, body);
        response.json({
            statusCode: res.statusCode,
            statusText: res.statusMessage,
            pageProperties: extractPageProperties(page)
        })
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
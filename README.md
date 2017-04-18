#webScrapper

Assumptions:
If href attribute looks like this `<a href="http://foo.com/">foo</a>` then it is considered as external link
If href attribute looks like this `<a href="/bar.do/">bar</a>` then it is considered as internal link
If link does not have href eg(`<a onclick="javascript:void(0)">nowhere</a>`) attribute it is considered as inaccessible
If page has one input type with password then it is considered to have a login-form

Tech-Stack:

BackEnd:
Expressjs
cheerio.js
curl

FrontEnd:
Reactjs
sass
superagent

Tasks to run:
`npm install // to install all required dependencies`
`npm run build // to build front-end assets`
`npm start // to start local api server`

How it works:

An input field with url type is available on page , button is disabled till the time user enters valid url.

once user enters valid url and clicks on button , ajax (post) call is made to express server,pageurl is passed as query parameter

post call checks if passed url is available or not using curl , if it is not valid then error code and status message is sent as response and it is displayed in front end

if it is valid then page body is loaded with cheerio and further analysis is done(title,links,heading,login-form etc.)

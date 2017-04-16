import React from 'react';
import pluralizer from './pluralizer';

let TypesOfLinks = (list) => {
    return Object.keys(list).map((item, index) => {
        return <li key={index}>{item.toUpperCase()} - {list[item].length}</li>
    })
};

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h3>Page has  {this.props.linkProps.numberOfLinks} {pluralizer('Link', 'Links', this.props.linkProps.numberOfLinks)}</h3>
            <ul>{TypesOfLinks(this.props.linkProps.linksList)}</ul>
        </div>
    }

}

export default Link;
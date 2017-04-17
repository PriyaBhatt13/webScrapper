import React from 'react';
import pluralizer from './pluralizer';

const TypesOfLinks = (list) => Object.keys(list).map((item, index) => {
    return <li key={index}>{item.toUpperCase()} - {list[item].length}</li>;
});

export default (props) => {
    return <div>
        <h3>Page has {props.numberOfLinks} {pluralizer('Link', 'Links', props.numberOfLinks)}</h3>
        <ul>{TypesOfLinks(props.linksList)}</ul>
    </div>
};

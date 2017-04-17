import React from 'react';
import pluralizer from './pluralizer';
let TypesOfHeadings = (list) => {
    return Object.keys(list).map((item, index) => {
        return <li key={index}>{item.toUpperCase()} - {list[item]}</li>
    })
};

class Heading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h3>Page
                has {this.props.headingProps.numberOfHeadings} {pluralizer('heading', 'headings', this.props.headingProps.numberOfHeadings)}</h3>
            <ul>{TypesOfHeadings(this.props.headingProps.headingList)}</ul>
        </div>
    }

}

export default Heading;
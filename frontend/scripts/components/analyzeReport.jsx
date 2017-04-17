import React from 'react';
import Heading from './heading';
import Link from './link';

class Report extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="report-wrapper">
            <fieldset>
                <legend>{this.props.pageProperties.title}</legend>
                <Heading headingProps={this.props.pageProperties.headings}/>
                {Link(this.props.pageProperties.links)}
                <div>{this.props.pageProperties.pageHasLogin ?
                    <strong><i>"This page has got a login form"</i></strong> : null}</div>
            </fieldset>
        </div>
    }
}

export default Report;
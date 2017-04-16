import React from 'react';

class ErrorWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="error-service">
            <span className="error-code">
                {this.props.apiResponse.statusCode}
            </span>
            <span className="error-msg">
                {this.props.apiResponse.statusText}
            </span>
        </div>
    }
}

export default ErrorWrapper;
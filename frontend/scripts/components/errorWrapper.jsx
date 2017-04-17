import React from 'react';

class ErrorWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="error-service">
            <div className="error-code">
                <strong>Code : </strong>
                {this.props.apiResponse.statusCode}
            </div>
            <div className="error-msg">
                <strong>Message : </strong>
                {this.props.apiResponse.statusText}
            </div>
        </div>
    }
}

export default ErrorWrapper;
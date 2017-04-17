import React from 'react';
import request from 'superagent';
import ErrorWrapper from './errorWrapper';
import Report from './analyzeReport';
import ProgressIndicator from './progressIndicator';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValidURL: false,
            url: '',
            loading: false
        }
    }

    validatePassesURL(evt) {
        let url = evt.target.value;
        let validUrl;
        let re = new RegExp('^(?:[a-z]+:)?//');
        let isValid = false;
        if (re.test(url)) {
            isValid = true;
            validUrl = url;
        }
        this.updateState({
            isValidURL: isValid,
            url: validUrl
        });
    }

    updateState(payload) {
        this.setState(payload);
    }

    handleButtonClick() {
        let url = this.state.url;
        this.updateState({
            loading: true
        });
        request
            .post('/api/analyzePage')
            .query({pageURL: url})
            .then((res) => {
                this.updateState({
                    apiResponse: res.body,
                    loading: false
                });
            }, (err) => {
                this.updateState({
                    apiResponse: err,
                    loading: false
                });
            });
    }

    render() {

        if (this.state.loading) {
            return <ProgressIndicator/>
        } else {
            return <div>
                <input type="url" ref="url" placeholder="http://example.com"
                       onInput={this.validatePassesURL.bind(this)}/>
                <input type="button" disabled={!this.state.isValidURL} onClick={this.handleButtonClick.bind(this)}
                       value="Analyze"/>
                {
                    this.state.apiResponse ? <ErrorWrapper apiResponse={this.state.apiResponse}/> : null
                }
                {
                    this.state.apiResponse && this.state.apiResponse.pageProperties ?
                        <Report pageProperties={this.state.apiResponse.pageProperties}/> : null
                }
            </div>
        }

    }
}

export default Form;

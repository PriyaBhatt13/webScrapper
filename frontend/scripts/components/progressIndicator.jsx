import React from 'react';

class ProgressIndicator extends React.Component{
	constructor(props) {
        super(props);
    }
    render() {
        return <div class="loading">
  					<img class="loading-image" src="./images/ajax-loader.gif" alt="Loading..." />
				</div>
    }
}

export default ProgressIndicator;
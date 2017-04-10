import React, { Component } from 'react';

class App extends Component{
  render() {
    return (
	  <div className="row">
		<div className="panel panel-default col-xs-12 col-md-8 col-md-offset-2">
		  <div className="panel-heading">Uniregistry</div>
		  <div className="panel-body">
			{this.props.children}
		  </div>
		</div>
	  </div>
    );
  }
}

export default App;

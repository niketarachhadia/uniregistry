import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openDetails,saveDetails} from '../redux/actions'
import {push} from 'react-router-redux';

class Details extends Component {  
  constructor(props) {
    super(props);
	const id=props.params.domainid
	const response=this.props.dispatch(
				openDetails(id)
			)
	if (response.type==="INIT_DETAILS"){
		this.state = {details:response.details}
	}
	this.handleChange=this.handleChange.bind(this)
	this.handleSave=this.handleSave.bind(this)
  }
  
  handleChange(event) {	
	const updatedDetails=this.state.details;
	updatedDetails[event.target.name]= event.target.value;
    this.setState({details:updatedDetails});
  }
  
  handleSave() {
	const response=this.props.dispatch(
				saveDetails(this.state.details.id, this.state.details,this.props.domainList)
			)
	if(response.type=="SAVED_DETAILS"){
		this.props.dispatch(push('intro'))
	}else{
		prompt(response.message)
	}
  }
  
  render() {
    return (
	<div className="panel panel-success row">
		<div className="panel-heading">Domains Details</div>
		<div id="form" className="col-10">
			<div className="form-group text-success">
			  <label htmlFor="domain" className="col-2 col-form-label">Domain</label>
			  <div className="col-10">
				<input className="form-control" type="text" value={this.state.details.domain} name="domain"
				onChange={this.handleChange} />
			  </div>
			</div>
			<div className="form-group text-success">
			  <label htmlFor="registrant_email" className="col-2 col-form-label">Registrant Email</label>
			  <div className="col-10">
				<input className="form-control" type="email" value={this.state.details.registrant_email} name="registrant_email"
				onChange={this.handleChange} />
			  </div>
			</div>
			<div className="form-group text-success">
			  <label htmlFor="price" className="col-2 col-form-label">Price</label>
			  <div className="col-10">
				<input className="form-control" type="number" value={this.state.details.price} name="price"
				onChange={this.handleChange} />
			  </div>
			</div>
		</div>
		<button type="button" className="btn btn-success" onClick={this.handleSave}>Save Changes</button>

	</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
		details:state.detailsReducer,
		domainList:state.introReducer
  }
}

const Container = connect(mapStateToProps)(Details);
export default Container;
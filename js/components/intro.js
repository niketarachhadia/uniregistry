import React, { Component } from 'react';
import {connect} from 'react-redux';
import {initDomainList,openDetails} from '../redux/actions'
import {push} from 'react-router-redux';

class Intro extends Component {
  constructor(props) {
	  super(props);
	  if(props.domainList.length==0){
		  const response=this.props.dispatch(
				initDomainList()
			);
	  }
	}
	
  showCheckMark(domainName){
	  if(domainName.endsWith(".cars") || domainName.endsWith(".lol")){
		  return <span className="fa fa-check"></span>
	  }else{
		  return <span></span>
	  }
  }
  
  openDetails(id,dispatch,event){
	  event.preventDefault();
	  
		  dispatch(push('details/'+id))
	  
	  
  }
  
  render() {
    return (
	<div className="panel panel-success">
		<div className="panel-heading">Domains List</div>
		<div className="panel-body table-responsive">
			<table className="table table-striped">
				<thead>
				<tr>
				  <th className="text-center">Domain Name</th>
				  <th className="text-center">Uniregistry</th>
				  <th className="text-center">Price</th>
				</tr>
			  </thead>
			  <tbody>
				{this.props.domainList.map((record,index)=>{
					return <tr key={index}>
								<td className="text-success text-center">
									<a href="#" onClick={this.openDetails.bind(null,record.id,this.props.dispatch)}>{record.domain}</a>
								</td>
								<td className="text-success text-center">{this.showCheckMark(record.domain)}</td>
								<td className="text-success text-right">{"$"+record.price}</td>
							</tr>
				})}
			   </tbody>
			</table>
		</div>
	</div>
    );
  }
}

Intro.propTypes= {
    domainList: React.PropTypes.array.isRequired,
	dispatch :React.PropTypes.func
  }	

const mapStateToProps = (state, ownProps) => {
  return {
		domainList:state.introReducer
  }
}

const Container = connect(mapStateToProps)(Intro);
export default Container;
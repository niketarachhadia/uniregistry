const initialDomainList=[]
export function introReducer(state = initialDomainList, action){
	if(action.type=='INITI_DOMAIN_LIST' || action.type=='SAVED_DETAILS'){
		return action.domainsList
	}
	return state
}
const initialDetails={}
export function detailsReducer(state=initialDetails, action){
	if(action.type=='INIT_DETAILS' ||action.type=='SAVED_DETAILS' ){
		return action.details
	}else if(action.type=='SAVE_ERROR'){
		return action.details
	}
	
	return state
}
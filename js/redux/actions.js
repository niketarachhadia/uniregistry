import {getMasterData,getDetailedData} from "./data"

const INITI_DOMAIN_LIST = 'INITI_DOMAIN_LIST';

export function initDomainList(){
	return {
		type:INITI_DOMAIN_LIST,
		domainsList:getMasterData()
	}
}


const details=getDetailedData()
const INIT_DETAILS="INIT_DETAILS"

export function openDetails(id){
	return {
		type:INIT_DETAILS,
		details:details[id]
	}
}

export function saveDetails(id,detail,domainList){
	if(id in details){
		details[id]=detail
		domainList=domainList.map((domain,index)=>{
			if(domain.id==id){
				domain.id=detail.id
				domain.domain=detail.domain
				domain.price=detail.price
			}
			return domain
		})
		return {
			type:"SAVED_DETAILS",
			details:detail,
			domainsList:domainList
		}
	}else{
		return {
			type:"SAVE_ERROR",
			details:detail,
			message:"Key does not exist"
		}
	}
	
}



class Domain{
	constructor(id,domain,price,registrant_email) {
		this.id = id;
		this.domain = domain;
		this.price = price;
		this.registrant_email = registrant_email;
	  }
}


export function getMasterData(){
	return [
		new Domain(1,"foodfighters.lol",1200,null),
		new Domain(2,"greendiamondsky.com",900,null),
		new Domain(3,"selfdriving.cars",1600,null)
	]
}

export function getDetailedData(){
	return {
		1:new Domain(1,"foodfighters.lol",1200,"john.smith@email.com"),
		2:new Domain(2,"greendiamondsky.com",900,"admin@dealdomainer.com"),
		3:new Domain(3,"selfdriving.cars",1600,"carl.sagan@aimotors.com")
	}
}
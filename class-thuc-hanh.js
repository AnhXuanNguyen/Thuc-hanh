class Animal{
	constructor(_name,_weight){
		this.name = _name;
		this.weight = _weight;
	}
	setName(_name){
		this.name = _name;
	}
	setWeight(_weight){
		this.weight = _weight;
	}
	getName(){
		return this.name;
	}
	getWeight(){
		return this.weight;
	}
	toString(){
		return "Name is: "+this.name+" Weight is: "+this.weight;
	}
}
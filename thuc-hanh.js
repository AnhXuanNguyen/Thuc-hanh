function equation(){
	let a = prompt("nhập vào số a: ");
	a = parseInt(a);
	let b = prompt("nhập vào số b: ");
	b = parseInt(b);
	let x = 0;
	if (a == 0) {
        if (b == 0) {
        	alert("phương trình vô nghiệm");
        }else alert("phương trình có vô số nghiệm");    
	}
	else{
        x = -b/a;
        alert("phương trình có nghiệm = "+x);
	}
}
function testInt(){
	let arr = [0, 1, 2, 3, 4, 5, 6];
	let a = prompt("Nhập vào số cần tìm trong mảng: ");
	alert(findInt(a,arr));
}
function findInt(a,arr){
	for(let i = 0; i < arr.length; i++){
		if (a == arr[i]) {
			return a;
		}
	}
	return "Trong mảng không có số này";
}
function findVowels(){
	let vowels = ["a","o","e","u","i"];
	let a = prompt("Nhập vào chuỗi");
	alert(checkVowel(a,vowels));
}
function checkVowel(a,arr){
	let sum = 0;
	for(let i = 0; i < a.length; i++){
		for(let j = 0; j < arr.length; j++){
			if (a[i]==arr[j]) {
				sum++;
			}
		}
	}
	if (sum) {
		return sum;
	}else return false;
}
function buildAnimal(){
	let  objAnimal1 = new Animal();
	objAnimal1.setName("Elephant");
	objAnimal1.setWeight(45.6);
	alert(objAnimal1.toString());
	let objAnimal2 = new Animal("Mouse",15);
	alert(objAnimal2.toString());
}
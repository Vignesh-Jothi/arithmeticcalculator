 function display(num) {
		document.getElementById('display').value +=num;
		return num;
}
function clrScreen(){
	document.getElementById('display').value = ' ';
}
function arithmetic(){
	let x = document.getElementById('display').value; 
	let y = eval(x);
	document.getElementById('display').value = y;
	return y;
}

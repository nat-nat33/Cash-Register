var calculator= calculatorModule;
console.log(calculator);

//register buttons
var calc = document.getElementById('calc');
var main = document.getElementById('main');
var display = document.getElementById('display');

var buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '00', '.', 'CLEAR', 'BALANCE', 'DEPOSIT', 'WITHDRAW','/', '*', '+', '-'];

for(var i = 0; i < buttons.length; i++){
	var key = document.createElement('button');
	key.id = 'key' + [buttons[i]];
	key.innerHTML= [buttons[i]];
	calc.appendChild(key);

	key.addEventListener('click', function(){
		console.log(this.id);
		if(this.id === 'key0'){
			display.innerHTML += 0;
			var zero= calculator.load(Number(display.innerHTML));
			console.log(one);
		} else if(this.id === 'key1'){
			display.innerHTML += 1;
			var one= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key2'){
			display.innerHTML += 2;
			var two= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key3'){
			display.innerHTML += 3;
			var three= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key4'){
			display.innerHTML += 4;
			var four= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key5'){
			display.innerHTML += 5;
			var five= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key6'){
			display.innerHMTL += 6;
			var six= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key7'){
			display.innerHTML += 7;
			var seven= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key8'){
			display.innerHTML += 8;
			var eight= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key9'){
			display.innerHTML += 9;
			var nine= calculator.load(Number(display.innerHTML));
		} else if(this.id === 'key00'){
			display.innerHTML += '00';
		} else if(this.id === 'key.'){
			display.innerHTML += '.';
		} else if(this.id === 'keyCLEAR'){
			display.innerHTML = ' ';
		}
	});
}

//initial register load

// document.getElementById('keyBALANCE').addEventListener("click", function(){
//   cashReg.getTotal();
// });

// document.getElementById('keyDEPOSIT').addEventListener("click", function(){
//   cashReg.add();
// });

// document.getElementById('keyWITHDRAW').addEventListener("click", function(){
//   cashReg.
// });


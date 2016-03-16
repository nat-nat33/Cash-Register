var cashReg = function(){

// var calculator= calculatorModule();
// console.log(calculator);


var balance = 0; 
var display = 0;


//formatting register buttons
function generateButtons(){
	var buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '00', '.', 'CLEAR', 'BALANCE', 'DEPOSIT', 'WITHDRAW','/', '*', '+', '-', '='];
	var display = document.getElementById('display');
    var calc = document.getElementById('calc');

	for(var i = 0; i < buttons.length; i++){
		var key = document.createElement('button');
		key.id = 'key' + [buttons[i]];
		key.innerHTML= [buttons[i]];
		calc.appendChild(key);

		key.addEventListener('click', function(){
			if(this.id === 'key0'){
				display.innerHTML += 0;		
			} else if(this.id === 'key1'){
				display.innerHTML += 1;
			} else if(this.id === 'key2'){
				display.innerHTML += 2;
			} else if(this.id === 'key3'){
				display.innerHTML += 3;
			} else if(this.id === 'key4'){
				display.innerHTML += 4;
			} else if(this.id === 'key5'){
				display.innerHTML += 5;
			} else if(this.id === 'key6'){
				display.innerHTML += 6;
			} else if(this.id === 'key7'){
				display.innerHTML += 7;
			} else if(this.id === 'key8'){
				display.innerHTML += 8;
			} else if(this.id === 'key9'){
				display.innerHTML += 9;
			} else if(this.id === 'key+'){
				// opClick = true;
			} else if(this.id === 'key00'){
				display.innerHTML += '00';
			} else if(this.id === 'key.'){
				display.innerHTML += '.'; 
			} else if(this.id === 'keyCLEAR'){
				display.innerHTML = null;
			} else if(this.id === 'keyBALANCE'){
				 getBal();
			} else if(this.id === 'keyDEPOSIT'){
				cashIn();
			} else if(this.id === 'keyWITHDRAW'){
				cashOut();
			}
		});
	}	


//register functions for getting display on register

// var register = {

//   balance: 0,

//   display: 0,

function getBal(){
    return this.balance;
  }

function cashIn(){
    this.balance += parseFloat(display.innerHTML);
    display.innerHTML = ' ';
    console.log(this.balance);
  }

function cashOut(){
    if (parseFloat(display.innerHTML) > this.balance) {
      display.innerHTML = 'INSUFFICIENT FUNDS';
      console.log('no funds');
    } else {
      this.balance -= parseFloat(display.innerHTML);
      display.innerHTML = ' ';
      console.log(this.balance);
    }
  }

}
	return {
		generateButtons: generateButtons(),
		getBal: getBal,
		cashIn: cashIn,
		cashOut: cashOut,
};


	// document.getElementById('keyBALANCE').addEventListener('click', function(){
	//   cashReg.getBal();
	//   console.log('current balance');
	//   console.log(register.getBal());
	//   console.log(register.balance);
	// });

	// document.getElementById('keyDEPOSIT').addEventListener('click', function(){
	//   register.cashIn();
	//   console.log('new balance after deposit');
	//   console.log(register.balance);
	// });

	// document.getElementById('keyWITHDRAW').addEventListener("click", function(){
	//   register.cashOut();
	//   console.log('new balance after withdraw');
	//   console.log(register.balance);
	// });
}();


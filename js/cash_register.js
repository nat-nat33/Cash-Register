//register buttons
var buttons = {
	display: document.getElementById('display'),
	one: document.getElementById('one'),
	two: document.getElementById('two'),
	three: document.getElementById('three'),
	four: document.getElementById('four'),
	five: document.getElementById('five'),
	six: document.getElementById('six'),
	seven: document.getElementById('seven'),
	eight: document.getElementById('eight'),
	nine: document.getElementById('nine'),
	zero: document.getElementById('zero'),
	dub0: document.getElementById('dub0'),
	period: document.getElementById('period'),
	clear: document.getElementById('clear'),
	getBal: document.getElementById('getBal'),
	cashIn: document.getElementById('cashIn'),
	cashOut: document.getElementById('cashOut'),
	equals: document.getElementById('equals'),
 };

 var pressButton = {
 	press1: buttons.one.addEventListener('click', function(){
 		display.innerHTML += 1;
 	}),
 	press2: buttons.two.addEventListener('click', function(){
 		display.innerHTML += 2;
 	}),
 	press3: buttons.three.addEventListener('click', function(){
 		display.innerHTML += 3;
 	}),
 	press4: buttons.four.addEventListener('click', function(){
 		display.innerHTML += 4;
 	}),
 	press5: buttons.five.addEventListener('click', function(){
 		display.innerHTML += 5;
 	}),
 	press6: buttons.six.addEventListener('click', function(){
 		display.innerHTML += 6;
 	}),
 	press7: buttons.seven.addEventListener('click', function(){
 		display.innerHTML += 7;
 	}),
 	press8: buttons.eight.addEventListener('click', function(){
 		display.innerHTML += 8;
 	}),
 	press9: buttons.nine.addEventListener('click', function(){
 		display.innerHTML += 9;
 	}),
 	press0: buttons.zero.addEventListener('click', function(){
 		display.innerHTML += 0;
 	}),
 	press00: buttons.dub0.addEventListener('click', function(){
 		display.innerHTML += '00';
 	}),
	pressPeriod: buttons.period.addEventListener('click', function(){
		display.innerHTML += '.';
	}),
 	pressClear: buttons.clear.addEventListener('click', function (){
 		display.innerHTML = ' ';
 	})
 // 	pressGetBal:
 // 	pressCashIn:
	// pressCashOut:
};




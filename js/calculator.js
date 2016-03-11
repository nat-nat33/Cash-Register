var calculatorModule = function (){
    //private
    var _total= 0;
    var _memory= 0;
    function calculateTotal(x){
      if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      _total = x;
      return _total;//public
    }
    function getTotal(){
      return _total;//public
    }
    function add(x){
      if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      _total += x;
      return _total;//public
    }
    function subtract(x){
      if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      _total = _total-x; 
      return _total;//public
    }
    function multiply(x){
      if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      _total= _total * x;
      return _total;//public
    }
    function divide(x){
       if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      _total= _total/x;
      return _total; //public
    }
    function recallMemory(){
      return _memory; //public
    }
    function saveMemory(){
      _memory = _total;
      return _memory;
    }
    function clearMemory(){
      _memory = 0;
      return _memory;
    }
    
    return{
      load: calculateTotal, 
      getTotal: getTotal,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      recallMemory: recallMemory,
      saveMemory: saveMemory,
      clearMemory: clearMemory
  };
};
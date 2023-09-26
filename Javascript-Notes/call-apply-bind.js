

/**
 * Note: Checkout below URL for call apply and bind 
 * 
 * https://roadsidecoder.hashnode.dev/javascript-interview-questions-call-bind-and-apply-polyfills-output-based-explicit-binding
 * 
 * 
 * Call : The call() method is a predefined JavaScript method. It can be used to invoke  a method with
 *  an owner object as an argument (parameter).
 */
// example

const car1 = {
    color: 'red',
    company:'ferrari'
}

function purchaseCar(currenrcy, price){
   // console.log('this', this);
    console.log(`I have purchased ${this.color}  -  ${this.company} for ${currenrcy} ${price} `)
}

// purchaseCar.call(car1, '$', 120000);


// Create pollyfills of Call method,
 
Function.prototype.myCall = function(context = {}, ...arg){
    console.log(this); // prints purchaseCar in console.
    if(typeof this !== "function"){
         throw new Error(this + "is not callable")
    }
    context.fn = this; 
    context.fn(...arg);
}

purchaseCar.myCall(car1, 'Rs', 120000);


// Apply(): apply takes all the parameter as an array.

Function.prototype.myApply = function(context = {}, args = []) {
    if( typeof this !== 'function'){
        throw new Error(this + 'Apply not applicable on');
    }
    if(!Array.isArray(args)){
        throw new Error ('Apply applicable over input of Array only')
    }
    context.fn = this;
    context.fn(...args);

}
purchaseCar.myApply(car1,['Rs', 10000]);

/* bind(): We use the Bind() method to call a function with this value, this keyword refers to the 
same object which is currently selected. In other words, the bind() method allows us to easily set which object will be bound by 
this keyword when a function or method is invoked.
*/

Function.prototype.myBind = function(context={}, ...args){
  
    if(typeof this !== 'function'){
        throw new Error (this + 'can not be bind');
    }
    context.fn = this;
    return function(...newArgs){
      return  context.fn(...args, ...newArgs);
    }


}

let bindFn = purchaseCar.myBind(car1);

console.log(bindFn('Rs', 15000));







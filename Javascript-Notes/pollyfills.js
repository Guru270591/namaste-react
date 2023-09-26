/**
 * 
 * Pollyfill: we used to write pollyfills because some of the bowser does not support es6 features like map and arrow function then we need to write them in pure javascript.
 * 
 */



// 1. Pollyfills of forEach();

Array.prototype.myForEach = function (callback) {
     console.log(this);
    for(var i = 0; i < this.length; i ++){
        callback(this[i], i , this);
    }
    
}

//let arr = [1,2,3,4];

// arr.myForEach((elm)=>{
//     console.log(elm);
// })

// 2.  Pollyfills of map();

Array.prototype.myMap = function(callBackFn){

    var arr =[];
    for(var i =0; i < this.length; i++){
            arr.push(callBackFn(this[i], i, this));
    }
    return arr;
}

//let mapArr = [1,2,3,4,5];
// let newArr= mapArr.myMap((item)=> item*2);
// console.log(newArr);



// 3. Pollyfills of Fillter array method

Array.prototype.myFilter = function(callBackFn, context){

    var arr =[];
    for(var i =0; i < this.length; i++){
        if(callBackFn.call(context, this[i], i, this)){
            arr.push(callBackFn(this[i]));
        }
    }
    return arr;
}

//let arr = [1,2,3,4,5];
//let filteredArray= arr.myFilter((item)=> item % 2 === 0);
//console.log ('filteredArray', filteredArray);

// Pollyfills for Array.flat Method..

const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];
const flatAnArray = (arr, output =[] )=>{
  for (item of arr){
    if(Array.isArray(item)){
      return flatAnArray([item][0], output)
    }
       output.push(item);
  }
   return output;  
}
console.log(flatAnArray(arr));

//Pollyfills for reduce..

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this): this[i];
    }
    return accumulator
}
let array1 = [1,2,3,4,5,6,7];
let arr2 = array1.reduce((elm,acc)=>elm + acc);
console.log(arr);



// very important promise.all pollyfill

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve('promise 1 is successfull')
    },1000)
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve('promise 2 is successfull');
       //reject('promise 2 is rejected');
    },1000)
})

let promise3 = 10;

// Promise.all([promise1, promise2]).then((res)=>{
//   console.log('res', res);
// }).catch((e)=>{
//  console.log('err',e);
// })

let promiseArr = [promise1, promise2, promise3];

Promise.myAll = (promiseArr)=>{
   let response = [];
   //let index;
  
    return new Promise((resolve, reject)=> {
      let index = 0;
       for(let i=0; i< promiseArr.length; i++){
        Promise.resolve(promiseArr[i]).then((data)=>{
        response[i] = data;
        index++;
        console.log(index);
        if(index === promiseArr.length){
          resolve(response);
        }
      }).catch((err)=>{
        reject(err);
        console.log('err', err)
      })
   }
    })
}

Promise.myAll(promiseArr).then((res)=>{
  console.log('res', res);
}).catch((e)=>{
 console.log('err',e);
})


// Promise.all example 

function App() {
    useEffect(()=>{
      fetchData();
    },[])
    const urls = [
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts',
    ]
   
    const fetchAll = urls.map(url => fetch(url).then(res => res.json()))
    
    const fetchData = async ()=>{
       const [users, posts] = await Promise.all(fetchAll);
       console.log('data', users, posts);
    }
    return 'Hello'
  }


// Use case of Promise.allSetlled();

function App() {
  useEffect(() => {
    fetchApis()
  }, [])
  const urls = [
    'https://jsonplaeholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
  ]
  const allFetch = urls.map((url) => fetch(url).then((res) => res.json()))
  console.log(allFetch)

  const fetchApis = async () => {
    const data = await Promise.allSettled(allFetch)
    data.forEach((res, index) => {
      if (res.status === 'fulfilled') console.log('response', res.value)
      else if (res.status === 'rejected') {
        console.log(
          'failed to fetch this url' +
            urls[index] +
            'because of this reason' +
            res.reason,
        )
      }
    })
  }

  return 'Hello'
}

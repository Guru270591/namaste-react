/** 
 * 
 * Deep Copy vs Shalow copy:
 * 
 * Deep copy: copying the object deeply I mean nested root as well is known as deep copy.
 * 
 * 
 */

//DeepCoy: JSON.parse(JSON.stringyfy(obj)) can be used for the deep copy but it doesnot copy the function.
var  newOBj = Object.assign({}, myObj);

//writing our own deep copy using recursion
const deepClone = obj => {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key =>
        (clone[key] =
          typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    if (Array.isArray(obj)) {
      clone.length = obj.length;
      return Array.from(clone);
    }
    return clone;
  };
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj

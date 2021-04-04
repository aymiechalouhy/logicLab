//problem1
const getProperties=(arr)=>{
    return Object.keys(arr);
    }
    const ok = {
        a:"hello",
        b:"no",
        c:'bye'
      };
    console.log(getProperties(ok));

//problem2
    const isPlainObject=()=>{
    var x = {a:1,b:2};
    var y = [1,2,3];
    
    console.log(x.constructor.name === "Object")
    console.log(y.constructor.name === "Object")
    }
    console.log(isPlainObject());

//problem3    
var input = {

    a: 1, 
    c: "Apple",
  
}
let count = 0;
for (var c in input) {

    count = count + 1;
}
console.log(count);

let modifyObject =(isObject) => {
    return Object.prototype.toString.call(isObject) === '[object Object]';
};
modifyObject({});
modifyObject([]);
console.log(modifyObject({input}));

//probelm4
const makePairs=(obj)=>{
    return Object.entries(obj)
}
const zoo = {
  a:1,
  b:2
};
console.log(makePairs(zoo));

//problem5
const without = (obj, pro) => {

    delete obj[pro];
    return obj;
}
console.log(without({ name1: 'khaled', name2: 'Aymie' }, 'name1'));


//problem6

let x={}

let m ={
    a:1
} 
let v = {
    a: 1,
    b : undefined
}

const isEmpty = (obj) =>{
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;

}
console.log(isEmpty(x));
console.log(isEmpty(m));
console.log(isEmpty(v));

//problem7
const isEqual = (obj1, obj2) => {
    if (Object.entries(obj1).toString() === Object.entries(obj2).toString()) {
        return true;
    } else { return false; }
}
console.log(isEqual({ name1: 'Aymie', name2: 'khaled' }, { name1: 'Aymie', name2: 'khaled' }));

//problem8

 const intersection=(o1,o2)=>{
 return Object.keys(o1).filter(function(itm){
 return itm in o2
    });
}
var obj1 = { a: 1, b: 2 } ;
var obj2 = { c: 1, b: 2 };

console.log(intersection(obj1 ,obj2));


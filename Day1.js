const arr1 = [1,2,3,4];
const arr2 = [9,8,7,6];
let arr3 =arr1.concat(arr2);
console.log(arr3);


const arr4 =[1,2,2];
let newArr= arr4.concat(7)
console.log(newArr)


let arr5 =[1,2,3,4]
let arr6 =[6,7,8,9]
arr5.map((val)=>{
    arr6.push(val); 
})
console.log(arr6)

const arr7 = [1,2,3,4];
const arr8 = [9,8,7,6];
const arr9 = [91,83,72,62];
let arr10 =arr7.concat(arr8,arr9);
console.log(arr10)

const arr11 = [1,2,3,4]
let arr12=arr1.concat(7,8)
console.log(arr12)

let arr13= [];
let arr14= [];
let arr15 =arr13.concat(arr14)
console.log(arr15);

let arr16 =[[ 1,2]]
let arr17 =[[ 3,4]]
let arr18 =arr16.concat(arr17)
console.log(arr18)

let nestedArr = [[1, 2], [4, 5]];
let arrNew = [6, 7, 8, 9];
let sum =0;

nestedArr.forEach(subArr => {
    subArr.forEach(val =>{
        sum = sum + val;     
    })
    console.log(sum)
    arrNew.push(sum)
    sum=0; 
    
});

console.log(arrNew)


// if (val % 2 != 0  ){
//     arr2.push(val)
// }
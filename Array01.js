//arr.splice(n,m,x) : 특정요소 지우고 추가


let arr = [1,2,3,4,5];
arr.splice(1,3,100,200);
console.log(arr); //[1,100,200,5];


let arr2 = ['나는','철수','입니다'];
result = arr2.splice(1,0,'대한민국','소방관');
console.log(arr2)
console.log("반환값: "  + result);


//arr.slice(1,4) 특정요소들을 반환
let arr3 = [1,2,3,4,5];
arr3 = arr3.slice(1,4);
console.log(arr3);


//arr.concat(arr2,arr3 ..) : 합쳐서 새배열로 반환
let returnArray = arr.concat(arr3,["새배열","반환"]); // arr + arr3 + ["새배열","반환"]
console.log(returnArray);


//arr.forEach(fn) : 배열 반복

let users = ["Mike", "Tom", "Jane"];
users.forEach((item,index,arr)=>{
    console.log(item);
    console.log(index);
    console.log(arr);
})
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
    console.log(item); // ㅎ해당 되는 요소
    console.log(index); // 인덱스 번호
    console.log(arr); //해당 배열 자체를 의미
})


//arr.indexOf / arr.lastindexOf
// (발견하면 해당요소의 인덱스를 반환 없으면 -1 반환)

let indexArray = [1,3,3,4,5,1,2,3];

console.log(`결과1 : ${indexArray.indexOf(3)}`);
console.log(`결과2 : ${indexArray.indexOf(2,3)}`); //2가 있는 인덱스를 찾아라, 3번인덱스부터.

//arr.includes() : 포함하는지 확인
console.log(indexArray.includes(10));
console.log(indexArray.includes(2));

//arr.find(fn) / arr.findIndex(fn) > indexOf처럼 찾는다는 의미는 동일하지만
//보다 복잡한 연산이 가능하도록 함수를 연결가능하다.
//주의점 :  첫번째 true 값만 반환하고 끝
//만약 없으면 undefined를 반환합니다.

const indexResult = indexArray.find((item)=>{
    return item %2 ===0;
})

console.log(indexResult);


//find , findIndex

let userList = [
    {name : "Mike", age : 30},
    {name : "Jane" ,age : 17},
    {name : "Tom" ,age : 10}

]

// const findResult = userList.find((user)=>{ // 첫번째 true값만 반환
//     if(user.age < 19){
//         return true;
//     }
//     return false;
// })

// console.log(findResult);


//arr.filter(fn) : 만족하는 모든 요소를 배열로 반환


const filterResult = userList.filter( (user)=>{ // 첫번째 true값만 반환
    if(user.age < 19){
        return true;
    }
    return false;
})

console.log(`${filterResult[0].name}`);

 let array = [1,2,3,4,5,6,7,8,9];


 //arr.reverse() : 역순으로 재정렬


///////////////////map예제
 //arr.map() : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

 let newUserList = userList.map((user,index)=>{
     return Object.assign({},user,{
         isAdult : user.age > 19,
     })
 })
 console.log(newUserList)
 console.log(userList);


 //join,split join : 배열합침.  split : 문자열을 잘라서 배열로 자름
 let joinArr = ["안녕","나는","철수양"];
 let joinResult = joinArr.join("-");
 console.log(joinResult);

 let splitUser = "Hyejin,Mike,Jane";
 const splitArr = splitUser.split(",");
 console.log(splitArr);

 //Array.isArray() : 배열인지 아닌지 확인하는 메서드

 let userObject = {
     name : "Mike",
     age:30
 }

 let userArray = ["Mike","Tome","Jane"];
  console.log(Array.isArray(userObject));
  console.log(Array.isArray(userArray));
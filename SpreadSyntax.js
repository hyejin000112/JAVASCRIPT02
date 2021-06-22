//전개 구문 ( Spread syntax )


//1.배열 예제

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1,...arr2,7,8];

console.log(result); // [1,2,3,4,5,6,7,8]


//2. 객체 예제 ( 객체도 동일하게 ...로 풀어서 바로 사용가능.)
let user = {name:'Mike',gender:"m"}
// let arrUser = [...user,1,2,3]; 객체 > 객체 에만 사용가능.
let mike = {...user,age:30}

// console.log(arrUser);
console.log(mike);




//3.전개구문
/********************
 * 
 * arr1을 [4,5,6,1,2,3]으로
 * 
 * 
 * 
 ********************/

 let arrQize1 = [1,2,3];
 let arrQize2 = [4,5,6];

 arrQize2.reverse().forEach((num)=>{
    arrQize1.unshift(num);
})

console.log(arrQize1);


//전개구문이용해서 위코드 만들기
let testQuiz1 = [1,2,3];
let testQuiz2 = [4,5,6];

testQuiz1 = [...testQuiz2,...testQuiz1];
console.log(testQuiz1);


//객체 예제
let userObject = {name : "Mike"};
let info = {age:30};
let fe = ["JS","React"];
let lang = ["Korean", "English"];



userObject = {
    ...user,
    ...info,
    skills:[...fe,...lang],
}

console.log(",,,,,,,,-----------------")
console.log(userObject);

// userObject = Object.assign({},
//     userObject,
//     info,
//     {
//         skills : []
//     }
//     )

//     fe.forEach((item)=>{
//         userObject.skills.push(item);
//     })

//     lang.forEach((item)=>{
//         userObject.skills.push(item);
//     })

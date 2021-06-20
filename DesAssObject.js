/*

-Dextructuring assignment (구조 분해할당)
 & 덱스트럭처링 어사인먼트

 구조분해 할당 구문은 배열이나 객체의 속성을 분해해서 
 그 값을 변수에 담을 수 있게 하는 표현식


*/


//객체 구조 분해

let user = {name: 'Mike',age : 30};

//밑의 주석과(19~20번줄) 동일
let {name,age} = user;
//let name = user.name;
//let age = user.age;

console.log(name);
console.log(age);


//새로운 변수 이름으로 할당

let {name : userName,age:userAge} = user;

console.log(`userName : ${userName}`);
console.log(`userAge  : ${userAge}`);


//기본값 주기
let {defaultName,defaultAge,defaultGender='male'} = user;
console.log(defaultGender);




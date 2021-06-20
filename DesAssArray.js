/*

-Dextructuring assignment (구조 분해할당)
 & 덱스트럭처링 어사인먼트

 구조분해 할당 구문은 배열이나 객체의 속성을 분해해서 
 그 값을 변수에 담을 수 있게 하는 표현식


*/


//배열의 구조 분해 방식

let users = ["Mike", "Tom", "Jane"];

let [user1,user2,user3] = users;

/*
let [user1,user2,user3] = users; 
위 코드는
let user1 = users[0];
let user2 = users[1];
let user3 = users[2];
이 코드와 동일함.
*/ 
console.log(`${user1} ${user2} ${user3}`);
console.log(user1);


/*기본값*/

let [a1,b1,c1] = [1,2]; //이 코드처럼 값이 비어질경우 undefined로 나타남
let [a2=3,b2=4,c2=5] = [1,2]; //하지만 이처럼 기본값을 부여할 경우 undefined인 상황일때 기본값으로 대체함
console.log(a2);
console.log(b2);
console.log(c2);



// 일부 반환값 무시

let [auser1, ,auser2] = ["Mike","Tom","Jane","Tony"];
console.log(auser1);
console.log(auser2);

// 배열구조 분해 : 바꿔치기
//기존코드
let changeA = 1;
let changeB = 2;
// let changeC = changeA;
// changeA = changeB;
// changeB = changeC;
// 배열 구조 분해 : 바꿔치기 버전

[changeA , changeB] = [changeB,changeA];
console.log(`${changeB} ${changeA} `);
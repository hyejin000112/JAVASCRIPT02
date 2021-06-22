// 나머지 매개변수 (Rest parameters)

//   ...로 사용함

// //예제 1
// function showName(name){
//     console.log(name);
// }

// showName("Mike");
// showName("Mike","Tom");

// showName();


//arguments에 대한 예제

//함수로 넘어온 모든 인수에 접근
//함수내ㅔ서 이용 가능한 지역 변수
//length/index
//Array 형태의 객체
//배열의 내장 메서드 없음. ( forEach,map)

function showName(name){
    console.log(arguments.length); // arguments > 넘어온 인자값에 대한 정보를 담고있는 객체
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName("Mike","Tom");



//나머지 매개변수 구문 예제  *******
//나머지 매개변수란? ??? > 정해지지 않은 갯수의 인수를 배열로 받는다. 
//쓰는법  '...'뒤에 배열명을 입력
function showNameLastParam(...names){
    console.log(names);
}

showNameLastParam(); // []
showNameLastParam('Mike'); // ['Mike']
showNameLastParam('Mike','Tom'); //['Mike','Tom']



//나머지 매개변수 예제 2

function add(...numbers){
    // let result = 0;
    // numbers.forEach((num)=>{ result += num });
    // console.log(result);

    let result = numbers.reduce((prev,cur)=>{
         prev += cur; return prev
        },5)
    console.log(`reduce함수사용 : ${result}`);

}


add(1,2,3);
add(1,2,3,4,5);





//나머지 매개변수 완전완전 실용적인 예제
/**************************
 * 
 * 나머지 매개 변수 
 * user 객체를 만들어 주는 생성자 함수를 만들겁니다.
 * 
 * 
 ***************************/

function User(name,age,...skills){
    this.name = name;
    this.age = age;
    this.skill = skills;
};

const user1New = new User("Mike",30,"html","css");
const user2New = new User("Tom",20,"JS","React");
const user3New = new User("Jane",10,"English");

console.log(`user1New : ${user1New}   user2New : ${user2New}   user3New : ${user3New}`)
console.log("\" : " + user1New )
console.log(user1New);
//어휘적 환경(Lexical Environment)

/**
 * 자바스크립트는 코드가 실행되면 스크립트 내에서 선언된 함수들이
 * Lexical환경( 렉시컬 환경) 에 올라갑니다.
 * let으로 선언된 변수도 호이스팅 됨
 * 
 * 
 * 호이스팅이란???
 * 함수 안의 변수 선언을 모두 최상단으로 끌어 올려주는 JS고유의 독특한 기능
 *
 * var과 let은 선언만 하더라도 값을안넣어도 undefined로 초기화되지만
 * 
 * function또한 바로 초기화됨.
 * 
 */


// let one;
// one = 1;

// function addOne(num){
//     console.log(one + num);
// }

// addOne(5);

let one;
one = 1;

function addOne(num){
    console.log(one+num);
}
addOne(5); // 함수가 실행되면 새로운 렉시컬 환경이 만들어짐
            //함수가 실행됨으로 인해 생긴 렉시컬 환경안에는 
            //함수가 넘겨받은 매개변수와 지역변수들이 저장됨.
            //함수로 인해 생긴 렉시컬환경은 내부 렉시컬환경이며 
            //one과 addOne같은 변수,함수생성으로 인한 렉시컬 환경은 전역렉시컬환경이다.
            //내부 렉시컬 환경은전역렉시컬환경을 참조한다.




//############################################내가이해한 예제

// function init() {
//     var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
//     function displayName() { // displayName() 은 내부 함수이며, 클로저다.
//       console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
//     }
//     displayName();
//   }
//   init();



function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  
  //myFunc변수에 displayName을 리턴함
  //유효범위의 어휘적 환경을 유지
  myFunc();
  //리턴된 displayName 함수를 실행(name 변수에 접근)
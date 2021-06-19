// 문자열변수명.length                        : 문자열길이
// let desc = '안녕하세요';  desc[2] // '하'  : 특정위치에 접근

//모든 영문을 대문자로 변경  toUpperCase() 
//모든 영문을 소문자로 변경  toLowerCase()

// 문자열.indexOf(text)  : 문자를 인수로 받아 몇번째 위치 하는지 알려줌. (찾는 문자가 없으면 -1을 반환)

// 문자열.slice(n,m) : 특정범위의 문자열만 뽑음 n~m까지
// let desc = "abcdefg";
// desc.slice(0,5) //"abcde"
// desc.slice(2,-2) // "cde"



//str.substring(n,m) n과 m사이 문자열반환  음수는 0으로 인식

//str.trim() : 앞 뒤 공백 제거 

//str.reqeat(n) : 문자열 n번 반복


// //아스키 코드를 얻는 법  > codePointAt();

// console.log("a".codePointAt());
// console.log(String.fromCodePoint(97));


let list = ["01. 들어가며",
"02. JS의 역사",
"03. 자료형"];

let newList = [];

for(let i=0; i<list.length; i++){
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList);


//금칙어 : 콜라

// function hasCola(str){
//     if(str.indexOf('콜라') > -1){
//         console.log('금칙어가 있습니다')
//     }else{
//         console.log("통과");
//     }
// }

// hasCola("와 사이다"); // -1
// hasCola("ㅁㅁㅁㅁ콜라");
// hasCola("콜라");


//includes 활용


function hasCola(str){
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다')
    }else{
        console.log("통과");
    }
}

hasCola("와 사이다"); // -1
hasCola("ㅁㅁㅁㅁ콜라");
hasCola("콜라");
//arr.sort()  : 배열 재정렬, 배열 자제가 변경됨. 정렬할 때 요소를 문자열로 인식
//arr.reduce() : 배열을 돌면서 원하는 작업을 하고 최종값을 반환
//arr.reduceRight() : reduece()와 기능은 동일하지만 배열 "우측"부터 연산을 시행함.

//arr.sort예제 

let sortArr = [1,5,4,3,2];
let sortArr2 = [27,8,5,13];

sortArr.sort();
console.log(sortArr);


//sortArr2를 제대로 된 정렬을 하고싶을때 함수를 이용해야함.
fn = (a,b)=>{
    console.log(a-b);
    return a - b;
}


sortArr2.sort(fn);
console.log(sortArr2); 


//arr.reduce() 예제 

let reduArr = [1,2,3,4,5];

const reResult = reduArr.reduce((prev, cur)=>{
    return prev + cur;
},100);//<100은 초기값을 의미

console.log(reResult);

//실용적인 예제
let userReduList = [
    {name:"Mike", age : 30},
    {name:"Tom", age:10},
    {name:"Jane",age:27},
    {name:"Sue",age:3},
    {name:"Harry", age:42},
    {name:"Steve", age:60},
]

let userReduResult = userReduList.reduce((prev,cur)=>{
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
},[]); //prev초기값(처음 들어가는값)을 배열로 해줬기때문에 push를 사용할수있음.

console.log(userReduResult);




//기존코드 예제
// let reduResult = 0;   
// reduArr.forEach((num)=>{
//     reduResult += num;
// });

// console.log(reduResult);


////////////////////////////////////////////

////arr.reduceRight()



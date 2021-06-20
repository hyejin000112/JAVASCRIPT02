//Object.assign()   객체 복제 메서드
//Object.keys()   키 배열 반환
//Object.values()  값 배열 반환
//Object.


const user = {
    name : "Mike",
    age: 30
}


const newUser = Object.assign({},user);

newUser.name = 'Tom';


const info1 = {
    age : 30,
}

const info2 = {
    gender : 'male',
}

Object.assign(user,info1,info2);


console.log(user);
console.log(newUser);





console.log(Object.values(user));
console.log(Object.keys(user));
console.log(Object.entries(user));
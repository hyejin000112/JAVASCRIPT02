//Symbol은 유일한 식별자

// const id = Symbol('id'); //Symbol(심볼)은 new연산자를 붙이지않습니다.
// const id2 = Symbol('id');


// console.log(id === id2);
// console.log(id == id2);

// const id = Symbol('id');
// const user = {
//     name : 'Mike',
//     age : 30,
//     [id]: 'myid'
// }

// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


//다른 개발자가 만들어 놓은 객체
const user = {
    name : "Mike",
    age:30,
}

//내가 작업
// user.showName = function() {};
const showName = Symbol('show name');
user[showName] = function(){
    console.log(this.name);
}

user[showName] ();

//사용자가 접속하면 보는 메세지
for (let key in user){
    console.log(`His ${key} is ${user[key]}`)
}

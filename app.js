// ==========================================
// JavaScript を始めてみよう 基礎編
// ==========================================

// ------------------------------------------
// Q1 変数
// ------------------------------------------
let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です。');


// ------------------------------------------
// Q2 配列
// ------------------------------------------
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);


// ------------------------------------------
// Q3 オブジェクト
// ------------------------------------------
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


// ------------------------------------------
// Q4 配列 × オブジェクト
// ------------------------------------------
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


// ------------------------------------------
// Q5 四則演算
// ------------------------------------------
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);


// ------------------------------------------
// Q6 関数
// ------------------------------------------
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
};
sayWorld();


// ------------------------------------------
// Q7 メソッド
// ------------------------------------------
const updatedUser = {
  ...user,
  birthday: '2000-09-27',
  sayHello() {
    console.log('Hello！');
  }
};

updatedUser.sayHello();


// ------------------------------------------
// Q8 引数
// ------------------------------------------
let calc = {
  add: function(x, y) {
    console.log(x + y);
  },

  subtract: function(x, y) {
    console.log(x - y);
  },

  multiply: function(x, y) {
    console.log(x * y);
  },

  divide: function(x, y) {
    console.log(x / y);
  }
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(10, 2);


// ------------------------------------------
// Q9 返り値
// ------------------------------------------
function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);
console.log(`5 を 3 で割った余りは ${result} です。`);


// ------------------------------------------
// Q10 スコープ
// ------------------------------------------
function foo() {
  let x = 1;
}
// console.log(x);

// 【回答】
// 関数 foo の中でのみ変数 x が有効（ブロックスコープ/関数スコープ）なため、
// この関数の外で変数 x を参照しようとすると `ReferenceError`（参照エラー）が発生します。


// ------------------------------------------
// 応用 Q1 標準組み込みオブジェクト
// ------------------------------------------
// 0 〜 9 のランダムな整数をコンソールに出力する
console.log(Math.floor(Math.random() * 10));


// ------------------------------------------
// 応用 Q2 コールバック関数
// ------------------------------------------
// 3 秒後に "Hello World!" を出力する
setTimeout(() => {
  console.log("Hello World!");
}, 3000);


// ------------------------------------------
// 応用 Q3 if
// ------------------------------------------
let num = 5;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}


// ------------------------------------------
// 応用 Q4 for
// ------------------------------------------
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);


// ------------------------------------------
// 応用 Q5 for × if
// ------------------------------------------
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}
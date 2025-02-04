// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello,owu,com,ua;
let num1,num2,num3,num4;
let decimal,float,num5;
let bool1,bool2;
hello = 'hello';
owu = 'owu';
com = 'com';
ua = 'ua';
num1 = 1;
num2 = 10;
num3 = -999;
num4 = 123;
decimal = 3.14;
float = 2.7;
num5 = 16;
bool1 = true;
bool2 = false;
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(decimal);
console.log(float);
console.log(num5);
console.log(bool1);
console.log(bool2);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Катерина";
let middleName = "Валентинівна";
let lastName = "Харченко";

let person = lastName + " " + firstName + " " + middleName;
let personTemplateLiterals = `${lastName} ${firstName} ${middleName}`;
console.log(person);

console.log("template literals:",personTemplateLiterals);


// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log('typeof a:',typeof a);
console.log('typeof b:', typeof b);
console.log('typeof c:', typeof c);




// ==1==

const arr1=['okten',1, null, {a: 1}, ["hello", "world"], undefined, NaN, 42, ' ', true]
console.log('============Task 1==============')
console.log(arr1)
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[3].a);
console.log(arr1[4]);
console.log(arr1[4][0]);
console.log(arr1[4][1]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// ==2==
const book1={title: "Title 1", pageCount: 263, genre: "Fantasy"};
const book2={title: "Title 2", pageCount: 367, genre: "Science"};
const book3={title: "Title 3", pageCount: 115, genre: "Thriller"};

console.log('============Task 2==============');
console.log(book1);
console.log(book2);
console.log(book3);

// ==3==
const book4={title: "Title 1", pageCount: 263, genre: "Fantasy",authors:[{name:'Author 1',age:31},{name:'Author 2',age:21}]};
const book5={title: "Title 2", pageCount: 367, genre: "Science",authors:[{name:'Author 1',age:56}]};
const book6={title: "Title 3", pageCount: 115, genre: "Fantasy",authors:[{name:'Author 1',age:42},{name:'Author 2',age:31}]};

console.log('============Task 3==============');
console.log(book4);
console.log(book5);
console.log(book6);

// ==4==

const users=[
    {name: "John", username: "@John", password: "qwerty123John"},
    {name: "Alice", username: "@Alice", password: "qwerty123Alice"},
    {name: "Bob", username: "@Bob", password: "qwerty123Bob"},
    {name: "Maria", username: "@Maria", password: "qwerty123Maria"},
    {name: "Sara", username: "@Sara", password: "qwerty123Sara"},
    {name: "David", username: "@David", password: "qwerty123David"},
    {name: "Alex", username: "@Alex", password: "qwerty123Alex"},
    {name: "Kate", username: "@Kate", password: "qwerty123Kate"},
    {name: "Lana", username: "@Lana", password: "qwerty123Lana"},
    {name: "Max", username: "@Max", password: "qwerty123Max"},
]
console.log('============Task 4==============');
console.log('users:',users);
console.log(users[0].name, 'password - ',users[0].password);
console.log(users[1].name, 'password - ',users[1].password);
console.log(users[2].name, 'password - ',users[2].password);
console.log(users[3].name, 'password - ',users[3].password);
console.log(users[4].name, 'password - ',users[4].password);
console.log(users[5].name, 'password - ',users[5].password);
console.log(users[6].name, 'password - ',users[6].password);
console.log(users[7].name, 'password - ',users[7].password);
console.log(users[8].name, 'password - ',users[8].password);
console.log(users[9].name, 'password - ',users[9].password);


// ==5==

const weekWeather=[
    {day: "Monday", morning: 7, afternoon:10 , night:-2},
    {day: "Tuesday", morning: 9, afternoon:12 , night:0},
    {day: "Wednesday", morning: 5, afternoon:7 , night:1},
    {day: "Thursday", morning: 12, afternoon:7 , night:5},
    {day: "Friday", morning: 15, afternoon:17 , night:3},
    {day: "Saturday", morning: 7, afternoon:10 , night:4},
    {day: "Sunday", morning: 8, afternoon:11 , night:3},

]


console.log('============Task 5==============');
console.log('weekWeather:',weekWeather);

// ==6==

document.getElementById('numberCorrect').addEventListener('click',showNumber);
function showNumber() {
    let x;

    while (true) {
        x = prompt("Введіть число");

        if (x === null) {
            alert("Введення скасовано! Будь ласка, введіть число");
            continue;
        }
        if (x.trim() === "" || isNaN(x)) {
            alert("Будь ласка, введіть коректне число");
            continue;
        }
        break;
    }

    x = Number(x);
    console.log('============Task 6==============');
    console.log(x !== 0 ? "Вірно" : "Невірно");

}

// ==7==

document.getElementById('time').addEventListener('click',showHourPart);
function showHourPart() {
    let time;

    while (true) {
        time = prompt("Введіть кількість хвилин (від 0 до 59)");

        if (time === null) {
            alert("Введення скасовано! Будь ласка, введіть кількість хвилин");
            continue;
        }
        if (time.trim() === "" || isNaN(time) || time < 0 || time > 59) {
            alert("Будь ласка, введіть коректне число");
            continue;
        }

        break;
    }
    time=Number(time);
    let quarter = Math.floor(time / 15) + 1;

    console.log('============Task 7==============');

    console.log(`Число ${time} попадає у ${quarter} чверть години`);

}


// ==8==


document.getElementById('day').addEventListener('click',showMonthDecade);
function showMonthDecade() {
    let day;

    while (true) {
        day = prompt("Введіть число місяця (від 1 до 31)");

        if (day === null) {
            alert("Введення скасовано! Будь ласка, введіть число місяця");
            continue;
        }
        if (day.trim() === "" || isNaN(day) || day < 1 || day > 31) {
            alert("Будь ласка, введіть коректне число");
            continue;
        }

        break;
    }
    day=Number(day);
    let decade = Math.ceil(day / 10);
    console.log('============Task 8==============');
    console.log(`Число ${day} попадає у ${decade} декаду місяця`);

}

// ==9==

document.getElementById('schedule').addEventListener('click',showDaySchedule);
const schedule=[
    {day: "Monday", events: [{time:"9:00 - 11:00",event:"Homework"},{time:"19:00 - 20:00",event:"IT lesson"}]},
    {day: "Tuesday", events: [{time:"9:00 - 11:00",event:"Gym"},{time:"18:00 - 20:00",event:"Study"}]},
    {day: "Wednesday", events: [{time:"9:00 - 11:00",event:"Homework"},{time:"19:00 - 20:00",event:"IT lesson"}]},
    {day: "Thursday", events: [{time:"10:00 - 13:00",event:"Swimming"},{time:"19:00 - 20:00",event:"IT lesson"}]},
    {day: "Friday", events: [{time:"9:00 - 11:00",event:"Gym"},{time:"13:00 - 15:00",event:"Homework"},{time:"19:00 - 20:00",event:"IT lesson"}]},
    {day: "Saturday", events: [{time:"19:00 - 23:00",event:"Meeting with friends"}]},
    {day: "Sunday", events: [{time:"12:00 - 15:00",event:"Shopping"}]},
]
function showDaySchedule() {
    let userDay;

    while (true) {
        userDay = prompt("Введіть день тижня (від 1 до 7)");

        if (userDay === null) {
            alert("Введення скасовано! Будь ласка, введіть день тижня");
            continue;
        }
        if (userDay.trim() === "" || isNaN(userDay) || userDay < 1 || userDay > 7) {
            alert("Будь ласка, введіть коректне число");
            continue;
        }

        break;
    }
    userDay=Number(userDay);
    let selectedDay = schedule[userDay - 1]
    console.log('============Task 9==============');
    switch (userDay) {
        case 1:
            console.log(`Schedule for ${selectedDay.day}`);
            console.table(selectedDay.events)
            break;
        case 2:
            console.log(`Schedule for ${selectedDay.day}`);
            console.table(selectedDay.events)
            break;
        case 3:
            console.log(`Schedule for ${selectedDay.day}`);
            console.table(selectedDay.events)
            break;
        case 4:
            console.log(`Schedule for ${selectedDay.day}`);
            console.table(selectedDay.events)
            break;
        case 5:
            console.log(`Schedule for ${selectedDay.day}`);
            console.table(selectedDay.events)
            break;
        case 6:
            console.log(`Schedule for ${selectedDay.day}`);
            console.table(selectedDay.events)
            break;
        case 7:
            console.log(`Schedule for ${selectedDay.day}`);
            console.table(selectedDay.events)
            break;
        default:
            console.log('Invalid day number');
    }
}


// ==10==

document.getElementById('maxValue').addEventListener('click',showMaxValue);
function showMaxValue() {
    let num1,num2;
    while (true) {
        num1 = prompt("Введіть перше число");

        if (num1 === null) {
            alert("Введення скасовано! Будь ласка, введіть перше число");
            continue;
        }
        if (num1.trim() === "" || isNaN(num1)) {
            alert("Будь ласка, введіть коректне число");
            continue;
        }

        break;
    }

    while (true) {
        num2 = prompt("Введіть друге число");
        if (num2 === null) {
            alert("Введення скасовано! Будь ласка, введіть друге число");
            continue;
        }
        if (num2.trim() === "" || isNaN(num2)) {
            alert("Будь ласка, введіть коректне число");
            continue;
        }

        break;
    }
    num1 = Number(num1);
    num2 = Number(num2);

    console.log('============Task 10=============');

    if(num1 === num2){
        console.log("Числа рівні");
    } else {
        let maxValue = num1 > num2 ? num1 : num2;
        console.log(`Максимальне число: ${maxValue}`);
    }
}


// ==11==

document.getElementById('falseValue').addEventListener('click',showFalseValue);
function showFalseValue() {
    let x;

    x = prompt("Введіть будь-яке значення");

         if(x === null || x.trim() === "" || x === "0" || x === "false" || x === "null" || x === "undefined" || x === "NaN" ){
        x = 'default'
    }

    console.log('============Task 11=============');

    console.log(x)

    // ========варіант без prompt=======================

    // if (!x) {
    //     x = "default";
    // }

}


// ==12==
console.log('============Task 12=============');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер", coursesAndDurationArray[0].title);
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер", coursesAndDurationArray[1].title);
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер", coursesAndDurationArray[2].title);
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер", coursesAndDurationArray[3].title);
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер", coursesAndDurationArray[4].title);
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер", coursesAndDurationArray[5].title);
}
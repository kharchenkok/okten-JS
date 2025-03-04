document.getElementById('getInfoBtn').addEventListener('click', getUserInfo);


function getUserInfo() {

    let firstName, middleName, age;

    do {
        firstName = prompt("Введіть ваше ім'я:");
        if (firstName === null) {
            alert("Введення скасовано! Будь ласка, введіть ім'я.");
        } else {
            firstName = firstName.trim();
        }
    } while (!firstName);


    do {
        middleName = prompt("Введіть ваше по батькові:");
        if (middleName === null) {
            alert("Введення скасовано! Будь ласка, введіть по батькові.");
        } else {
            middleName = middleName.trim();
        }
    } while (!middleName);


    do {
        age = prompt("Введіть ваш вік (тільки число):");
        if (age === null) {
            alert("Введення скасовано! Будь ласка, введіть ваш вік.");
        } else {
            age = age.trim();
            if (age === "" || isNaN(age)) {
                alert("Будь ласка, введіть коректне число.");
                age = null;
            }
        }
    } while (!age);

    age = Number(age);


    console.log("Ім'я:", firstName);
    console.log("По батькові:", middleName);
    console.log("Вік:", age);
}
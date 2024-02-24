// - Створити масив, наповнити його 10 елементами будь-якого типу,
//   вивести кожен елемент в консоль
let countries =["Ukraine","Poland","Germany","Spain","France","Belgium","Bulgarian","Greece","Portugal","Sweden"];
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);
console.log(countries[4]);
console.log(countries[5]);
console.log(countries[6]);
console.log(countries[7]);
console.log(countries[8]);
console.log(countries[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre

let books=[
    {id:1, title: "Consider Phlebas", pageCount:467, genre:"Science Fiction"},
    {id:2, title: "Labyrinth", pageCount:515, genre:"Historical Fiction"},
    {id:3, title: "The Final Empire", pageCount:537, genre:"Fantasy"},
];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//   Поле "автори" - являється  масивом. Кожен автор має поля name та age

let authors=[
    {id:1, name: "Iain M. Banks", age:59},
    {id:2, name: "Kate Mosse",age:62},
    {id:3, name: "Brandon Sanderson", age:48},
    ];
let books=[
    {id:1, title: "Consider Phlebas", pageCount:467, genre:"Science Fiction"},
    {id:2, title: "Labyrinth", pageCount:515, genre:"Historical Fiction"},
    {id:3, title: "The Final Empire", pageCount:537, genre:"Fantasy"},
];

console.log(books[0],authors[0]);
console.log(books[1],authors[1]);
console.log(books[2],authors[2]);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. ' +
// ' Вивести в консоль пароль кожного користувача
let users=[
    {id:1, name: "Andrii", username:"Andrii467", password:"Fiction"},
    {id:2, name: "Sergiy", username:"Sergiy515", password:"History"},
    {id:3, name: "Ivan", username:"Ivan537", password:"Fantasy"},
    {id:4, name: "Pavel", username:"Pavel467", password:"Science"},
    {id:5, name: "Olena", username:"Olena515", password:"Space"},
    {id:6, name: "Dmitro", username:"Dmitro537", password:"Cultural"},
    {id:7, name: "Natalia", username:"Natalia467", password:"Adventure"},
    {id:8, name: "Nina", username:"Nina515", password:"Speculative"},
    {id:9, name: "Oleg", username:"Oleg537",password:"Romance"},
    {id:10, name: "Valeriy", username:"Valeriy537", password:"Urban"},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a=7;
if(a!=0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

let a=0;
if(a!=0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години)

let a=59;
if(a>=0 && a<=15){
    console.log('Перша частина години');
}else if (a>=16 && a<=30) {
        console.log('Друга частина години');
} else if (a>=31 && a<=45) {
            console.log('Третя частина години');
        }   else if (a>=46 && a<=59) {
                console.log('Четверта частина години');
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю)

let day=30;
if(day>=1 && day<=10){
    console.log('Перша декада місяця');
}else if (day>=11 && day<=20) {
    console.log('Друга декада місяця');
} else if (day>=21 && day<=31) {
    console.log('Третя декада місяця');

}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
//  дня тижня і на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).

let dayOfWeeks=7;
switch (dayOfWeeks) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа

let a=7;
let b=7;
if(a>b){
    console.log(a);
}else if (b>a) {
    console.log(b);
} else if (a==b) {
    console.log('Введені рівні числа');
}


    // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null
// і тд включно). Напишіть код який,
    //     за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x="bad";
if(x=='string'||x=='number'||x=='undefined'||x=='null'||x=='boolean'||x=='object'){
    console.log(typeof x);
}else {
    x="falsy";
    console.log(x);
}

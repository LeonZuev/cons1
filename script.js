// Деструктуризация
// не сохраняем в массив, не используем лишний раз память
// не создаём лишние константы
console.log('===== Destructurisation =====');
const infoFullName = ['John', 'Doe'];
const [firstName, lastName] = infoFullName; // деструктуризация: firstName('John') lasName('Doe')
console.log(firstName, lastName)

const numbers = [1, 2, 3, 4]; // хотим сохранить только 1 и 4
const [first, , , fourth] = numbers;
console.log(first, fourth);

const book = ['1', 'Theodor Dreiser', 'Finansist', 1912];
const [isbn, author, title, year] = book;
console.log(isbn, author, title, year);
console.log(isbn, title, year);

const[a, b, ...rest] = numbers; 
console.log(a, b, rest); // a = 1, b = 2, rest = [3, 4]

console.log('===== Spread syntax =====');

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(arr1, arr2);
console.log(newArr);

arr1 = ['a', 'b', 'c'];
arr2 = [...arr1, 'd', 'e', 'f'];
console.log(arr2);


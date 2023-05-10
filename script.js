// Деструктуризация
// не сохраняем в массив, не используем лишний раз память
// не создаём лишние константы
console.log('===== Destructure =====');
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

console.log("===== Array's methods =====");

arr1 = [1, 2, 3];
let res = arr1.push(5); // добавляет в конец массива, возвращает новую длинну массива
console.log(arr1); // 1, 2, 3, 5
console.log(res); //4

res = arr1.pop(); // удаляет элемент в конце массива, возвращает удалённый элемент
console.log(arr1); // 1, 2, 3
console.log(res); // 5

res = arr1.shift(); // удаляет элемент в начале массива, возвращает новую длинну массива
console.log(arr1); // 2, 3
console.log(res); // 1

res = arr1.unshift(0); // добавляет элемент в начало массива, возвращает длинну массива
console.log(arr1); // 0, 2, 3
console.log(res); // 3

res = arr1.splice(1, 2, 8, 9, 10); // Удаляет элементы из исходного массива, возвращает удалённый элемент
console.log(arr1); // 0, 8, 9, 10
console.log(res); // 2, 3

res = arr1.splice(1, 3); // Не изменяет исходный массив, возвращает удалённый элемент
console.log(arr1); // 0, 8, 9, 10
console.log(res); // 8, 9

const combArray = arr1.concat(arr2);
console.log(arr1); // 0, 8, 9
console.log(arr2);
console.log(combArray);
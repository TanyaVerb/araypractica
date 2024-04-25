//ARRAY.PROTOTYPE.POP()

let testArrayPop = [1, 2, 3, 4, 5];
console.log(testArrayPop.pop()); //5
console.log(testArrayPop); //(4) [1, 2, 3, 4]

//Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.

let testArrayShift = [1, 2, 3, 4, 5];
console.log(testArrayShift.shift()); //1
console.log(testArrayShift); //(4) [2, 3, 4, 5]

//ARRAY.PROTOTYPE.UNSHIFT()
//Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
let testArrayUnshift = [1, 2, 3, 4, 5];
console.log(testArrayUnshift.unshift(0)); //6- длина массива
console.log(testArrayUnshift); //(6) [0, 1, 2, 3, 4, 5]

//ARRAY.PROTOTYPE.SPLICE()

//Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//Возвращаемое значение
/*Массив, содержащий удалённые элементы. Если будет удалён только один элемент, вернётся массив из одного элемента.
Если никакие элементы не будут удалены, вернётся пустой массив.*/

let testArraySplice = [1, 2, 3, 4, 5];
console.log(testArraySplice.splice(1, 0, "2", "3")); //[]
console.log(testArraySplice); //(7) [1, '2', '3', 2, 3, 4, 5]

/*ARRAY.PROTOTYPE.SLICE()
_______________________
Метод slice() возвращает новый массив, содержащий копию части исходного массива.
arr.slice([begin[, end]])
Метод slice() не изменяет исходный массив, а возвращает новую «одноуровневую» копию,
содержащую копии элементов, вырезанных из исходного массива. Элементы исходного массива копируются в новый массив по следующим правилам:

Возвращаемое значение
Новый массив, содержащий извлечённые элементы.*/

let testArraySlice = [1, 2, 3, 4, 5];
console.log((newArray = testArraySlice.slice())); //[1, 2, 3, 4, 5]
console.log((newArray = testArraySlice.slice(0))); //(5) [1, 2, 3, 4, 5]
console.log((newArray = testArraySlice.slice(2))); //(3) [3, 4, 5]
console.log((newArray = testArraySlice.slice(-2))); //(2) [4, 5]
console.log((newArray = testArraySlice.slice(6))); //(2) []
console.log((newArray = testArraySlice.slice(0, 6))); //(5) [1, 2, 3, 4, 5]
console.log((newArray = testArraySlice.slice(0, 3))); //(3) [1, 2, 3]
console.log((newArray = testArraySlice.slice(0, 0))); //(3) []
console.log((newArray = testArraySlice.slice(1, -1))); //(3) [2, 3, 4]

/*ARRAY.PROTOTYPE.CONCAT()
_______________________
Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван,
соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
let new_array = old_array.concat(value1[, value2[, ...[, valueN]]])*/

let testArrayConcat1 = [1, 2];
let testArrayConcat2 = [3, 4, 5];
console.log("before concat() testArrayConcat1", testArrayConcat1);
console.log("before concat() testArrayConcat2", testArrayConcat2);
console.log((newArray = testArrayConcat1.concat(testArrayConcat2)));
console.log(
  "return value",
  (newArray = testArrayConcat1.concat(
    testArrayConcat2,
    "add new Item",
    101,
    { name: "vlad" },
    ["new arr"]
  ))
);

console.log(
  "return value",
  (newArray = testArrayConcat1.concat(
    testArrayConcat2,
    "add new Item",
    101,
    { name: "vlad" },
    [["new arr"]]
  ))
);

/*TODO ПЕРЕБОР
ARRAY.PROTOTYPE.FOREACH()
_______________________
Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.*/

let testArrayForEach = [1, 2, 3, 4, 5, { name: "Vlad" }];
console.log("before forEach() testArrayForEach", testArrayForEach);
testArrayForEach.forEach((element, index, array) => {
  console.log("element", element);
  console.log("index", index);
  console.log("array", array);
  if (index === 2) return; // ?????????????
  if (index === 1) array.push(6);
  if (index === 1) array.splice(index + 1, 1); //удалена 3
  array[index] = Math.pow(element, 2);
  return (element = element + 2); // игнорируется
});
console.log("after forEach() testArrayForEach", testArrayForEach);

/*TODO ПОИСК В МАССИВЕ

ARRAY.PROTOTYPE.INDEXOF()
_______________________*/
/*Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1,
если такого индекса нет.
arr.indexOf(searchElement[, fromIndex = 0])

searchElement
Искомый элемент в массиве.*/
let testArrayIndexOf = [1, 2, 3, 4, 5];
console.log("return value", testArrayIndexOf.indexOf(2)); //1 - индекс
console.log("return value", testArrayIndexOf.indexOf(6)); //-1 - индекс не найден
console.log("return value", testArrayIndexOf.indexOf(5, 5)); //-1 - индекс равен длине массива
console.log("return value", testArrayIndexOf.indexOf(5, 6)); //-1 - индекс ,больше длины массива
console.log("return value", testArrayIndexOf.indexOf(5, -6)); //4 - если индекс отрицателен, массив всё равно просматривается от начала к концу.

/*Array.prototype.includes()
_______________________
Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
arr.includes(searchElement[fromIndex = 0])*/

let testArrayIncludes = [1, 2, 3, 4, 5];
console.log("return value", testArrayIncludes.includes(2)); //true
console.log("return value", testArrayIncludes.includes(6)); //false
console.log("return value", testArrayIncludes.includes(5, 4)); //true
console.log("return value", testArrayIncludes.includes(1, -4)); //false
console.log("return value", testArrayIncludes.includes(1, -5)); //true
console.log("return value", testArrayIncludes.includes(1, -6)); //true

/*ARRAY.PROTOTYPE.FIND()
_______________________
arr.find(callback[, thisArg])

Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?

Здесь пригодится метод arr.find.
Метод find() возвращает значение первого найденного в массиве элемента,
которое удовлетворяет условию переданному в callback функции.
В противном случае возвращается undefined.

Метод find вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве,
до тех пор, пока она не вернёт true. Если такой элемент найден, метод find немедленно вернёт значение этого элемента.
В противном случае, метод find вернёт undefined*/

let testArrayFind = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "" },
  { id: 4, name: "Маша" },
];

const foundItem = testArrayFind.find((el, index, array) => !el.name);
console.log(foundItem);
foundItem.name = "Влад";
console.log(testArrayFind);

const foundItem2 = testArrayFind.find((el, index, array) => (el.name = "Вася"));
console.log(foundItem2); //{id: 1, name: 'Вася'}
foundItem2.name = "Василий";
console.log(foundItem2);
console.log(testArrayFind); //измененный массив

//ARRAY.PROTOTYPE.FINDINDEX()
//_______________________;
/*arr.findIndex(callback[, thisArg])

У метода arr.findIndex такой же синтаксис, но он возвращает индекс, на котором был найден элемент,
а не сам элемент. Значение -1 возвращается, если ничего не найдено.

Метод arr.findLastIndex похож на findIndex, но ищет справа налево, наподобие lastIndexOf.


ARRAY.PROTOTYPE.FILTER()*/
// ___________________________________________________________

/*Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

callbackFn
Функция-предикат, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает true,
то элемент остаётся в массиве, если false, то удаляется.

Принимает три аргумента (element, index, array)
thisArgНеобязательный----???
Значение, используемое в качестве this при вызове колбэк-функции callbackFn.


Возвращаемое значение
Вернётся новый массив с элементами, которые прошли проверку.
Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.

Метод filter() не изменяет массив, для которого он был вызван.*/

let testArrayFilter = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Ветя" },
  { id: 4, name: "" },
  { id: 5, name: "Маша" },
  { id: 6, name: "Влад" },
  { id: 7, name: "Витя" },
  { id: 8, name: "Оля" },
];

const newFilteredArrayFilter = testArrayFilter.filter((value, index, array) => {
  return !!(value.name && value.name[0].toLowerCase() === "в"); //???- !!
});

console.log(newFilteredArrayFilter);

// ________________________________________________________________________
/*ARRAY.PROTOTYPE.MAP()
_______________________
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const newArr = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])

Возвращаемое значение
Новый массив, где каждый элемент является результатом callback функции.*/

let testArrayMap = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Ветя" },
  { id: 4, name: "" },
  { id: 5, name: "Маша" },
  { id: 6, name: "Влад" },
  { id: 7, name: "Витя" },
  { id: 8, name: "Оля" },
];

const mapNameLengths = testArrayMap.map((value, index, array) => {
  return value.name.length;
});
console.log(mapNameLengths); //(8) [4, 4, 4, 0, 4, 4, 4, 3]

//__________________________________________________________________________
/*ARRAY.PROTOTYPE.SORT()
_______________________
arr.sort([compareFunction])

Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
Сортировка не обязательно устойчива (англ.). Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.*/

let testArraySort1 = [3, 1, 7, 5, 2];
const sortedArray1 = testArraySort1.sort();
console.log(testArraySort1.sort()); //(5) [1, 2, 3, 5, 7]
console.log(sortedArray1 === testArraySort1); //true

let testArraySort2 = [3, 1, 7, 5, 2, 11];
const sortedArray2 = testArraySort2.sort();
console.log(sortedArray2); //(6) [1, 11, 2, 3, 5, 7]
//_______________________________________________________

let testArraySort3 = [6, 18, 3, 2, 11];
console.log("for callBack", testArraySort3);
let count = 0;
testArraySort3.sort((a, b) => {
  console.log("count ", ++count);
  console.log("Сранивает A", a, "и B", b);
  // a - b  Сортировка по возрастанию
  // b - a  Сортировка по убыванию
  //   console.log(a - b, "Сортировка по возрастанию  a - b");
  console.log(b - a, "Сортировка по убыванию b - a");
  // return a - b;
  // return b - a;
});
console.log(testArraySort3);
// _________________________________________________________________

let arraySort = [
  { id: 1, name: "Анатолий" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Саша" },
  { id: 4, name: "Ян" },
  { id: 5, name: "" },
  { id: 6, name: "Дима" },
  { id: 7, name: "Витя" },
  { id: 8, name: "Оля" },
  { id: 9, name: "Катя" },
  { id: 10, name: "Маша" },
  { id: 11, name: "Борис" },
];

const compareStrings = (elementA, elementB) => {
  if (elementA.toLowerCase() < elementB.toLowerCase()) return -1;
  if (elementA.toLowerCase() > elementB.toLowerCase()) return 1;
  return 0;
};

/* Вызов str.localeCompare(str2) возвращает число, которое показывает,
  какая строка больше в соответствии с правилами языка:
  
  Отрицательное число, если str меньше str2.
  Положительное число, если str больше str2.
  0, если строки равны.*/

arraySort.sort((a, b) => {
  return a.name.localeCompare(b.name, "ru");
  // return b.name.localeCompare(a.name, 'ru');
  // return compareStrings(a.name, b.name);
});

console.log(arraySort);
arraySort.sort((a, b) => {
  //   return a.name.localeCompare(b.name, "ru");
  return b.name.localeCompare(a.name, "ru");
  // return compareStrings(a.name, b.name);
});

console.log(arraySort);
arraySort.sort((a, b) => {
  //   return a.name.localeCompare(b.name, "ru");
  //   return b.name.localeCompare(a.name, "ru");
  return compareStrings(a.name, b.name);
});

console.log(arraySort);
// _____________________________________________________________________
/*RRAY.PROTOTYPE.REVERSE()
_______________________
array.reverse()

Метод reverse() на месте обращает порядок следования элементов массива.
Первый элемент массива становится последним, а последний — первым.

Метод reverse() на месте переставляет элементы массива, на котором он был вызван, изменяет массив и возвращает ссылку на него.*/
let testArrayReverse = [1, 2, 3, 4, 5];
console.log("before reverse()", testArrayReverse);
console.log(
  "return value",
  (link = testArrayReverse.reverse()),
  link === testArrayReverse
);
console.log("after reverse()", testArrayReverse);

// __________________________________________________________________________
/*STRING.PROTOTYPE.SPLIT()
_______________________
str.split([separator[, limit]])

Метод split() разбивает String на массив строк путём разделения строки указанной подстрокой.

Метод split() возвращает новый массив.*/
let testStringSplit = "Привет-Привет-Пока-Пока";
console.log(testStringSplit.split("-")); //(4) ['Привет', 'Привет', 'Пока', 'Пока']
console.log("return value", testStringSplit.split()); //['Привет-Привет-Пока-Пока']
console.log("return value", testStringSplit.split("-"));
console.log("return value", testStringSplit.split("")); //(23) ['П', 'р', 'и', 'в', 'е', 'т', '-', 'П', 'р', 'и', 'в', 'е', 'т', '-', 'П', 'о', 'к', 'а', '-', 'П', 'о', 'к', 'а']
console.log("return value", testStringSplit.split("no")); //['Привет-Привет-Пока-Пока']
console.log("return value", testStringSplit.split("", 6)); //(6) ['П', 'р', 'и', 'в', 'е', 'т']
console.log("after split()", testStringSplit); //Привет-Привет-Пока-Пока
// ______________________________________________________________________
/*ARRAY.PROTOTYPE.JOIN()
_______________________
arr.join([separator])*/
let testStringJoin = ["Привет", "Привет", "Пока", "Пока"];
console.log("before JOIN()", testStringJoin);
console.log("return value", testStringJoin.join()); //Привет,Привет,Пока,Пока
console.log("return value", testStringJoin.join("")); //ПриветПриветПокаПока
console.log("return value", testStringJoin.join("-")); //
console.log("return value", testStringJoin.join(" говорит ")); //Привет говорит Привет говорит Пока говорит Пока
console.log("after join()", testStringJoin); //(4) ['Привет', 'Привет', 'Пока', 'Пока']
//_____________________________________________________________________
/*ARRAY.PROTOTYPE.REDUCE()
_______________________
array.reduce(callback[, initialValue])

Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

callback
Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

accumulator
Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента,
либо значение initialValue, если оно предоставлено

currentValue
Текущий обрабатываемый элемент массива.

index Необязательный
Индекс текущего обрабатываемого элемента массива.

array Необязательный
Массив, для которого была вызвана функция reduce.

initialValue Необязательный
Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.*/

let testArrayReduce = [1, 2, 3, 4, 5, 6];
console.log("before reduce()", testArrayReduce);

console.log(
  testArrayReduce.reduce(function (accumulator, currentValue, index, array) {
    console.log("accumulator", accumulator); // 2ой параметр (1-ая итерация)
    console.log("currentValue", currentValue); // 1ый элемент массива (1-ая итерация)
    return accumulator + currentValue;
  }, 0)
);

console.log(
  testArrayReduce.reduce(function (accumulator, currentValue, index, array) {
    console.log("accumulator", accumulator); // первый элемент массива (1-ая итерация)
    console.log("currentValue", currentValue); // второй элемент массива (1-ая итерация)
    return accumulator + currentValue;
  })
);

console.log("after reduce()", testArrayReduce);
//_______________________________________________________________________
/*ARRAY.ISARRAY
_______________________
Array.isArray(obj)

Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.

Возвращаемое значение
true если объект является Array; иначе, false.*/
let testArrayIsArray = [1, 2, 3, 4, 5, 6];
const body = document.querySelectorAll("body"); //???????????????????
console.log(Array.isArray(testArrayIsArray)); //true
console.log(Array.isArray({})); //false
// console.log(Array.isArray(t));
// ______________________________________________________________________
/*ARRAY.PROTOTYPE.SOME()
_______________________
arr.some(callback(element[, index[, array]])[, thisArg])

Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции

Возвращаемое значение
true, если функция проверки возвращает truthy значение хотя бы для одного элемента массива. Иначе, false.
МЕТОД ВОЗВРАЩАЕТ FALSE ПРИ ЛЮБОМ УСЛОВИИ ДЛЯ ПУСТОГО МАССИВА.*/

let testArraySomeTrue = [1, 2, 3, 4, 5, 6, "7"];
let testArraySomeFalse = [1, 2, 3, 4, 5, 6];

console.log(
  //true
  testArraySomeTrue.some((item) => {
    return typeof item === "string";
  })
);

console.log(
  //false
  testArraySomeFalse.some((item) => {
    return typeof item === "string";
  })
);
//___________________________________________________________________
/*ARRAY.PROTOTYPE.EVERY()
_______________________
arr.every(callback(currentValue[, index[, array]])[, thisArg])

Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

Возвращаемое значение
true если функция проверки возвращает truthy значение для каждого элемента массива. Иначе, false.
МЕТОД ВОЗВРАЩАЕТ TRUE ПРИ ЛЮБОМ УСЛОВИИ ДЛЯ ПУСТОГО МАССИВА.*/
let testArrayEveryFalse = [1, 2, 3, 4, 5, 6, "7"];
let testArrayEveryTrue = [1, 2, 3, 4, 5, 6];

console.log(
  testArrayEveryFalse.every((item) => {
    return typeof item === "number";
  })
);

console.log(
  testArrayEveryTrue.every((item) => {
    return typeof item === "number";
  })
);

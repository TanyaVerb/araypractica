/*
TODO Добавление/удаление элементов

ARRAY.PROTOTYPE.PUSH()
_______________________
Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

console.group('Array.prototype.push()');
let testArrayPush = [1, 2, 3, 4, 5];
console.log('before push()', testArrayPush);
console.log('return value', testArrayPush.push(7));
console.log('after push()', testArrayPush);
console.groupEnd();


ARRAY.PROTOTYPE.POP()
_______________________
Метод pop() удаляет последний элемент из массива и возвращает его значение.

console.group('Array.prototype.pop()');
let testArrayPop = [1, 2, 3, 4, 5];
console.log('before pop()', testArrayPop);
console.log('return value', testArrayPop.pop());
console.log('after pop()', testArrayPop);
console.groupEnd();

ARRAY.PROTOTYPE.SHIFT()
_______________________
Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.

console.group('Array.prototype.shift()');
let testArrayShift = [1, 2, 3, 4, 5];
console.log('before shift()', testArrayShift);
console.log('return value', testArrayShift.shift());
console.log('after shift()', testArrayShift);
console.groupEnd();


ARRAY.PROTOTYPE.UNSHIFT()
_______________________
Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.

console.group('Array.prototype.unshift()');
let testArrayUnshift = [1, 2, 3, 4, 5];
console.log('before unshift()', testArrayUnshift);
console.log('return value', testArrayUnshift.unshift(0));
console.log('after unshift()', testArrayUnshift);
console.groupEnd();


ARRAY.PROTOTYPE.SPLICE()
_______________________
Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

start
Индекс, по которому начинает изменять массив. Если больше длины массива,
реальный индекс будет установлен на длину массива. Если отрицателен, указывает индекс элемента с конца.

deleteCount Необязательный
Целое число, показывающее количество старых удаляемых из массива элементов.
Если deleteCount равен 0, элементы не удаляются. В этом случае вы должны указать как минимум один новый элемент.
Если deleteCount больше количества элементов, оставшихся в массиве, начиная с индекса start,
то будут удалены все элементы до конца массива.

itemN Необязательный
Необязательные параметры. Добавляемые к массиву элементы.
Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.

Возвращаемое значение
Массив, содержащий удалённые элементы. Если будет удалён только один элемент, вернётся массив из одного элемента.
Если никакие элементы не будут удалены, вернётся пустой массив.

console.group('Array.prototype.splice()');
let testArraySplice = [1, 2, 3, 4, 5];
console.log('before splice()', testArraySplice);
// console.log('return value', testArraySplice.splice(0));
// console.log('return value', testArraySplice.splice(-1));
// console.log('return value', testArraySplice.splice(1));
// console.log('return value', testArraySplice.splice(5));
// console.log('return value', testArraySplice.splice(0, 0));
// console.log('return value', testArraySplice.splice(0, 1));
// console.log('return value', testArraySplice.splice(0, 6));
// console.log('return value', testArraySplice.splice(0, 1, 'replace item'));
// console.log('return value', testArraySplice.splice(0, 2, 'replace item'));
// console.log('return value', testArraySplice.splice(0, 2, 'replace item1', 'replace item2'));
// console.log('return value', testArraySplice.splice(1, 0, 'add item', 'add item2'));
console.log('after splice()', testArraySplice);
console.groupEnd();


ARRAY.PROTOTYPE.SLICE()
_______________________
Метод slice() возвращает новый массив, содержащий копию части исходного массива.
arr.slice([begin[, end]])

begin Необязательный
Индекс (счёт начинается с нуля), по которому начинать извлечение.
Если индекс отрицательный, begin указывает смещение от конца последовательности.
Вызов slice(-2) извлечёт два последних элемента последовательности.
Если begin не определён, slice() начинает работать с индекса 0.
Если begin больше длины последовательности вернётся пустой массив.

end Необязательный
Индекс (счёт начинается с нуля), по которому заканчивать извлечение.
Метод slice() извлекает элементы с индексом меньше end.
Вызов slice(1, 4) извлечёт элементы со второго по четвёртый (элементы по индексам 1, 2 и 3).
Если индекс отрицательный, end указывает смещение от конца последовательности.
Вызов slice(2, -1) извлечёт из последовательности элементы начиная с третьего элемента с начала и заканчивая вторым с конца.
Если end >= array.length или end опущен, slice() извлекает все элементы до конца последовательности (arr.length).

Метод slice() не изменяет исходный массив, а возвращает новую «одноуровневую» копию,
содержащую копии элементов, вырезанных из исходного массива. Элементы исходного массива копируются в новый массив по следующим правилам:

Возвращаемое значение
Новый массив, содержащий извлечённые элементы.

console.group('Array.prototype.slice()');
let testArraySlice = [1, 2, 3, 4, 5];
console.log('before slice()', testArraySlice);
// console.log('return value',  newArray = testArraySlice.slice(), newArray === testArraySlice)
// console.log('return value',  newArray = testArraySlice.slice(0), newArray === testArraySlice)
// console.log('return value',  newArray = testArraySlice.slice(2), newArray === testArraySlice)
// console.log('return value',  newArray = testArraySlice.slice(-2), newArray === testArraySlice)
// console.log('return value',  newArray = testArraySlice.slice(6), newArray === testArraySlice)
// console.log('return value',  newArray = testArraySlice.slice(0, 6), newArray === testArraySlice)
// console.log('return value',  newArray = testArraySlice.slice(0, 3), newArray === testArraySlice)
// console.log('return value',  newArray = testArraySlice.slice(0, 0), newArray === testArraySlice)
// console.log('return value',  newArray = testArraySlice.slice(1, -1), newArray === testArraySlice)
console.log('after slice()', testArraySlice);
console.groupEnd();


ARRAY.PROTOTYPE.CONCAT()
_______________________
Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван,
соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
let new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

Метод concat не изменяет данный массив или любой из массивов, переданных в аргументах,
а вместо этого возвращает поверхностную копию, содержащую копии тех элементов, что были объединены с исходными массивами.
Элементы оригинальных массивов копируются в новый массив по следующим правилам:

1) Ссылки на объекты (но не фактические объекты): метод concat копирует ссылки на объекты в новый массив.
И оригинал, и новый массив ссылаются на один и тот же объект. То есть, если объект по ссылке будет изменён,
изменения будут видны и в новом, и в исходном массивах.
2)Строки, числа и булевы значения (но не объекты String, Number или Boolean): метод concat
копирует значения строк и чисел в новый массив.

console.group('Array.prototype.concat()');
let testArrayConcat1 = [1, 2];
let testArrayConcat2 = [3, 4, 5];
console.log('before concat() testArrayConcat1', testArrayConcat1);
console.log('before concat() testArrayConcat2', testArrayConcat2);
// console.log('return value',  newArray = testArrayConcat1.concat(testArrayConcat2), newArray === testArrayConcat1, newArray === testArrayConcat2)
// console.log('return value', newArray = testArrayConcat1.concat(testArrayConcat2, 'add new Item', 101, { name: 'Vlad' }));
// console.log('return value', newArray = testArrayConcat1.concat(testArrayConcat2, 'add new Item', 101, { name: 'vlad' }, ['new arr']));
// console.log('return value', newArray = testArrayConcat1.concat(testArrayConcat2, 'add new Item', 101, { name: 'vlad' }, [['new arr']]));
console.log('after concat() testArrayConcat1', testArrayConcat1);
console.log('after concat() testArrayConcat2', testArrayConcat2);
console.groupEnd();

TODO ПЕРЕБОР
ARRAY.PROTOTYPE.FOREACH()
_______________________
Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);

callback
Функция, которая будет вызвана для каждого элемента массива. Она принимает от одного до трёх аргументов:
Колбэк-функция (или обратный вызов) - это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается

currentValue
Текущий обрабатываемый элемент в массиве.

index Необязательный
Индекс текущего обрабатываемого элемента в массиве.

arrayНеобязательный
Массив, по которому осуществляется проход.

thisArg
Необязательный параметр. Значение, используемое в качестве this при вызове функции callback.

Возвращаемое значение
undefined.

console.group('Array.prototype.forEach()');
let testArrayForEach = [1, 2, 3, 4, 5, { name: 'Vlad' }];
console.log('before forEach() testArrayForEach', testArrayForEach);
testArrayForEach.forEach((element, index, array) => {
  console.log('element', element);
  console.log('index', index);
  console.log('array', array);
  // if (index === 2) return;
  // if (index === 1) array.push(6);
  // if (index === 1) array.splice(index + 1, 1);

  return  element = element + 2; // игнорируется
  // array[index] = Math.pow(element, 2);

});
console.log('after forEach() testArrayForEach', testArrayForEach);
console.groupEnd();


TODO ПОИСК В МАССИВЕ

ARRAY.PROTOTYPE.INDEXOF()
_______________________


Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1,
если такого индекса нет.
arr.indexOf(searchElement[, fromIndex = 0])

searchElement
Искомый элемент в массиве.

fromIndex
Индекс, с которого начинать поиск. Если индекс больше или равен длине массива, возвращается -1,
что означает, что массив даже не просматривается. Если индекс является отрицательным числом, он трактуется
как смещение с конца массива. Обратите внимание: если индекс отрицателен, массив всё равно просматривается от начала к концу.
Если рассчитанный индекс оказывается меньше 0, поиск ведётся по всему массиву. Значение по умолчанию равно 0,
что означает, что просматривается весь массив.

Метод indexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя строгое сравнение (en-US)
(тот же метод используется оператором ===, тройное равно).

console.group('Array.prototype.indexOf()');
let testArrayIndexOf = [1, 2, 3, 4, 5];
console.log('before indexOf()', testArrayIndexOf);
console.log('return value', testArrayIndexOf.indexOf(2));
console.log('return value', testArrayIndexOf.indexOf(6));
console.log('return value', testArrayIndexOf.indexOf(5, 5)); // индекс равен длине массива
console.log('return value', testArrayIndexOf.indexOf(5, 6));  // индекс больше длине массива
console.log('return value', testArrayIndexOf.indexOf(5, -6));
console.log('after indexOf()', testArrayIndexOf);
console.groupEnd();

Метод arr.lastIndexOf похож на indexOf, но ищет справа налево.
arr.lastIndexOf(searchElement[, fromIndex = arr.length])


Array.prototype.includes()
_______________________
Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
arr.includes(searchElement[fromIndex = 0])

searchElement
Искомый элемент.

fromIndex Необязательный
Позиция в массиве, с которой начинать поиск элемента searchElement.
При отрицательных значениях поиск производится начиная с индекса array.length + fromIndex по возрастанию.
Значение по умолчанию равно 0.

Возвращаемое значение
Boolean. (true/false)

Если fromIndex больше или равен длине массива, то возвращается false. При этом поиск не производится.

console.group('Array.prototype.includes()');
let testArrayIncludes = [1, 2, 3, 4, 5];
console.log('before includes()', testArrayIncludes);
console.log('return value', testArrayIncludes.includes(2));
console.log('return value', testArrayIncludes.includes(6));
console.log('return value', testArrayIncludes.includes(5, 4));
console.log('return value', testArrayIncludes.includes(1, -4))
console.log('return value', testArrayIncludes.includes(1, -5))
console.log('after includes()', testArrayIncludes);
console.groupEnd();


ARRAY.PROTOTYPE.FIND()
_______________________
arr.find(callback[, thisArg])

Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?

Здесь пригодится метод arr.find.
Метод find() возвращает значение первого найденного в массиве элемента,
которое удовлетворяет условию переданному в callback функции.
В противном случае возвращается undefined.

Метод find вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве,
до тех пор, пока она не вернёт true. Если такой элемент найден, метод find немедленно вернёт значение этого элемента.
В противном случае, метод find вернёт undefined

callback
Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:

element
Текущий обрабатываемый элемент в массиве.

index
Индекс текущего обрабатываемого элемента в массиве.

array
Массив, по которому осуществляется проход.

thisArg
Необязательный параметр. Значение, используемое в качестве this при выполнении функции callback.

Возвращаемое значение
Значение элемента из массива, если элемент прошёл проверку, иначе undefined.

console.group('Array.prototype.find()');
let testArrayFind = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: '' },
  { id: 4, name: 'Маша' },
];
const foundItem = testArrayFind.find((el, index, array) => !el.name);
console.log(foundItem);
foundItem.name = 'Влад';
console.log(testArrayFind);
console.groupEnd();


ARRAY.PROTOTYPE.FINDINDEX()
_______________________
arr.findIndex(callback[, thisArg])

У метода arr.findIndex такой же синтаксис, но он возвращает индекс, на котором был найден элемент,
а не сам элемент. Значение -1 возвращается, если ничего не найдено.

Метод arr.findLastIndex похож на findIndex, но ищет справа налево, наподобие lastIndexOf.


ARRAY.PROTOTYPE.FILTER()
_______________________

Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

callbackFn
Функция-предикат, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает true,
то элемент остаётся в массиве, если false, то удаляется.

Принимает три аргумента

element
Текущий обрабатываемый элемент в массиве.

indexНеобязательный
Индекс текущего обрабатываемого элемента в массиве.

arrayНеобязательный
Обрабатываемый массив, на котором был вызван метод filter().

thisArgНеобязательный
Значение, используемое в качестве this при вызове колбэк-функции callbackFn.

Возвращаемое значение
Вернётся новый массив с элементами, которые прошли проверку.
Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.

Метод filter() не изменяет массив, для которого он был вызван.

console.group('Array.prototype.filter()');
let testArrayFilter = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Ветя' },
  { id: 4, name: '' },
  { id: 5, name: 'Маша' },
  { id: 6, name: 'Влад' },
  { id: 7, name: 'Витя' },
  { id: 8, name: 'Оля' },
];

const newFilteredArrayFilter = testArrayFilter.filter((value, index, array) => {
  return !!(value.name && value.name[0].toLowerCase() === 'в');
});

console.log(newFilteredArrayFilter);
console.groupEnd();

TODO Преобразование массива


ARRAY.PROTOTYPE.MAP()
_______________________
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const newArr = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])

Возвращаемое значение
Новый массив, где каждый элемент является результатом callback функции.

console.group('Array.prototype.map()');
let testArrayMap = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Ветя' },
  { id: 4, name: '' },
  { id: 5, name: 'Маша' },
  { id: 6, name: 'Влад' },
  { id: 7, name: 'Витя' },
  { id: 8, name: 'Оля' },
];

const mapNameLengths = testArrayMap.map((value, index, array) => {
  return value.name.length;
});
console.log(mapNameLengths);
console.groupEnd();


ARRAY.PROTOTYPE.SORT()
_______________________
arr.sort([compareFunction])

Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
Сортировка не обязательно устойчива (англ.). Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.

-Метод sort() начинает сравнивать числа поочередно.
Он берет первую пару чисел и спрашивает: "Какое из этих чисел должно идти первым?".

Если функция сравнения compareFunction предоставлена, элементы массива сортируются в соответствии с её возвращаемым значением.
Если сравниваются два элемента a и b, то:

Если compareFunction(a, b) больше 0, сортировка поставит b по меньшему индексу, чем a.
Если compareFunction(a, b) меньше 0, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.
Если compareFunction(a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу,

Метод sort() проходит по всем парам чисел в массиве и продолжает сравнивать их, пока весь массив не будет упорядочен.

Метод sort() может использовать разные стратегии сортировки в зависимости от реализации JavaScript-движка,
но основная идея остается такой же: он сравнивает элементы массива и упорядочивает их в соответствии с заданным порядком.

console.group('Array.prototype.sort()');
let testArraySort1 = [3, 1, 7, 5, 2];
const sortedArray1 = testArraySort1.sort();
console.log(testArraySort1.sort());
console.log(sortedArray1 === testArraySort1);
// _____
let testArraySort2 = [3, 1, 7, 5, 2, 11];
const sortedArray2 = testArraySort2.sort();
console.log(sortedArray2);
// _____
let testArraySort3 = [6, 18, 3, 2, 11];
console.log('for callBack', testArraySort3);
let count = 0;
testArraySort3.sort((a, b) => {
  console.log('count ', ++count);
  console.log('Сранивает A', a, 'и B', b);
  // a - b  Сортировка по возрастанию
  // b - a  Сортировка по убыванию
  console.log(a - b, 'Сортировка по возрастанию  a - b');
  // console.log(b - a, 'Сортировка по убыванию b - a');
  // return a - b;
  // return b - a;

});
console.log(testArraySort3);

let arraySort = [
  { id: 1, name: 'Анатолий' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Саша' },
  { id: 4, name: 'Ян' },
  { id: 5, name: '' },
  { id: 6, name: 'Дима' },
  { id: 7, name: 'Витя' },
  { id: 8, name: 'Оля' },
  { id: 9, name: 'Катя' },
  { id: 10, name: 'Маша' },
  { id: 11, name: 'Борис' },
];

const compareStrings = (elementA, elementB) => {
  if (elementA.toLowerCase() < elementB.toLowerCase()) return -1;
  if (elementA.toLowerCase() > elementB.toLowerCase()) return 1;
  return 0;
};

Вызов str.localeCompare(str2) возвращает число, которое показывает,
какая строка больше в соответствии с правилами языка:

Отрицательное число, если str меньше str2.
Положительное число, если str больше str2.
0, если строки равны.

arraySort.sort((a, b) => {
  // return a.name.localeCompare(b.name, 'ru');
  // return b.name.localeCompare(a.name, 'ru');
  // return compareStrings(a.name, b.name);
});

console.log(arraySort);

console.groupEnd();


ARRAY.PROTOTYPE.REVERSE()
_______________________
array.reverse()

Метод reverse() на месте обращает порядок следования элементов массива.
Первый элемент массива становится последним, а последний — первым.

Метод reverse() на месте переставляет элементы массива, на котором он был вызван,
изменяет массив и возвращает ссылку на него.

console.group('Array.prototype.reverse()');
let testArrayReverse = [1, 2, 3, 4, 5];
console.log('before reverse()', testArrayReverse);
console.log('return value', link = testArrayReverse.reverse(), link === testArrayReverse);
console.log('after reverse()', testArrayReverse);
console.groupEnd();


STRING.PROTOTYPE.SPLIT()
_______________________
str.split([separator[, limit]])

Метод split() разбивает String на массив строк путём разделения строки указанной подстрокой.

Параметры
separator
Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри строки.
Параметр separator может быть как строкой, так и регулярным выражением.
Если параметр опущен, возвращённый массив будет содержать один элемент со всей строкой.
Если параметр равен пустой строке, строка str будет преобразована в массив символов.

limit
Необязательный параметр. Целое число, определяющее ограничение на количество найденных подстрок.
Метод split() всё равно разделяет строку на каждом сопоставлении с разделителем separator,
но обрезает возвращаемый массив так, чтобы он содержал не более limit элементов.

Метод split() возвращает новый массив.

console.group('String.prototype.split()');
let testStringSplit = 'Привет-Привет-Пока-Пока';
console.log('before split()', testStringSplit);
// console.log('return value', testStringSplit.split());
// console.log('return value', testStringSplit.split('-'));
// console.log('return value', testStringSplit.split(''));
// console.log('return value', testStringSplit.split('no'));
// console.log('return value', testStringSplit.split('', 6));
console.log('after split()', testStringSplit);
console.groupEnd();


ARRAY.PROTOTYPE.JOIN()
_______________________
arr.join([separator])

Параметры
separator Необязательный
Определяет строку, разделяющую элементы массива. В случае необходимости тип разделителя приводится к типу Строка.
Если он не задан, элементы массива разделяются запятой ','.
Если разделитель - пустая строка, элементы массива ничем не разделяются в возвращаемой строке.

Возвращаемое значение
Строка, содержащая все элементы массива. Если arr.length == 0, то будет возвращена пустая строка.

console.group('Array.prototype.join()');
let testStringJoin = ['Привет', 'Привет', 'Пока', 'Пока']
console.log('before JOIN()', testStringJoin);
console.log('return value', testStringJoin.join());
console.log('return value', testStringJoin.join(''));
console.log('return value', testStringJoin.join('-'));
console.log('return value', testStringJoin.join(' говорит '));
console.log('after join()', testStringJoin);
console.groupEnd()


ARRAY.PROTOTYPE.REDUCE()
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
Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.

При первом вызове функции, параметры accumulator и currentValue могут принимать одно из двух значений.
Если при вызове reduce() передан аргумент initialValue, то значение accumulator будет равным значению initialValue,
а значение currentValue будет равным первому значению в массиве. Если аргумент initialValue не задан,
то значение accumulator будет равным первому значению в массиве, а значение currentValue будет равным второму значению
в массиве.

console.group('Array.prototype.reduce()');
let testArrayReduce = [1, 2, 3, 4, 5, 6];
console.log('before reduce()', testArrayReduce);

console.log(testArrayReduce.reduce(function(accumulator, currentValue, index, array) {
  console.log('accumulator', accumulator); // 2ой параметр (1-ая итерация)
  console.log('currentValue', currentValue);  // 1ый элемент массива (1-ая итерация)
  return accumulator + currentValue;
}, 0));

console.log(testArrayReduce.reduce(function(accumulator, currentValue, index, array) {
  console.log('accumulator', accumulator); // первый элемент массива (1-ая итерация)
  console.log('currentValue', currentValue);  // второй элемент массива (1-ая итерация)
  return accumulator + currentValue;
}));

console.log('after reduce()', testArrayReduce);
console.groupEnd();


ARRAY.ISARRAY
_______________________
Array.isArray(obj)

Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.

Возвращаемое значение
true если объект является Array; иначе, false.

console.group('Array.isArray()');
let testArrayIsArray = [1, 2, 3, 4, 5, 6];
const body = document.querySelectorAll('body')
console.log(Array.isArray(testArrayIsArray));
console.log(Array.isArray({}));
console.log(Array.isArray(t));
console.groupEnd();

ARRAY.PROTOTYPE.SOME()
_______________________
arr.some(callback(element[, index[, array]])[, thisArg])

Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции

Возвращаемое значение
true, если функция проверки возвращает truthy значение хотя бы для одного элемента массива. Иначе, false.
МЕТОД ВОЗВРАЩАЕТ FALSE ПРИ ЛЮБОМ УСЛОВИИ ДЛЯ ПУСТОГО МАССИВА.

console.group('Array.prototype.some()');
let testArraySomeTrue = [1, 2, 3, 4, 5, 6, '7'];
let testArraySomeFalse = [1, 2, 3, 4, 5, 6];

console.log(testArraySomeTrue.some((item) => {
  return typeof item === 'string';
}));

console.log(testArraySomeFalse.some((item) => {
  return typeof item === 'string';
}));

console.groupEnd();


ARRAY.PROTOTYPE.EVERY()
_______________________
arr.every(callback(currentValue[, index[, array]])[, thisArg])

Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

Возвращаемое значение
true если функция проверки возвращает truthy значение для каждого элемента массива. Иначе, false.
МЕТОД ВОЗВРАЩАЕТ TRUE ПРИ ЛЮБОМ УСЛОВИИ ДЛЯ ПУСТОГО МАССИВА.


console.group('Array.prototype.every()');
let testArrayEveryFalse = [1, 2, 3, 4, 5, 6, '7'];
let testArrayEveryTrue = [1, 2, 3, 4, 5, 6];

console.log(testArrayEveryFalse.every((item) => {
  return typeof item === 'number';
}));

console.log(testArrayEveryTrue.every((item) => {
  return typeof item === 'number';
}));

console.groupEnd();
 */

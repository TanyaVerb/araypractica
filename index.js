let arr1 = [1, 2, 3, 4, 5];

for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

let arr2 = [2, 3, 4, 5];
let result = 1;
for (i = 0; i < arr2.length; i++) {
  result = result * arr2[i];
}

console.log(result);
// _________________________________________________________________________
let obj = {
  Минск: "Беларусь",
  Москва: "Россия",
  Киев: "Украина",
};

for (let key in obj) {
  console.log(key); //Минск Москва Киев
}
for (let key in obj) {
  console.log(obj[key]); //Беларусь Россия Украина
}
for (let key in obj) {
  console.log(key + " -это " + obj[key] + "."); //Беларусь Россия Украина
}

for (i = 1; i <= 100; i++) {
  console.log(i);
}
for (i = 11; i <= 33; i++) {
  console.log(i);
}
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let sum = 0;
for (i = 0; i <= 100; i++) {
  sum += i;
  console.log(sum);
}

let array = [1, 2, 3, 4, 5];
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let result2 = 0;
let array2 = [1, 2, 3, 4, 5];
for (i = 0; i < array2.length; i++) {
  result2 += array2[i];
  console.log(result2);
}
// ______________________________________________________________
let objObj = {
  green: "зеленый",
  red: "красный",
  blue: "голубой",
};

for (let key in objObj) {
  console.log(key);
}
for (let key in objObj) {
  console.log(objObj[key]);
}

let objObj2 = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};

for (let key in objObj2) {
  console.log(key + " -зарплата " + objObj2[key] + "долларов");
}
// ______________________________________________________________________
//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и
//оператора if выведите на экран столбец тех элементов массива, которые больше 3-х,
//но меньше 10.

let array3 = [2, 5, 9, 15, 0, 4];
for (let elem of array3) {
  if (elem > 3 && elem < 100) {
    console.log(elem);
  }
}
// ________________________________________________________________________
//Дан массив с числами. Числа могут быть положительными и отрицательными.
//Найдите сумму положительных элементов массива.

let array4 = [2, -2, 5, -5, -9, 9, 0, -4, 4];

let sum4 = 0;
for (let elem of array4) {
  if (elem > 0) {
    sum4 += elem;
    console.log(sum4);
  }
}
// __________________________________________________________________________
//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и
//оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть
//- выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

let array5 = [1, 2, 5, 9, 4, 12, 4, 10];

for (let elem of array5) {
  if (elem == 4) {
    console.log("Есть!");
    break;
  }
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5.
let array6 = [10, 20, 30, 50, 235, 3000];

array6.forEach((num) => {
  const firstDigit = String(num)[0];
  if (firstDigit === "1" || firstDigit === "2" || firstDigit === "5") {
    console.log(num);
  }
});

// Результат: 10, 20, 50, 235

let str = "Таня";
console.log(str[0]); //T

// _________________________________________________________________________
//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-
//1-2-3-4-5-6-7-8-9-'.

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result7 = "";

for (let i = 0; i < arr7.length; i++) {
  result7 += arr7[i] + "-";
}

console.log(result7); // '-1-2-3-4-5-6-7-8-9-'
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// _________________________________________________________________________
//Задача1
let str1 = "world";
let arrStr = str1.split("");
console.log(arrStr);
let result3 = arrStr.reverse().join("");
console.log(result3);
// __________________________________________________________________________
//Задача2
//Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр — исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.

function removeChar(str) {
  console.log(str.slice(1, -1));
  return str.slice(1, -1);
}

removeChar("eloquent");
//____________________________________________________________________________
//Задача 3
//Напишите функцию, которая проверяет, является ли данная строка (без учета регистра) палиндромом .

//Палиндром — это слово, число, фраза или другая последовательность символов, которая читается как в прямом, так и в обратном направлении, например madamили racecar.

function isPalindrome(x) {
  let reverse = x.split("").reverse().join("").toLowerCase();
  let xToLowerCase = x.toLowerCase();
  if (xToLowerCase == reverse) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

//второй вариант
//const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }

isPalindrome("a");
isPalindrome("aba");
isPalindrome("Abba");
isPalindrome("hello");
// ______________________________________________________________________
//из строки в массив букв(спрэд)
let sTr = "dff";
console.log([...sTr]); //(3) ['d', 'f', 'f']
//_______________________________________________________________________
//Задача 4
//Анаграмма — это результат перестановки букв слова для получения нового слова (см. Википедию ) .
//Примечание. анаграммы нечувствительны к регистру.

//Завершите функцию, чтобы вернуть результат, true если два заданных аргумента являются анаграммами друг друга; вернуть false в противном случае.

//Примеры
//"foefet"это анаграмма слова"toffee"

//"Buckethead"это анаграмма слова"DeathCubeK"

var isAnagram = function (test, original) {
  const testCharObj = buildCharObject(test);
  const originalCharObj = buildCharObject(original);
  if (Object.keys(testCharObj).length !== Object.keys(originalCharObj).length) {
    return false;
  }
  for (let char in testCharObj) {
    if (testCharObj[char] !== originalCharObj[char]) {
      return false;
    }
  }
  return true;
};

function buildCharObject(str) {
  const charObj = {};
  str = str.toLowerCase();
  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
}

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true
console.log(isAnagram("dumble", "bumble")); //false
console.log(isAnagram("ound", "round")); //false
console.log(isAnagram("apple", "pale")); //false

//Второй вариант

const isAnagram2 = (test, original) =>
  [...test.toLowerCase()].sort().toString() ===
  [...original.toLowerCase()].sort().toString();

console.log(isAnagram2("foefet", "toffee")); // true
console.log(isAnagram2("Buckethead", "DeathCubeK")); // true
console.log(isAnagram2("Twoo", "WooT")); // true
console.log(isAnagram2("dumble", "bumble")); //false
console.log(isAnagram2("ound", "round")); //false
console.log(isAnagram2("apple", "pale")); //false

//Третий вариант

var isAnagram = function (test, original) {
  var t = test.toLowerCase().split("").sort().join("");
  var o = original.toLowerCase().split("").sort().join("");
  return t == o ? true : false;
};

//Четвертый вариант
// var isAnagram = function (test, original){
//   const value1 = test.toLowerCase().split().sort().join('');
//   const value2 = original.toLowerCase().split().sort().join('');
//   return t == o ? true : false;
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Задача
/*
Это твой день рождения. Коллеги покупают вам торт. Количество свечей на торте указано ( candles). Обратите внимание, что это не реальность, и ваш возраст может достигать 1000 лет. Да, вы будете выглядеть некрасиво.

В качестве сюрприза ваши коллеги устроили так, чтобы ваш друг спрятался внутри торта и вырвался наружу. Они делают вид, что это для вашей выгоды, но, скорее всего, это просто потому, что они хотят увидеть, как вы упали, покрытые тортом. Звучит весело!

Когда ваш друг выпрыгнет из торта, он/она опрокинет несколько свечей на пол. Если количество упавших свечей превысит 70% от общего числа свечей, ковер загорится.

Вы определите количество выпавших свечей из предоставленной строчной строки ( debris). Вы должны сложить код ASCII каждого четного индексированного символа (предположим, индексация начинается с 0) в строке с алфавитной позицией («a» = 1, «b» = 2 и т. д.) каждого нечетного индексированного символа, чтобы получить сумму строки.

Например:

"abc"  -->  "a" = 97, "b" = 2, "c" = 99  -->  total = 198
Если ковер загорелся, вернитесь "Fire!", если нет, верните "That was close!".

Примечания

если изначально нет свечей, ковер не может загореться;
поскольку это не реальность, то из торта может упасть больше свечей, чем всего...
*/

function cake(num,str){
  let stringArray = str.split('')
  let res = 0;
  for (let i in stringArray){
 res +=i%2==0? stringArray[i].charCodeAt(0): stringArray[i].charCodeAt(0)-96;
  }
  
  console.log(res)
  const value1 = "Fire!"
  const value2 = 'That was close'
  returnres> num*0.7 ? value1: value2
}

cake(num,str)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Методы чисел

//Задача 1
//Создайте функцию, которая принимает целое число в качестве аргумента и возвращает результат "Even"для четных или "Odd"нечетных чисел.

function evenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("Event");
    return "Event";
  } else {
    console.log("Odd");
    return "Odd";
  }
}

evenOrOdd(2);
evenOrOdd(7);
evenOrOdd(-42);
evenOrOdd(-7);
evenOrOdd(0);

//Второй вариант
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Задача 2

/*Введение
Первое столетие охватывает от 1 года до 100 года включительно , второе столетие — от 101 года до 200 года включительно и т. д.

Задача
Учитывая год, верните столетие, в котором он находится.*/

function century(year) {
  if (year <= 0) {
    console.log("Год должен быть больше 0");
    return "Год должен быть больше 0";
  } else {
    console.log(Math.ceil(year / 100));
    return Math.ceil(year / 100);
  }
}

century(-1);
century(1705);
century(1900);
century(1601);
century(2000);
century(89);

//второй вариант
// const century = (year) => Math.ceil(year / 100);

// ________________________________________________________________________
//Задача 3

/*Найдите наибольший общий делитель двух натуральных чисел. Целые числа могут быть большими, поэтому вам нужно найти умное решение.

Входные значения x и y всегда больше или равны 1, поэтому наибольший общий делитель всегда будет целым числом, которое также больше или равно 1.*/

function mygcd(x, y) {
  while (y > 0) {
    let t = y;
    y = x % y;
    x = t;
  }
  console.log(x);
  return x;
}

mygcd(30, 12);
mygcd(36, 12);
mygcd(8, 9);
mygcd(1, 1);

/*Этот код представляет функцию `greatestCommonDivisor`, которая находит наибольший общий делитель двух чисел `x` и `y` с помощью алгоритма Евклида. В цикле переменная `t` принимает значение `y`, затем `y` становится равным остатку от деления `x` на `y`, а `x` принимает значение `t`. После завершения цикла возвращается значение `x`, которое и является наибольшим общим делителем.*/

//____________________________________________________________________________
//Задача 4
/*В математике факториал неотрицательного целого числа n, обозначаемый n!, представляет собой произведение всех натуральных чисел, меньших или равных n. Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. По соглашению значение 0! это 1.

Напишите функцию для вычисления факториала для заданных входных данных. Если входное значение меньше 0 или больше 12, выдайте исключение типа  RangeError(JavaScript) */

function factorial(n) {
  if (n < 0 || n > 12) {
    console.log("RangeError");
    throw new RangeError("Input value must be between 0 and 12");
  }

  if (n === 0) {
    console.log(1);
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
  return result;
}

factorial(0); //1
factorial(1); //1
factorial(2); //2
factorial(3); //6
factorial(6); //720
// factorial(13); //RangeError

// С помощью оператора throw можно явно создать и выбросить такую ошибку в программе на JavaScript.

//Второй вариант
function factorial2(n) {
  if (n < 0 || n > 12) throw RangeError();
  var f = 1;
  while (n > 1) f *= n--;
  return f;
}
//   _______________________________________________________________________
//Задача 5
/*Вам дан массив n+1целых чисел 1через n. Кроме того, существует одно повторяющееся целое число.

Массив не отсортирован.

Примером допустимого массива может быть [3, 2, 5, 1, 3, 4]. Он содержит целые числа 1 и 5 дублируется 3. [1, 2, 4, 5, 5]не будет действительным, поскольку он отсутствует 3.

Вы должны вернуть повторяющееся значение как одно целое число.*/

// function findDup(arr) {
//   let duplicateValue;
//   let seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (seen[arr[i]]) {
//       duplicateValue = arr[i];
//       break;
//     } else {
//       seen[arr[i]] = true;
//     }
//   }

//   console.log(duplicateValue);
//   return duplicateValue;
// }

// function findDup(arr) {
//     let numSet = {};

//     for (let num of arr) {
//         if (numSet[num]) {
//             return num;
//         } else {
//             numSet[num] = true;
//         }
//     }
// }

// ________________________________________________________
//Задача5
function findDup(arr) {
  let duplicateValue = arr.find((value, index) => arr.indexOf(value) !== index);
  return duplicateValue;
}

findDup([1, 2, 2, 3]); // 2);
findDup([1, 3, 2, 5, 4, 5, 7, 6]); // 5);

//сортировка массива по возрастанию
function findDup2(arr) {
  let duplicateValue = arr.sort((a, b) => a - b);
  console.log(duplicateValue);
  //   return duplicateValue;
}

findDup2([1, 2, 2, 3]); // 2);
findDup2([1, 3, 2, 5, 4, 5, 7, 6]); // 5);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Задача 6
/*Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение trueили falseв зависимости от того, является ли целое число простым.

Согласно Википедии, простое число (или простое число) — это натуральное число, большее, чем 1оно, не имеющее положительных делителей, кроме 1и самого себя.

Требования
Вы можете предположить, что вам будет предоставлен целочисленный ввод.
Нельзя предполагать, что целое число будет только положительным. Вам также могут быть заданы отрицательные числа ( или 0).
ПРИМЕЧАНИЕ по производительности . Никакой сложной оптимизации не требуется, но даже самые тривиальные решения могут выйти из строя. Числа доходят до 2^31 (или аналогичного, в зависимости от языка). Цикл до n, или n/2, будет слишком медленным.
Пример
is_prime(1)  /* false */
//is_prime(2)  /* true  */
//is_prime(-1) /* false */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//___________________________Методы массивов_______________________________
/*Задача1
Определите функцию, которая удаляет дубликаты из массива неотрицательных чисел и возвращает их в результате.

Порядок последовательности должен оставаться прежним.

Примеры:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]*/

function distinct(a) {
  let uniqueArr = [];

  for (let i = 0; i < a.length; i++) {
    if (!uniqueArr.includes(a[i])) {
      uniqueArr.push(a[i]);
    }
  }

  return uniqueArr;
}

console.log(distinct([1, 1, 2]));
console.log(distinct([1, 2, 1, 1, 3, 2]));
// _______________________________________________________________
//Второй вариант
function distinct(a) {
  return [...new Set(a)];
}
//_________________________________________________________________________
/*Задача 2
Вы получаете массив чисел, возвращаете сумму всех положительных чисел.

Пример [1,-4,7,12]=>1 + 7 + 12 = 20

Примечание. Если суммировать нечего, сумма по умолчанию равна 0.*/

function positiveSum(arr) {
  let res = arr.reduce(function (sum, elem) {
    if (elem > 0) {
      return sum + elem;
    } else return sum;
  }, 0);
  console.log(res);
  return res;
}

positiveSum([1, 2, 3, 4, 5]); //,15;
positiveSum([1, -2, 3, 4, 5]); //,13;
positiveSum([]); //,0;
positiveSum([-1, -2, -3, -4, -5]); //,0;
positiveSum([-1, 2, 3, 4, -5]); //,9;

//________________________________________________
//Второй вариант
// const sumOfPositiveNumbers = (arr) => {
//     return arr.reduce((acc, num) => {
//         return num > 0 ? acc + num : acc;
//     }, 0);
// }

// ______________________________________________
//Третий вариант
// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       total += arr[i];
//     }
//   }
//   return total;
// }
//________________________________________________________________________
//Задача 3
/*Возвращает массив, содержащий числа от 1 до N, где N — значение параметра.

Однако замените определенные значения, если выполнено любое из следующих условий:

Если значение кратно 3: вместо этого используйте значение «Fizz».
Если значение кратно 5: вместо этого используйте значение «Живая лента».
Если значение кратно 3 и 5: вместо этого используйте значение «FizzBuzz».
N никогда не будет меньше 1.

Пример вызова метода:

fizzbuzz(3) -->  [1, 2, "Fizz"]*/

function fizzbuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzbuzz(3)); // [1, 2, "Fizz"]
console.log(fizzbuzz(5)); //  [1, 2, 'Fizz', 4, 'Buzz']
console.log(fizzbuzz(15)); // (15) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

//____________________________________________________________________________
/*Задача 4
Чтобы выполнить этот Ката, вам нужно создать функцию multiplyAll/ multiply_all, которая принимает в качестве аргумента массив целых чисел. Эта функция должна возвращать другую функцию, которая принимает в качестве аргумента одно целое число и возвращает новый массив.

Возвращаемый массив должен состоять из каждого элемента первого массива, умноженного на целое число.

Пример:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
Вы не должны изменять исходный массив.*/

function multiplyAll(arr) {
  return function (num) {
    return arr.map((element) => element * num);
  };
}

// Пример использования
const result4 = multiplyAll([1, 2, 3])(2);
console.log(result4); // [2, 4, 6]

// _________________________________________________________
const task = [ 'проснуться', 'поработать', 'погулять', 'поесть']

function updateTask(tasks,startIndex, newTask,  deleteCount) {
 tasks.splice(startIndex,deleteCount,newTask )
  return task;
}

console.log('11111111', updateTask(task, 0, 'поспать'))
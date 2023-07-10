//Задача № 1
/*Изменяет исходный массив, чтобы отфильтровать указанные значения.

Используйте Array.prototype.filter() и Array.prototype.includes() для извлечения ненужных значений. Используйте Array.prototype.length = 0, чтобы изменить переданный массив, сбросив его длину до нуля, и Array.prototype.push(), чтобы повторно заполнить его только извлеченными значениями.

(Для фрагмента, который не изменяет исходный массив, см. Без)
Izmenyayet iskhodnyy massiv, chtoby otfil'trovat' ukazannyye znacheniya.*/

/*const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    //console.log(args);
    let pulled = arr.filter((v, i) => !argState.includes(v));
    //console.log(arr);
    arr.length = 0;
    //console.log(arr);
    pulled.forEach(v => arr.push(v));
  };

  let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]

console.log(myArray);*/

//Задача № 2
/*Числа, заканчивающиеся нулями, скучны.
Они могут быть забавными в вашем мире, но не здесь.
Избавься от них. Только конечные.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Один только ноль в порядке, не беспокойтесь об этом. Бедный парень в любом случае*/

/*function noBoringZeros(n) {
  let numms = [];
  numms = (''+n).split('');
  if(numms[-1] != 0){
    numms.splice(-1, 1);
    
  }
  return +numms.join('');
}
noBoringZeros(1450);*/

/*const noBoringZeros = (n) => {
  if (n === 0) return 0;
  n = String(n).split('');

  for (let i = n.length - 1; i > 0; i--) {
    if (n[i] === '0') {
      n.pop();
    } else {
      return +n.join('');
    }
  }
};
noBoringZeros(960000);*/

//Задача № 3
/*Твоя работа
Найдите сумму всех кратных nнижеm

Иметь ввиду
nи mнатуральные числа (целые положительные числа)
mисключается из множества
Примеры
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"*/

/*function sumMul(n,m){
  if(n>=m || n&&m==0){
    return "INVALID"
  }
    let result = 0;
      for (let i = n; i < m; i+=n) {
        result+=i;
    }
    return result
      }

console.log(sumMul(2, 9));*/

//Задача № 4
/*Проблема
Похоже, какой-то хулиган-сантехник со своим братом снова бегают и портят ваши сцены.
Соединение pipesэтапов вашего уровня вместе должно быть исправлено, прежде чем вы получите больше жалоб.
Список каналов правильный, когда каждый pipeпосле первого индекса больше (+1), чем предыдущий, и нет дубликатов.
Задача
Учитывая список a numbers, верните фиксированный список, чтобы значения увеличивались на 1 для каждого индекса от минимального значения до максимального значения (включая оба).
Пример
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8*/

/*function pipeFix(numbers){
      let numms = [];
      let min = numbers[0];
      //let x = numbers.slice(-1);
      //||//
      let y = numbers[numbers.length-1];
      for (let i = min; i < y+1; i++) {
        numms.push(i);
      }
      return numms
}
pipeFix([1,2,3,5,6,8,9]);*/


//Задача № 5

/*В этом простом упражнении вы создадите программу, которая принимает значение , integer и возвращает список его кратных до другого значения, limit . Если limitкратно integer, оно также должно быть включено. В функцию всегда будут передаваться только положительные целые числа, не состоящие из 0. Предел всегда будет выше основания.
Например, если переданы параметры (2, 6), функция должна возвращать [2, 4, 6]значения 2, 4 и 6, кратные от 2 до 6.*/

/*function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i < limit+1; i++) {
    if(i% integer ===0){
      arr.push(i);
    }else if(typeof undefined){
      arr.push[""];
    }    
  }
  return arr;
}
findMultiples(5, 25);*/

//Задача № 6

/*Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
Примеры (ввод ==> вывод):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]*/

/*function stringToArray(string){
  let arr = [];
  arr = string.split(/\s/)
	return arr
}
stringToArray("I love arrays they are my favorite");*/

//Задача № 7
/*Якщо ми перерахуємо всі натуральні числа нижче
10, кратні 3 або 5, то отримаємо 3, 5, 6, 9. Сума цих кратних
дорівнює 23. Завершіть розв`язання так, щоб воно повернуло
суму всіх кратних 3 або 5 нижче переданого числа. Крім того,
якщо число від`ємне, поверніть 0. (Якщо число кратне 3 і 5,
порахуйте його один раз*/

/*function fakeBin(x){
    return x.split("").map(element => (element<5 ? 0 : 1)).join("")
}
    console.log(fakeBin('366058562030849490134388085'));*/

/*function naturalNumber(limit) {
  let arr = [];
  let result = 0;
    for (let i = 1; i < limit; i++) {
    if (i%3===0||i%5===0) {
      arr.push(i);
      result+=i
        }else if(limit<0){
      return 0
    }
      }
  return result
}

console.log(naturalNumber(10));*/

/*const naturalNumber = (limit) => {
  let limitArr = [];
  limitArr = (''+limit).split('');
  let arr = [];
  let result = 0;
  arr = limitArr.map((a))=>{
    //for (let i = 1; i < limit; i++) {
    if (i%3===0||i%5===0) {
      arr.push(i);
      result+=i
        }else if(limit<0){
      return 0
    }
      }
  return result
}

console.log(naturalNumber(10));*/


/*const naturalNumber = (limit) => {for(let i = 1; i < limit; i++){
  let arr = [];
  let result = 0;
    let summ = (i%3===0||i%5===0) ? arr.push(i):(limit<0) ? 0
}  
  return result+=i
}
console.log(naturalNumber(10));*/


//Задача № 8
/*Це битва покемонів! Ваше завдання полягає в тому, щоб
обчислити шкоду, яку завдасть певний хід, використовуючи таку формулу (не
фактичну з гри): damage = 50 * (attack / defense) * effectiveness
Ефективність: Атаки можуть бути недефективними, нейтральними або не дуже
ефективними залежно від матчу. Наприклад, вода буде надзвичайно ефективна
проти вогню, але не дуже ефекивна проти трави.
Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage

Ви маєте справу з чотирьма типами: вогнем, водою, травою та електрико. Ось
ефективність кожного матчу:
fire > grass
fire < water
fire = electric
water < grass
water < electric
grass = electric
Будь який тип проти себе є не дуже ефектинвий. Окрім того будемо вважати,
що зв`язки між різними типами є симетричні (якщо А є супер ефективний
проти Б, то Б є не дуже ефективний проти А).

Функція, яку ви повинні реалізувати передбачає:
ваш тип
тип опонента
ваша сила атаки
захист суперника*/

class Herro {
  constructor(heroType, attackPower){
    this.heroType = heroType;
    this.attackPower = attackPower;
  }
}
class Opponent {
  constructor(opponentTyppe, opponentDefense){
    this.opponentTyppe = opponentTyppe;
    this.opponentDefense = opponentDefense;
  }
}



const damage = (heroType, opponentTyppe, attackPower, opponentDefense)=>{
  
  

}
const herro = new Herro('fire', 30);
herro.damage();



/*const herro = {
  type: 'fire',
  attack: 30
}
const opponent = {
  type: 'water',
  defense: 30
}*/
//Задача № 2

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

// Рішення 1=========================================================================================


class Pokуmon {
  constructor(heroType, opponentType, attackPower, opponentDefense, effectiveness, result){
    this.heroType = heroType;
    this.opponentType = opponentType;
    this.attackPower = attackPower;
    this.opponentDefense = opponentDefense;
    this.effectiveness = effectiveness = 0;
    this.result = result = 0;
  }

effect (){
    if (this.heroType === this.opponentType){
    this.effectiveness = 0.5;
    } else if (this.heroType == 'fire' && this.opponentType == 'grass'){
      this.effectiveness = 2;
    } else if (this.heroType == 'fire' && this.opponentType == 'water'){
      this.effectiveness = 0.5;
    } else if (this.heroType == 'fire' && this.opponentType == 'electric'){
      this.effectiveness = 1; 
    } else if (this.heroType == 'water' && this.opponentType == 'grass'){
      this.effectiveness = 0.5; 
    } else if(this.heroType == 'water' && this.opponentType == 'electric'){
      this.effectiveness = 0.5; 
    } else if (this.heroType == 'grass' && this.opponentType == 'electric'){
      this.effectiveness = 1;
    } else{
      
    } 
};

damage (){
  this.result = 50*(this.attackPower/this.opponentDefense)*this.effectiveness;
    
  }
  damageRes(){
    console.log(`The Hero's damage is: ${ Math.round(this.result)} xp.`);
  } 
};


const pokуmon = new Pokуmon('fire', 'grass', 30, 30, 0);
pokуmon.effect();
pokуmon.damage();
pokуmon.damageRes() 


// Рішення 2=========================================================================================

//======ОБ'ЄКТ З ТИПАМИ======//
const type ={
  a: 'fire',
  b:'grass',
  c:'water',
  d:'electric'
}

//======HERO======//
class Hero {
  constructor(heroType, attackPower){
    this.heroType = heroType;
    this.attackPower = attackPower;
  }
  get hType(){
    return this.getType();
  }
  get hAttack(){
    return this.getAttack();
  }

  getType(){
    return this.heroType;
  }
  getAttack(){
    return this.attackPower;
  }
};
  const hero = new Hero('fire', 30);

//======OPPONENT======//
  class Opponent {
    constructor(opponentType, opponentDefense){
      this.opponentType = opponentType;
      this.opponentDefense = opponentDefense;
  }
  get oType(){
    return this.getType();
  }
  get oDefense(){
    return this.getDefense();
  }

  getType(){
    return this.opponentType;
  }
  getDefense(){
    return this.opponentDefense;
  }
};
  const opponent = new Opponent('grass', 30);

//**********РОЗРАХУНОК************//

const damage = (heroType, opponentType, attackPower, opponentDefense)=>{
  
  let effectiveness = 0;

  function effectType () {
      if(heroType == opponentType){
        return effectiveness = 0.5;
      } else if(heroType==type.a && opponentType == type.b){
        return effectiveness = 2;
      } else if(heroType==type.a && opponentType == type.b){
        return effectiveness = 0.5;
      } else if(heroType==type.a && opponentType == type.d){
        return effectiveness = 1;
      } else if(heroType==type.ca && opponentType == type.b){
        return effectiveness = 0.5;
      } else if(heroType==type.a && opponentType == type.d){
        return effectiveness = 0.5;
      } else if(heroType==type.a && opponentType == type.b){
        return effectiveness = 1;
      }else{
      }
  }
  effectType();
  let res = (attack, defence, effectiveness)=>{
    let result = 50*(attack/defence)*effectiveness;
      return console.log(`The Hero's damage is: ${ Math.round(result)} xp.`);
  }
  res(attackPower, opponentDefense, effectiveness);
}

damage(hero.hType,opponent.oType, hero.hAttack,  opponent.oDefense);

// Рішення 3 =========================================================================================

const herro = {
  type: 'fire',
  attack: 30
}
const oppo = {
  type: 'grass',
  defense: 30
}

const damageMy = (heroType, opponentType, attackPower, opponentDefense)=>{
    let effectiveness = 0;
  
    if (heroType === opponentType){
      effectiveness = 0.5;
      } else if (heroType == 'fire' && opponentType == 'grass'){
        effectiveness = 2;
      } else if (heroType == 'fire' && opponentType == 'water'){
        effectiveness = 0.5;
      } else if (heroType == 'fire' && opponentType == 'electric'){
        effectiveness = 1; 
      } else if (heroType == 'water' && opponentType == 'grass'){
        effectiveness = 0.5; 
      } else if(heroType == 'water' && opponentType == 'electric'){
        effectiveness = 0.5; 
      } else if (heroType == 'grass' && opponentType == 'electric'){
        effectiveness = 1;
      } else{

      } 
    
    let damageRes = (attack, defence, effectiveness)=>{
      let result = 50*(attack/defence)*effectiveness;
        return console.log(`The Hero's damage is: ${ Math.round(result)} xp.`);
      }
    damageRes(attackPower, opponentDefense, effectiveness);
    
}

damageMy(herro.type, oppo.type, herro.attack, oppo.defense);



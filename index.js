'use strict';

/*Реализовать класс RangeValidator, со следующими свойствами:
    ■  from (number);
    ■  to (number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. */

class RangeValidator{
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
 set from(v) {
   if(typeof v !== 'number' && v > this._to) {
    throw new TypeError('Введите число');
   }
   this._from = v;
 }
  
 get from () {
   return this._from;
 }

 set to(v) {
  if(typeof v !== 'number' && v < this._from) {
    throw new TypeError('Введите число');
  }
  this._to = v;
}

get to () {
  return this._to;
}

getRange () {
return [this._from, this._to];
}

validate(number) {
  if(number < this._from || number > this._to) {
    throw new TypeError('Введенное Вами число не входит в диапазон')
  }
  return number;
}
};

const numbersRange = new RangeValidator(1, 10);

/*
Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
setInterval() - вызов с отсрочкой
clearTimeout() - остановка счетчика  
 */

let timerid = setInterval(Interval , 3000)
let a = [0,1,2,3]
let i = 0

function Interval() {
   if (i >= a.length) {
      clearTimeout(timerid)  
   } else {
      console.log(a[i])  
      i++ 
   }
}



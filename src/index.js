import './styles/style.scss'

//Сдвиг Элементов Массива
let a = [1, 2, 3, 4, 5];
let k = 3;
for (i = 0; i < k; i++) a.unshift(a.pop());
console.log(a);

//Подстрока
const finder = (line1, line2) => {
  arr = [];
  line1.split("").reduce((last, item) => {
    if (line2.indexOf(`${last}${item}`) !== -1) {
      arr.push(`${last}${item}`);
      return `${last}${item}`;
    } else return item;
  }, "");
  return arr.sort((a, b) => b.length - a.length)[0];
};

console.log(finder("abbabba", "aabbaaaasds"));

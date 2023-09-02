// Задание 1
const isEven = (number) => {
   if (number === 0) {
      return `${number} – это ноль`;
   } else if (number % 2 === 0) {
      return `${number} – четное число`;
   } else {
      return `${number} – нечетное число`;
   }
}
for (let i = 0; i <= 10; i++) {
   console.log(isEven(i));

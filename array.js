// favoriteColors гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав дахь өнгийг өөрчилж, шинэчилсэн array-ыг хэвлэ.
// let favotiteColors = ["red", "blue", "black", "pink", "gray"];
// favotiteColors[2] = "orange";
// console.log(favotiteColors);
// levelsCompleted гэсэн array үүсгээд тоглоомын түвшин давсан эсэхээ boolean утгууд оруул. Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч,  шинэчилсэн array-ыг хэвлэ.
// let levelsCompleted = [false, false, false, true];
// levelsCompleted.push = true;
// console.log(levelsCompleted);
// destinations array үүсгээд очихыг хүссэн 5 газрыг бич. Эхний газрыг устгаад шинэчилсэн array-ыг хэвлэ. Дараа нь хамгийн эхэнд нь “New York” гэсэн элемент нэмээд  шинэчилсэн array-ыг хэвлэ.
// let destinations = ["Italy", "Korea", "Japan", "UK", "China"];
// console.log(destinations);
// destinations.shift();
// console.log(destinations);
// destinations.unshift("New York");
// console.log(destinations);

// ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, гэсэн утгуудыг оноож тус array-д байгаа бүх тоог 5-аар нэмэгдүүл. шинэчилсэн array-ыг хэвлэ.
// let ages = [18, 21, 22, 20, 23, 36, 79];
// for (let i = 0; i < ages.length; i++) {
//   ages[i] += 5;
// }
// console.log(ages);
// console.log(ages);
// let index = 0;
// while (i <= 6) {
//   ages[index] = ages[index] + 5;
//   index++;
// }
// numbers гэсэн array зарлаад 15ш тоо оруул.
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//   //   a = 0;
//   // Дээрх array доторх тоонуудын нийлбэрийг ол.
//   // for (let i = 0; i < number.length; i++) {
//   //   a = a + number[i];
//   // }
//   // console.log(a);
//   a = 0;
// while (i < number.length) {
//   a = number[i] + a;
//   i++;
// }
// console.log(a);
// Дээрх аrray - ийн хамгийн их тоог ол.
let b = 0;
// for (let i = 0; i < number.length; i++) {
//   if (b < number[i]) {
//     b = number[i];
//   }
// }
// console.log(b);
// Дээрх аrray - ийн хамгийн бага тоог ол.
// for (let i = 0; i < number.length; i++) {
//   if (b > number[i]) {
//     b = number[i];
//   }
// }
// console.log(b);
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.

// number.unshift(2);
// console.log(number);
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.

// number.push(23);
// console.log(number);
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.
// let a = 0,
//   c = 0;
// for (let i = 0; i < number.length; i++) {
//   if (i % 2 == 0) {
//     a++;
//   } else {
//     c++;
//   }
// }
// console.log(a, c);
// Дээрх олсон утгуудаа хэвлэж харуулаарай.

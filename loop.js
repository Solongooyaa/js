// while (count < 5) {
//   console.log(" 1");
//   count = count + 1;
// }
// let hello = 0;
// while ((1, hello < 10)) {
//   hello = hello + 1;
//   console.log(1, "hello");
// }

// let a = 0;
// while (a < 10) {
//   a = a + 1;
//   console.log(2, a);
// }

// let b = 0,
//   c = 0;
// while (b < 20) {
//   b = b + 1;
//   c += b;
//   console.log(3, c);
// }

// let v = 0,
//   n = 0;
//   let count = 1;

// while (v < 20) {
//   v++;
//   console.log(4, v++);
// }

//  if ( v % 2 == 0) 


// let l = 1,
//   m = 1,
//   k = m;
// while (l < 10) {
//   l++;
//   k *= l;
//   console.log(5, k);
// }
// let j = 3,
//   h = 1;
// while (j <= 10) {
//   let urjver = j * 1;
//   console.log(6, j, "*", h, "=", urjver);
//   console.log(6, j + "*" + h + "=" + urjver);
//   j++;
// }
// let i = 213,
//   reversed = 0;
// while (i > 0) {
//   let lastDegit = i % 10;
//   reversed = reversed * 10 + lastDegit;
// //   n = Math.floor(i / 10);
// // }
// console.log(reversed);
// i = (i - (i % 10)) / 10;
// reserved "";
// reversed = reversed + lastDegit;

// let i = 1;
// u = "half way there!";
// while (i <= 100) {
//   if (i == 50) {
//     console.log(u);
//   } else if (i == 100) {
//     console.log("you made it");
//   } else if (i % 10 == 0) {
//     console.log("Checkpoint!", i);
//   }

//   i += 1;
// }

// let i = 1;
// while (i <= 100) {
//   if (i % 100 == 0) {
//     console.log("You made it");
//   } else if (i % 50 == 0) {
//     console.log("Half way there");
//   } else if (i % 10 == 0) {
//     console.log("Checkpoint", i);
//   }
// }
// console.log("All done!");

// Exercise 1
// 1. Төсвийн хянагч (Budget Tracker)
// Та өдөр тутмын зардлаа хянахыг хүсч байна. Таны төсөв буюу зарцуулах боломжтой мөнгөний хэмжээ $1000 байна.
// Ажлын өдрүүдэд (Даваа - Баасан) зардал $5 байх болно.
// Амралтын өдрүүдэд (Бямба, Ням) зардал $10 байх болно.
// Хэрэв  нийт зардал $80-аас илүү, гэхдээ $100-аас бага болвол "Таны нийт зардал 1000$ руу ойртож байна шүү" гэж хэвлэ.
// Хэрэв  нийт зардал $100 буюу төсвийн хязгаарт хүрсэн бол: "Та зардлын хязгаарт хүрлээ!" гэж хэвлээд давталтыг зогсоо.

// let i = 100,
//   d = 1,
//   e = 0;
// while (e <= 100) {
//   if (d <= 5) {
//     console.log(e);
//     e = e + 5;
//   } else if (d > 5 && d <= 7) {
//     e = e + 10;
//   }
//   if (e >= 80 && e <= 100) {
//     console.log("Таны нийт зардал 100 руу ойртож байна шүү!");
//   } else if (e > 99) {
//     console.log("Та зардлын хязгаарт хүрлээ!");
//   }
//   if (d > 7) {
//     d = 1;
//   } else {
//     d++;
//   }
// }

// 2. Кофе шопын урамшууллын карт (Coffee Shop Punch Card)
// Кофе шоп урамшууллын карттай бөгөөд 10 аяга кофе авсны дараа үнэгүй кофе авах боломжтой.
// Худалдан авсан кофены тоогоор ажиллах давталт үүсгээрэй.
// Худалдан авалт бүрт “Та … дахь кофегоо худалдан авлаа”  гэж хэвлэ.
// 3 дахь удаагийн худалдан авалт бүрийн дараа  "Танд үнэгүй бялуу бэлэглжу байна” гэж хэвлэ.
// 10 дахь худалдан авалтанд "Баяр хүргэе! Та үнэгүй кофе авлаа!" гэж хэвлэ.
// Давталт дууссаны дараа: "Урамшууллын карт дууслаа!" гэж хэвлэ.

// let i = 1;
// while (i <= 10) {
//   if (i % 3 == 0) {
//     console.log("Танд үнэгүй бялуу бэлэглэж байна.");
//   } else if (i == 10) {
//     console.log("Баяр хүргэе! Та үнэгүй бялуу бэлэглэж байна");
//   } else if (i <= 10) {
//     console.log("Та", i, "дахь кофегоо худалдан авлаа");
//   }
//   i++;
// }
// console.log("Урамшууллын карт дууслаа!");

//  Summing the Digits of a Number with While Loop
// jishee n : 153  uyd hariu 1+5+3 + 4 = 12  bna
// Finding the Largest Digit in a Number Using While Loop
// jishee n: 6023  uyd hariu 6 bna

// let i = 153,
//   u = 0;
// while (i > 0) {
//   o = i % 100;
//   u = u + o;
// }

let i = 1,
  u = "";
while (i < 9) {
  i = i + 1;
  u = u + "*";
  console.log(u);
}

// 21. 3-37 хүртэлх тоонуудаас 5д хуваагддаг тоонуудыг дарааллуулан хэвлэ

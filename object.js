// Exercise 1
// Write a function filterBooksByYear that takes a year as arguments, and returns a new array containing only the books that were published on or after the given year.

// Example data:
// const books = [   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },   { title: "1984", author: "George Orwell", year: 1949 },
// { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },   { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },
// { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }];

// When Filter by year 1950

// Output:
// [   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },   { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 }]

// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//   { title: "1984", author: "George Orwell", year: 1949 },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//   {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     year: 1967,
//   },
//   { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
// ];
// function filterBooksByYear(year) {
//   let filteredBooks = [];
//   for (let i = 0; i < books.length; i++) {
//     const thatBooksYear = books[i].year;

//     if (thatBooksYear >= year) {
//       filteredBooks.push(books[i]);
//     }
//   }
//   return filteredBooks;
// }
// const filteredBooks = filterBooksByYear(1950);
// console.log(filteredBooks);

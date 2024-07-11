
// Problem NO.1 Task No 1 Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const arr = [
    { name: "Ria", age: 30, gender: "female" },
    { name: "Mehedi", age: 25, gender: "male" },
    { name: "Joy", age: 25, gender: "male" },
    { name: "Sumiaya", age: 35, gender: "female" },
    { name: "Sokina", age: 28, gender: "female" }
  ];
  
  function filterAndMapNames(arr) {
    return arr
      .filter(person => person.gender !== 'female')
      .map(person => person.name);
  }
  const result = filterAndMapNames(arr);
    // console.log(result); 

//   ------------------------------For Dynamically (Below function)----------------
//   const result = filterAndMapNames(arr,'male');
//   function filterAndMapNames(arr,filterValue) {
//     return arr
//       .filter(person => person.gender !== filterValue)
//       .map(person => person.name);
//   }
  
//   const result = filterAndMapNames(arr,'male');
//   console.log(result); 
  


// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------





//Problem No 2 Task No 2: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.


const books = [
    { title: "Book One", author: "Alya", year: 2000 },
    { title: "Book Two", author: "Sokina", year: 2010 },
    { title: "Book Three", author: "Morjina", year: 2020 }
  ];
  
  function getBookTitles(books) {
    return books.map(book => book.title);
  }
  
  const titles = getBookTitles(books);
//   console.log(titles); 

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// Problem No 3 -Task No 3: Function Composition

//  Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.


  const square = value=> value* value;
const double = value=> value* 2;
const addFive = value=> value+ 5;
//বি:দ্র: This is for Mehedi Hasan Joy's only if he forget what is Function Composition ?
//  Function Composition হল দুটি বা ততোধিক ফাংশনকে একত্রে মিলে একটি নতুন ফাংশন তৈরি করা, যেখানে একটি ফাংশনের আউটপুট অন্য ফাংশনের ইনপুট হিসাবে ব্যবহৃত হয় For Example:-
const composedFunction = value => addFive(double(square(value)));

const composedFunctionResult = composedFunction(3);
// console.log(composedFunctionResult); 

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

//Problem No 4 -Task No 4: Sorting Objects

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.



const cars = [
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Honda", model: "Accord", year: 2018 },
    { make: "Ford", model: "Mustang", year: 2010 }
  ];
  
  function sortCarsByYear(cars) {
    return cars.sort((a, b) => a.year - b.year);
  }
  
  const sortedCars = sortCarsByYear(cars);
//   console.log(sortedCars);
  

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

//   Problem No 5. Task No 9: Find Maximum Value:

//   Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

  const numbers = [1, 2, 3, 4, 5, 6,14, 7, 8, 90];

function getMaxValue(numbers) {
  return Math.max(...numbers);
}

const maxValue = getMaxValue(numbers);
// console.log(maxValue);


  
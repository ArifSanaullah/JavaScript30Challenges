// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
// const fifteen = inventors.filter(e => e.year >= 1500 && e.year < 1600);
// console.log(fifteen);

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// const fifteen = inventors.filter(e => e.year >= 1500 && e.year < 1600);
// console.log(fifteen);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// const names = inventors.map((item) => [item.first, item.last]);
// console.log(names);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// console.log(inventors.sort((a, b) => a.year > b.year ? 1 : -1));


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// 5. Sort the inventors by years lived
// console.log(inventors.sort((a, b) => ((a.passed - a.year) > (b.passed - b.year)) ? 1 : -1))

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const mainA = [...document.querySelectorAll(".mw-category a")];
// const stname = mainA.filter(a => a.textContent.includes("de"));
// stname.map(st => console.log(st.textContent));

// 7. sort Exercise
// Sort the people alphabetically by last name

// const arrays = people.map((item) => [item.split(", ")])
// const sorted = arrays.sort((a,b) => a[0][1] > b[0][1] ? 1 : -1);
// console.log(sorted);




const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];


// 8. Reduce Exercise
// Sum up the instances of each of these

const sum = data.reduce((last, next) => {
    
}, {})
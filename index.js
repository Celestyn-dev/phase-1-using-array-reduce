// Battery batches provided
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Using reduce() to sum up all battery counts
const totalBatteries = batteryBatches.reduce((accumulator, batch) => {
  return accumulator + batch;
}, 0);

console.log("Total Batteries:", totalBatteries);

// Example: Using reduce() with a primitive return value (sum of product prices)
const products = [
  { name: "Shampoo", price: 4.99 },
  { name: "Donuts", price: 7.99 },
  { name: "Cookies", price: 6.49 },
  { name: "Bath Gel", price: 13.99 },
];

const totalPrice = products.reduce((accumulator, product) => {
  return accumulator + product.price;
}, 0);

console.log("Total Price:", totalPrice.toFixed(2)); // 33.46

// Example: Using reduce() with an object return value (counting occurrences)
const letters = ["a", "b", "c", "b", "a", "a"];

const lettersCount = letters.reduce((countObj, letter) => {
  countObj[letter] = (countObj[letter] || 0) + 1;
  return countObj;
}, {});

console.log("Letter Count:", lettersCount); // { a: 3, b: 2, c: 1 }

// Example: Using reduce() with an object (categorizing students)
const artsShowcases = {
  Dance: [],
  Visual: [],
  Music: [],
  Theater: [],
  Writing: [],
};

const incomingStudents = ["Wanjiku", "Otieno", "Kiptoo", "Njeri", "Mutua"];

const studentSorter = {
  showcaseAssign: (student) => {
    const categories = ["Dance", "Visual", "Music", "Theater", "Writing"];
    return categories[Math.floor(Math.random() * categories.length)];
  },
};

const sortedShowcases = incomingStudents.reduce((showcases, student) => {
  const category = studentSorter.showcaseAssign(student);
  showcases[category].push(student);
  return showcases;
}, artsShowcases);

console.log("Sorted Students:", sortedShowcases);

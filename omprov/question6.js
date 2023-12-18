// 9. Hitta den längsta strängen (3p)
// Skriv en funktion findLongestString som tar en array av
// strängar som input och returnerar den längsta strängen från arrayen.

function findLongestString(strings) {
  // Din kod här
  arr.forEach((value) => {
    if (primitives.includes(typeof value)) {
      const valueLength = value.toString().length;
      if (valueLength > longestLength) {
        longestLength = valueLength;
        longestValue = value;
      }
    }
  });
}

console.log(findLongestString(["apple", "banana", "orange", "kiwi"]));
// Ska logga: "banana"
console.log(findLongestString(["dog", "cat", "elephant", "lion"]));
// Ska logga: "elephant"

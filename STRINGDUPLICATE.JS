function removeDuplicates(str) {
    let uniqueChars = new Set(str); 
    return Array.from(uniqueChars).join(''); 
}


let originalString = "hello world";
let stringWithoutDuplicates = removeDuplicates(originalString);
console.log(stringWithoutDuplicates); 

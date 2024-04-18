const isAnagram = (str1, str2) => {
    
    const ana = str => str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  
   
    return ana(str1).split('').sort().join('') ===ana(str2).split('').sort().join('');
};


console.log(isAnagram('iceman', 'cinema')); 

console.log(isAnagram('cold', 'madam')); 

  
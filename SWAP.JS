var text = 'So, today we have REALLY good day';
var ans = text.split('').map(function(c){
  return c === c.toUpperCase()
  ? c.toLowerCase()
  : c.toUpperCase()
}).join('')
console.log(ans)
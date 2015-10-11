var hours = process.argv[2]; 
var minutes = process.argv[3]; 

var arabic = [1,4,5,9,10,40,50];
var rome = ["I","IV","V","IX","X","XL","L"];

function roman(text) {
if (!text) return '';
var result = '';
var n = arabic.length - 1;
while (text > 0) {
if (text >= arabic[n]) {
result += rome[n];
text -= arabic[n];
}
else n--;
}
return result;
}

if((hours<0 || hours>23)||(minutes<0 || minutes>59)){console.log('Uncorrect time')}
else if (!isNumeric(hours) || !isNumeric(minutes)){console.log('Uncorrect time')}
else if ((hours == 0)&&(minutes == 0)){console.log('zz' + ' : ' + 'zz')}
else if (hours == 0){console.log('zz' + ' : ' + roman(minutes))}
else if (minutes == 0){console.log(roman(hours) + ' : ' + 'zz')}
else console.log(roman(hours) + ' : ' + roman(minutes))

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

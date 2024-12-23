const arguments = process.argv.slice(2);
const radius = arguments[0];
const area = Math.PI * Math.pow(radius, 2);

console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);

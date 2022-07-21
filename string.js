const title = 'Jack and Jill Went Up the Hill';

console.log(title.startsWith('Jack'));
console.log(title.startsWith('jack'));
console.log(title.startsWith('Jill', 9));

// end with
const titl = 'Jack and Jill Went Up the Hill';

console.log(titl.endsWith('Hill'));
console.log(titl.endsWith('hill'));
console.log(titl.endsWith('Up', 21));
/// include
let str = 'JavaScript String';
console.log(str.includes('Script'));
console.log(str.includes('script'));


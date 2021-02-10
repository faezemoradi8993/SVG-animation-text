

const logo=document.querySelectorAll("#logo path");
console.log(logo);
for(let i = 0 ; i < logo.length ; i++ ){
console.log(i);
//for get total length of every path .....
// use these for stroke-dasharray
// and stroke-dashoffset of paths   
console.log(logo[i].getTotalLength());
}
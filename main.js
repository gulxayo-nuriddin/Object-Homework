// // 21-masala
// function oyoqlar(tovuq, qoy, sigir) {
//   return (tovuq * 2) + (qoy * 4) + (sigir * 4);
// }
// console.log(oyoqlar(2, 3, 5)); 
// console.log(oyoqlar(1, 2, 3)); 
// console.log(oyoqlar(5, 2, 8)); 


// // 22-masala
// function and(a, b) {
//   return a && b;
// }
// console.log(and(true, false)); 
// console.log(and(true, true));  
// console.log(and(false, true)); 
// console.log(and(false, false));


// // 23-masala
// function tengMi(x, y) {
//   return x === y;
// }
// console.log(tengMi(4, 8));    
// console.log(tengMi(2, 2));    
// console.log(tengMi(2, "2"));  


// // 24-masala
// function futbolochko(yutishlar, duranglar, maglubiyatlar) {
//   return (yutishlar * 3) + (duranglar * 1) + (maglubiyatlar * 0);
// }
// console.log(futbolochko(3, 4, 2)); 
// console.log(futbolochko(5, 0, 2)); 
// console.log(futbolochko(0, 0, 1)); 


// // 25-masala
// function sekundlar(soat, minut) {
//   return (soat * 3600) + (minut * 60);
// }
// console.log(sekundlar(1, 3)); 
// console.log(sekundlar(2, 0)); 
// console.log(sekundlar(0, 0)); 


// // 26-masala
// function fun(son) {
//   return !Number.isInteger(Math.sqrt(son));
// }
// console.log(fun(4)); 
// console.log(fun(9)); 
// console.log(fun(7)); 


// // 27-masala
// function checkEquality(x, y) {
//   return x === y;
// }
// console.log(checkEquality(1, true)); 
// console.log(checkEquality(0, "0"));  
// console.log(checkEquality(1, 1));    


// // 28-masala
// function booleanToString(bool) {
//   return String(bool);
// }
// console.log(booleanToString(true));  
// console.log(booleanToString(false)); 


// // 29-masala
// const arrowFunc = (val) => val;
// console.log(arrowFunc(3));     
// console.log(arrowFunc("3"));   
// console.log(arrowFunc(true));  


// // 30-masala
// function frameSoni(minut, frame) {
//   return minut * 60 * frame;
// }
// console.log(frameSoni(1, 1));    
// console.log(frameSoni(10, 1));   
// console.log(frameSoni(10, 25));  


// // 31-masala
// function calc(str) {
//   return eval(str);
// }
// console.log(calc("23+4"));       
// console.log(calc("45-15"));      
// console.log(calc("13+2-5*2"));   
// console.log(calc("49/7*2-3")); 


// // 32-masala
// function teng10(son1, son2) {
//   return son1 === 10 || son2 === 10 || (son1 + son2) === 10;
// }
// console.log(teng10(9, 10)); 
// console.log(teng10(9, 9));  
// console.log(teng10(1, 9));  

// // 33-masala
// function litrMasofa(km) {
//   let litr = km * 10;
//   return litr < 100 ? 100 : litr;
// }
// console.log(litrMasofa(15));   
// console.log(litrMasofa(23.5)); 
// console.log(litrMasofa(3));    


// // 34-masala
// function maxSon(x, y) {
//   return Math.max(x, y);
// }
// console.log(maxSon(3, 7));       
// console.log(maxSon(-1, 0));      
// console.log(maxSon(1000, 400));  


// // 35-masala
// function arr(x, y) {
//   return [x, y];
// }
// console.log(arr(1, 2));       
// console.log(arr(51, 21));       
// console.log(arr(512124, 215)); 


// // 36-masala
// function tengStrings(str1, str2) {
//   return str1.length === str2.length;
// }
// console.log(tengStrings("AB", "CD"));       
// console.log(tengStrings("ABC", "DE"));      
// console.log(tengStrings("hello", "edabit"));


// // 37-masala
// function boshStr(str) {
//   return str === "";
// }
// console.log(boshStr("")); 
// console.log(boshStr(" ")); 
// console.log(boshStr("a")); 


// // 38-masala
// function bolinsin5(son) {
//   return son % 5 === 0;
// }
// console.log(bolinsin5(5));   
// console.log(bolinsin5(-55)); 
// console.log(bolinsin5(37));  


// // 39-masala
// function bolinsin100(son) {
//   return son % 100 === 0;
// }
// console.log(bolinsin100(1));    
// console.log(bolinsin100(1000)); 
// console.log(bolinsin100(100));  


// // 40-masala
// function uzunlik(str) {
//   if (str === "") return 0;
//   return 1 + uzunlik(str.slice(1));
// }
// console.log(uzunlik("apple")); 
// console.log(uzunlik("make"));  
// console.log(uzunlik("a"));     
// console.log(uzunlik(""));      
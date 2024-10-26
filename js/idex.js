// Symbol ga oid.
// let id = Symbol();
// let user = { naem: "Sarodr", age: 16, [id]: 123 };
// let keys = Object.keys(user);
// console.log(keys);
// let property = Object.getOwnPropertySymbols(user);
// console.log(property);

// Rekursiv funksiyaga oid
// 1 misol
// function plus(arg) {
//     let res = 0;
//     if (arg < 0) {
//         return 0;
//     }
//     return arg + plus(arg - 1);
// }
// console.log(plus(10));

// 2 misol
// function facto(arg) {
//     if (arg == 0 || arg == 1) {
//         return 1;
//     }
//     return arg * facto(arg - 1);
// }
// console.log(facto(4));

// 3 misol
// function fibonaci(arg) {
//     if (arg < 2) {
//         return arg;
//     } else {
//         return fibonaci(arg - 1) + fibonaci(arg - 2);
//     }
// }
// console.log(fibonaci(10));

// Class ga oid.
// 1 misol
// class Car {
//     constructor(name, age, color) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }
// }
// let Mercedes = new Car("Bmw", 2023, "black");
// console.log(Mercedes);

// 2 misol
// class Rectangle {
//     constructor(height, weight) {
//         this.height = height;
//         this.weight = weight;
//     }
//     getArea() {
//         return this.height * this.weight;
//     }
// }
// let arr = new Rectangle(4, 5);
// console.log(arr.getArea());

// String metodlariga oid.
// ### 1. CharAt
// 1 misol
// let str = "salom ustoz";
// let chartedstr = str.charAt(4);
// console.log(chartedstr);

// 2 misol
// let str = 'salom yaxshimisizlar';
// let findstr = str.charAt(19);
// console.log(findstr);

// 3 misol
// let str = "salom";
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }

// ### 2. `charCodeAt`
// 1 misol
// let str = "Salom";
// let findelementAscII = str.charCodeAt(1);
// console.log(findelementAscII);

// 2 misol
// let str = "salom";
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//     arr.push(str.charCodeAt(i));
// }
// console.log(arr);

// // 3 misol
// let str = "salom";
// let sum = [];
// for (let i = 0; i < str.length; i++) {
//     sum.push(str.charCodeAt(i));

// }
// console.log(sum);
// 3 ni tushunmadim !!!;

// ### 3. `at`
// 1 misol
// let str = "salom";
// let findelement = str.at(1);
// console.log(findelement);

// 2 misol
// let str = 'salom';
// let findelement = str.at(-1);
// console.log(findelement);

// 3 misol
// let str = "Ustoz";
// let findelement = str.at(-1);
// console.log(findelement);

// ### 4. `slice`
// 1 misol
// let str = "salom ustoz yaxshimisiz";
// let takingstr = str.slice(6, 12);
// console.log(takingstr);

// 2 misol
// let str = "salom";
// let takingstr = str.slice(0, 3);
// console.log(takingstr);

// 3 misol
// let str = 'salom ustoz';
// let takingstr = str.slice(5);
// console.log(takingstr);

// ### 5. `substring`
// 1 MISOL
// let str = 'salom yaxshimisiz ustoz';
// let res = str.substring(5,17);
// console.log(res);

// 2 misol
// let str = "salom";
// let res = str.substring(0, 4);
// console.log(res);

// 3 misol
// let str = "salom qalesilar Js";
// let res = str.substring(6);
// console.log(res);

// ### 6. `substr`
// 1 misol
// let str = "salom js";
// let res = str.substr(1, 3);
// console.log(res);

// 2 misol
// let str = "salom qalesilar GPTidan salom ustoz hahahah";
// let res = str.substr(21, 5);
// console.log(res);

// 3 misol
// let str = "salom yaxshimisiz";
// let res = str.substr(13,4);
// console.log(res);

// ### 7. `trim`, `trimStart`, `trimEnd`
// 1 misol
// let str = '         salom          ';
// let res = str.trim();
// console.log(res);

// 2 misol
// let str = '      salom         ';
// let res = str.trimStart();
// console.log(res);

// 3 misol
// let str = 'salom        ';
// let res = str.trimEnd();
// console.log(res);

// ### 8. `padEnd`, `padStart`
// 1 misol
// let str = "salom";
// let res = str.padEnd(10, "!");
// console.log(res);

// 2 misol
// let str = "salom";
// let res = str.padStart(15, "~");
// console.log(res);

// 3 misol
// let str = "000";
// let res = str.padEnd(8, "12345");
// console.log(res);

// ### 9. `repeat`
// 1 misol
// let str = 'salom';
// let res = str.repeat(3);
// console.log(res);

// 2 misol
// let str = "salom";
// let res = "";
// for (let i = 0; i < str.length; i++) {
//     res += str.charAt(i).repeat(2);
// }
// console.log(res);

// 3 misol
// let str = "salom";
// let res = (str + ",").repeat(3);
// console.log(res);

// ### 10. `replace`
// 1 misol
// let str = "salom";
// let res = str.replace("s", "a");
// console.log(res);

// 2 misol
// let str = "salom ustoz yaxshimisiz";
// let res = str.replace("ustoz", "dostim");
// console.log(res);

// 3 misol
// let str = "1chi bolib qilmadim";
// let res = str.replace("1", "*");
// console.log(res);

// ### 11. `replaceAll`
// 1 misol
// let str = "salom ustoz yaxshimisiz a qalesiz ?";
// let res = str.replaceAll("a", "o");
// console.log(res);

// 2 misol
// let str = 'olma ol olaska';
// let res = str.replaceAll('ol','qol');
// console.log(res);

// 3 misol
// function strReplace(arg) {
//     let res = arg;
//     if (res.includes("0")) {
//         res = res.replaceAll("0", "*");
//     }
//     if (res.includes("1")) {
//         res = res.replaceAll("1", "*");
//     }
//     if (res.includes("2")) {
//         res = res.replaceAll("2", "*");
//     }
//     if (res.includes("3")) {
//         res = res.replaceAll("3", "*");
//     }
//     if (res.includes("4")) {
//         res = res.replaceAll("4", "*");
//     }
//     if (res.includes("5")) {
//         res = res.replaceAll("5", "*");
//     }
//     return res;
// }
// console.log(strReplace("sa0lo2m1"));

// ### 12. `split`
// 1 misol
// let str = "salom, yaxshimisiz";
// let res = str.split(',');
// console.log(res);

// 2 misol
// let str = 'salom';
// let res = str.split('');
// console.log(res);

// 3 misol
// let str = "salom ustoz yaxshimisiz";
// let res = str.split(" ");
// console.log(res);

// ### 13. `indexOf`
// 1 misol
// let str = 'salom';
// let res = str.indexOf('s');
// console.log(res);

// 2 misol
// let str = 'salom yaxshimisiz';
// let res = str.indexOf('j');
// console.log(res);

// 3 misol
// let str = 'salom salom';
// let res = str.indexOf('salom');
// console.log(res);

// ### 14. `lastIndexOf`
// 1 misol
// let str = 'salom salom';
// let res = str.lastIndexOf('s');
// console.log(res);

// 2 misol
// let str = 'salom ';
// let res = str.lastIndexOf(' ');
// console.log(res);

// 3 misol
// let str = '1salom 1qalesiz 1yaxshi';
// let res = str.lastIndexOf('1');
// console.log(res);

// ### 15. `includes`
// 1 misol
// let str = 'salom qalesiz';
// let res = str.includes('qalesiz');
// console.log(res);

// 2 misol
// let str = "sa1lom";
// function filtnumber(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (Number(arg[i])) {
//             return true + " majud son";
//         }
//     }
//     return false + " son mavjud emas";
// }
// let res = filtnumber(str);
// console.log(res);

// 3misol
// qila olmadim va tushunmadim

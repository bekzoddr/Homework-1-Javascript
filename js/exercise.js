// BEGIN-1

// let a = +prompt("Kvadrat tomoni");

// let P = 2 * a;

// let S = a ** 2;

// console.log("Perimetr = ", P);
// console.log("Yuzi = ", S);

// BEGIN-2

// let d = +prompt("Diametrini kiriting:");

// const pi = 3.14;
// let L = pi * d;
// let r = d / 2
// let s= pi * r ** 2

// console.log(L);
// console.log(s);

// BEGIN-3

// let a = +prompt("Kvadratning yon tomoni: ");

// let V = a ** 3;
// let S = 6 * a ** 2;

// console.log("Kubning hajmi =", V);
// console.log("Kubning to'la sirti =", S);

// BEGIN-4

// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let c = +prompt("c ni kiriting:");

// let V = a * b * c;
// let S = 2 * (a * b + b * c + a * c);

// console.log("Kubning hajmi =", V);
// console.log("Kubning to'la sirti =", S);

// BEGIN-5

// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");

// let M = (a + b) / 2;

// console.log(M);

// BEGIN-6

// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");

// let c =  (a ** 2 + b ** 2) ** (1 / 2);

// let P = a + b + c;

// console.log("Gipotezunasi =", c);
// console.log("Perimetri =", P);

// BEGIN-7

// let r1 = +prompt("r1");
// let r2 = +prompt("r2");

// const pi = 3.14;

// let S1 = pi * r1;
// let S2 = pi * r2;
// let S = pi * (r1 ** 2 - r2 ** 2);
// console.log(S1);
// console.log(S2);
// console.log(S);

// BEGIN-8

// let L = +prompt("Aylananing uzunligini kiriting:");

// const pi = 3.14;

// let R = 2 * pi * L;
// let S = pi * R ** 2;

// console.log(R);
// console.log(S);

// BEGIN-9

// let x1 = +prompt("x1");
// let y1 = +prompt("y1");
// let x2 = +prompt("x2");
// let y2 = +prompt("y2");

// let L = (x1-x2) ** 2 + (y1 - y2) ** 2 ** (1 / 2);

// console.log(L);

// BEGIN-10

// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let c = +prompt("c ni kiriting:");

// let k = a;
// a = b;
// b = c;
// c = k;

// console.log(a);
// console.log(b);
// console.log(c);

// BEGIN-11

// let x = +prompt("x ni kiriting:");

// let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;

// console.log(y);

// BEGIN-12

// let a = +prompt("a ni kiriting:");

// let A = a ** 3; 
// let B = a ** 6;
// let C = a ** 9;
// let D = a ** 15;

// console.log(A);
// console.log(B);
// console.log(C);
// console.log(D);

// BEGIN-13

// let Tf = +prompt("Farengeytni kiriting:");
// let Tc = (Tf - 32) * 5 / 9;

// console.log(Tc);

// BEGIN-14

// let x = +prompt("Shokoladni narxini kiriting:");
// let y = +prompt("Konfetni narxini kiriting:");

// let k = x - y;

// console.log("Shokolad konfetdan", k +  "som qimmat");

// BEGIN-15 

// let x = +prompt("ko'k Olmaning narxini kiriting:");
// let a = +prompt("Olmani Kgni kiriting:");
// let y = +prompt("Qizil Olmani narxini:");
// let b = +prompt("Olmani Kgni kiriting:");

// let A = x * a;
// let B = y * b;
// let k = A + B;

// console.log("Jami:", k + "so'm");

// INTEGER-1

// let ABC = +prompt("Son kiriting:");

// let abc = ABC;

// bc = abc % 100;

// a = (abc - bc) / 100;

// console.log(a);
// console.log(bc);

// INTEGER-2

// let ABC = +prompt("Son kiriting:");

// INTEGER-3


// INTEGER-4


// INTEGER-5


// INTEGER-6


// INTEGER-7

// let N = +prompt("son kiriting");

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// let second = restSeconds % 60;

// let minute = (restSeconds - second) / 60;

// console.log(minute + "daqiqa");


// INTEGER-8

// let N = +prompt("son kiriting");

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// let second = restSeconds % 60;

// let minute = (restSeconds - second) / 60;

// console.log(hour + "soat");

// INTEGER-9

// let N = +prompt("son kiriting");

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// let second = restSeconds % 60;

// let minute = (restSeconds - second) / 60;

// console.log(minute + "daqiqa");
// console.log(second + "soniya");

// INTEGER-10

let N = +prompt("son kiriting");

let restSeconds = N % 3600;

let hour = (N - restSeconds) / 3600;

let second = restSeconds % 60;

let minute = (restSeconds - second) / 60;

console.log(hour + "soat");
console.log(second + "soniya");
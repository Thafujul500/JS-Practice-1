// This is my first JS Practice 

console.log("10 + 15 = " + (10+15))
console.log("10 - 15 = " + (10-15))
console.log("10 * 15 = " + (10*15))
console.log("10 / 15 = " + (10/15))

console.log("Another")

let a = 35;
let b = 40;
let c = a + b;


console.log("a + b = " + (a+b));
console.log("a - b = " + (a-b));
console.log("a * b = " + (a*b));
console.log("a / b = " + (a/b));
console.log(a + " + " + b + " = " + c);
console.log(a + " - " + b + " = " + (a-b))
console.log(a + " * " + b + " = " + (a*b))
console.log(a + " / " + b + " = " + (a/b))

let a = 10;
let b = 10.5;
let c = "Zihad";
let d = true;
let u = null;
console.log(typeof u);
console.log()
console.log(11 < 19 && 5>1);
// console.log(11 > 19 || 5>10);

console.log("Aridmathic Operator")


let a = 20;
let b = 10;

console.log(a + " + " + b + " = " + ( a + b ));
console.log(a + " - " + b + " = " + ( a - b ));
console.log(a + " * " + b + " = " + ( a * b ));
console.log(a + " / " + b + " = " + ( a / b ));
console.log(a + " % " + b + " = " + ( a % b ));

console.log("Assignment Operator")

let aso = 10;
console.log("a = " + aso);
aso += 5;
console.log("a += " + aso);
aso -= 5;
console.log("a -= " + aso);
aso *= 5;
console.log("a *= " + aso);
aso /= 5;
console.log("a /= " + aso);
aso %= 5;
console.log("a %= " + aso);

console.log("Relational Operator")

let a = 10;
let b = 20;
let c = 10;

console.log(a + " > " + b + " = " + (a > b));
console.log(a + " < " + b + " = " + ( a < b ));
console.log(a + " = " + b + " = " + ( a == b ));
console.log(a + " != " + b + " = " + (a != b ));
console.log(a + " <! " + b + " = " + (a <! b));
console.log(a + " >! " + b + " = " + (a >! b));


console.log("Logical Operator")

let a = 100;
let b = 200;



let operator1 = (a > 50) && (b < 300);
console.log( " ( " + a + " > 50 ) && ( " + b + " < 300 ) " + operator1 );

let operator2 = (a > 50) || (b < 300);

console.log( " ( " + a + " > 50 ) || ( " + b + " < 300 ) " + operator2 );

console.log("Pre and Post Increment")

var a = 10;
a--;
console.log(a)

var b  = 20;
--b;
console.log(b)

let c = 10;
console.log(c--);
console.log(--c);
console.log(c--);
console.log(--c);

var a = 10;
var b = 20 - --a;
console.log(a);
console.log(b);

console.log("Another Practice")

var x = 5;
var y = 10 - x--;
console.log(x);
console.log(y);

console.log("Another Practice")

var n = 20;
console.log(n + " " + --n + " " + n-- );  
console.log(n)
console.log(n + " " + n-- + " " + --n );
console.log(n)

const yourAge = 10;
const yourBrotherAge = 10;
// const whoIsElder = yourAge > yourBrotherAge;
// console.log(whoIsElder);

if (yourAge > yourBrotherAge){
    console.log("You are ender.")
}

else if (yourAge < yourBrotherAge){
    console.log("Your brother is ender.")
}
else{
    console.log("We are equal!!!")
}

var day = 3;
switch (day) {

    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    default:
        console.log("Friday");

}

console.log(5<10 && 5<3)
console.log(5<10 && 5<20)

switch case 

var a = "Zihad";
switch(a){
    case "Bijoy":
        console.log("It is Bijoy");
        break;
    case "Thafujul":
        console.log("It is Thafujul");
        break;
    case "Zihad":
        console.log("It is zihad");
        break;
    default:
        console.log("None of them");
}

console.log(2)

var position = "saidpur";
let place = position == "saidpur" ? "It is my birth place" : "It is my village.";

console.log(place)

console.log(position == "rajshahi" ? "It is my birth place" : "It is my village.")

const location = "Rajshahi";

position = location == "Saidpur" ? "It is my study place" : "It is my village";
console.log(position)


console.log("For LOOP");

for(var i = 1; i <= 100; i++){
    console.log(i)
}

let sum = 0;
for(var i = 1; i <= 5; i++){

    console.log("sum = " , sum , " i = " , i , " sum + i = " , ( sum + i));
    sum = sum + i;
}

console.log("While Loop")

var i = 1;
var sum = 0;
while( i <= 5){
    sum = sum + i;
    i++;
    console.log(sum);
}

console.log("Do While Loop")

var a = 1;
do {
    console.log(a);
    a++;
}
while(a <=0);

console.log("For In Loop")

var cname = "Thafujul Islam University of Rajshahi Department of Management Studies.";

for (var i in cname){
    console.log(cname[i]);
}

console.log("For Of Loop")

var cname = "Thafujul Islam University of Rajshahi Department of Management Studies.";

for (var i of cname){
    console.log(i);
}


console.log("Array");

var arr = [];

arr[0] = "zihad";
arr[1] = "firoj";
arr[2] = "sagor";
arr[3] = "bijoy";
arr[4] = "sunny";
arr.push("rana");
arr.push("Thafujul");
arr.push("Thafujul");
arr.shift("zihad");
arr.unshift("Robiul")

console.log(arr);
console.log(arr.length);

console.log("Constructor Pattern");

const a1 = new Array();
console.log(a1,a1.length);

const a2 = new Array(5);
console.log(a2,a2.length);

const a3 = new Array(1,2,3,4,5);
console.log(a3,a3.length);

console.log("Factory Pattern");

const a4 =Array();
console.log(a4,a4.length);

const a5 =Array(5);
console.log(a5,a5.length);

const a6 =Array(1,2,3,4,5);
console.log(a6,a6.length)

console.log("Arry Traverse");

const arr = [1,2,3,4,5,6];
const n = arr[3];
const m = arr[4];
const x = 1;
const y = 2;
const z = 3;

console.log(n , m , arr[x], arr[y], arr[z + 1]);

console.log("Simple Traverse");

var sum = 0;
for(let i = 0; i < arr.length ; i++){
    sum = sum + arr[i];
   
}

console.log(sum);

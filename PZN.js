/* **MEMBUAT OBJECT DENGAN OBJECT**
const niko = {
firstName : "Niko";
lastName : "noviyanto"; };

const naunx = {
    firstName : "anung";
    lastName : "aditya" };

*/
/*
const niko = {
    firstName : "Niko",
    lastName : "noviyanto" };
    
const naunx = {
    firstName : "anung",
    lastName : "aditya" };

    console.log(naunx);
*/

//MEMBUAT CLASS DI VERSI JS LAMA, SEBELUM ES6. KUDU BIKIN CLASS DENGAN FUNCTION, ATAU CONSTRUCTOR FUNCTION.
// DALAM BUAT CONST FUNCTION, NAMA FUNCTION ATO ATTR NYA HARUS PAKE CAPS DI DEPAN, MISAL 
// KALO 2 STRING : "PremiumMember, DeJakas"
// KALO 1 STRING : "Member"

// function DeJakas(){}   ------------------> INI CONSTRUCTOR FUNCTION. GA PERLU LAGI BUAT SPT INI, CUKUP DENGAN BUAT OBJECT SPERTI DIBAWAH

// BUAT FUNCTION DULU

// DECLARE DULU ATTR ATO PROPERTY-NYA DI DALAM CONST FUNCTION
// function DeJakas(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// LALU, BUAT OBJECTNYA
//const niko = new DeJakas("noviyanto", "niko"); // -> INI ADALAH OBJECT, HARUS MENGGUNAKAN KEYWORD "new"
// niko.firstName = "niko";   ----> BISA PAKE CARA INI, ATAU CARA PAKE FUNCTION " this.'attr' "
// niko.lastName = "noviyanto";  ----> BISA PAKE CARA INI,ATAU CARA PAKE FUNCTION " this.'attr' "

//const naunx = new DeJakas("anung", "aditya"); // -> INI ADALAH OBJECT, HARUS MENGGUNAKAN KEYWORD "new"
// naunx.firstName = "anung";  ----> BISA PAKE CARA INI, ATAU CARA PAKE FUNCTION " this.'attr' "
// naunx.lastName = "aditya";  ----> BISA PAKE CARA INI, ATAU CARA PAKE FUNCTION " this.'attr' "

// console.log(niko);
// console.log();
// console.log(naunx);


// **METHOD DI DALAM CONST FUNCTION**

// function DeJakas(){
//     this.firstName = "";
//     this.lastName = "";
//     this.sayHello = function(attr){
//         console.info(`Hello ${attr}, My name is ${this.firstName} ${this.lastName} `);               
//     }
// }

// const niko = new DeJakas();
// niko.firstName = "niko";
// niko.lastName = "noviyanto";
// niko.sayHello("mamen");

// const naunx = new DeJakas();
// naunx.firstName = "anung";
// naunx.lastName = "aditya";
// naunx.sayHello("mamen");




// && PARAMETER DI DALAM CONSTRUCTOR FUNCTION  &&
// LANGSUNG ISI SAJA PARAMETERNYA DENGAN ATTR YG UDAH DIBIKIN DI METHOD 
/*function DeJakas(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(attr){
        console.info(`Hello ${attr}, My name is ${this.firstName} ${this.lastName} `);               
        }
    }

const niko = new DeJakas("niko", "noviyanto");
const naunx = new DeJakas("anung", "aditya");
niko.sayHello("Mamen");
naunx.sayHello("Mamen");
*/


// && CONSTRUCTOR  INHERITTANCE  &&&

// && CONSTRUCTOR INHERITTANCE  &&&

// function Employee (firstName){
//     this.firstName = firstName;
// }

// function Manager (firstName, lastName){
//     this.lastName = lastName;
//     Employee.call(this, firstName);
// }

// const nixau = new Manager("Niko", "noviyanto");
// const naunx = new Manager("anung", "aditya");
// console.log(naunx);
// console.log(nixau);

// let nama2 = new String("nixooo");
// console.info(typeof nama2);

// &*& KEKUATAN DARI OBJECT CLASS &*&

// MEMBUAT OBJECT BIASA DI JS. DI DALAM OBJECT NYA, PROPERTY/ATTR MENGGUNAKAN : , DAN DI AKHIR MENGGUNAKAN ,
// const car = {
//     name : "papanza",
//     color : "black"
// }
// console.log(car);
// console.log();

// MEMBUAT OBJECT MENGGUNAKAN CLASS, DI DALAM CLASS-NYA, PROPERTY/ATTR MENGGUNAKAN = , DAN DI AKHIR MENGGUNAKAN ;

class Car{
    name = "xinia";
    color = "silver";
    displacement = 1500;
}
const mbem = new Car();
mbem.name = "CRV"
mbem.displacement = 2400;

const mbem2 = new Car();
mbem2.color = "red";
mbem2.name = "papanjah";

console.log(mbem);
console.log(mbem2);




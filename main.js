import { tong, hieu } from "./test.js";
import SinhVien from "./sinhvien.js";
let sv = new SinhVien("My name");
let n1 = tong();
let n2 = hieu();
console.log(n2);
var u1 = "Nguyen";
var u1 = "Dinh Phuc nguyen";
// u2 = "Vuong";

//console.log(u1);
//console.log(u2);
//Cơ chế hoisting : in trước khi khai báo : undefined
//console.log(u3);
var u3 = "Dinh Phuc";

// ES6 : giải quyết được cơ chế hoisting, khai báo biến đã có báo lỗi, in trước khi khai báo cũng lỗi
//console.log(u4);
let u4 = "NguyEn";
// let u4 = "Dinh Nguyen";
u4 = "Dinh Nguyen";
function foo() { //function scope
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); //x = 20

    }
    console.log(x); //x = 20
}
var x = 30;
foo();
console.log(x);
function foo2() { //function scope
    let x = 10;
    if (true) { //block scope
        let x = 20;
        console.log(x); //x = 20

    }
    console.log(x); //x = 10
}
// foo2();
// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
//console.log(i); Loi vi dung let
const PI = 3.14; //Dung const khi khai bao gia tri ngay tu dau
//PI = 3.13; error vi la hang so


function test(name) {
    return (name);
}
test("hihi");
//Arrow function
// Dau tien, khai bao bang 1 trong 3 tu khoa let/var/const
//Rut gon khi chi co 1 tham so
// let test1 = name => {
//     console.log(name);
// }
//Rut gon khi chi co 1 dong lenh trong block
// let test1 = name => console.log(name);
// 
//    
let test1 = (name, age) => {
    console.log(name);
    console.log(age);
}
let test2 = name => name;
// Dau mui ten cung co the hieu la return ve gia tri
test1("Alo", "16");

let hocVien = {
    hoTen: 'Nguyen Van A',
    lop: 'FrontEnd XXX',
    layThongTinHocVien: function () {
        console.log(this);
        let _unbind = this;
        function hienThiThongTin() { //function truyen thong nam trong method có this là đối tuong window
            console.log(this);
            console.log(`Họ ten : ${_unbind.hoTen} - Lớp: ${_unbind.lop}`);

        }
        // let unbind = hienThiThongTin;
        // let bindHienThiThongTin = unbind.bind(hocVien);
        // bindHienThiThongTin();
        hienThiThongTin();
    }
}

let hocVien1 = {
    hoTen: 'Vo Hoang Vu',
    lop: 'FrontEnd XXX',
    // layThongTinHocVien: function () {
    //     hienThiThongTin = () => {
    //         console.log(`Họ tên: ${this.hoTen} - Lớp: ${this.lop}`);

    //     }
    //     hienThiThongTin();
    // }
    layThongTinHocVien: function () {
        let hienThiThongTin = () => {
            console.log(`Họ tên: ${this.hoTen} - Lớp: ${this.lop}`);
        }
        hienThiThongTin();
    }
}
hocVien.layThongTinHocVien();
//hocVien1.layThongTinHocVien();

// Rest params
// let sum = (a, b, c, d, e, f, g, h) => {
//     let total = a + b + c + d + e + f + g + h;
//     console.log(total);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8);
// => Quá nhiều ai rãnh viết hoài
let sum = (...numbers) => {
    console.log(numbers);
    // let total = 0;
    // numbers.forEach((item) => {
    //     total += item;
    // })
    // REDUCE mang y nghia tich luy :))
    let total = numbers.reduce((a, b) => {
        return a + b;
    }, 0)
    console.log(total);
};
// sum(1, 3, 4, 6, 7, 4, 7, 5, 4, 7, 4, 65, 13);


// let mangA = [1, 2, 3];
// let mangB = mangA;

// mangB.push(4);
// mangB.push(5); 
//1 2 3 4 5

// JS có cả tham chiếu và tham trị

/// Demo tham chiếu
// console.log(mangA);
// console.log(mangB);

// Cùng địa chỉ(vùng nhớ)


//Spread operator
let mangA = [1, 2, 3];
let mangB = [...mangA, 4, 5]; // 3 dau cham co y nghia copy lai nhung phan tu 
//từ mang A, no tao ra mang moi la ban sao, ko anh huong gi ban cu truoc do het

mangB.push(4);
mangB.push(5);

console.log(mangA);
console.log(mangB);

let user = {
    name: "Nguyen",
    lop: "fe57",

}
//Tham chieu chi bi anh huong boi array va object
let user2 = user;
user2.age = 18;
console.log(user);
console.log(user2);
//let user2 = { ...user, age: 18 };
// console.log(user);
// console.log(user2);


//Default Params

let getInfo = (name, age = 19) => {
    console.log(name, age);
}
// getInfo("Vu Ca", 30);

// Destructuring : Bóc tách


// let arr = ["Vu", "Tri"];
// let [v, t] = arr;
// console.log(v);
// console.log(t);


let obj = {
    name: "Nguyen",
    age: 18,
}
// Lấy đúng tên thuộc tính nó có
let { name, age } = obj;
// console.log(age);

let uname = "Nguyen";
let rs = `Hello ${uname}`;
// console.log(rs);
let hoTen = "Dinh Phuc Nguyen";
let lop = "fe57";

//Khi key va value giong nhau :
let student = {
    hoTen,
    lop,
}

// For of || For in

let list = ["Nguyen", "Thanh", "Phuong"];
for (let item of list) {
    console.log(item);
}
//=> Khong lay duoc so chi muc

for (let i in list) {
    console.log(i);
}



const city = "HCM";
const district = "5";
const ward = "10";
const street = "Lương Nhữ Học";
const address = "Đường " + street + ", phường " + ward + ", quận " + district + ", thành phố " + city;
const address1 = `Đường ${street}, phường ${ward}, quận ${district}, thành phố ${city}`;
console.log(address1);

const a = 5;
const b = 10;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`Max = ${(a > b) ? a : b}`);
console.log(`\`` === '`');
console.log(`Line 1
Line2`);

const name1 = "Hoang Vu";
const gender = 1; //1: male, 0: female
function myTag(strings, nameExp, genderExp) {
    let str0 = strings[0]; //"Gender of "
    let str1 = strings[1]; // " is "
    let genderString;
    if (genderExp === 1) {
        genderString = 'male';
    } else {
        genderString = 'female';
    }

    // We can even return a string built using a template literal
    return `${str0}${nameExp}${str1}${genderString}`;
}
const output = myTag`Gender of ${name1} is ${gender}`;
console.log(output);//Gender of Hoang Vu is male
function tag(strings) {
    console.log(strings.raw[0]);

}
tag`This is line 1 \n This is line 2 \t hi`;


const date = new Date("Tue Jun 08 2021 10:46:49 GMT+0700");
console.log(date); //Tue Jun 08 2021 10:46:49 GMT+0700 (Indochina Time)

let date1 = new Date(date);
const seconds = 20; //Số giây cần cộng thêm
// Vì tính toán trên đơn vị giây: đặt lại số giây = số giây hiện tại + seconds
// Nếu cộng lại vượt quá 60s thì sẽ tự động chuyển đổi theo nguyên tắc tính toán của thời gian
date1.setSeconds(date1.getSeconds() + seconds);
console.log(date1); //Tue Jun 08 2021 10:47:09 GMT+0700 (Indochina Time)

let date2 = new Date(date);
const minutes = 10; //Số phút cần cộng thêm
// Vì tính toán trên đơn vị phút: đặt lại số phút = số phút hiện tại + minutes
// Nếu cộng lại vượt quá 60 phút thì sẽ tự động chuyển đổi theo nguyên tắc tính toán của thời gian
date2.setMinutes(date2.getMinutes() + minutes);
console.log(date2); //Tue Jun 08 2021 10:56:49 GMT+0700 (Indochina Time)

//Tương tự với giờ và ngày
let date3 = new Date(date);
const hours = 2;
date3.setHours(date3.getHours() + hours);
console.log(date3); //Tue Jun 08 2021 12:46:49 GMT+0700 (Indochina Time)

let date4 = new Date(date);
const dates = 3;
date4.setDate(date4.getDate() + dates);
console.log(date4); //Fri Jun 11 2021 10:46:49 GMT+0700 (Indochina Time)
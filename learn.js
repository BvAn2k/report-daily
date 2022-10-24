// khai bap bien 
var tenBien = ' ';
var tenBien = new String(' ');
// mang 
var fullStack = [
    'java', 'javascrip ','PHP'
]
//tham so 
function FullName (name , age){
console.log (name , age);
}
//object constractor
class profit {
    constructor(name, age, avatar) {
        this.name = name;
        this.age = age ; 
        this.avatar  = avatar ; }
// them vao object constractor
email () {
    console.log (email)
}
    }
//cach 2 object constractor
function Dog (name , color , type){
    this.name = name ; 
    this.color = color ; 
    this.type = type ; 
}
// su dung thuoc tinh constractor 
var a = new Dog ('quang','xanh','bacham');
var b = new Dog ('name ', 'color','type');
//them method 
Dog.prototype.email= 'buivanan@gmail.com';
//   vong lap for , while ,

var i = 0 ; 
while (i < 100){
    i++;
    console.log (i);
}
 var fullName = 'buivan an ';
 for (key of fullName){
console.log(key);
 }
 var fullName = ['buivan an ','nguyen van a ','nguyen van b']
 for (key of fullName){
console.log(key);
 }
 var member = {
      name : 'khien',
      age : '12',
// in ra key
 }
 for (key in member){
console.log (key)
 }
 // in ra key of value
for (key in member){
console.log (member[key])
} 
// do while 
var i = 0 ;
do {
i ++;
console.log (i);// vong lap se thuc hien duoc so vong lap it nhat la 1 
}
while (i <10 );
 // su dung switch case 
 var day = 2 ; 
 switch (day){
    case 1 : 
    console.log ('hom nay la ngay 1 ')
    break ; 
    case 2 : 
    console.log ('hom nay la ngay 2 ')
    break ;
    case 3 : 
    console.log ('hom nay la ngay 3 ')
 }
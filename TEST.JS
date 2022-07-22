// //const values=[1,3,5,2,5]
// //function add(n){
//  //   let sum=0;
// //for(let i=0;i <= n; i++){
//  //   if(n <=6) return console.log('n shouldnt be less or equall to 6')  
//  // sum=sum + i ;
// //}
// //return sum
// //}

// //console.log(add(6))
// //let start=performance.now();
// //let end=performance.now();
// //console.log(start)

// /* const answer=[
//     {name:'a',weiht:2},
//     { name:'b',weiht:1},
//     {name:'c',weiht:3}
//  ]

// const show= answer.reduce((total,n)=> n.weiht + total,0);
//  console.log(show);

// function sumup(n){
//    let solu=0;
//    for(let i=0; i<=n;i++){
//    solu += i;
//    }
//    return solu;
// }
// console.log(sumup(4))
// */
// function sumup(numbers){
//    return numbers.reduce((sum,num)=>num +sum,0)
// }
// console.log(sumup([2,3,3,3]))

// class Members{
//    constructor(name,age){
// this.age=age;
// this.name=name;
//    }
//    show=()=>console.log(`hello ${this.name} is ${this.age} years old`)
// }

// class Member extends Members{
//    constructor(name,age,town,city){
//       super(name,age);
//       this.town=town;
//       this.city=city;
//    }
// } 

// const answer=new Member('ama',56,'kumasi','Drobo');
// console.log(answer
//var people='hello world'
//const two=people.charcodeAt(2).toUpperCase() + people.slice(1);
//console.log(two)

/*const str = 'flexiple';
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);

const arr = str.split(" ");
//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);

function yay () {
    var input = "Party like its 2015";
  
    return input.toLowerCase().split("").reverse().join("").split(" ");
    for(var i = 1 ; i < input.length ; i++){
      input[i] = input[i].charAt(0).toUpperCase() + input[i].substr(1);
    }   
  }
  
  console.log(yay());
  
  var going='hello world'
  const me=  going.toLowerCase().split('').reverse().join('').split(' ');
  for(i=1;i<going.length;i++){
   going[i]=going[i].charAt(0).toUpperCase() + going[i].substr(1);
 console.log(me)
  }
 
// var str ='he is the one'
 // const arr = str.split(" ");
//loop through each element of the array and capitalize the first letter.


//for (var i = 0; i < arr.length; i++) {
  //  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);
 

var show='hello world'
const answer=show.charAt(0).toUpperCase() + show.slice(1);
console.log(answer)


var show ='he is here';
var me=show.split(' ')
for(let i=0;i<me.length;i++){
    me[i]= me[i].charAt(0).toUpperCase() + me[i].slice(1)
}

var him=me.join(' ')
console.log(him)
var going='hello world'
var me=going.split('');
for(i=1;i<going.length;i++){
 going[i]=going[i].charAt(0).toUpperCase() + going[i].substr(1);

}

var ff=me.join(' ')
console.log(ff)

var people='hope you well'
var test=people.split(' ')
for(let i=0; i<test.length; i++){
  test[i]=test[i].charAt(0).toUpperCase() + test[i].slice(1)
}
var pp=test.join(' ')
console.log(pp)

function philip(X=3,Y){
  return [X,Y]
}
const go=philip(5)
console.log(go)


var pam= new Promise(
  setTimeout((resolve,reject) => {
  resolve('information')
},2000))
 
pam.then(data=>console.log(data))

const nuu='my girl some.'
const kk=nuu.charAt(0).toUpperCase() + nuu.slice(1)
console.log(kk)
//var me=nuu.split(' ');
//const king=me.map(m=> me.charAt(0).toUpperCase(). + me.slice(1)
//  )
//  console.log(king.join(' ').toString())


class Fifa{
  constructor(name,age,town){
  this.name=name
  this.age=age
  this.town=town
  }
}

 const answer= new Fifa('Philip',20,'kumasi')
 console.log(answer)
 */

const obj=[{
  name:'shela',
  age:10,
    town:'kim',
    color:'red'
},
{
  name:'she',
  age:20,
    town:'sim',
    color:'black'
},
{
  name:'ela',
  age:110,
    town:'nim',
    color:'black'
}
]
const [...a]=obj
console.log(a)

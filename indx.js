/*let str = "hello";
let reversed = "";
let i = str.length - 1;

do {
  reversed += str[i];
  i--;
} while (i >= 0);

console.log(reversed);

let str ="vaibhav";
let reversed ="";
let i = str.length -1;

do{
    reversed +=str[i]
    i--
}while(i>=0)
    console.log(reversed)
    console.log(str)




console.log(a)
console.log(b)

for(let i=2; i<=num; i++){
    let next =a+b;
    console.log(next)
    a=b
    b=next
}


let num=10;
let a=0 ,b=1
let i= 2;
console.log(a)
console.log(b)

while(i<=num){
    let next = a+b
    console.log(next)
    a= b
    b=next
    i++
    
}
let num = 10;
let a = 0 , b = 1;
let i = 2;

console.log(a);
console.log(b);

while (i <= num) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
    i++;
}

let num = 10;   // kitne terms chahiye
let a = 0, b = 1;
let i = 0;

do {
    console.log(a);   // har step pe a print hoga
    let next = a + b;
    a = b;
    b = next;
    i++;
} while (i < num);

let num=7
for(let i=1; i<=10 ; i++)
{
    console.log(`table of 7 *${i} = ${7*i}`)
}


let num =1234
let sum=0
for(let ntemp=num;ntemp>0; ntemp= Math.floor(ntemp/10)){
  let digit= ntemp%10;
  sum+=digit
}
console.log(sum)
   
let num=1234
let sum=0
let temp=num
while(temp>0){
    let digit =temp%10;
    sum+=digit;
    temp= Math.floor(temp/10)
}
console.log(sum)
let n=1234
let sum=0
let temp=n
do{
    let dight =temp%10
    sum+=dight
    temp= Math.floor(temp/10)
}while(temp>0)

    console.log(sum)

   

  let num=5
     for(let i=1 ; i<=input ;i++){
         if(i%2===0){
            console.log(`this number ${i} is :even `)
         }
         else(i%2===1)
            console.log(`this number ${i} is :odd `)
         
         
     }
     let input = parseInt(prompt("enter a numbers 1 to n :")) 

     let i=1
     while(i<=input){
        if(i%2===0){
            console.log(`number ${i} is :even`)
        }
        else if (i%2===1)
        
            console.log(`numbers ${i} is :odd`)
        

        i++
     }


        let input= parseInt(prompt("enter numbers 1 to n : "))

        let i=1
        do{
          if(i%2===0){
            console.log(`this number ${i} is : even`)

          }else(i%2===1){
            console.log(`this number ${i} is : odd`)

          }

            i++
        }while(i<=input)*/







































// this is a function//

/*

        let getScore =(...vlu) =>{
               let TotelScores=0
            vlu.forEach(function(scores){
                TotelScores =TotelScores+scores
            })
            return TotelScores
        }   
        
     console.log( getScore(18,12))  

     let fn= function(){
        console.log('hyyyyyyyyyyy')
     }
     fn()

     function fe(val){
        val();
        
     }
     fe(function (){
            console.log('hyyyyyyyyyy')
        })

            function he()
             {
                console.log("hellow")
             }
             he()

             function greet(name){
                console.log(`hello ,${name}`)
             }

           greet("vaibhav")
           greet ("|niku")
           greet("akkii")
     

           function multiply(a,b=2){
            return a*b
           }

          console.log(multiply(22, 22)) 


          function sumAll(...num){
            let Totalsum=0
          
            num.forEach(function (one) {Totalsum+=one})
                  
            return Totalsum

          }
         console.log(sumAll(12,31,44,56,12,4,5,24,51,111,3,41,))  



         let square = function (n){
            return n*n
         }

         console.log(square(4))

         const num = (n) =>{
           if(n%2===0) console.log("even");
            
           else return console.log("odd")
            
         
        }
         num(12)

         function calculator(a,b){
            function add(){
                return a+b;
            }
            function subtract(){
                return a-b;
            }
            function multiply (){
                return a*b
            }

            return{
       addition: add(),
        subtraction: subtract(),
        multiplication: multiply()

           };
          
         }


console.log(calculator(11,7));

function outer(){
    function inner(){
       console.log("Hello from inner!")
    }
    return inner;
}

let fn=outer()
fn()

function intro(name='Guest',...hobbies){
     console.log(name)
     console.log(hobbies)
}

intro("vibhu","Gameing","reding","gym","movie ")

function mexNumber(...number){
  let mexnum=Math.max(...number)
   console.log(mexnum) 
}

mexNumber(12,42,4,2,55,77,99,66,33,667,88,33,22,12,)


function makeMultiplier(factor){
    return function(num){
        return num*factor
    }
}

const double= makeMultiplier(2);
console.log(double(5))

function intro(name="Guest",...hobbies){

    console.log (`hii, i am ${name}. my hobbies are ${hobbies.join(",")}`)
}
intro("vaibhav","gameing","reding","gym","movie")
intro("niku","gameing","reding","gym","movie")
intro("akki","gameing","reding","gym","movie")
intro("vibhu","gameing","reding","gym","movie")

function clculator(a, b) {
    function add() {
        return a + b;
    }
    function subtract() {
        return a - b;
    }
    function multiply() {
        return a * b;
    }
    function divide() {
        return a / b;
    }
    return {
        addition: add(),
        subtraction: subtract(),
        multiplication: multiply(),
        division:Number( divide().toFixed(2))
    };


}

console.log(clculator(11, 7));


function outer(){
  
     function inner(){
        console.log("hello from inner")
    }
 return inner()  
}
outer()

function greeting (name){
    function sayHello(){
        console.log(`hello, ${name}`)
    }
    return sayHello;
}
const greetvi= greeting("vaibhav")
greetvi()
greeting("niku")*/



//  this is arrys//

/*
let fruits =["apple", "banana", "mango"]

(fruits.splice(1,1))
 
console.log(fruits) 

NumberOfSum=[12,34,56,78,90]
sum=0
for(let i=0 ; i<NumberOfSum.length ; i++){
    sum+=NumberOfSum[i]
}
console.log(sum) 

number=[1,2,3,4,5,6,7,8,9,10]

number.forEach(function(value){
  if(value%2===0){
    console.log(`this numbers ${value} is:  Even`)
  }
})

fruits = ["apple", "banana", "mango ", "orange", "grapes", "kiwi"]

let revers= fruits.reverse()
console.log(revers)

numbers = [112,45,3,67,99,4]
 
let max=numbers[0];
let min=numbers[0];


for(let i=1; i<numbers.length; i++){
    if(numbers[i]> max){
        max=numbers[i]
    }
     if(numbers[i]< min){
        min=numbers[i]
    }
}
console.log("Maximum number:", max);
console.log("Minimum number:", min);

word =["hello","world","js"]
let join= word.join(" ")
console.log(join)

let square = [1,2,3,4,5]

let finalsquare = square.map(function(value){
    return value*value

})
console.log(finalsquare)
let namemy = "vaibhav"
let mynew = namemy.toUpperCase()
console.log(mynew)

let fruits = ["apple", "banana", "mango ", "orange", "grapes", "kiwi"]

let up = fruits.map(function(value){
    return value.toUpperCase()
})
console.log(up)

let numbers =[10,55,30,90,42,100]
let filter = numbers.filter(function(value){
    return value>50
})
console.log(filter)

let numbers =[5,10,15,20]


let sum = numbers.reduce(function(accment ,num)   {  return  accment +num} ,0)
console.log(sum)


let usernaem =["vav","niku","akki","vibhu"]

let longest= usernaem[0]

for(let i=1; i<usernaem.length; i++){
    if(usernaem[i].length> longest.length){
        longest=usernaem[i]
    }
}console.log("longest name is :",longest)
let word =[5,2,9,1,7]
word.sort(function(a,b){ return a-b})
console.log(word)
word.sort(function(a,b){ return b-a})
console.log(word)

let Num = [2,5,7,9,-3]

let numstutues = Num.every(function(value){
     return value > 0;
})
console.log(numstutues)

let Num = [1,3,5,7,10]

let numstutues = Num.some(function(value){
        return value % 2 === 0;
})
console.log(numstutues)

let namee =["html","css","js","react"]

let index = namee.indexOf("js")
console.log(index)

let num =[1,2,2,3,4,4,5,6,6]

let unique = [...new Set(num)]
console.log(unique)*/


// object prectios questions   


// let cal ={
//     add : {
//         vaibhu : function(a,b){
//             return a+b
//         }
//     }
       
// //     },
// //     sub :  function(a,b){
// //         return a-b
// //     }
// }

// // console.log(cal.add(10, 5));
//  console.log(cal.add.vaibhu(10, 5));

// let counter ={
//     value :0,
//     in: function(){
//         this.value++;
//     },
//    de: function(){
//     this.value--
//    },
//    get: function(){
//     console.log(this.value);
//    }
// }
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.in();
// counter.get();  // 2

// counter.de();
// counter.de();
// counter.de();


// counter.de();

// counter.de();counter.de();counter.de();counter.de();counter.de();counter.de();
// counter.get();  // 1



// let count=5
//  ++count;
//  console.log(count)
//  count++;
//  console.log(count) 
// 
// let h= 5==='5'

// let ha= 5=='5'
// console.log(h)
// console.log(ha)
//    function hy(){
// let grater= 10>5 
// console.log(grater)
// let less =10<20 
// console.log(less) 
// let qeual =10===10;
// console.log(qeual)
// }
// hy()
//  x= x+3
//  x+=3
//  x-=3
//  x*=3
//  x/=3
//  console.log(x)
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// let a = 13>12 && 21>33
// console.log(a)
// let b = 14>12 || 11>199
// console.log(b)
// let c = !!(11>12)
// console.log(c)
// console.log(a)
// let a=10;

//     hee()

// function hee() {
//     console.log("mewo")
// }

//   let age= prompt("enter age")


// if(age>18){
//     console.log("Adult")
// }
// else{
//     console.log("minor")
// }
//  function s(marks){
//     if(marks>=90) return"A grade"
//      if(marks>=75) return"b grade"
//       if(marks>=50) return"c grade"
//        else return"fail "
//  }
// s(33)

// function s(city){

//     if(city==="bhopal"){
//     console.log("mp")
// }else if(city==="Delhi"){
//     console.log("capital")
// } else console.log("UNknown City")

// }
// s("bhavnager")
// s("Delhi")

// function s(temperatuer){
    
// temperatuer>30 ? console.log("hotiiii") :console.log("so colde")
// }
// s(50)

//  let DAY =7;
// switch(DAY){
//     case 1: 
//     console.log("monday")
//     break;
//     case 2:
//     console.log("tusday")
//     break;
//     case 3: 
//     console.log("wensday")
//     break;
//     case 4:
//     console.log("tusday")
//     break;
//     case 5: 
//     console.log("setarday")
//     break;
//     case 6:
//     console.log("sunday")
//     break;
//     default :
//     console.log("invalide day")
// } 

// for(let i=1; i<=10; i++){
//     console.log(` 5 * ${i} = ${i*5} `)
// }
// let count=0;

// for(let i=1; i<=15;i++){
//    if(i>8){
//     count++;
//     console.log(i)
//    }
// }
// console.log("count:" ,count)


// let hardcode=242422


// for(let i=1; i<=3; i++ ){
    
// let password= +prompt("enter password");

//     if(password===hardcode){
//         console.log("accsec ")
//         break;
//     }else{
//         console.log("pelz enter right paasword")



//     }
//     if(i===3){
//         console.log("yoou are blocked")
//     }
// }

// let count = 0;

// for (let input = ""; input !== "stop"; ) {
//   input = prompt("Enter a word:");

//   if (input === "yes") {
//     count++;
//   } else if (input === "stop") {
//     console.log(`You typed "yes" ${count} times.`);
//   }
// }


// while(true){
//     let input =prompt("Enter a word:")
//     if(input==="stop"){
//         console.log(`you typed "yese" ${count} tiems`)
//         break;
        
//     }else if(input==="yes"){
//         count++
            
//         }
// }
//  let sum=0;
// for(let i=1; i<=30; i++){
//   if(i%2===1){
//     console.log(`${i} is odd number`)
//     sum=sum+i
//   }
 
// }
// console.log(sum)




// while(true){


//     let input =  +prompt("enter a number")
//     if(input%2===0){
//         console.log(`${input} is even number that for loop end`)
//         break;
//     }
// }

// let age =prompt("entr a age:")

// if(age===null){
//     console.error("you canscel it")
// }
// else{
//     if(age.trim() ===''){
//         console.error("plze enter  a value")
//     }else{
//         age=Number(age)
//         if(isNaN(age)){
//             console.error("enter a number")
//         }else{
//            if(age>18){
//             console.log("you are eligible t vaote")
//            }
//            else{
//             console.log("you are not aeblat to vote")
//            }
//         }
//     }
// }


// let count=0  
// let hardcode ="hrod21"

// //  for(let i=1; i<=3; i++){
    
//   while(true){
//  let passwoed= prompt("enter a password")
//     if(passwoed===hardcode){
//         console.log("accouned open")
//         break;
//     }
//   }
   
//     count++;

//     if(password===hardcode){
//         console.log("your password are crrected accouned open")
//         break;
//     }else{
//         if(count===3){
//             console.log("your accounde are locked ")
//         }else{
//             console.log("wrong passwoed plz try agine")
//         }
//     }
//  }
// let count=0;
// let hardcode="hellow"


// for(let i=1; i<=3; i++){
// let paasword =prompt("enter a passowed")
// count++
// if(paasword===hardcode.trim()){
//     console.log("your passwored are curect account are opan");

// }else{
//     if(count===3){
//         console.log("youre account are locked")
//     }else{
//         console.log("opps you enter wornge passowerde")
//     }
// }

// }

// let count=0

// while(true){
//     let word =prompt("enter a words:")
 
//    if(word==="stop"){
//       break
//    }else{
//      if(word==="yes"){
//         count++
//      }    
   
//    }
// }
// console.log(count)
// 111122222221

// 0
// for(let i=1; i<=30; i++){
//    if(i%2===1){
//     console.log(i)
//     sum=sum+i
//    }
// }
// console.log("totle of odd numbewrs is :",sum)


// while(true){
//     let number=+prompt("enter a Numbers:")

//     if(number%2===0){
//         console.log("enven NUmber enterde .Loop stoped")
//         break;
//     }
// }
 
// let start = +prompt("Enter start number:");
// let end   = +prompt("Enter end number:");

// if (isNaN(start) || isNaN(end)) {
//   console.log("Please enter valid numbers.");
// } else {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }
//  let count=0;
 
// for(let i=1; i<6; i++){
//     let user1=+prompt("enter nember:")
//     if(user1>0){
//         count++
//           console.log(`Positive number: ${user1}`);
//     }else{
//        console.log(`Not positive: ${user1}`);}
    
   
// }
// console.log(`Total positive numbers: ${count}`);
//  let count=0;

// let hardcode="vaibhav"
// let passowed= prompt("enter pasword")
// count++

// while(passowed!==hardcode){
//     if(count===3){
//         console.error("accouned lock")
//         break;
//     }
    
//     passowed=prompt("enter passwoed:")
//     count++
// }

// while(count<3 && passowed!==hardcode){
//     passowed= prompt("enter pasword")
// count++
// }
// if(count===3 && passowed!==hardcode){
//     console.error("Acount LOcked")

// }else{
//     console.log("Done")
// }

// let word= prompt("Enter Words:")
// let count=0;
// while(word!=="stop"){
//     if(word==="yes"){
//         count++
//     }
    
//      word= prompt("Enter Words:")
// }
// console.log(`totale yes is:${count}`)


// let hardcode = "hrrrrii";
// let hint = hardcode.slice(0, 3);
// for(let i=1; i<4; i++){
//     let paasword=prompt("Enter youre paasword:")

    
//     if(paasword===hardcode){
//         console.log("👍 you paasword are right")
//         break;
//     }else{
//         console.log(`❌ oppps you Enter wrong paasword! this your ${i} try`)

//         if(i===2) console.log(`paasword hint is ${hint}`);
            
//         else if(i===3) console.log(`you acount are blocked🚫 ${hint}`);
             
           
      
        
//     }

// }



// let num = Math.floor(Math.random() * 10) + 1;

// let input;

// while(input!==num){
//    input= +prompt("Enter a numbers:");
//     if(num===input){
//         console.log(`😎crongratulations you enter right number ${input}`)
//         break;
//     }else{
//         if(num>input) console.log("Too high");
//         if(num<input) console.log("Too low")

//     }

// }



// let st= prompt("enter a string:");
// let newst=st.split('').reverse().join('');
// console.log(newst)





// {
//   var x = 10;
//   let y = 20;
// }
// console.log(x); // works
// console.log(y); // error


// let num = original;   // 👈 store original safely
// let rev = 0;

// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = Math.floor(num / 10);
// }

// if (original === rev) {
//   console.log(`${original} is a Palindrome ✅`);
// } else {
//   console.log(`${original} is NOT a Palindrome ❌`);
// }



// let sum=0;

// while(num>0){
//     let digit=num%10;
//     sum += digit;
//     num=Math.floor(num/10);
// }
//  console.log(`Sum of digits is ${sum}`)


// let num = +prompt("Enter a number:");
// let largest = 0;

// while (num > 0) {
//   let digit = num % 10;
//   if (digit < largest) {
//     largest = digit;
//   }
//   num = Math.floor(num / 10);
// }


// let count= document.querySelector("button")
// let dis = document.getElementById("hy")
// let h1 = document.querySelector("h1")
//  let num=0

// count.addEventListener("click", function(){
//       num++
//       h1.innerHTML=num
// } )
// dis.addEventListener("click", function(){
//       num--
//       h1.innerHTML=num
//       if(num<0){
        
//         h1.innerHTML=0 
//         alert("this incres count !")
//       }
// } )


// let btn = document.querySelector("button")
// let box = document.querySelector(".box")

// btn.addEventListener("click", function(){
//     let c1 = Math.floor(Math.random()*256)
//      let c2 = Math.floor(Math.random()*256)
//       let c3 = Math.floor(Math.random()*256)

//        box.style.backgroundColor= `rgb(${c1},${c2},${c3})`
// } )


//   function sum(...num){
//     return num.reduce(function(acc, value){
//         return acc+value;
//      },0)
//   }
// console.log(sum(61232, 11111)); 
// onsole.log(sum1(632, 11111)); 
// onsole.log(sum2(6122, 1111)); 

// let sum =function(...num){
//     return num.reduce((acc,value) => acc+value,0)
// }
// var sum1 =function(...num){
//     return num.reduce((acc,value) => acc+value,0)
// }
// const sum2 =function(...num){
//     return num.reduce((acc,value) => acc+value,0)
// }

// let word;
// do{
//     word =prompt("Enter a palindrame word:")
    
//     let rev="";

//     for(let ch of word){
//         rev = ch+rev
//     }
    
//     if(word===rev){
//           console.log("✅ Palindrome:", word);
//           break;
//     }else{
//             console.log("❌ Not palindrome, try again!");
//     }

// }while (true);

// function name(a ,b){
//    if(a>b){
//     return a;
//    } else { 
//     return b;
// }
// }
// console.log(name(2,4))



// let hot=function (){
//  setTimeout(() => {
//     console.log("hyyyyyyyyyyy")
//  }, 2000);
// }
// hot();

let arr= [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'gray',
        wining:5,
       img: "img/CSKoutline.avif"

      

    },
    {
         team:'Dehi Capitals',
        primary:'red',
        secondary:'lightblue',
        wining:2,
        img:"img/DCoutline.avif"

    },
     {
         team:'Gujarat Titans',
        primary:'cyan',
        secondary:' teal',
        wining:4,
        img:"img/GToutline.avif"

    },
    {
        team:'kolkata knight riders',
        primary:'yellow',
        secondary:'darkblue',
        wining:3,
        img:"img/KKRoutline.avif"


    },
    {
         team:'Lucknow Super Giants',
        primary:'#FFFFFF',
        secondary:'darkblue',
        wining:3,
        img:"img/LSGoutline.avif"
    },
    {
         team:'Mumbai Indians',
        primary:'lightblue',
        secondary:'blue',
        wining:5,
        img:"img/MIoutline.avif"
    },
    {
         team:'Punjab Kings',
        primary:'red',
        secondary:'darkblue',
        wining:0,
        img:"img/PBKSoutline.avif"
    },
    {
         team:'Rajasthan Royals',
        primary:'pink',
        secondary:'darkblue',
        wining:0,
        img:"img/RRoutline.avif"
    }
]


let btn =document.querySelector("button")
let box =document.querySelector(".box")
let img =document.querySelector(".img")
let detail  =document.querySelector(".detail")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")


btn.addEventListener("click",function(){
  var num= Math.floor (Math.random()*arr.length)

   
 box.style.backgroundColor = arr[num].primary;
  detail.style.backgroundColor = arr[num].secondary;
  img.src = arr[num].img;
  h1.innerHTML = arr[num].team;
  h2.innerHTML =`wining: ${arr[num].wining}`
  
})
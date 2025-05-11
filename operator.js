//Comparison Operator

// let a =prompt("Enter first number");
// let b =prompt("Enter second number");
// console.log(" a= ",a ,"b= ",b);//printing prompt value
// // console.log("a+b =", Number (a)+ Number(b));//addtion
// console.log("a+b =",a+b);
// console.log("a-b =", Number (a)-Number(b));//subtraction
// console.log("a*b =", Number (a)*Number(b));//multiplication
// console.log("a/b =", Number (a)/Number(b));//divison
// console.log("a%b =", Number (a)%Number(b));//modulus
// console.log("++a = ",++a,"++b =",++b);//increment
// console.log("--a = ",--a,"--b =",--b);//decrement
// let a=5;//assignment operator
// let b=5;
// console.log(a==5 && b==0);// double equal operator and logical  AND  operator //False
// console.log(a==5 || b==0);//logical OR operator //True
// console.log(!(a==0 && b==0));//logical NOT operator  //True
// console.log(a>=5 && b>0);//true
// console.log(a>=5 && b<0);//false
// console.log(a===b);//true
// // console.log(!(a===b));//false
// let num1=5;
// let str="5";
// let stg="five";
// console.log(num1==str);////true:it doesn't compare with dataType i.e it converts the string into number and then it compare it
// console.log(num1==stg);//false

// let a ="5";
// let b=5;
// console.log("a =",a,"b=",b);
// console.log(" Is a==b:",a==b);//true
// console.log("Is a===b:",a===b);//false
// console.log("Is a!=b:",a!=b);//true//not equal
// console.log("Is a!==b:",a!==b);//true   //not equal value or not equal type & it also check data type
// console.log("Is a>b:",a>b);//false      "5" 5==5 false
// console.log("Is a>=b:",a>=b);//true
// console.log("Is a<b:",a<b);//false
// console.log("Is a<=b:",a<=b);//true

//WAP in JS to check whether user is eligible to vote or not using ternary operator taking age and nationality from prompt
// let age=prompt("Enter your age in number");
// age =Number(age);
// age=(age>=18)?"Yes,You can Vote":"OOPS!!,You can't Vote";
// console.log(age);
/*
//1)voting condition must be greater than 18 and nationality must be nepali
let age=prompt("Enter your age in number");
let nation=prompt("Enter your nationality in words");
age =Number(age);
 age>=18 && nation==="Nepal" || nation==="nepal"
?console.log("Yes,You can Vote")
:console.log("OOPS!!,You can't Vote");
*/
/////////////////////day1 on conditional( ternary) operator//////////////////////////////////////////////////////////////////////////////
/*
Task1:Job Application Eligibility
Scenario:
A person is applying for a job. The company has the following rules:
- Age: Must be between 21 and 35
- Qualification: Must be "bachelor", "Bachelor", or "BACHELOR"
- Experience: At least 2 years
-----------------------
Logic & Output:
- If all conditions match -> "You are eligible for the job." 
- If only age and qualification match -> "You meet age and qualification but not experience."
- If only age matches -> "You meet age only." 
- Otherwise -> "Not eligible."
 */
/*
let age=Number(prompt("Enter Your Age(in Number):"));
let qual=prompt("Enter Your Qualificationa:");
let exp=parseFloat(prompt("Enter Your Work Experience"));

let result=(age>21 && age<35) &&
(qual=="bachelor" ||qual== "Bachelor" ||qual== "BACHELOR")&&
 (exp>=2) ? "You're Elligible for the job"
:(age>21 && age<35) &&
(qual=="bachelor" ||qual== "Bachelor" || qual== "BACHELOR") ? "You meet age and qualification but not experience."
:(age>21 && age<35)?"You meet age only." 
:"Not eligible.";
alert(result);
*/
/*
let age=parseInt(prompt("Enter Your Age(in Number):"));
let qual=prompt("Enter Your Qualificationa:");
let exp=parseFloat(prompt("Enter Your Work Experience"));
alert((age>21 && age<35)?
        (qual=="bachelor" ||qual== "Bachelor" ||qual== "BACHELOR") ?
                (exp>=2)?
                 "You're Elligible for the job"
         :"You meet age and qualification but not experience.":
     "You meet age only."
     :"Not eligible." )

*/

/*

let Age=parseInt(prompt("Enter Your Age(in Number):"));
let qual=prompt("Enter Your Qualificationa:");
let exp=parseFloat(prompt("Enter Your Work Experience"));

if(Age>21 && Age<35){
    if(qual=="bachelor" ||qual== "Bachelor" ||qual== "BACHELOR"){
        if(exp>=2){
            console.log("You're Elligible for the job");
        }else{
            console.log("You meet age and qualification but not experience.");
        }

    }else{
        console.log("You met age only");

    }
}else{
    console.log("Not eligible.");
}

*/
////////////////////day1 tasks on ternary operator//////////////////////////////////////////////////////////////////////////////

/*
 Task 2: Loan Approval Checker (Nested Ternary Operator)

Scenario:
A person is applying for a loan. The bank's rules:
- Age: Between 25 and 60
- Monthly Income: At least 30,000
- Credit Score: Must be above 650
----------------------
Logic & Output:
- All conditions match -> "Loan Approved."
- Age & income match, but credit score is low -> "Good income and age, but poor credit score."
- Only age matches -> "Meets age only." 
- None match -> "Not eligible for loan."

*/
/*
let Age=parseInt(prompt("Enter your age(in Number):"));
let income=parseFloat(prompt("Enter your Monthly Income(in number):"));
let creditScore=parseFloat(prompt("Enter your creditScore(in number):"));
alert( Age>25 && Age<60?
         income>=30000?
            creditScore>650?
             "Congratulation!!,Loan Approved"
         :"Good income and age, but poor credit score."
      :"Sorry!! Meets age only."
: " OOPS!! Not eligible for loan.");

*/
//checking question1 using if-else statement
/*

let age=parseInt(prompt("Enter your age(in Number):"));
let income=parseFloat(prompt("Enter your Monthly Income(in number):"));
let creditScore=parseFloat(prompt("Enter your creditScore(in number):"));

if(age>=25 && age<=60){
    if(income>=30000){
        if(creditScore>650){
            console.log("Congratulation!!,Loan Approved");
        }
        else{
            console.log("Good income and age, but poor credit score.");
        }
    }else{
        console.log("You met age only");
    }

}else {
    console.log("OOPS!! Not eligible for loan.");
}
*/
/////////////////classwork on  operator/////////////////////////////////////////////
//write a program in js to check whether the input from prompt is whole number or not
//and check both positive ,negative or zero and odd even
/*
const num=prompt("Enter the number to be checked:");

if(isNaN(num)){
    console.log("Your input is not a number");
}else{
    if(num>0){
        // console.log(num," is Positive Number ");
        if(num%2==0){
            console.log(num,"is Even Number");
        }else{
            console.log(num,"is Odd Number");
        }
    }else if(num<0){
        console.log(num," is Negative Number and neither even nor odd ");
    }else{
        console.log(num,"is neither Postive nor Negative");
    }
}
   */
////////////////////day3 task 1 on operators to check it is odd or even//////////////////////////////////////////////
/*
// check whether the number from input is odd or even.
let num=Number(prompt("Enter any number to check:"));
if(isNaN(num)){
    alert("this is string !! please enter valid number");
}
else if(num%2 == 0){
    alert(num + " is an even number");
}else{
    alert(num + " is an odd number");
}
*/
///////////////////// day3 task 2 to find greatest and smallest number among 3 numbers//////////////////////////////////////////////////////////////////////////
  /*
// take 3 numbers from input and find the greatest and smallest// Take 3 numbers as input from the user
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

let greatest, smallest;

// Check for greatest number
if (isNaN(num1) || isNaN(num2) || isNaN(num3))
    alert("OOPS!! Please enter numbers");
else if (num1 > num2 ) {
    if( num1 > num3){
        greatest = num1;
    }
    else{
        greatest = num3;
    }
} else  {
    if(  num2 > num3){
        greatest = num2;
    } else {
    greatest = num3;
}
}

// Check for smallest number
if (num1 < num2){
    if(num1 < num3){
        smallest = num1;
    }else{
        smallest = num3;
    }
}else{
    if(num2 < num3){
        smallest = num2;
    }else{
        smallest = num3;
    }
}

// Show result
alert("Greatest is " + greatest);//here '+' is used to concate the string and number together.
alert("Smallest is " + smallest);
*/

//////////////day3 task 3  to check the  grade for that participants marks///////////////////////////////////////////////////////////////////////////////////
/* condition:
90-100--->Grade A
80-89--->Grade B
70-79--->Grade C
60-69--->Grade D
below 60--->Grade F
any invalid number ---> "Invalid Marks"
*/
/*
let  marks = prompt("Enter the marks of Participants:");
if(isNaN(marks)){
    alert("OOPS!! Please enter marks in number");
}
 else if(marks > 100 || marks < 0){
    alert(marks + " is invalid marks");
}else if(marks >=90 && marks <=100){
    alert("Grade: A");
}else if(marks >=80){
    alert("Grade:B");
}else if(marks >= 70){
    alert("Grade:C");
}else if(marks >=60){
    alert("Grade:D");
}else{
    alert("Grade:F");
}
  */
 ////////////////////Switch Statement ////////////////////////////////////////////////////////////////  
 //printing the days of week on input of corresponding number
 let days=Number(prompt("Enter  number:"));
 
    switch(days)
    {
        case 1:alert("Sunday");
        break;
         case 2:alert("Monday");
        break;
         case 3:alert("Tuesday");
        break;
         case 4:alert("Wednesday");
        break;
         case 5:alert("Thursday");
        break;
         case 6:alert("Friday");
        break;
         case 7:alert("Saturday");
        break;
        default:alert("OOPS!! Invalid Input");
    }
 

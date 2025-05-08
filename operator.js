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
///////////////////////////////////////////////////////////////////////////////////////////////////
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
let age=parseInt(prompt("Enter Your Age(in Number):"));
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
//////////////////////////////////////////////////////////////////////////////////////////////////

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
let result=(Age>25 && Age<60)&&
(income>=30000)&&
(creditScore>650)?"Congratulation!!,Loan Approved"
:((Age>25 && Age<60)&&
(income>=30000) || creditScore<650 )?"Good income and age, but poor credit score."
:(Age>25 && Age<60)?"Sorry!! Meets age only."
: " OOPS!! Not eligible for loan.";
alert(result);
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
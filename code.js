// // // //VARIABLE AND DATA TYPE
// // // //Var, let and const
// // // const YEAR_OF_BIRTH = 2011;
// // // let HEIGHT = 1.7; //NUMBER(FLOAT)
// // // let BEST_FOOD = "Rice"; //STRING
// // // let Is_MARRIED = false; //BOOLEAN
// // // let YOUR_CHILDREN_NAME; //UNDEFINED

// // // INPUT AND OUTPUT METHODS
// // // OUTPUT METHODS
// // // console.log(YEAR_OF_BIRTH)
// // // document.write(BEST_FOOD)
// // // alert(Is_MARRIED)
// // // OTHER DOM PROPERTIES

// // // //INPUT METHOD
// // // //const BEST_COLOR = prompt("What is your best color")
// // // //console.log (BEST_COLOR)
// // // // const SHUTTING_DOWN = confirm("Shutting down system");
// // // // console.log(SHUTTING_DOWN)
// // // //OTHER DOM PROPERTIES

// // // //OPERATORS
// // // //These are symbols used to Manipulate values or operands.

// // // //TYPES OF OPERATORS
// // // //1. Assignment Operator ( = )
// // // //2. Arithemetic Operator ( +, -, *, /, %)
// // // //3. logic Operator (&&, ||)
// // // //4. Comparison Operator (<, >, == , ===)
// // // //5. Type Operator (typeOf)

// // // const BESTFOOD = "Beans";
// // // const FIRST_NUMBER = 15;
// // // const SECOND_NUMBER = 2;
// // // console.log(FIRST_NUMBER === SECOND_NUMBER)

// // // //THE == IS USED TO COMPARE DATA VALUES WHILE THE === IS USED TO COMPARE THE DATA VALUE AND DATA TYPE


// // // //LOGIC OPERATOR AND CONDITIONAL STATEMENT
// // // if(5 > 12 || 10 > 5) {
// // // console.log("Okay! TRUE")
// // // }else{
// // //     console.log("HMMMMMMM! FALSE")
// // // }


// // //DOM
// // //This stands for Document Object Model. HTML DOM is used to manipulate HTML elements and manipulate CSS properties and values.

// // //We have DOM Projects and DOM properties .
// // //The DOM methods enable us to target the desired html element to be changed while the dom properties is used to affect the kind of change we want to see.
// // //Some examples of DOM methods are querySelector(), gelElementbyId, getElementbyClass(), etc 
// // //Some examples of dom properties are innerHTML, textContent, style, etc.


// // // const PARAGRAPH = document.querySelector(".domTesting");
// // // PARAGRAPH.innerHTML = "This is red now.... hmmm, DOM is working!";

// // // PARAGRAPH.style.backgroundColor = "red";


// // //Types of Function
// // //1. Function declaration
// // //2. Function expression

// // //Parts of a function
// // //1. Function keyword
// // //2. Name of the function
// // //3. bracket for argument/parameter
// // //4. block (The curly bracket)

// // function ageCalculator() {
// //     const YEAR_OF_BIRTH = 2010;
// //     const CURRENT_YEAR = new Date().getFullYear();
// //     const AGE = CURRENT_YEAR - YEAR_OF_BIRTH
// //     console.log (AGE)
// // }

// // ageCalculator()

// // //DATE IN JAVASCRIPT
// // //new Date();
// // //getFullYear()
// // //getMonth()
// // //getDay()
// // //getDate()
// // //getHours()
// // //getMinute()
// // //getSeconds()
// // //getTime()

// // // const PRESENT_MONTH =new Date().getMonth();
// // // console.log(PRESENT_MONTH)

// // //ARRAYS
// // //Arrays in JS is a non primitive data type. It can be in two different ways.

// // //1. Use of square brackets
// // //2. Use of new array method

// // const FOOD = ["Rice", "Beans", "Eba", "Yam", "Akara"];


// // //ES5
// // //console.log ("I" ,"Love", FOOD[0],"and",FOOD[1]);

// // //ES6
// // // console.log(`I Love ${FOOD[0]} and ${FOOD[1]}`)

// // //HOW TO ADD TO AN ARRAY
// // //push()
// // FOOD.push("Draw soup");
// // console.log(FOOD);

// // //unshift()
// // FOOD.unshift("Abacha")
// // console.log(FOOD)


// // //Mutation
// // FOOD[1] =`Semovita`
// // console.log(FOOD)

// // HOW TO REMOVE ITEMS FROM AN ARRAY
// const CARS = new Array("Matrix", "Venza","Bugatti", "Tesla");
// //Pop() Used to remove item from the end of the array
// CARS.pop()


// //shift()Used to remove items from the beggining of an array
// CARS[1] = '';
// console.log(CARS)

//OBJECT IN JS
//This is a non-primitive data type that stores data in key value-pair. It can be created using the curly brackets.

// const PERSON  = {
// firstName : "Princewill",
// lastName : "Buchi",
// BirthYear : 2000
// }


// // console.log(PERSON);

// //dot notation 
// console.log("My" ,"Name" ,"is", PERSON.firstName, PERSON.lastName , "and" ,"I", "was" , "Born" , "in", "1995")

//Loops
//This enables us to observe the DRY principle. DRY stands for dont repeat yourself. WE Can carry out a task over and ver again by using only a few lines of code.
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

//Types of loops
//1. for loop
//2. while loop

// Parts of loops
// 1. for keyword
// 2. for initial counter
// 3. condition
// 4. Increment/decrement
// 5. block

// for (let x = 0; x < 101; x = x+1) {
//     console.log(x)
// }

//BMI Project starts now

let VISITOR_FNAME = document.querySelector("#firstName")
let VISITOR_LNAME = document.querySelector("#secondName")
let VISITOR_HEIGHT = document.querySelector("#height")
let VISITOR_MASS = document.querySelector("#mass")
let BUTTON = document.querySelector(".btn")
let BMI_RESULT = document.querySelector(".Result")

//let us add an event listener
BUTTON.addEventListener("click", BMI_CALCULATOR)

//lets now declare the function
function BMI_CALCULATOR() {

    //Let us calculate the BMI
    let BMI_VALUE = Number(VISITOR_MASS.value)/Number((VISITOR_HEIGHT.value**2));


//SET BMI_VALUE TO 2 DECIMAL PLACE
BMI_VALUE = BMI_VALUE.toFixed(2)
console.log(BMI_VALUE);


//FORM VALIDATION(We want to make sure that all fields are filled correctly)
if(VISITOR_FNAME.value == "" || VISITOR_LNAME.value == ""|| VISITOR_MASS.value == "" ||  VISITOR_HEIGHT.value == ""){
    setTimeout(() => {
        BMI_RESULT.innerHTML = `Please fill up all fields correctly.`;
        BMI_RESULT.style.color = `red`;
        BMI_RESULT.style.fontStyle = `italic`;
        BMI_RESULT.style.fontSize = `20px`;

        setTimeout(() => {
        BMI_RESULT.innerHTML = "";
        }, 3500)
    }, 100);
  } else if (BMI_VALUE < 18.5) {
    BMI_RESULT.innerHTML = `${VISITOR_FNAME.value} ${VISITOR_LNAME.value}, your BMI value is ${BMI_VALUE}Kg/M<sup>2</sup>. You are UNDERWEIGHT. Please eat good food and fruits.`
    BMI_RESULT.style.color = "orange"
    BMI_RESULT.style.fontSize = "20px";
  } else if (BMI_VALUE >= 18.5 && BMI_VALUE < 25) {
    BMI_RESULT.innerHTML = `${VISITOR_FNAME.value} ${VISITOR_LNAME.value}, your BMI value is ${BMI_VALUE}Kg/M<sup>2</sup>. You are HEALTHY. Please continue with the good food and exercise.`
    BMI_RESULT.style.color = "green"
    BMI_RESULT.style.fontSize = "20px";
  } else if (BMI_VALUE >= 18.5 && BMI_VALUE < 25) {
    BMI_RESULT.innerHTML = `${VISITOR_FNAME.value} ${VISITOR_LNAME.value}, your BMI value is ${BMI_VALUE}Kg/M<sup>2</sup>. OVERWEIGHT. Please see your doctor. You can as well engage in regular exercises.`
    BMI_RESULT.style.color = "red"
    BMI_RESULT.style.fontSize = "20px";
}else{
    BMI_RESULT.innerHTML = `${VISITOR_FNAME.value} ${VISITOR_LNAME.value}, your BMI value is ${BMI_VALUE}Kg/M<sup>2</sup>. OBESE. Please see your doctor immediately. We wish you well and hope you believe in God.`
    BMI_RESULT.style.color = "black"
    BMI_RESULT.style.fontSize = "20px";
}

}



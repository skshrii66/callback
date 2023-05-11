// const compute = (num1,num2,callback)=>callback(num1,num2);
// const add = (num1,num2)=> num1+num2;
// const sub = (num1,num2)=> num1-num2;
// const mul = (num1,num2)=> num1*num2;
// const div = (num1,num2)=> num1/nmm2;

// console.log(compute(10,20,add));

//create 2function
// 1. make uppercase()
// // 2. reversestring()
// function makeupperCase(value){
//     console.log(value.toUpperCase());
// }

// function reversestring(value){
//     console.log(value.split("").reverse().join(""));
// }

// function handleName(name,callback){
//     const fullname= `${name} is a good`;
//     console.log(fullname);
//     callback(fullname);
// }

// handleName("Lavish",makeupperCase);

// handleName("Lavish",reversestring);


const time=1000;
        //----->Raise a dough
function raiseDough(callback){
    console.log("Waiting for dough to rise");
    setTimeout(()=>{
console.log("Dough is ready");
callback();
    },3*time);
}

       // ----->Roll doug
function rollDough(callback){
    console.log("Rolling the dough");
    setTimeout(()=>{
        console.log("Doug are roll");
        callback();
    }, 2*time);
}

            //--->Power soure
function powerSource(callback){
    console.log("Poruing the soure");
    setTimeout(()=>{
        console.log("Source are pouring");
        callback();
    }, 1*time);
}

            //--->Add toppings
function AddToppings(callback){
    console.log("Adding the topp");
    setTimeout(() => {
        console.log("Toppings are added");
        callback();
    }, 6*time);
}


            //--->Bake pizza
function BakePizza(callback){
    console.log("Baking the pizza");
    setTimeout(()=>{
        console.log("Pizza is ready");
        callback();
    }, 8*time);
}


            //--->Deleiver Pizza
function DeleiverPizza(callback){
    console.log("Deleiver pizza");
    setTimeout(()=>{
        console.log("Pizza is delevered");
        callback();
    }, 12*time);
}


            //===>Lets use all the function and nesting of one inside another
            
raiseDough(() =>{
    rollDough(() =>{
        powerSource(() =>{
            BakePizza(() =>{
                DeleiverPizza(() =>{
                    console.log("Pizza is Deleivered to your door");
                })
            })
        })
    })
})
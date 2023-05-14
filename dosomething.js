/*const doSomething = (callback) =>{
    setTimeout(() =>{
        const  data =["Apple", "Bananan", "Orange", "grape", "strwbery"];
        callback(null, data);
    }, 3000); 
};

const callback= (error, data) =>{
    if (error){
        return console.log(error);
    }
    else{
        return console.log(data);
    }
}

doSomething(callback);*/


                     //lets crate a object model
/*const promise1= new Promise((resolve, reject) =>{
setTimeout(() =>{
    const  data =["Apple", "Bananan", "Orange", "grape", "strwbery"];
    console.log(data.length);
    if(data.length===5){
        resolve(data);
    }
     else{
        reject("data is not available");
     }
}, 3000);

})
console.log(promise1);

promise1.then((result) =>{
console.log(result);
}).catch ((error) =>{
    console.log(error);
});*/


            //Guessing the Number
/*const value=6;

            //Create a promise object
const promiseobj=new Promise((resolve,reject) =>{


            //Generate a random number
const randomNumber=Math.floor(Math.random()*10);//0-9
console.log(randomNumber);//6

            //Compare the random number with the value
    if(randomNumber===value){
        resolve("Hurray. yOU Guessed the NUMBER");
    }
    else{
        reject("Sorry. You Guessed the wrong number");
    }
})

//console.log(promiseobj);


promiseobj.then((result) =>{
    console.log(result);
}).catch(err =>{
    console.log(err);
}).finally(() =>{
    console.log("Promise is executed finally");
}*/


            //Promise Chaining....
       /* => It is used to handle multiple promises with the help multiple then & catch

    => 1. PROJECT
    => 2. TECHINICAL INTERVIEWS
    => 3. HR INTERVIEWS*/
let doProject = new Promise ((resolve, reject) =>{
        //Doing the project
    let isProjectDone= true;
    if(isProjectDone){
        resolve("Project is done")
    }else{
        reject("Project is not done")
    }
})


let attendTechincalRound= new Promise ((resolve, reject) =>{
        //Attending the techinial rounds
    let isFinished= true;
    if(isFinished){
        resolve("Techinal round is over")
    }else{
        reject("Techinal round is not done")
    }
})
 

let hrRounds= new Promise((resolve, reject) =>{
        //Attending the HR rounds
    let isFinished= true;
    if(isFinished){
        resolve("HR round is over")
    }
    else{
        reject("HR round is not done")
    }
})


/*doProject.then((msg) =>{
    let theMsg= `${msg} and I Have completed the project`;

    attendTechincalRound.then((msg)=>{
        theMsg+= `${msg}`;

    hrRounds.then((msg) =>{
        theMsg+= `${msg}`;
        console.log(`${theMsg} Have a got the job`);
    }).catch((msg) =>{
        console.log(`${msg}`);
    }).catch((msg) =>{
        console.log(`${msg}`);
    }).catch((msg) =>{
        console.log(`${msg}`);
    }).finally(() =>{
        console.log("Finally thats all be executed");
    })
})
})*/

                //Promisse.Method
    //...Syntax= promise.all([promise1, pomise2, promise3])

let allPromise= Promise.allSettled([doProject, attendTechincalRound, hrRounds])
console.log(allPromise);




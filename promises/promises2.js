let Promise3=10;
let Promise1=Promise.resolve('hello');
let promise2=new Promise((resolve,reject)=>
    setTimeout(() => {
        let error=true;
        if(!error)
        {
            resolve('good bye');
        }
        else{
            reject("Error");
        }
        
        
    }, 1000)
);
Promise.all([Promise3,Promise1,promise2]).then(values=>
    console.log(values))
    .catch(function(value){
        console.log("Error:",error)
    });
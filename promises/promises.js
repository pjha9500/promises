console.log("hello");
let post=[
    {title:"post one", body:"This is post one"},
    {title:"post two", body:"this is post two"}
]

function getpost()
{
    setTimeout(() => {
        let output="";
        for(let i=00;i<post.length;i++)
        {
            output+=`<li>${post[i].title}</li>`
        }
        document.body.innerHTML=output;
        
    }, 1000);
}
function creatpost(val) {

    return new Promise ((resolve,reject) => {
        post.push(val);

        let error =false;
        if(!error)
        {
            resolve();

        }
        else{
            reject("something wrong")
        }
    })
    

}


creatpost({title:"post three", body:"this is post three"})
.then(function(){getpost()})
.catch(error=>console.log(error));
creatpost({title:"post four", body:"this is post four"})
.then(getpost)
.catch(error=>console.log(error));
creatpost({title:"post five", body:"this is post five"})
.then(getpost)
.catch(error=>console.log(error));

console.log(post.length);

function deletes()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let length=post.length;
            if(length>0)
            {
                post.pop();
                resolve();
            }
            else{
                reject("ERROR:Array is empty now");
            }
            
        }, 1000);
    })
}

creatpost({title:"post six", body:"this is post six"})
.then(function()
{
    getpost();
    deletes();
    getpost();

})
.catch();

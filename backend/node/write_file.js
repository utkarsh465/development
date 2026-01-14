let fs=require('fs');
let path=__dirname +'/data.txt';

fs.writeFile(path,"hello",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("done success");
    }
})
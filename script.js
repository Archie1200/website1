document.addEventListener("click",myfunction);
//import { readFileSync, promises as fsPromises } from 'fs';

function myfunction(){
          document.getElementById("text1").addEventListener("click",function(){
            fetch('AliceInWonderland.txt')
.then(response => response.text()) 
.then(contents => {
    document.getElementById("book").innerHTML=contents;
});
          });
document.getElementById("text2").addEventListener("click",function(){
    fetch('LOTR.txt')
.then(response => response.text()) 
.then(contents => {
document.getElementById("book").innerHTML=contents;
})
})
document.getElementById("text3").addEventListener("click",function(){
    fetch('JekyllAndHyde.txt')
.then(response => response.text()) 
.then(contents => {
document.getElementById("book").innerHTML=contents;
});
});
}


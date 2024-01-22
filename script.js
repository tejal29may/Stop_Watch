 
 
 let displayTime=document.getElementById("para");


//  let hrs=document.getElementById("hr");
//  let min=document.getElementById("min");
//  let sec=document.getElementById("sec");
 let millidisplay=document.getElementById("count");
 let dot=document.getElementById("dot")

let hrs=0;
let min=0;
let sec=0;
let milli=0;



let timer=false;

 function start(){
          timer=true;
        //   myFun();
    
        //   millidisplay.style.visibility="visible";
          millidisplay.style.display="block"
          dot.style.display="block";

         interval=setInterval(myFun,10);



 }
 function stop(){
timer=false;
// myFun();
clearInterval(interval);


 }

 function reset(){
    location.reload();

 }


 function myFun(){
    if(timer==true){
        milli++;
        if(milli==100){
            sec++;
            milli=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }

        let getsec=sec;
        let getmin=min;
        let gethrs=hrs;

    
        if(sec<10){
            getsec="0"+sec;
        }
        if(min<10){
            getmin="0"+min;
        }
        if(hrs<10){
            gethrs="0"+hrs;
        }
        document.getElementById("count").innerHTML=milli;
        
        document.getElementById("sec").innerHTML=getsec;
       
        document.getElementById("min").innerHTML=getmin;
       
        document.getElementById("hr").innerHTML=gethrs;
      
          }
 }

let history=document.getElementById("history");
 let result=document.getElementById("result");
 result.addEventListener("click",()=>{
    if(timer) {   
        var Li = document.createElement("li")   
        Li.innerHTML = getTimer() 
        history.appendChild(Li) 
    }
 })

 
function myFunn(){
    return (hrs<10 ? "0" + hrs: hrs) + " : " + (min<10 ? "0" + min : min) + " : " + (sec<10 ? "0" + sec : sec) + " : " + (milli<10 ? "0" + milli : milli); 
}

 function lap() {
    if(timer) {   
        var Li = document.createElement("p")   
        Li.innerHTML = myFunn() 
       
        history.appendChild(Li) 
        // stop();
        document.getElementById(result).innerHTML="Close";
    }
}

document.getElementById("close").addEventListener("click",(e)=>{
   
    if(e.target.innerText==="X"){
        // let it=document.getElementById("his")
        e.target.parentElement.remove();
    }



})
var timern =30;
var score=0;
var hitrn =0;

function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function gethitval(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvals").textContent=hitrn

}

function makeBubble(){
    var clutter ='';

for(var i=1; i<= 133; i++){

    var rn = Math.floor(Math.random()*10)

    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runtime(){
    var timerint = setInterval( function (){
        if(timern>0){
            timern--;
            document.querySelector("#timerval").textContent=timern
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`GAME OVER`;
        }
    },1000 );
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum===hitrn){
        increasescore();
        gethitval();
        makeBubble()
    }
})

makeBubble();
runtime();
gethitval();

var playing = false;
var score;
var action;
var timeremaining;


//if we click on the start/reset 
document.getElementById("startreset").onclick= 
function(){
    //if we are playing
    if(playing == true){
        location.reload();
    }else {
      
        //change mode to playing
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
         //show countdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timevalue").innerHTML = timeremaining;
         //change button to reset
         document.getElementById("startreset").innerHTML = "Reset Game";

         startCountdown();
    }
}
    
        //reload page
    
        //set score to 0
       
        //reduce time by 1sec in loops
        //timeleft?
            //yes->continue
            //no -> gameover
       
        //generate new Q&A

//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec

//function

//start counter
function startCountdown(){
   action = setInterval(function(){
       timeremaining -= 1;
       document.getElementById("timevalue").innerHTML = timeremaining;
       if(timeremaining == 0){
           //gameover
           stopCountdown();
           show("gameover");
           document,getElementById("gameover").innerHTML = "<p>Game Over</p><p>Your Score is " + score +"</p>"
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
       }
   }, 1000);
}

//stop counter
function stopCountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id){
    document.getElementById(Id).style.display="block";
}
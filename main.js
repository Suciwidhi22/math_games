var playing = false;
var score;


//if we click on the start/reset 
document.getElementById("startreset").onclick= 
function(){
    //if we are playing
    if(playing == true){
        location.reload();
    }else {
        //if we are not playing
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
         //show countdown box
        document.getElementById("timeremaining").style.display = "block";

         //change button to reset
         document.getElementById("startreset").innerHTML = "Reset Game";
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
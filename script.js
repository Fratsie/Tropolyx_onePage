//Define variables
dropped = false;

function checkWidth(){
    //define screen width
    var screenWidth = screen.width;

    if(screenWidth <= 875){
        //put service blocks underneath eacht other
        document.getElementById('serviceBlocks').style.flexDirection = "column";

        //put contact info underneath eacht other
        document.getElementById('contactBlocks').style.flexDirection = "column";

        //collapse navbar
        document.getElementById('collapseList').classList.add('droppedDown');
        document.getElementById('navCollapse').style.display = "block";
    }
}

function dropdown(){
    //check if already dropped
    if(!dropped){
        //show dropped list
        document.getElementById('collapseList').style.display = "block";
        dropped = true;
    }
    else{
        //hide dropped list
        document.getElementById('collapseList').style.display = "none";
        dropped = false;
    }
}
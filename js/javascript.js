// function logoClick(fe){document.getElementsByClassName("active")[0].classList.remove("active");
// fe.parentNode.classList.add("active");
// document.getElementById("logoDiv").style="";
// document.getElementById("subheadDiv").style="";
// document.getElementById("homeDiv").style="display:none;";
// document.getElementById("aboutDiv").style="display:none;";
// document.getElementById("contactDiv").style="display:none;";
// }



function logoClick(fe){document.getElementsByClassName("active")[0].classList.remove("active");
fe.parentNode.classList.add("active");
document.getElementById("logoDiv").style="display:none;";
document.getElementById("subheadDiv").style="";
document.getElementById("homeDiv").style="display:none;";
document.getElementById("aboutDiv").style="display:none;";
document.getElementById("contactDiv").style="display:none;";
}




function homeClick(me){document.getElementsByClassName("active")[0].classList.remove("active");
me.parentNode.classList.add("active");
document.getElementById("logoDiv").style="display:none;";
document.getElementById("subheadDiv").style="display:none;";
document.getElementById("homeDiv").style="";
document.getElementById("aboutDiv").style="display:none;";
document.getElementById("contactDiv").style="display:none;";
}

function aboutClick(you){document.getElementsByClassName("active")[0].classList.remove("active");
you.parentNode.classList.add("active");
document.getElementById("logoDiv").style="display:none;";
document.getElementById("subheadDiv").style="display:none;";
document.getElementById("homeDiv").style="display:none;";
document.getElementById("aboutDiv").style=""
document.getElementById("contactDiv").style="display:none;";
}

function contactClick(he){document.getElementsByClassName("active")[0].classList.remove("active");
he.parentNode.classList.add("active");
document.getElementById("logoDiv").style="display:none;";
document.getElementById("subheadDiv").style="display:none;";
document.getElementById("homeDiv").style="display:none;";
document.getElementById("aboutDiv").style="display:none;";
document.getElementById("contactDiv").style="";
}



window.onload=function() {
    
        let counter=1;
        setInterval(function(){
        counter=counter+1;
        if (counter==7){
            counter=1;
        }
        document.getElementById("slideImage").src="./imgs/" +counter+ ".png";
        },800);
    }





    function showMenu(){
    
        let checkStlye= document.getElementById("mainMenu").getAttribute("style");
        if (checkStlye== "display: none;"){
            document.getElementById("mainMenu").style="display: block;";
        }
        else{
            document.getElementById("mainMenu").style="display: none;";
        }
    }
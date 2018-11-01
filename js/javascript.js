// function logoClick(fe){document.getElementsByClassName("active")[0].classList.remove("active");
// fe.parentNode.classList.add("active");
// document.getElementById("logoDiv").style="";
// document.getElementById("subheadDiv").style="";
// document.getElementById("homeDiv").style="display:none;";
// document.getElementById("aboutDiv").style="display:none;";
// document.getElementById("contactDiv").style="display:none;";
// }
window.onload=function(){
writeParam();
}
function writeParam(){
    let currentUrl=window.location.href;
    let url = new URL(currentUrl);
    let pageParam = url.searchParams.get("page");
    if(pageParam=="home")
    {
        let me=document.getElementById("homeClick");
        homeClick(me);
    }else{
        if(pageParam=="about")
    {
        let me=document.getElementById("aboutClick");
        aboutClick(me);
    }
    else{
        if(pageParam=="contact")
    {
        let me=document.getElementById("contactClick");
        contactClick(me);
    }
    }
    }
}

function logoClick(fe){document.getElementsByClassName("active")[0].classList.remove("active");
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
insertParam("page","home");

}




function insertParam(key, value)
{
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i=kvp.length; var x; while(i--) 
    {
        x = kvp[i].split('=');

        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join('=');}

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&'); 
}

function aboutClick(you){document.getElementsByClassName("active")[0].classList.remove("active");
you.parentNode.classList.add("active");
document.getElementById("logoDiv").style="display:none;";
document.getElementById("subheadDiv").style="display:none;";
document.getElementById("homeDiv").style="display:none;";
document.getElementById("aboutDiv").style=""
document.getElementById("contactDiv").style="display:none;";
insertParam("page","about");
}

function contactClick(he){document.getElementsByClassName("active")[0].classList.remove("active");
he.parentNode.classList.add("active");
document.getElementById("logoDiv").style="display:none;";
document.getElementById("subheadDiv").style="display:none;";
document.getElementById("homeDiv").style="display:none;";
document.getElementById("aboutDiv").style="display:none;";
document.getElementById("contactDiv").style="";
insertParam("page","contact");
}



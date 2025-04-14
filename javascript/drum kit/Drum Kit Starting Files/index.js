for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    function handleClick(){
        switch(this.innerHTML){
            case "w": var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case "a": var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play(); 
            break;
            case  "s": var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
            case "d": var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
            case "j": var audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
            case "k": var audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
            case "l": var audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break;
        }
        buttonAnimation(this.innerHTML);
    }
}
addEventListener("keydown", function(event)
{
    var keyp = event.key;
    switch(keyp){
        case "w": var audio = new Audio("sounds/tom-1.mp3"); audio.play(); break;
        case "a": var audio2 = new Audio("sounds/tom-2.mp3"); audio2.play(); break;
        case "s": var audio3 = new Audio("sounds/tom-3.mp3"); audio3.play(); break;
        case "d": var audio4 = new Audio("sounds/tom-4.mp3"); audio4.play(); break;
        case "j": var audio5 = new Audio("sounds/snare.mp3"); audio5.play(); break;
        case "k": var audio6 = new Audio("sounds/crash.mp3"); audio6.play(); break;
        case "l": var audio7 = new Audio("sounds/kick-bass.mp3"); audio7.play(); break;
    }
    buttonAnimation(keyp);
})
function buttonAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },100);
}

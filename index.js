var num_button=document.querySelectorAll(".drum").length;


for(var i=0;i<num_button;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    


    var buttonInner=this.innerHTML;
    handle_click(buttonInner);
    buttonAnimation(buttonInner);
  
    });
}


document.addEventListener("keypress",function(){
    key=event.code
    key=key.slice(3,4).toLowerCase();
    handle_click(key);
    buttonAnimation(key);
});





function handle_click(key){
    switch(key){
        case "w":
            var tom1=new Audio('./Sounds/tom-1.mp3');
            tom1.play();
        break;


        case "a":
            var tom2=new Audio('./Sounds/tom-2.mp3');
            tom2.play();
        break;


        case "s":
            var tom3=new Audio('./Sounds/tom-3.mp3');
            tom3.play();
        break;


        case "d":
            var tom4=new Audio('./Sounds/tom-4.mp3');
            tom4.play();
        break;


        case "j":
            var crash=new Audio('./Sounds/crash.mp3');
            crash.play();
        break;


        case "k":
            var kick=new Audio('./Sounds/kick-bass.mp3');
            kick.play();
        break;


        case "l":
            var snare=new Audio('./Sounds/snare.mp3');
            snare.play();
        break;
        default:
            console.log("Wrong Key");
            break;
    }
}

function buttonAnimation(currentkey){
    if(currentkey.length>1){
        currentkey=currentkey.slice(3,4).toLowerCase();
        console.log(currentkey);
    }
    var active_button=document.querySelector("."+currentkey);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100);
}

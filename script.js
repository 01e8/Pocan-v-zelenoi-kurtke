
window.onload = function () {
    "use strict";
    var player = document.getElementById('player'),
        earth = document.getElementById('earth'),
        body = document.getElementById('body'),
        plX = (document.documentElement.clientWidth / 2) - 62,
        plY = 500,
        goX = 0,
        goY = 0,
        going = 0,
        step = 5,
        animation = 3;
    
    player.style.position = "absolute";
    player.style.left = plX + 'px';
    player.style.top =  plY + 'px';
    
    earth.onclick = function () {
        goX = event.clientX - 85;
        goY = event.clientY - 300;
        if (going === 0) {
            going = 1;
            var timerId = setInterval(function () {
                    if (goX < plX) {
                        plX = plX - step;
                        player.style.left =  plX + 'px';
                    }
                    if (goY < plY) {
                        plY = plY - step;
                        player.style.top =  plY + 'px';
                    }
                    if (goX > plX) {
                        plX = plX + step;
                        player.style.left =  plX + 'px';
                    }
                    if (goY > plY) {
                        plY = plY + step;
                        player.style.top =  plY + 'px';
                    }
                
                    if ((goX < plX) && (goY > plY) && (animation%3 === 0)){
                        body.src= (animation/3) + ".png";
                    }
                    animation = animation + 1;
                    if (animation === 21){
                        animation = 3;
                    }
                
                    if (((goX < plX + (step)) && (goX > plX - (step))) && ((goY < plY + (step)) && (goY > plY - (step)))) {
                        body.src="wait.png";
                        going = 0;
                        animation = 1;
                        clearInterval(timerId);
                    }
                }, 30);
        }
    };
};

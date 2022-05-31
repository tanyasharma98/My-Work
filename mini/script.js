document.onkeydown = function (e) {
    console.log("Key code is: ", e.key)
    if (e.key == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    }


// RICKYROBOTS
// Dutch Instagram Auto Liker
// version.2022

let likes = 0;
function doSomething() {
   
    const heart = document.querySelector('svg[aria-label="Vind ik leuk"][width="24"]');
    const next = document.querySelector('svg[aria-label="Volgende"]');
    if (heart) {
        heart.parentNode.parentElement.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`);
    }
    next.parentNode.parentElement.click();
}

(function loop() {
    var rand = Math.random() * 10000;
    console.log('Random Time'+rand)
    setTimeout(function() {
            //alert('A');
            doSomething();
            loop();  
    }, rand);
}());

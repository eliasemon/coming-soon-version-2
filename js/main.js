const warperClick = document.querySelector('.warper');
warperClick.addEventListener('click', () => {
    menuBtn.classList.remove('open', 'ani');
});
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open', 'ani');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open', 'ani' );
        menuOpen = false;
    }
});
// countdown js start
var countDate = new Date('Feb 5, 2021 00:00:00').getTime();

function launch(){
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
};
setInterval (function(){
    launch();
},1000);
// countdown js end
// water rippls js start
$(document).ready(function(){
    $(".warpe").ripples({
        resolution: 512,
        dropRadius: 7,
        interactive: false,
        perturbance: 0.03,
    });
    // Automatic drops
    setInterval(function() {
        var $el = $('.warper');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;

        $el.ripples('drop', x, y, dropRadius, strength);
    }, 500);
});
// water ripple js end
// type js  start
var typed = new Typed('.type_js', {
    strings: ["We are coming soon...", "Stay with us!"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 1000,
});
// type js  end
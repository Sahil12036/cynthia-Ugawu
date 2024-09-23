const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function fristpageAnim() {
    var tl = gsap.timeline()
        .from("#nav", {
            y: 10,
            opacity: 0,
            duration: 1.5,
            ease: "expo.inOut"
        })
        .to(".boundingelon", {
            y: 0,
            duration: 1.5,
            ease: "expo.inOut",
            stagger: 0.2,
        })
        .to(".bounding", {
            y: 0,
            duration: 1.2,
            ease: "expo.inOut",
            stagger: 0.2,
            delay: -1,
        })
        .from("#herofooter", {
            y: 0,
            opacity: 0,
            duration: 1.5,
            delay: -1.2,
            ease: "expo.inOut",
        });
}


// Uncomment to run the animation
fristpageAnim();


function circleMouseFollower() {
    let timer;
    let Xscale = 1;
    let Yscale = 1;
    let Xprev = 0;
    let Yprev = 0;

    window.addEventListener("mousemove", function(dets) {
        const Xdiff = dets.clientX - Xprev;
        const Ydiff = dets.clientY - Yprev;

        Xscale = gsap.utils.clamp(0.8, 1.2, Math.abs(Xdiff));
        Yscale = gsap.utils.clamp(0.8, 1.2, Math.abs(Ydiff));

        Xprev = dets.clientX;
        Yprev = dets.clientY;

        document.querySelector('#circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${Xscale}, ${Yscale})`;

        clearTimeout(timer);
        timer = setTimeout(() => {
            document.querySelector('#circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${Xscale}, ${Yscale})`;
        }, 100);
    });
}
circleMouseFollower();
document.querySelectorAll(".elem").forEach(function(elem) {
    elem.addEventListener("mousemove", function(dets) {
        var rect = elem.getBoundingClientRect();
        var diffY = dets.clientY - rect.top; // Y-axis difference
        var diffX = dets.clientX - rect.left; // X-axis difference

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power3",
            top: (diffY -100) + 'px', // Adjusted for proper positioning
            left: (diffX - 130) + 'px', // Adjusted for proper positioning
            // Ensure the image is positioned absolutely
        });
        elem.addEventListener("mouseleave", function() {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: "power1",
            });
         
             
        const image = document.getElementById('img');
        let rotation = 0;
        let isMoving = false;
    
       
        });
         
   
        });

       
    });

    function lastpageanimation() {
        var tl = gsap.timeline()
        .to("#second", {
            y: -10,
            opacity: 100,
            duration: 2.5,
            ease: "expo.in"
        });
        
        }
        lastpageanimation();
    
   
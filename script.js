function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    multiplier: 0.5,
    lerp: 0.06,
    tablet: {
      smooth: true
    },
    smartphone: {
      smooth: true
    }
  });

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
    var nav = document.querySelector(".nav") 
    let lastScrollTop = 0;
    locoScroll.on('scroll',(obj)=>{
        let scrollY = obj.scroll.y
          if(scrollY === 0){
              nav.style.backgroundColor = "transparent"
              nav.style.transform = "translateY(0%)"
          }
          else if(scrollY>lastScrollTop){
            nav.style.transform = "translateY(-100%)"
            nav.style.mixBlendMode = "difference"
          }
          else if(scrollY<lastScrollTop){
            nav.style.backgroundColor = "transparent"
            nav.style.transform = "translateY(0%)"
            nav.style.mixBlendMode = "difference"
          }
          lastScrollTop = scrollY
})
}

loco()

function Swiper(){
    const swiper = new Swiper('.brands', {
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}

Swiper()

function curs(){
    var cursor = document.querySelector(".cursor")
    var video = document.querySelector("video")
video.addEventListener("mousemove",function(dets){
    cursor.style.opacity = "1";
    cursor.style.left = dets.x +"px"
    cursor.style.top = dets.y +"px"
    video.style.cursor = "none"
})
video.addEventListener("mouseleave",function(){
    cursor.style.opacity = "0";
})
}
curs()

function videoplayback(){
    var cursor = document.querySelector(".cursor")
    var video = document.querySelector(".page2 video")
    // var page2 =document.querySelector(".page2")
    var flag = 0
    function playVideo(){
        video.play();
    }
    function pauseVideo(){
        video.pause();
    }
    
    video.addEventListener("click",function(){
        if(flag == 0){
        cursor.innerHTML = "Pause"
        video.style.cursor = "none"
        playVideo();
        flag = 1
    }
        else{
            cursor.innerHTML = "Play"
            video.style.cursor = "none"
            pauseVideo();
            flag = 0
        }
    })   
     
}
videoplayback()

// function dott(){
    
// var dot = document.querySelector(".dott")
// var img = document.querySelector("#image")

// img.addEventListener("mouseenter",function(dets){
//     dot.style.left = dets.x +"px"
//     dot.style.top = dets.y +"px"
//     // dot.style.position = "fixed"
//     dot.style.opacity = "1"
//     dot.style.backgroundColor ="#DBFF00"
// })

// img.addEventListener("mouseleave",function(){
//     // dot.style.left = "89%"
//     // dot.style.top = "43%"
//     dot.style.position = "absolute"
    
// })
// }
// dott()

function stands(){
    var stand1 = document.querySelector(".stand1")
var stand2 = document.querySelector(".stand2")
var stand3 = document.querySelector(".stand3")
var stand4 = document.querySelector(".stand4")
var img = document.querySelector("#image")
var dot = document.querySelector(".dott")
stand1.addEventListener("mouseenter",function(){
    stand4.style.backgroundImage = "url(./images/left.jpg)"
    img.style.opacity = "0"
    dot.style.opacity = "0"
})
stand1.addEventListener("mouseleave",function(){
    stand4.style.backgroundImage = "none"
    img.style.opacity = "1"
    dot.style.opacity = "1"
})
stand2.addEventListener("mouseenter",function(){
    stand4.style.backgroundImage = "url(./images/mid.jpg)"
    img.style.opacity = "0"
    dot.style.opacity = "0"
})
stand2.addEventListener("mouseleave",function(){
    stand4.style.backgroundImage = "none"
    img.style.opacity = "1"
    dot.style.opacity = "1"
})
stand3.addEventListener("mouseenter",function(){
    stand4.style.backgroundImage = "url(./images/right.jpg)"
    img.style.opacity = "0"
    dot.style.opacity = "0"
})
stand3.addEventListener("mouseleave",function(){
    stand4.style.backgroundImage = "none"
    img.style.opacity = "1"
    dot.style.opacity = "1"
})
}
stands()
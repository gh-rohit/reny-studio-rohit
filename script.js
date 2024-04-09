function init(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
init()

gsap.from("#page1 img",{
   
     scale:1.6,
     duration:3.5,
        
})
gsap.to("nav",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top -10%",
        end:"top -15%",
        scrub:2   
    }
})
var tl2 = gsap.timeline({
    scrollTrigger:{
      scroller:'#main',
      trigger:'#page2',
      start:'top 50%',
    //   markers:true,
      scrub:2
    }
  })
  tl2.to("#img1",{
    y:-55,
  })
  var text=document.querySelector("#page3 h1").textContent
 
    var splitted=text.split("")
   
    var clutter=""
    splitted.forEach(function(dets){
 clutter+=`<span>${dets}</span>`
    })
    var text=document.querySelector("#page3 h1").innerHTML=clutter
    
 gsap.to("#page3 h1 span",{
       y:-200,
    color:"#F9EEDB",
    stagger:0.3,
    duration:4,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        pin: true,
        scrub:2
    }
 })
 gsap.from(".about img",{
  scale:0,
  duration:1,
  stagger:0.5,
  scrollTrigger:{
    trigger:".about",
    scroller:"#main",
    // markers:true,
    start:"top 50%",
    end: "top 35%",
    scrub:2,
  }
})
 
   var dynamic=document.querySelector("#page9 h1 span")
   var words=["sensible","important","valuable","that matters", "that changes things","move you","move me", "creative","powerful"]
    
   var counter=0
   function changeText(){
    dynamic.textContent=words[counter]
    counter = (counter + 1) % words.length;
   }
   setInterval(changeText, 1000);
   
   var leftPic=document.querySelector(".overlay-5")
   var rightPic=document.querySelector(".overlay-6")
   var leftImg=document.querySelector(".left-pic img")
   var rightImg=document.querySelector(".right-pic img")
   leftPic.addEventListener("mouseenter", function(){
       leftImg.style.scale="1.2"
   })
   leftPic.addEventListener("mouseleave", function(){
    leftImg.style.scale="1"
})
rightPic.addEventListener("mouseenter", function(){
  rightImg.style.scale="1.2"
})
rightPic.addEventListener("mouseleave", function(){
rightImg.style.scale="1"
})
  

  var about=document.querySelector(".about")
  var aboutImg=document.querySelector(".about img")




var crsr=document.querySelector("#cursor")
var card=document.querySelectorAll(".six-cards")

 card.forEach(function(dets){
   
   dets.addEventListener("mouseenter",function(){
     crsr.style.opacity="1"
    // crsr.style.display="block"
   })
   dets.addEventListener("mouseleave",function(){
     crsr.style.opacity="0"
    //  crsr.style.display="none"
   }) 
 dets.addEventListener("mousemove",function(val){
     crsr.style.left=val.x +10 + "px"
     crsr.style.top=val.y+ 10+ "px"
 })
 })


var crsr2=document.querySelector("#cursor2")
var ready=document.querySelector(".ready h2")
ready.addEventListener("mouseenter",function(){
  crsr2.style.opacity="1"
})
ready.addEventListener("mouseleave",function(){
  crsr2.style.opacity="0"
})
ready.addEventListener("mousemove",function(val){
  crsr2.style.left=val.x+10  + "px"
  crsr2.style.top=val.y+10+ "px"
})
window.addEventListener("mousemove",function(det){
    var rec=this.document.querySelector("#rec")
  var xval=gsap.utils.mapRange(0,window.innerWidth,150+rec.getBoundingClientRect().width/2,this.window.innerWidth-(150+rec.getBoundingClientRect().width/2),det.clientX)
    gsap.to("#rec",{
    left:xval,
    ease:Power3
   })
})
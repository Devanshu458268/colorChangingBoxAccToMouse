var box= document.querySelector("#box");

box.addEventListener("mouseenter", ()=>{
    console.log("Enter")

    box.addEventListener("mousemove",(data)=>{
      var boxPosition= box.getBoundingClientRect();
        var mousePosition= data.x - boxPosition.left
        if(mousePosition< boxPosition.width/2){
            var redRange=gsap.utils.mapRange(0, boxPosition.width/2, 255, 0, mousePosition); 
            gsap.to(box ,{
                backgroundColor: `rgb(${redRange},0,0)`,
                ease:Power4,
                
            })
        }else{
            var blueColor= gsap.utils.mapRange(boxPosition.width/2,boxPosition.y,0,255,mousePosition);
            gsap.to(box,{
                backgroundColor : `rgb(0,0,${blueColor})`,
                ease: Power4,
            })

        }
       
    })
   


})

box.addEventListener("mouseleave",()=>{
    console.log("Leaved")
})
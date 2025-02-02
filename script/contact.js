particlesJS.load('particles-js', 'script/particle.json', function() {
      
});


Draggable.create("#cr7",{
    inertia: true, 
    onDragEnd: function () {
            gsap.to('#cr7',{
                    x:0,y:0,duration:2,ease:"elastic"
            })
          },
});


gsap.fromTo('#c',{
    y:200
},{y:0, rotation: 360,duration: 4,ease:"elastic"})
gsap.fromTo('#r',{
    y:200
},{y:0,duration: 4,rotation: 360,ease:"elastic"})
gsap.fromTo('#sev',{
    y:200
},{y:0,duration: 4,rotation: 360,ease:"elastic"})

gsap.fromTo('#nav',{
    y:200
},{y:0,duration: 4,  ease:"elastic"})




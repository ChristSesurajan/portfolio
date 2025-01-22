setTimeout(function() {
        $('#leftlo').hide();
        $('#photorim').show();
        $('#nav').show();
        $('#rightlo').hide();
        var scrambleText1 = new ScrambleText(
                document.getElementById( 'head1' ),{timeOffset : 500}).start();
        var scrambleText2 = new ScrambleText(
                document.getElementById( 'head2' ),{timeOffset : 100}).start();
         
        gsap.registerPlugin(Draggable) 
        gsap.fromTo('#c',{
                y:200
        },{y:0, rotation: 360,duration: 4,ease:"elastic"})
        gsap.fromTo('#r',{
                y:200
        },{y:0,duration: 4,rotation: 360,ease:"elastic"})
        gsap.fromTo('#sev',{
                y:200
        },{y:0,duration: 4,rotation: 360,ease:"elastic"})
        gsap.fromTo('#photorim',{
                y:500
        },{y:0, rotation: 360,duration: 4,ease:"elastic"})
        gsap.fromTo('#nav',{
                y:300
        },{y:0, duration: 4,ease:"elastic"})
    }, 2700);




Draggable.create("#cr7",{
        bounds: document.getElementById(".panel"),
        inertia: true, 
        onDragEnd: function () {
                gsap.to('#cr7',{
                        x:0,y:0,duration:2,ease:"elastic"
                })
              },
});



Draggable.create("#photorim",{
        inertia: true, 
        onDragEnd: function () {
                gsap.to('#photorim',{
                        x:0,y:0,duration:2,ease:"elastic"
                })
              },
});




window.onload = function() {

        "use strict";
        $('#photorim').hide();
        $('#nav').hide();
        gsap.fromTo('#logo1',{
                x:-500
        },{x:0, rotation: 360,duration: 1.5})
        gsap.fromTo('#logo2',{
                x:-500
        },{x:0, rotation: 360, duration: 1.5})
        setTimeout(function() {
                
              
            gsap.fromTo('#leftlo',{
                x:0
        },
        {x:-900,duration: 1,})

        gsap.fromTo('#rightlo',{
                x:0
        },{x:900,duration: 1})
        
        }, 2000)

       
    };

    

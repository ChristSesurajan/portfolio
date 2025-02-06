gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger) ;
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


    window.onload = function () {
        "use strict";

        // Ensure elements are visible before animation
        gsap.set("#leftlo, #rightlo", { visibility: "visible" });
        
        // Logo animations
        gsap.fromTo('#logo1',{
            x:-300
    },{x:0, rotation: 360,duration: 1.5})
    gsap.fromTo('#logo2',{
            x:500
    },{x:0, rotation: 360, duration: 1.5})

        setTimeout(function () {
            // Sliding animations for panels
            gsap.to("#leftlo", { x: -900, duration: 1, ease: "power2.inOut" });
            gsap.to("#rightlo", { x: 900, duration: 1, ease: "power2.inOut" });

            // Hide preloader after animation
            setTimeout(() => {
                document.querySelector(".preloader").style.display = "none";
            }, 1000);

        }, 2000);
    };
    // setTimeout(() => {
    //     gsap.fromTo("#intro-paragraph", {
    //         text: { value: "" }
    //       }, {
    //         text: { value: "Hey! You must be wondering why CR7? If you're a sports person, you already know why. For others, I'm a huge Cristiano Ronaldo and Thala Dhoni fan. Both of them share one thing in common, the number 7! Why them in particular? I wanted to develop my character by learning from them. From Dhoni, I learned how to stay calm and think under pressure. From CR7, I learned that hard work and passion can achieve anything. And of course, he does the best celebration in the world... SUIIIIIIIII! I’ve always wanted to be a developer. Ever since my 12th grade in computer science, I knew this was my dream. My mind constantly craves creativity, give it some time to think, and it might just surprise you! Jokes aside, creativity helps me build cool frontend designs and solve problems in unique ways. Now, let’s skip to the Main part. I have completed my Master’s at University of Greenwich and earned a solid certification from IT Career Switch. Currently, I'm looking for jobs in and around London, so, if you got one, then I am your guy! You can ping me on the Contact Page. Oh, and the other   details? You’ll find them in my resume there as well. Tricked you into going to the next page!" },
    //         duration: 15, // Adjust duration for speed
    //         ease: "power2.out"
    //       });
    // }, 2000);



   
 // Create GSAP Timeline
// Create GSAP Timeline
// let tl = gsap.timeline({ repeat: -1 }); // Infinite loop

// tl.fromTo('#p1', { x: 800 }, { x: 0, duration: 2, ease: "power2.inOut" })
//   .to('#p1', { x: 800, duration: 2, ease: "power2.inOut" }) // Move out before p2 appears

//   .fromTo('#p2', { x: 800 }, { x: 0, duration: 2, ease: "power2.inOut" })
//   .to('#p2', { x: 800, duration: 2, ease: "power2.inOut" }) // Move out before p2 appears

//   .fromTo('#p3', { x: 800 }, { x: 0, duration: 2, ease: "power2.inOut" })
//   .to('#p3', { x: 800, duration: 2, ease: "power2.inOut" }) // Move out before p2 appears

//   .fromTo('#p4', { x: 800 }, { x: 0, duration: 2, ease: "power2.inOut" })
//   .to('#p4', { x: 800, duration: 2, ease: "power2.inOut" }) // Move out before p2 appears

$('#p1con').hide()

setTimeout(() => { 
    $('#p1con').show()
    $('#p1').show()
    let tl = gsap.timeline({ repeat: -1 }); // Infinite loop

    tl.fromTo('#i1', { x: 1000 }, { x: 0, duration: 2, ease: "power2.inOut" })
     .to('#i1', { x: 1000, duration: 2, ease: "power2.inOut" }) // Move out before p2 appears
    
      .fromTo('#i2', { x: 1000 }, { x: 0, duration: 2, ease: "power2.inOut" })
     .to('#i2', { x: 1000, duration: 2, ease: "power2.inOut" }) // Move out before p2 appears
    
     .fromTo('#i3', { x: 1000 }, { x: 0, duration: 2, ease: "power2.inOut" })
      .to('#i3', { x: 1000, duration: 2, ease: "power2.inOut" }) // Move out before p2 appears
    
        // GSAP Animation - Falling Cinematic Effect
        gsap.fromTo('#p1', { x: -1000 }, { x: 0, duration: 2.5, ease: "power2.inOut" })
      

},2700)
gsap.fromTo('#p2',{
    x:1000
},{scrollTrigger:{
    trigger:'#p2',
    start: '300px 50%',
    toggleActions:"restart none none reverse"
},
x:0,duration: 1,ease:"ease"
})




// Animate #i4
gsap.fromTo('#i4',{
    x:-1000
},{scrollTrigger:{
    trigger:'#i4',
    start: '300px 50%',
    toggleActions:"restart none none reverse",
    
},
x:0,duration: 1,ease:"ease"
})

gsap.fromTo('#p3',{
    x:1000
},{scrollTrigger:{
    trigger:'#p3',
    start: '300px 50%',
    toggleActions:"restart none none reverse"
},
x:0,duration: 1,ease:"ease"
})

gsap.fromTo('#i6',{
    x:1000
},{scrollTrigger:{
    trigger:'#i6',
    start: '300px 50%',
    toggleActions:"restart none none reverse"
},
x:0,duration: 1,ease:"ease"
})


// Animate #i4
gsap.fromTo('#i5',{
    x:-1000
},{scrollTrigger:{
    trigger:'#i5',
    start: '300px 50%',
    toggleActions:"restart none none reverse",
    
},
x:0,duration: 1,ease:"ease"
})




    //   gsap.to(".image-slider img", {
    //     x: "100%", 
    //     duration: 6, 
    //     repeat: -1, 
    //     yoyo: true, 
    //     stagger: 1,
    //     ease: "power2.inOut"
    //   });
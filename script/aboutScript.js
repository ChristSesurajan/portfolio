gsap.registerPlugin(ScrollTrigger) ;
particlesJS.load('particles-js', 'script/particle.json', function() {
      
});


gsap.fromTo('#gossip',{
    x:-2000 
},{
    scrollTrigger:{
        trigger:'#gossip',

        toggleActions:"restart pause  resume reverse"
    },x:0,duration: 1,ease:"ease"})

gsap.fromTo('#Gazetteer',{
    x:-2000
},{scrollTrigger:{
    trigger:'#Gazetteer',
    start: '30px 80%',
    toggleActions:"restart pause resume reverse"
},
x:0,duration: 1,ease:"ease"
})
gsap.fromTo('#compdir',{
    x:-2000
},{    scrollTrigger:{
    trigger:'#compdir',
    start:'top 600px',

    toggleActions:"restart pause resume reverse"
},x:0,duration: 1,ease:"ease"},)
Draggable.create("#cr7",{
    inertia: true, 
    onDragEnd: function () {
            gsap.to('#cr7',{
                    x:0,y:0,duration:2,ease:"elastic"
            })
          },
});
// Draggable.create("#edu",{
//     inertia: true, 
//     onDragEnd: function () {
//             gsap.to('#edu',{
//                     x:0,y:0,duration:2,ease:"elastic"
//             })
//           },
// });
// Draggable.create(".expr",{
//     inertia: true, 
//     onDragEnd: function () {
//             gsap.to('.expr',{
//                     x:0,y:0,duration:2,ease:"elastic"
//             })
//           },
// });
// Draggable.create("#exp",{
//     inertia: true, 
//     onDragEnd: function () {
//             gsap.to('#exp',{
//                     x:0,y:0,duration:2,ease:"elastic"
//             })
//           },
// });



// $('#part2').hide();
// $('#part3').hide();
// $('#part4').hide();
// $('#part5').hide();
// $('#part6').hide();
// var k=2;
// setTimeout(function () {
//     ['part1', 'part2', 'part3', 'part4', 'part5', 'part6'].forEach((img, index) => {
//       setTimeout(function () {
//         if(img==='part1'){
//             $('#part1').show();
//         }
//         gsap.fromTo(
//           '#' + img,
//           { x: 300 },
//           {
//             x: 0,
//             delay:1,
//             ease:Elastic,
//             repeat: 1,
//             duration: 1.3,
//             yoyo: true,
//             onComplete: () => {
                
//               $('#' + img).hide(); 
//               if (img !== 'part6') {
//                 $('#part' + k).show();
//                 k++;
//               }
//             },
//           }
//         );
//       }, index * 2000); 
    
//     });
//   }, 500); 

  gsap.fromTo('#c',{
    y:200
},{y:0, rotation: 360,duration: 4,ease:"elastic"})
gsap.fromTo('#r',{
    y:200
},{y:0,duration: 4,rotation: 360,ease:"elastic"})
gsap.fromTo('#sev',{
    y:200
},{y:0,duration: 4,rotation: 360,ease:"elastic"})
// gsap.fromTo('#exp',{
//     y:200
// },{y:0,duration: 4,ease:"elastic"})
// gsap.fromTo('#edu',{
//     y:200
// },{y:0,duration: 4, rotate:360, ease:"elastic"})
// gsap.fromTo('.expr',{
//     y:200
// },{y:0,duration: 4, rotate:360, ease:"elastic"})

gsap.fromTo('#nav',{
    y:200
},{y:0,duration: 4,  ease:"elastic"})


$('#gossip').on('mouseover',function(){
     $('#overpro h4, #overpro p').show()

    // $('#gossip img').css({
    //     'background-color': '#ffffff',
    //     'border': '1px solid black',
    //     'opacity': '0.1'
    // })
  
}).on( "mouseout", function() {
    $('#overpro h4, #overpro p').hide();
    // $('#overpro::after').css({
    //     'content': '',
    //     'background':'linear-gradient(to right, rgb(152, 11, 246),rgb(255, 255, 255, 0.7))',
    //     'position': 'absolute',
    //     'width': '0%',
    //     'height': '100%',
    //     'bottom': '0px',
    //     'border-radius': '5px',
    //     'left': '0px',
    //     'transition': '200ms ease-in-out',
    //     'z-index': -1
    // })
})

$('#Gazetteer').on('mouseenter',function(){
    $('#overpro1 h4, #overpro1 p').show()

    // $('#Gazetteer img').css({
    //     'background-color': '#ffffff',
    //     'border': '1px solid black',
    //     'opacity': '0.1'
    // })
  
}).on( "mouseleave", function() {
    $('#overpro1 h4, #overpro1 p').hide()
    // $('#Gazetteer img').css({
    //     'background-color': '#ffffff',
    //     'border': '1px solid black',
    //     'opacity': '1'
    // })
})
$('#Gazetteer').on('mouseover', function() {
    $('#Gazetteer img').attr('src', 'assets/clients/mapv.gif');
}).on('mouseleave', function() {
    $('#Gazetteer img').attr('src', 'assets/clients/map.png');
});


$('#compdir').on('mouseenter',function(){
    $('#overpro2 h4, #overpro2 p').show()

    // $('#compdir img').css({
    //     'transition': '2s ease-in-out',
    //     'background-color': '#ffffff',
    //     'border': '1px solid black',
    //     'opacity': '0.1'
    // })

  
}).on( "mouseleave", function() {
    $('#overpro2 h4, #overpro2 p').hide()
    // $('#compdir img').css({
    //     'transition': '2s ease-in-out',
    //     'background-color': '#ffffff',
    //     'border': '1px solid black',
    //     'opacity': '1'
    // })
})
$('#compdir').on('mouseover', function() {
    $('#compdir img').attr('src', 'assets/clients/pro2.gif');
}).on('mouseleave', function() {
    $('#compdir img').attr('src', 'assets/clients/database.png');
});

$('#gossip').on('mouseover', function() {
    $('#gossip img').attr('src', '/assets/clients/gossp.gif');
}).on('mouseleave', function() {
    $('#gossip img').attr('src', '/assets/clients/gossip.png');
});


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

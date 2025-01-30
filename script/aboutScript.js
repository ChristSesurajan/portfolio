particlesJS.load('particles-js', 'script/particle.json', function() {
      
});

for (let i = 0; i <= 6; i++) {
    setTimeout(function () {
        $('#lanugu' + i).addClass('anima'); 
        $('#lanugu' + i).addClass('animare'); 
    }, 2000 * (i + 1)); 
}

for (let i = 0; i <= 6; i++) {
    setTimeout(function () {
        $('#lanugu' + i).removeClass('anima');
        $('#lanugu' + i).removeClass('animare');  
    }, 2000 * (i + 2)); 
}
Draggable.create("#cr7",{
    inertia: true, 
    onDragEnd: function () {
            gsap.to('#cr7',{
                    x:0,y:0,duration:2,ease:"elastic"
            })
          },
});
Draggable.create("#edu",{
    inertia: true, 
    onDragEnd: function () {
            gsap.to('#edu',{
                    x:0,y:0,duration:2,ease:"elastic"
            })
          },
});
Draggable.create(".expr",{
    inertia: true, 
    onDragEnd: function () {
            gsap.to('.expr',{
                    x:0,y:0,duration:2,ease:"elastic"
            })
          },
});
Draggable.create("#exp",{
    inertia: true, 
    onDragEnd: function () {
            gsap.to('#exp',{
                    x:0,y:0,duration:2,ease:"elastic"
            })
          },
});



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
    $('#overpro').show()

    $('#gossip img').css({
        'background-color': '#ffffff',
        'border': '1px solid black',
        'opacity': '0.1'
    })
  
}).on( "mouseout", function() {
    $('#overpro').hide()
    $('#gossip img').css({
        'background-color': '#ffffff',
        'border': '1px solid black',
        'opacity': '1'
    })
})

$('#Gazetteer').on('click',function(){
    $('#overpro1').show()

    $('#Gazetteer img').css({
        'background-color': '#ffffff',
        'border': '1px solid black',
        'opacity': '0.1'
    })
  
}).on( "mouseleave", function() {
    $('#overpro1').hide()
    $('#Gazetteer img').css({
        'background-color': '#ffffff',
        'border': '1px solid black',
        'opacity': '1'
    })
})
$('#Gazetteer').on('mouseover', function() {
    $('#Gazetteer img').attr('src', 'assets/clients/mapv.gif');
}).on('mouseleave', function() {
    $('#Gazetteer img').attr('src', 'assets/clients/map.png');
});


$('#compdir').on('click',function(){
    $('#overpro2').show()

    $('#compdir img').css({
        'transition': '2s ease-in-out',
        'background-color': '#ffffff',
        'border': '1px solid black',
        'opacity': '0.1'
    })

  
}).on( "mouseleave", function() {
    $('#overpro2').hide()
    $('#compdir img').css({
        'transition': '2s ease-in-out',
        'background-color': '#ffffff',
        'border': '1px solid black',
        'opacity': '1'
    })
})
$('#compdir').on('mouseover', function() {
    $('#compdir img').attr('src', 'assets/clients/pro2.gif');
}).on('mouseleave', function() {
    $('#compdir img').attr('src', 'assets/clients/database.png');
});
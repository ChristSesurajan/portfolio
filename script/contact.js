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


setTimeout(function() {
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
}, 2490);

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

$("#contact-form").submit(function(e) {

    e.preventDefault();
    var postdata = $(this).serialize();

    $.ajax({
        type: "POST",
        url: "assets/php/contact.php",
        data: postdata,
        dataType: "json",
        success: function(json) {
            $("#contact-form input, #contact-form textarea").removeClass("error");
    
            if (json.nameMessage !== "") {
                $("#contact-form-name").addClass("error");
            }
            if (json.emailMessage !== "") {
                $("#contact-form-email").addClass("error");
            }
            if (json.messageMessage !== "") {
                $("#contact-form-message").addClass("error");
            }
    
            if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {
                $('#contact-form').addClass("success");
                $('.success-message').fadeIn().delay(3000).fadeOut(); // Show the success message
                $('#contact-form textarea, #contact-form input').val("");
            }
        }
    });
    

});
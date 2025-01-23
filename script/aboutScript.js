window.onload = function(e) {
e.preventDefault();
} 
for (let i = 0; i <= 1; i++) {
    setTimeout(function () {
        $('#lanugu' + i).addClass('anima'); 
        $('#lanugu' + i).addClass('animare'); 
    }, 2000 * (i + 1)); 
}

for (let i = 0; i <= 1; i++) {
    setTimeout(function () {
        $('#lanugu' + i).removeClass('anima');
        $('#lanugu' + i).removeClass('animare');  // Add the class with a delay
    }, 2000 * (i + 2)); // Stagger the timing by 1000ms for each iteration
}


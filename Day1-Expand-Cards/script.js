const panels = document.querySelectorAll('.panel')


panels.forEach(function(panel){
    // console.log(panel);
    panel.addEventListener('click', function(){
        // console.log(123);
        removeActiveClasses();
        panel.classList.add("active");
    })
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove("active");

    })
}
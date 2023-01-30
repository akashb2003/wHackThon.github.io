
const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry)
               if(entry.isIntersecting){
                entry.target.classList.add('show');
               } else {
                entry.target.classList.remove('show');
               } 
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=>observer.observe(el));

    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2500,
        delay:400
    });

    ScrollReveal().reveal('.effect-t, .ramaiah',{ delay: 500, origin: 'left'});
    ScrollReveal().reveal('.sec-01, .eff-img',{ delay: 600, origin: 'bottom'});
    ScrollReveal().reveal('.eff-txt',{ delay: 600, origin: 'right'});
    ScrollReveal().reveal('.sec-02',{ delay: 500, origin: 'top'});


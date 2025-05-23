document.addEventListener("DOMContentLoaded", function(){
    let openPOPUP = document.getElementById('open-popup');
    let closePOPUP = document.getElementById('close-popup');
    let POPUPcanvas = document.getElementById('popUp_canvas');


    openPOPUP.addEventListener('click',function(){
        POPUPcanvas.style.display = 'flex';
        openPOPUP.style.display = 'none';
    });

    closePOPUP.addEventListener('click',function(){
        POPUPcanvas.style.display = 'none';
        openPOPUP.style.display = 'flex';
    });

    window.addEventListener('click', function(event){
        if (POPUPcanvas.style.display === 'flex' && !POPUPcanvas.contains(event.target) && event.target !== openPOPUP) {
            POPUPcanvas.style.display = 'none';
            openPOPUP.style.display = 'flex';
        }
    })
})
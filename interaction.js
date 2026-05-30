$(document).ready(function() {
    document.getElementById(window.location.hash.substring(1)).click()
})

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
    var images = document.getElementsByClassName('imgrande');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    const links = document.querySelectorAll('.liencache');
    const panels = document.querySelectorAll('.article');

    const toutafficher = document.querySelectorAll('.toutvoir')
    const cats = document.querySelectorAll('.cat')

    modal.addEventListener('click', function () {
        modal.style.display = "none";
    });

    var i;
    for (i = 0; i < images.length; i++) {
        document.addEventListener('click', function (e) {
            if (e.target.tagName === 'IMG') {
                modal.style.display = "block";
                modalImg.src = e.target.src;
                captionText.innerHTML = e.target.nextElementSibling?.innerHTML || "";
            }

        });
    }

    links.forEach(link => {
        link.addEventListener('click', e => {

            panels.forEach(p => p.classList.remove('actif'));

            const targets = document.querySelectorAll(`[id="${link.dataset.target}"]`);
            targets.forEach(t => t.classList.add('actif'));
        });
    });

    toutafficher.forEach(link => {
        link.addEventListener('click', e =>{
            
            panels.forEach(p => p.classList.add('actif'));

        });
    });

    cats.forEach(cat => {
        cat.addEventListener('click', e =>{
            const selectedCat = cat.dataset.cat;
            panels.forEach(panel => {
                if (panel.dataset.cat === selectedCat) {
                    panel.classList.add('actif');
                } else {
                    panel.classList.remove('actif');
                }
            });

        });
    });

});
document.addEventListener("DOMContentLoaded", function () {
    
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
    var images = document.getElementsByTagName('img');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    const links = document.querySelectorAll('.liste_lien a');
    const panels = document.querySelectorAll('.article');


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

            const target = document.getElementById(link.dataset.target);
            target.classList.add('actif');
        });
    });
});
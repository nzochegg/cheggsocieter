$(document).ready(function() {
    var $hashtag = window.location.hash.substring(1)
    document.querySelectorAll('[data-target=\''+$hashtag+'\']')[0].click()
})

document.addEventListener('change', (event) => {
    console.log(event.target.id)
    if (event.target.id === 'NCustType') {
        console.log("prout")
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
    var images = document.getElementsByClassName('imgrande');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    var galerieapercu = document.getElementById("apercu");
    try {
        galerieapercu.addEventListener("click", e => {
            var images = document.getElementsByClassName('imgrande');
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
        });
    } catch (error) {
        console.log(error)
    }
    

    const links_article = document.querySelectorAll('.liencache');
    const articles = document.querySelectorAll('.article');

    const sous_links_article = document.querySelectorAll('.sousliencache');
    const sous_articles = document.querySelectorAll('.sousarticle');

    const toutafficher = document.querySelectorAll('.toutvoir')
    const cats = document.querySelectorAll('.cat')

    modal.addEventListener('click', function () {
        modal.style.display = "none";
    });

    var current_images = 0;
    var i;
    for (i = 0; i < images.length; i++) {
        document.addEventListener('click', function (e) {
            if (e.target.tagName === 'IMG') {
                modal.style.display = "block";
                modalImg.src = e.target.src;
                captionText.innerHTML = e.target.nextElementSibling?.innerHTML || "";
                current_images = Array.from(images).indexOf(e.target)
                console.log(current_images);
            }
        });
    }
    
    document.addEventListener("keydown", function (event) {
        if (event.code === "ArrowRight") {
            if (current_images < images.length - 1)
            current_images = current_images + 1
            modalImg.src = images[current_images].src;
        }
        if (event.code === "ArrowLeft") {
            if (current_images > 0)
            current_images = current_images - 1
            modalImg.src = images[current_images].src;
        }
    });

    links_article.forEach(link => {
        link.addEventListener('click', e => {

            articles.forEach(p => p.classList.remove('actif'));
            sous_articles.forEach(p => p.classList.remove('actif'));

            const targets = document.querySelectorAll(`[id="${link.dataset.target}"]`);
            targets.forEach(t => t.classList.add('actif'));
        });
    });

    sous_links_article.forEach(link => {
        link.addEventListener('click', e => {

            sous_articles.forEach(p => p.classList.remove('actif'));

            const targets = document.querySelectorAll(`[id="${link.dataset.target}"]`);
            targets.forEach(t => t.classList.add('actif'));
        });
    });

    toutafficher.forEach(link => {
        link.addEventListener('click', e =>{
            
            articles.forEach(p => p.classList.add('actif'));
            sous_articles.forEach(p => p.classList.remove('actif'));

        });
    });

    cats.forEach(cat => {
        cat.addEventListener('click', e =>{
            const selectedCat = cat.dataset.cat;
            articles.forEach(panel => {
                if (panel.dataset.cat === selectedCat) {
                    panel.classList.add('actif');
                } else {
                    panel.classList.remove('actif');
                }
            });

        });
    });

});
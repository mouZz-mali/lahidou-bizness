document.addEventListener("DOMContentLoaded", function() {
    // Animation des produits au survol
    const produits = document.querySelectorAll(".produit");
    produits.forEach(produit => {
        produit.addEventListener("mouseover", function() {
            produit.style.transform = "translateY(-5px)";
        });
        produit.addEventListener("mouseout", function() {
            produit.style.transform = "translateY(0)";
        });
    });

    // Animation du caméléon
    const chameleon = document.getElementById('chameleon-anim');
    const tongue = document.getElementById('chameleon-tongue');
    setTimeout(() => {
        chameleon.classList.remove('hide');
        chameleon.style.transition = "left 1s ease";
        chameleon.style.left = "calc(50% - 60px)"; // Centre écran
        setTimeout(() => {
            tongue.style.width = "100px"; // La langue sort
            setTimeout(() => {
                tongue.style.width = "0"; // La langue rentre
                setTimeout(() => {
                    chameleon.style.left = "100vw"; // S'en va à droite
                    setTimeout(() => {
                        chameleon.classList.add('hide');
                    }, 800);
                }, 600);
            }, 1000);
        }, 1000);
    }, 500);

    // Gestion de la barre de recherche
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        produits.forEach(produit => {
            const nom = produit.querySelector('.nom-produit').textContent.toLowerCase();
            const desc = produit.querySelector('.desc-produit').textContent.toLowerCase();
            produit.style.display = nom.includes(query) || desc.includes(query) ? 'block' : 'none';
        });
    });
});
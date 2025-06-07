document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".ajouter-panier");
    // alert("La  fête approche ! Vous avez frappé à la bonne porte !"); 
    
    // Effet d'animation sur les produits
    const produits = document.querySelectorAll(".produit");
    
    produits.forEach(produit => {
        produit.addEventListener("mouseover", function() {
            produit.style.transform = "scale(1.05)";
            produit.style.transition = "0.3s ease";
        });
        produit.addEventListener("mouseout", function() {
            produit.style.transform = "scale(1)";
        });
    });
    
    // Animation caméléon qui traverse l'écran, lèche, puis s'en va
    const chameleon = document.getElementById('chameleon-anim');
    const tongue = document.getElementById('chameleon-tongue');
    // Arrivée du caméléon au centre
    setTimeout(() => {
        chameleon.style.transition = "left 1.2s cubic-bezier(.23,1.02,.43,.99)";
        chameleon.style.left = "calc(50% - 90px)"; // Centre écran
        setTimeout(() => {
            tongue.style.width = "180px"; // La langue sort
            setTimeout(() => {
                tongue.style.width = "0"; // La langue rentre
                setTimeout(() => {
                    chameleon.style.transition = "left 1.2s cubic-bezier(.23,1.02,.43,.99), opacity 0.6s";
                    chameleon.style.left = "110vw"; // S'en va à droite
                    setTimeout(() => {
                        chameleon.classList.add('hide');
                    }, 900);
                }, 700);
            }, 1200);
        }, 1300);
    }, 800); // Délai après chargement
});

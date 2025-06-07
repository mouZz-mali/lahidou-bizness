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
    
    setTimeout(() => {
        const tongue = document.getElementById('chameleon-tongue');
        tongue.style.width = "160px"; // La langue sort
        setTimeout(() => {
            tongue.style.width = "0"; // La langue rentre
        }, 1200);
    }, 800); // Délai après chargement
});

document.addEventListener("DOMContentLoaded", function() {

    // 1. **Tableau des produits en vedette**
    // C'est ICI que vous définissez et MODIFIEZ tous vos produits et leurs prix !
    const produitsData = [
        {
            nom: 'Tissu africain',
            image: 'images/tissu (14).jpg', // Assurez-vous que le chemin d'image est correct
            description: 'Un magnifique tissu africain aux motifs éclatants, parfait pour toutes vos créations.',
            prix: '15.000 F', // MODIFIEZ LE PRIX ICI POUR LE TISSU AFRICAIN
            whatsappLink: 'https://wa.me/22378714579?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Tissu%20africain%20LAHIDOU%20BIZNESS',
            callLink: 'tel:+22378714579'
        },
        {
            nom: 'Vetements dreap',
            image: 'images/dreep 8.jpg', 
            description: 'Des habits pour etre dreap on dreap.',
            prix: '30.000 F', // MODIFIEZ LE PRIX ICI
            whatsappLink: 'https://wa.me/22378714579?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20les%20Chaussures%20en%20Cuir%20LAHIDOU%20BIZNESS',
            callLink: 'tel:+22378714579'
        },
        {
            nom: 'Maillot de qualité',
            image: 'images/maillot 8.jpg', // Exemple, à remplacer
            description: 'Des pièces uniques et de qualites, Vous attendez quoi pour appeler.',
            prix: '12.000 F', // MODIFIEZ LE PRIX ICI
            whatsappLink: 'https://wa.me/22378714579?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20les%20Bijoux%20Artisanaux%20LAHIDOU%20BIZNESS',
            callLink: 'tel:+22378714579'
        },
        // Ajoutez d'autres produits ici en suivant le même format
        // {
        //     nom: 'Nouveau Produit Excitant',
        //     image: 'images/nouveau_produit.jpg',
        //     description: 'Ceci est une description pour votre nouveau produit.',
        //     prix: 'XOF 20.000',
        //     whatsappLink: 'https://wa.me/22378714579?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Nouveau%20Produit%20LAHIDOU%20BIZNESS',
        //     callLink: 'tel:+22378714579'
        // },
    ];

    // 2. Fonction pour afficher les produits dans la grille
    function afficherProduits(produitsAffiches = produitsData) {
        const gridContainer = document.querySelector('.grid-container');
        // Vérifie si le conteneur existe pour éviter les erreurs
        if (!gridContainer) {
            console.error("Le conteneur '.grid-container' est introuvable. Assurez-vous qu'il est dans votre HTML.");
            return;
        }

        gridContainer.innerHTML = ''; // Vide la grille avant d'ajouter les produits

        produitsAffiches.forEach(produit => {
            const produitDiv = document.createElement('div');
            produitDiv.classList.add('produit', 'accueil'); // Ajoutez les classes nécessaires

            // Construction du HTML de la carte produit
            produitDiv.innerHTML = `
                <img src="${produit.image}" alt="${produit.nom}">
                <div class="nom-produit">${produit.nom}</div>
                <p class="desc-produit">${produit.description}</p>
                <p class="prix-produit">${produit.prix}</p>
                <div class="produit-actions">
                    <a class="whatsapp-btn" href="${produit.whatsappLink}" target="_blank">
                        <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" style="width:20px;vertical-align:middle;"> WhatsApp
                    </a>
                    <a class="call-btn" href="${produit.callLink}">
                        <img src="https://img.icons8.com/color/48/000000/phone--v1.png" alt="Appeler" style="width:20px;vertical-align:middle;"> Appeler
                    </a>
                </div>
            `;
            gridContainer.appendChild(produitDiv);
        });

        // Réapplique les écouteurs d'événements après avoir ajouté les nouveaux produits
        appliquerAnimationsHover();
    }

    // Fonction pour appliquer les animations de survol (déplacée ici)
    function appliquerAnimationsHover() {
        const produits = document.querySelectorAll(".produit");
        produits.forEach(produit => {
            // Supprimez les anciens écouteurs pour éviter les doublons si la fonction est appelée plusieurs fois
            // (Bien que le `innerHTML = ''` gère cela dans ce cas, c'est une bonne pratique)
            produit.removeEventListener("mouseover", handleMouseOver);
            produit.removeEventListener("mouseout", handleMouseOut);

            produit.addEventListener("mouseover", handleMouseOver);
            produit.addEventListener("mouseout", handleMouseOut);
        });
    }

    function handleMouseOver() {
        this.style.transform = "translateY(-5px)";
        this.style.boxShadow = "0 12px 30px var(--shadow-medium)"; // Ajout de l'ombre au survol (si vous utilisez le CSS modernisé)
    }

    function handleMouseOut() {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "0 4px 15px var(--shadow-light)"; // Retour à l'ombre par défaut
    }


    // 3. Animation du caméléon (inchangée)
    const chameleon = document.getElementById('chameleon-anim');
    const tongue = document.getElementById('chameleon-tongue');
    // Vérifier si le caméléon existe avant de lancer l'animation
    if (chameleon && tongue) {
        setTimeout(() => {
            chameleon.classList.remove('hide'); // Assurez-vous d'avoir une classe 'hide' en CSS (display: none;)
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
    }


    // 4. Gestion de la barre de recherche (modifiée pour la nouvelle structure)
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            const produitsFiltres = produitsData.filter(produit => {
                const nom = produit.nom.toLowerCase();
                const description = produit.description.toLowerCase();
                return nom.includes(query) || description.includes(query);
            });
            afficherProduits(produitsFiltres); // Affiche les produits filtrés
        });

        // Optionnel: Filtrer en temps réel pendant la saisie
        searchInput.addEventListener('keyup', (event) => {
            // Filtrer seulement si la touche pressée n'est pas Entrée (car déjà gérée par le bouton)
            if (event.key !== 'Enter') {
                const query = searchInput.value.toLowerCase();
                const produitsFiltres = produitsData.filter(produit => {
                    const nom = produit.nom.toLowerCase();
                    const description = produit.description.toLowerCase();
                    return nom.includes(query) || description.includes(query);
                });
                afficherProduits(produitsFiltres);
            }
        });

        // Optionnel: Réinitialiser l'affichage si la recherche est effacée
        searchInput.addEventListener('input', () => {
            if (searchInput.value === '') {
                afficherProduits(produitsData); // Affiche tous les produits
            }
        });
    }

    // 5. Appel initial pour afficher tous les produits au chargement de la page
    afficherProduits();
});
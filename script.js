// Sélection des liens du menu
const menuLinks = document.querySelectorAll('.nav ul li a');

// Parcours de chaque lien du menu pour ajouter un gestionnaire d'événement
menuLinks.forEach(link => {
    // Ajout de l'événement au survol du lien
    link.addEventListener('mouseenter', () => {
        // Changement de couleur du texte au survol
        link.style.color = '#8C9BE7'; // Vous pouvez changer la couleur ici
    });

    // Ajout de l'événement lorsque le curseur quitte le lien
    link.addEventListener('mouseleave', () => {
        // Rétablissement de la couleur originale du texte
        link.style.color = '#fff'; // Couleur originale







        
    let index = 0; // Variable pour suivre l'index de l'image actuellement affichée
    const images = ["img/gfd.jpg", "img/rogerrr.jpg", "img/example.jpg"]; // Tableau contenant les chemins vers vos images

    function changeImage() {
        // Sélectionne l'élément image par son ID
        const imgElement = document.getElementById("slideshow-img");
        // Change la source de l'image pour afficher l'image suivante dans le tableau
        imgElement.src = images[index];
        // Incrémente l'index pour passer à l'image suivante
        index = (index + 1) % images.length; // Utilisation du modulo pour boucler à travers les images
    }

    // Appelle la fonction changeImage toutes les 3 secondes (3000 millisecondes)
    setInterval(changeImage, 3000);


    });
});

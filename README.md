# Coin Coin Liens

Page statique qui centralise tous les raccourcis Coin Coin : Drive, Upload,
Publi (validation hebdo des réseaux), Jeu, Dépliant, Muscu, RDV et GitHub.

Reprend la charte graphique du site principal (`coincoinpub/site`) : fond
sombre `#140d1c`, accents orange `#ec6527` / jaune `#fbc117`, polices Poppins
et JetBrains Mono, logo Coin Coin.

## Mise en ligne

Site 100% statique (`index.html`, `style.css`, `liens.js`, `assets/img/logo.svg`),
aucune dépendance serveur : il suffit de déposer ces fichiers (en gardant la
même arborescence) sur n'importe quel hébergement web (Hostinger, GitHub
Pages, etc.).

## Modifier les liens

Tous les liens sont définis dans `liens.js`, dans le tableau `LINKS`. Pour
ajouter ou corriger une URL, renseigne le champ `url` de l'entrée
correspondante. Laisser `url: ''` affiche la carte avec le badge
« Lien à ajouter ».

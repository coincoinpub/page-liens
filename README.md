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

Tous les liens sont définis dans `liens.js`, dans deux tableaux :
`INTERNAL_LINKS` (section « Liens internes ») et `CLIENT_LINKS` (section
« Liens clients »). Pour ajouter ou corriger une URL, renseigne le champ
`url` de l'entrée correspondante (ou copie un bloc `{ ... }` pour un nouveau
lien). Laisser `url: ''` affiche la carte avec le badge « Lien à ajouter ».

## Après chaque modification : penser au cache

`index.html` charge `style.css` et `liens.js` avec un numéro de version
(`style.css?v=1`, `liens.js?v=2`) — la même astuce que sur `coin-coin.fr`.
**Si le site ne reflète pas un changement après un upload**, ce n'est presque
toujours pas le fichier qui est en cause mais le cache (navigateur, ou cache
serveur/CDN côté hébergement) : incrémente le `v=` du fichier modifié dans
`index.html` (`?v=1` → `?v=2`, etc.) pour forcer le rechargement.

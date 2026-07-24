// Pour modifier un lien : change la valeur "url" ci-dessous.
// Laisser "" affiche la carte comme "lien à ajouter".
// Pour ajouter un lien : copie un bloc { ... } dans le tableau concerné.

const INTERNAL_LINKS = [
  {
    icon: '📁',
    title: 'Drive',
    description: "Fichiers, visuels et documents partagés de l'agence.",
    url: '',
  },
  {
    icon: '⬆️',
    title: 'Upload',
    description: 'Déposer rapidement un fichier ou un visuel.',
    url: '',
  },
  {
    icon: '🦆',
    title: 'Publi (réseaux)',
    description: 'Validation hebdo des posts Facebook / Instagram / TikTok.',
    url: 'https://coin-coin.fr/publi',
  },
  {
    icon: '🎮',
    title: 'Jeu',
    description: 'Page du jeu concours.',
    url: '',
  },
  {
    icon: '📄',
    title: 'Dépliant',
    description: 'Dépliant / plaquette de présentation.',
    url: '',
  },
  {
    icon: '💪',
    title: 'Muscu',
    description: 'Page muscu.',
    url: '',
  },
  {
    icon: '📅',
    title: 'RDV',
    description: 'Prise de rendez-vous.',
    url: '',
  },
  {
    icon: '🐙',
    title: 'GitHub',
    description: 'Dépôt du code (coincoinpub/reseaux).',
    url: 'https://github.com/coincoinpub/reseaux',
  },
];

const CLIENT_LINKS = [
  // Exemple :
  // {
  //   icon: '🍟',
  //   title: 'Frite Family',
  //   description: 'Espace de suivi du projet client.',
  //   url: '',
  // },
];

function renderLink(link) {
  const card = document.createElement(link.url ? 'a' : 'div');
  const missing = !link.url;
  card.className = `link-card${missing ? ' is-missing' : ''}`;
  if (!missing) {
    card.href = link.url;
    if (/^https?:\/\//.test(link.url)) {
      card.target = '_blank';
      card.rel = 'noopener';
    }
  }

  card.innerHTML = `
    <span class="link-icon">${link.icon}</span>
    <h3 class="link-title">${link.title}</h3>
    <p class="link-desc">${link.description}</p>
    ${missing ? '<span class="link-missing-note">Lien à ajouter</span>' : ''}
  `;

  return card;
}

function renderGroup(containerId, links, emptyMessage) {
  const container = document.getElementById(containerId);
  if (links.length === 0) {
    container.innerHTML = `<p class="links-empty">${emptyMessage}</p>`;
    return;
  }
  links.forEach((link) => container.appendChild(renderLink(link)));
}

renderGroup('links-interne', INTERNAL_LINKS, 'Aucun lien interne pour le moment.');
renderGroup('links-client', CLIENT_LINKS, 'Aucun lien client pour le moment.');

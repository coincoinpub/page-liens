// Pour modifier un lien : change la valeur "url" ci-dessous.
// Laisser "" affiche la carte comme "lien à ajouter".
// Pour ajouter un lien : copie un bloc { ... } dans le tableau concerné.

const INTERNAL_LINKS = [
  {
    icon: '💻',
    title: 'Drive Coin coin',
    description: "Fichiers, visuels et documents de l'agence.",
    url: 'https://coin-coin.fr/drive',
  },
  {
    icon: '🚨',
    title: 'Slack Coin coin',
    description: "Messages pro, automatisation Claude",
    url: 'https://coin-coin-hq.slack.com',
  },
  {
    icon: '👔',
    title: 'CRM',
    description: "CRM, clients",
    url: 'https://app.notion.com/p/38eb3cec8db98074814fd56d9f4050fa?v=38eb3cec8db981bc9999000cb24f4719&source=copy_link',
  },
  {
    icon: '✏️',
    title: 'Canva',
    description: "Canva Coin coin, dossier Hebdo",
    url: 'https://www.canva.com/folder/FAHOIXY_a2s',
  },
  {
    icon: '📱',
    title: 'Publication (réseaux)',
    description: 'Validation hebdo des posts Facebook / Instagram / TikTok.',
    url: 'https://coin-coin.fr/publi',
  },
  {
    icon: '❤️️',
    title: 'META Business',
    description: 'Publications Facebook / Instagram.',
    url: 'https://business.facebook.com/latest/posts/published_posts/?business_id=163910224293718&asset_id=816506288209564',
  },
  {
    icon: '🎬',
    title: 'TikTok',
    description: 'Publication TikTok.',
    url: 'https://www.tiktok.com/tiktokstudio?lang=fr',
  },
  {
    icon: '💸',
    title: 'Compta Tiime',
    description: 'App de compta : Devis / Facture',
    url: 'https://coin-coin.fr/publi',
  },
  {
    icon: '🐙',
    title: 'GitHub Coin coin',
    description: 'Dépôt de code (coincoinpub).',
    url: 'https://github.com/coincoinpub/',
  },
  {
    icon: '💪',
    title: 'Musculation',
    description: 'Page entrainement musculation.',
    url: 'https://coin-coin.fr/muscu/',
  },

];

const CLIENT_LINKS = [
  {
    icon: '⬆️',
    title: 'Upload pour les clients',
    description: 'Pour les clients : Déposer rapidement un fichier ou un visuel.',
    url: 'https://coin-coin.fr/drive/upload/',
  },
  {
    icon: '🎮',
    title: 'Jeu',
    description: 'Page du mini jeu Coin coin.',
    url: 'https://coin-coin.fr/jeu/',
  },
  {
    icon: '📄',
    title: 'Dépliant tarifaire',
    description: 'Pour les clients : Dépliant / plaquette de présentation.',
    url: 'https://coin-coin.fr/depliant/',
  },
  {
    icon: '📅',
    title: 'RDV client',
    description: 'Pour les clients : Page de prise de rendez-vous.',
    url: 'https://coin-coin.fr/rdv/',
  },
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

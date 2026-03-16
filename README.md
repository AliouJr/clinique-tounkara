# 🏥 Clinique Tounkara — Documentation Technique
## Site web — Elhadji Ibrahima Niass · Keur Massar, Dakar

---

## 📁 Structure des fichiers

```
clinique-tounkara/
│
├── index.html          ← Page d'accueil
├── services.html       ← 20+ spécialités médicales
├── medecins.html       ← Équipe médicale
├── rdv.html            ← Prise de rendez-vous
├── contact.html        ← Contact + Google Maps
├── about.html          ← Histoire et mission
├── 404.html            ← Page d'erreur
│
├── css/
│   ├── style.css       ← Variables CSS, typographie, reset, animations
│   ├── components.css  ← Navbar, boutons, cartes, formulaires, footer
│   └── responsive.css  ← Breakpoints mobile/tablette/desktop
│
├── js/
│   ├── main.js         ← Init globale, scroll, lien actif
│   ├── menu.js         ← Menu hamburger mobile
│   ├── animations.js   ← Révélations au scroll (IntersectionObserver)
│   ├── form.js         ← Validation formulaires RDV et Contact
│   └── counters.js     ← Compteurs animés (stats chiffres clés)
│
└── assets/
    ├── images/         ← Placer les photos ici (format WebP recommandé)
    ├── icons/          ← Icônes SVG
    └── fonts/          ← Polices auto-hébergées (optionnel)
```

---

## 🚀 Comment ouvrir le site

### Méthode 1 — VSCode (recommandé)
1. Ouvrez VSCode
2. **Fichier → Ouvrir le dossier** → sélectionnez `clinique-tounkara`
3. Installez l'extension **Live Server** (cherchez "Live Server" dans les extensions)
4. Clic droit sur `index.html` → **"Open with Live Server"**
5. Le site s'ouvre automatiquement dans votre navigateur

### Méthode 2 — Double-clic simple
Double-cliquez sur `index.html` pour l'ouvrir directement dans votre navigateur.
⚠️ Certaines fonctionnalités peuvent être limitées sans serveur local.

---

## ✏️ Modifier le contenu

### Changer un numéro de téléphone
Cherchez le numéro dans le fichier HTML concerné et remplacez-le.
Exemple : remplacer `+221 77 542 75 99` par votre nouveau numéro.
N'oubliez pas de mettre à jour aussi le lien `href="tel:+221775427599"`.

### Modifier les tarifs
Dans `services.html`, cherchez `FCFA` et modifiez le prix.
Exemple : `<span class="svc-price">5 000 FCFA</span>` → changez le nombre.

### Ajouter un médecin
Dans `medecins.html`, copiez-collez un bloc `.doctor-card-v2` existant
et modifiez le nom, la spécialité, la biographie et les tags.

### Changer l'adresse
Cherchez "Keur Massar" dans tous les fichiers HTML et remplacez par la nouvelle adresse.

---

## 🎨 Modifier les couleurs

Toutes les couleurs sont définies dans `css/style.css`, section `:root` :

```css
:root {
  --vert:   #1a6b4a;   /* Couleur principale — navbar, boutons */
  --vert2:  #24915f;   /* Hover des boutons verts */
  --or:     #c9a84c;   /* Accent doré — labels, sections */
  --rouge:  #dc2626;   /* Urgences, erreurs */
  --texte:  #1a2b22;   /* Couleur du texte principal */
  --gris:   #6b7c73;   /* Texte secondaire */
}
```

Modifiez ces valeurs pour changer toute la charte graphique en une seule fois.

---

## 📱 Responsive — Comment ça fonctionne

Le site est **mobile-first** : il fonctionne d'abord sur smartphone, puis s'adapte.

Les breakpoints dans `css/responsive.css` :
- **Mobile** : < 767px (hamburger, colonnes en 1)
- **Tablette** : 768px – 1023px (2 colonnes)  
- **Desktop** : ≥ 1024px (layout complet)

---

## 🗺️ Google Maps — Mettre à jour la carte

Dans `contact.html`, trouvez la balise `<iframe src="https://www.google.com/maps/embed?...">`.

Pour obtenir votre propre embed :
1. Allez sur **maps.google.com**
2. Cherchez l'adresse de la clinique
3. Cliquez sur **Partager → Intégrer une carte**
4. Copiez le code `<iframe>` et remplacez celui du fichier

---

## 📧 Formulaires — Comment les connecter

Actuellement, les formulaires affichent un message de succès simulé.
Pour les rendre réellement fonctionnels, vous avez 2 options :

### Option A — Formspree (gratuit, sans code)
1. Créez un compte sur **formspree.io**
2. Créez un nouveau formulaire et copiez votre endpoint
3. Dans `rdv.html`, modifiez la balise form :
   ```html
   <form action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```
4. Supprimez l'attribut `novalidate` et le JS de simulation

### Option B — EmailJS
Consultez la documentation sur emailjs.com pour l'envoi par JavaScript.

---

## 🌐 Déploiement — Mettre en ligne

### Option 1 — Hébergement classique (recommandé)
1. Achetez un hébergement web (OVH, Hostinger, etc.)
2. Connectez-vous via FTP (FileZilla)
3. Uploadez tous les fichiers dans le dossier `public_html`
4. Pointez votre domaine vers l'hébergeur

### Option 2 — Netlify (gratuit pour un site statique)
1. Créez un compte sur **netlify.com**
2. Glissez-déposez le dossier `clinique-tounkara` dans Netlify Drop
3. Votre site est en ligne en 30 secondes
4. Configurez ensuite votre domaine personnalisé

### Option 3 — GitHub Pages (gratuit)
1. Créez un repository GitHub
2. Uploadez les fichiers
3. Activez GitHub Pages dans les paramètres

---

## ⚡ Optimisations à faire avant la mise en ligne

- [ ] **Ajouter les vraies photos** de la clinique dans `assets/images/`
- [ ] **Convertir les photos en WebP** (outil gratuit : squoosh.app)
- [ ] **Mettre à jour Google Maps** avec les coordonnées exactes
- [ ] **Configurer le formulaire** RDV et Contact (Formspree ou autre)
- [ ] **Vérifier tous les numéros** de téléphone dans tous les fichiers
- [ ] **Mettre à jour les tarifs** dans `services.html`
- [ ] **Ajouter le favicon** (icône de l'onglet navigateur)
- [ ] **Configurer le domaine** clinictounkara.com

---

## 📞 Contacts de la clinique (référence)

| Rôle | Numéro |
|------|--------|
| Urgences médicales | +221 77 542 75 99 |
| Secrétariat | +221 33 878 20 41 |
| Direction générale | +221 77 478 43 43 |
| Assistante | +221 77 259 79 78 |

**Adresse :** Clinique Elhadji Ibrahima Niass  
Keur Massar, derrière ex-Sénelec, Dakar, Sénégal

---

## 🛠️ Stack technique

- **HTML5** sémantique (accessibilité ARIA incluse)
- **CSS3** avec variables CSS (pas de framework)
- **JavaScript ES6+** Vanilla (aucune dépendance)
- **Google Fonts** : Playfair Display + DM Sans
- **Google Maps Embed API** (contact.html)

---

*Documentation rédigée en Mars 2026*  
*Site développé pour la Direction de la Clinique Elhadji Ibrahima Niass*

# Coin Rose — React

Converted from the supplied `coinrose-source.html` into a clean React + Vite project.

## Included

- Responsive React component architecture
- French, Arabic and English language switcher with Arabic RTL support
- Original Coin Rose branding, typography, colors and menu content
- Menu category filters
- Live menu search
- Dark/light mode with localStorage
- Mobile navigation drawer
- Reservation form with click-to-call confirmation
- Click-to-call, email and Google Maps links
- Click-to-call phone links
- SEO metadata
- Accessible labels and reduced-motion support

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Important client edits

The current contact details are the values present in the supplied HTML:

- Address: Snack Coin Rose Chamali, Kénitra, Maroc
- Phone: 06 87 46 30 37
- Email: contact@coinrose-restaurant.ma

Before going live, replace them with the restaurant's verified details.

Menu content is in:

`src/data/menu.js`

The logo extracted from the original HTML is:

`public/coin-rose-logo.webp`

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const entryHtml = (scriptSrc, stylesheetHref = "") => `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#e01a63" />
    <meta name="description" content="Coin Rose — restaurant à Kénitra. Cuisine marocaine et française, produits de saison et réservation de table." />
    <meta property="og:title" content="Coin Rose — Restaurant | Goût et Passion" />
    <meta property="og:description" content="Cuisine marocaine et française à Kénitra." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Manrope:wght@400;500;600;700;800&family=Pacifico&display=swap" rel="stylesheet" />
    ${stylesheetHref ? `<link rel="stylesheet" href="${stylesheetHref}" />` : ""}
    <title>Coin Rose — Restaurant | Goût et Passion</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${scriptSrc}"></script>
  </body>
</html>`;

function reactDocumentPlugin() {
  return {
    name: "react-document",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (request.url === "/" || request.url === "/index.html") {
          const html = await server.transformIndexHtml(request.url, entryHtml("/src/main.jsx"));
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html");
          response.end(html);
          return;
        }
        next();
      });
    },
    generateBundle(_, bundle) {
      const entry = Object.values(bundle).find(
        (asset) => asset.type === "chunk" && asset.isEntry
      );
      const stylesheet = Object.values(bundle).find(
        (asset) => asset.type === "asset" && asset.fileName.endsWith(".css")
      );

      this.emitFile({
        type: "asset",
        fileName: "index.html",
        source: entryHtml(`/${entry.fileName}`, stylesheet ? `/${stylesheet.fileName}` : "")
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), reactDocumentPlugin()],
  build: {
    rollupOptions: {
      input: "src/main.jsx"
    }
  }
});

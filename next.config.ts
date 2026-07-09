import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour Cloudflare Pages
  // output: 'export' n'est pas nécessaire car @cloudflare/next-on-pages gère le build
  images: {
    unoptimized: true, // Cloudflare Pages ne supporte pas nativement l'optimisation d'images Next.js
  },
  async redirects() {
    return [
      { source: '/services', destination: '/interventions', permanent: true },
      { source: '/services/:slug', destination: '/interventions/:slug', permanent: true },
    ];
  },
};

export default nextConfig;

'use client';

import React from 'react';
import { Share2 } from 'lucide-react';

interface Props {
  title: string;
  url: string;
}

export default function ShareButton({ title, url }: Props) {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="hover:text-[#8C7355] transition-colors"
      aria-label="Partager cet article"
    >
      <Share2 className="w-4 h-4" />
    </button>
  );
}

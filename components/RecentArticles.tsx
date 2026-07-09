

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { MedicalData } from '../lib/types';

interface Props {
  data: MedicalData | null;
}

export default function RecentArticles({ data }: Props) {
  const posts = data?.posts?.slice(0, 3) || [];

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
      <div className="mx-auto mb-20 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#C5A065]/40" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A67A3D]">Le Journal Clinique</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-lora text-[clamp(32px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#241F1A]">
            Actualités & <br />
            <span className="italic opacity-60">Conseils Thérapeutiques</span>
          </h2>
          <Link href="/blog" className="group inline-flex items-center gap-3 rounded-full border border-[#E8DFD1] px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-[#241F1A] transition-all hover:bg-[#241F1A] hover:text-white">
            Tout voir <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col space-y-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-[#E8DFD1] shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
<Image 
  src={post.featured_image_url || "/planning-3d.webp"} 
  alt={post.title} 
  fill 
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover"
/>
              <div className="absolute inset-0 bg-[#241F1A]/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute top-6 right-6">
                <div className="rounded-full bg-white/40 px-4 py-2 backdrop-blur-xl border border-white/20 text-[11px] font-bold uppercase tracking-widest text-[#241F1A]">
                  {post.category?.replace('_', ' ')}
                </div>
              </div>
            </div>
            
            <div className="space-y-4 px-2">
              <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A67A3D]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <div className="h-1 w-1 rounded-full bg-[#E8DFD1]" />
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {post.reading_time_minutes} min
                </div>
              </div>
              
              <h3 className="font-lora text-2xl font-medium leading-tight text-[#241F1A] transition-colors group-hover:text-[#0891B2]">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-2 pt-2 text-[11px] font-bold uppercase tracking-widest text-[#0891B2] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-2">
                Lire l'article <ChevronRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

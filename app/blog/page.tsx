'use client';

import React from 'react';
import { floraData, floraContext } from '@/lib/constants';
import MedicalHeader from '@/components/MedicalHeader';
import MedicalFooter from '@/components/MedicalFooter';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-precision-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

      <MedicalHeader context={floraContext} data={floraData} />

      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-lora text-[#1A1A1A] mb-6">
              Actualités & <span className="italic text-[#8C7355]">Expertise</span>
            </h1>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
              Retrouvez nos articles sur les dernières avancées en chirurgie maxillo-faciale, 
              conseils pré-opératoires et innovations technologiques au service de nos patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {floraData.posts?.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white border border-[#E8DFD1] hover:border-[#8C7355] transition-all duration-500 rounded-sm overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={post.featured_image_url} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-medium text-[#8C7355] border border-[#E8DFD1]">
                      {post.category.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[11px] text-[#8C7355] uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.published_at).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.reading_time_minutes} min
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-lora text-[#1A1A1A] leading-snug group-hover:text-[#8C7355] transition-colors duration-300 mb-6 flex-grow">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[#8C7355] text-sm font-medium">
                    Lire l'article
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MedicalFooter context={floraContext} data={floraData} />
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PortfolioItem } from '@/types';
import SectionHeader from '../ui/SectionHeader';
import { motion } from "framer-motion";

export default function PortfolioSection() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const response = await fetch('/api/portfolio');
      if (response.ok) {
        const data = await response.json();
        const featured = data.filter((item: PortfolioItem) => item.featured);
        setPortfolioItems(featured.length > 0 ? featured.slice(0, 3) : data.slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">

        <SectionHeader 
          title="Featured Projects"
          description="Take a look at some of the work we've proudly built for our amazing clients."
        />

        <PortfolioGrid loading={loading} portfolioItems={portfolioItems} />

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-md 
                     hover:bg-white hover:text-black transition-all duration-300 
                     inline-block font-semibold tracking-wide"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}


/* ─────────────────────────── Grid ─────────────────────────── */

function PortfolioGrid({ loading, portfolioItems }: { loading: boolean; portfolioItems: PortfolioItem[] }) {
  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => <PortfolioSkeleton key={i} />)}
      </div>
    );
  }

  if (portfolioItems.length === 0) {
    return (
      <div className="text-center py-14 text-gray-400 text-lg">
        No portfolio added yet.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {portfolioItems.map((project, index) => (
        <PortfolioCard key={project.id ?? index} project={project} index={index} />
      ))}
    </div>
  );
}


/* ─────────────────────────── Card ─────────────────────────── */

function PortfolioCard({ project, index }: { project: PortfolioItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative rounded-3xl overflow-hidden 
                 bg-white/5 border border-white/10 
                 backdrop-blur-xl p-1"
    >
      <div className="rounded-3xl overflow-hidden">

        <ProjectImage project={project} />

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

          <TechStack technologies={project.technologies} />

          <Link 
            href={`/portfolio/${project.id}`}
            className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2 transition"
          >
            View Project
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </motion.div>
  );
}


/* ─────────────────────────── Image ─────────────────────────── */

function ProjectImage({ project }: { project: PortfolioItem }) {
  return (
    <div className="h-52 w-full relative overflow-hidden">
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-white/30 text-5xl">
          {project.title.split(" ")[0]}
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    </div>
  );
}


/* ─────────────────────────── Tech Stack Tags ─────────────────────────── */

function TechStack({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.slice(0, 3).map((tech) => (
        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
          {tech}
        </span>
      ))}

      {technologies.length > 3 && (
        <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-500">
          +{technologies.length - 3}
        </span>
      )}
    </div>
  );
}


/* ─────────────────────────── Skeleton Loader ─────────────────────────── */

function PortfolioSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md animate-pulse">
      <div className="h-52 bg-white/10"></div>
      <div className="p-6">
        <div className="h-6 bg-white/10 rounded mb-3"></div>
        <div className="h-4 bg-white/10 rounded mb-4"></div>
        <div className="flex gap-2">
          <div className="w-20 h-6 rounded-full bg-white/10"></div>
          <div className="w-16 h-6 rounded-full bg-white/10"></div>
        </div>
      </div>
    </div>
  );
}

// ProjectDetail.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, User, Target } from 'lucide-react';

// Define the Project interface
interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string; // Changed from any to string
  description: string;
  detailedDescription: string;
  niche: string;
  clientName: string;
  projectDuration: string;
  projectYear: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  additionalImages: string[]; // Changed from any[] to string[]
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full border border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          
          <p className="text-neutral-400 text-xl mb-8 max-w-3xl">
            {project.detailedDescription}
          </p>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-neutral-700 text-white rounded-full hover:border-neutral-500 transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Main Project Image */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-800">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
            <div className="flex items-center gap-3 mb-3">
              <User className="w-5 h-5 text-neutral-400" />
              <h3 className="text-white font-semibold">Client</h3>
            </div>
            <p className="text-neutral-400">{project.clientName}</p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-neutral-400" />
              <h3 className="text-white font-semibold">Niche</h3>
            </div>
            <p className="text-neutral-400">{project.niche}</p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-neutral-400" />
              <h3 className="text-white font-semibold">Year</h3>
            </div>
            <p className="text-neutral-400">{project.projectYear}</p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-neutral-400" />
              <h3 className="text-white font-semibold">Duration</h3>
            </div>
            <p className="text-neutral-400">{project.projectDuration}</p>
          </div>
        </div>

        {/* Challenge, Solution, Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-4">Challenge</h3>
            <p className="text-neutral-400 leading-relaxed">{project.challenge}</p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-4">Solution</h3>
            <p className="text-neutral-400 leading-relaxed">{project.solution}</p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
            <ul className="space-y-2">
              {project.results.map((result: string, index: number) => (
                <li key={index} className="text-neutral-400 flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 hover:border-neutral-600 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.additionalImages.map((image: string, index: number) => (
              <div key={index} className="relative overflow-hidden rounded-xl border border-neutral-800">
                <Image
                  src={image}
                  alt={`${project.title} mockup ${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-neutral-900 rounded-2xl p-12 border border-neutral-800">
          <h3 className="text-3xl font-bold text-white mb-4">Like What You See?</h3>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let&apos;s discuss how we can create something amazing together.
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import webdesign1 from "@/public/webdesign1.jpg"
import webdesign2 from "@/public/webdesign2.jpg"
import webdesign3 from "@/public/design2.jpg"
import webdesign4 from "@/public/design3.jpg"
import webdesign5 from "@/public/design4.jpg"
import webdesign6 from "@/public/design6.jpg"
import website1 from "@/public/mock-1.jpg"
// Types
interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: any;
  description: string;
}

type Category = "All" | "Branding" | "Web Design" | "Development" | "Support" | "SEO";

// Mock data for projects
const projectsData: Project[] = [
//   {
//     id: 1,
//     title: "NovaTech Rebrand",
//     subtitle: "NovaTech Solutions",
//     category: "Branding",
//     tags: ["Branding & Identity"],
//     image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop&crop=center",
//     description: "Complete brand identity redesign for tech startup"
//   },
  {
    id: 2,
    title: "Lumiere Fashion Website",
    subtitle: "Lumiere Boutique",
    category: "Web Design",
    tags: ["Website Design & Development", "Digital Marketing"],
    image: webdesign1,
    description: "E-commerce fashion website with modern design"
  },
  {
    id: 3,
    title: "Velocity App UI/UX",
    subtitle: "Velocity Productivity App",
    category: "Development",
    tags: ["UI/UX Design"],
    image: webdesign2,
    description: "Mobile app interface for productivity platform"
  },
  {
    id: 4,
    title: "Skyline Motion Campaign",
    subtitle: "Skyline Electronics",
    category: "Web Design",
    tags: ["Motion Graphics & Video Production"],
    image: webdesign3,
    description: "Dynamic marketing campaign with motion graphics"
  },
  {
    id: 5,
    title: "Minimalist Portfolio",
    subtitle: "Creative Studio",
    category: "Development",
    tags: ["Web Development", "UI/UX Design"],
    image: website1,
    description: "Clean portfolio website for creative agency"
  },
//   {
//     id: 6,
//     title: "EcoTech Dashboard",
//     subtitle: "EcoTech Analytics",
//     category: "Development",
//     tags: ["Web Development", "Data Visualization"],
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
//     description: "Analytics dashboard for environmental data"
//   }
];

const categories: Category[] = ["All", "Branding", "Web Design", "Development"];

// Component: Section Header
const SectionHeader = () => (
  <div className="text-center mb-16">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Bold Ideas,<br />
      <span className="text-white">Stunning Results</span>
    </h1>
    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
      From branding transformations to digital experiences, our work is a testament to 
      innovation, strategy, and design excellence.
    </p>
  </div>
);

// Component: Category Tabs
interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, onCategoryChange }) => (
  <div className="flex flex-wrap justify-center gap-2 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === category
            ? 'bg-white text-black'
            : 'bg-transparent text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

// Component: Project Card
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="relative overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-94 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
        {project.title}
      </h3>
      <p className="text-neutral-400 text-sm mb-4">
        {project.subtitle}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Component: Projects Grid
interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

// Main Component
const PortfolioProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <SectionHeader />
        
        <CategoryTabs 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <ProjectsGrid projects={filteredProjects} />
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioProjects;
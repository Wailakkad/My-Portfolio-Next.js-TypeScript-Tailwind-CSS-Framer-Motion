'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import ProjectDetail from '@/components/ProjectDetail'; // Adjust path as needed
import webdesign1 from "@/public/webdesign1.jpg"
import webdesign2 from "@/public/webdesign2.jpg"
import webdesign3 from "@/public/design2.jpg"
import webdesign4 from "@/public/design3.jpg"
import webdesign5 from "@/public/design4.jpg"
import webdesign6 from "@/public/design6.jpg"
import website1 from "@/public/mock-1.jpg"
import website2 from "@/public/phoneStore.png"
import website3 from "@/public/dentist.png"

// Types
interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: any;
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
  additionalImages: any[];
  liveUrl?: string;
  githubUrl?: string;
}

type Category = "All" | "Branding" | "Web Design" | "Websites" ;

// Mock data for projects
const projectsData: Project[] = [
  {
    id: 1,
    title: "NovaTech Rebrand",
    subtitle: "NovaTech Solutions",
    category: "Websites",
    tags: ["Branding & Identity"],
    image: website3,
    description: "Complete brand identity redesign for tech startup",
    detailedDescription: "A comprehensive rebranding project that transformed NovaTech from a generic tech company into a cutting-edge AI solutions provider. The project involved creating a new visual identity, website design, and marketing materials that reflect the company's innovative approach to technology.",
    niche: "Technology & AI Solutions",
    clientName: "NovaTech Solutions Inc.",
    projectDuration: "3 months",
    projectYear: "2024",
    challenge: "NovaTech needed to differentiate themselves in a crowded tech market and establish credibility as an AI solutions provider.",
    solution: "We developed a modern, tech-forward brand identity with clean typography, a sophisticated color palette, and innovative visual elements that communicate precision and innovation.",
    results: [
      "40% increase in qualified leads",
      "60% improvement in brand recognition",
      "25% increase in conversion rates"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    additionalImages: [webdesign1, webdesign2, webdesign3, website1],
    liveUrl: "https://novatech-demo.com",
    githubUrl: "https://github.com/example/novatech"
  },
  {
    id: 2,
    title: "Lumiere Fashion Website",
    subtitle: "Lumiere Boutique",
    category: "Web Design",
    tags: ["Website Design & Development", "Digital Marketing"],
    image: webdesign1,
    description: "E-commerce fashion website with modern design",
    detailedDescription: "An elegant e-commerce platform designed for a luxury fashion boutique. The website features a sophisticated design system, intuitive navigation, and seamless shopping experience that reflects the brand's premium positioning.",
    niche: "Fashion & Luxury Retail",
    clientName: "Lumiere Boutique",
    projectDuration: "4 months",
    projectYear: "2024",
    challenge: "Create an online presence that matches the boutique's luxury in-store experience while driving online sales.",
    solution: "We designed a visually stunning e-commerce platform with high-quality imagery, smooth animations, and an intuitive checkout process.",
    results: [
      "200% increase in online sales",
      "35% improvement in average order value",
      "50% reduction in cart abandonment"
    ],
    technologies: ["React", "Next.js", "Stripe", "Contentful", "GSAP"],
    additionalImages: [webdesign2, webdesign4, website2, webdesign5],
    liveUrl: "https://lumiere-boutique.com"
  },
  {
    id: 3,
    title: "Velocity App UI/UX",
    subtitle: "Velocity Productivity App",
    category: "Web Design",
    tags: ["UI/UX Design"],
    image: webdesign2,
    description: "Mobile app interface for productivity platform",
    detailedDescription: "A comprehensive UI/UX design for a productivity mobile application that helps users manage tasks, track time, and collaborate with team members. The design focuses on simplicity and efficiency.",
    niche: "Productivity & Task Management",
    clientName: "Velocity Tech",
    projectDuration: "2 months",
    projectYear: "2024",
    challenge: "Design an intuitive interface that doesn't overwhelm users while providing powerful productivity features.",
    solution: "We created a clean, minimalist interface with smart information architecture and micro-interactions that guide users through their workflow.",
    results: [
      "4.8/5 App Store rating",
      "30% increase in daily active users",
      "45% improvement in task completion rates"
    ],
    technologies: ["Figma", "Principle", "React Native", "Firebase"],
    additionalImages: [webdesign3, webdesign6, website3, webdesign1],
    liveUrl: "https://velocity-app.com"
  },
  // Add similar enhanced data for other projects...
  {
    id: 4,
    title: "Skyline Motion Campaign",
    subtitle: "Skyline Electronics",
    category: "Web Design",
    tags: ["Motion Graphics & Video Production"],
    image: webdesign3,
    description: "Dynamic marketing campaign with motion graphics",
    detailedDescription: "A dynamic digital marketing campaign featuring motion graphics, video content, and interactive web elements to showcase Skyline Electronics' innovative product line.",
    niche: "Electronics & Technology",
    clientName: "Skyline Electronics",
    projectDuration: "6 weeks",
    projectYear: "2024",
    challenge: "Create engaging visual content that explains complex electronic products in an accessible way.",
    solution: "We developed a series of motion graphics and interactive demos that break down product features through engaging animations.",
    results: [
      "150% increase in engagement rates",
      "80% improvement in product understanding",
      "35% boost in sales inquiries"
    ],
    technologies: ["After Effects", "Cinema 4D", "React", "Three.js"],
    additionalImages: [webdesign4, webdesign5, website1, webdesign6],
    liveUrl: "https://skyline-campaign.com"
  },
  {
    id: 5,
    title: "Minimalist Portfolio",
    subtitle: "Creative Studio",
    category: "Websites",
    tags: ["Web Development", "UI/UX Design"],
    image: website1,
    description: "Clean portfolio website for creative agency",
    detailedDescription: "A minimalist portfolio website designed for a creative studio, focusing on showcasing work through clean layouts, typography, and subtle animations.",
    niche: "Creative Services & Design",
    clientName: "Creative Studio Co.",
    projectDuration: "5 weeks",
    projectYear: "2024",
    challenge: "Create a portfolio that lets the work speak for itself while maintaining visual interest.",
    solution: "We designed a clean, grid-based layout with carefully chosen typography and subtle hover effects that enhance the viewing experience.",
    results: [
      "90% increase in project inquiries",
      "45% improvement in time on site",
      "60% increase in portfolio views"
    ],
    technologies: ["React", "Next.js", "GSAP", "Tailwind CSS"],
    additionalImages: [website2, website3, webdesign1, webdesign2],
    liveUrl: "https://creative-studio-portfolio.com"
  },
  {
    id: 6,
    title: "EcoTech Dashboard",
    subtitle: "EcoTech Analytics",
    category: "Web Design",
    tags: ["Web Development", "Data Visualization"],
    image: webdesign5,
    description: "Analytics dashboard for environmental data",
    detailedDescription: "A comprehensive analytics dashboard for environmental data visualization, helping organizations track and analyze their sustainability metrics in real-time.",
    niche: "Environmental Technology",
    clientName: "EcoTech Analytics",
    projectDuration: "8 weeks",
    projectYear: "2024",
    challenge: "Present complex environmental data in an intuitive and actionable format.",
    solution: "We created interactive charts, real-time data feeds, and customizable dashboard widgets that make environmental data accessible to all stakeholders.",
    results: [
      "70% reduction in data analysis time",
      "95% user satisfaction rate",
      "40% increase in sustainability initiative adoption"
    ],
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
    additionalImages: [webdesign6, webdesign4, website3, webdesign3],
    liveUrl: "https://ecotech-dashboard.com"
  },
  // Continue with similar enhanced data for projects 7, 8, 9...
];

const categories: Category[] = ["All", "Branding", "Web Design", "Websites"];

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
  onProjectClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectClick }) => (
  <div 
    className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    onClick={() => onProjectClick(project)}
  >
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
  onProjectClick: (project: Project) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onProjectClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project) => (
      <ProjectCard 
        key={project.id} 
        project={project} 
        onProjectClick={onProjectClick}
      />
    ))}
  </div>
);

// Main Component
const PortfolioProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowDetail(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setShowDetail(false);
    setSelectedProject(null);
     window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showDetail && selectedProject ? (
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleBackToPortfolio}
        />
      ) : (
        <div className="container mx-auto px-6 py-16">
          <SectionHeader />
          
          <CategoryTabs 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <ProjectsGrid 
            projects={filteredProjects} 
            onProjectClick={handleProjectClick}
          />
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioProjects;
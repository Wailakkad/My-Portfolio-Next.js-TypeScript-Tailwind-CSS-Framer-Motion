'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronRight } from 'lucide-react';
import ProjectDetail from '@/components/ProjectDetail'; 
import webdesign1 from "@/public/webdesign1.jpg"
import webdesign2 from "@/public/webdesign2.jpg"
import webdesign3 from "@/public/design2.jpg"
import webdesign4 from "@/public/design3.jpg"
import webdesign5 from "@/public/design4.jpg"
import webdesign6 from "@/public/design6.jpg"
import website1 from "@/public/mock-1.jpg"
import website2 from "@/public/phoneStore.png"
import website3 from "@/public/dentist.png"
import website6 from "@/public/website3.jpg"

// jewerly website Mockups 
import laptop3 from "@/public/jewelryLaptop.jpg";
import phone3 from "@/public/jewelryPhone.jpg";
import imageLayout1 from "@/public/jewelryPage1.jpg";
import imageLayout2 from "@/public/jewelryPage2.jpg";
// juice energy websiteDesign Mockups 
import juiceFullPage from "@/public/juiceFullWEBSITE.jpg";
import HomPage from "@/public/HomeJuice.jpg";
import PrpductSection from "@/public/ProductJuice.jpg";
import IsoltedProduct from "@/public/isolatedJuice.jpg";
import SportsECTION from "@/public/SportJuice.jpg";
// Import main parent image and additional images for the skincare project
import ScinCareMain from "@/public/ScinCareWireFremeLap.jpg";
import ScinCareGuideMo from "@/public/ScinCareGuideMo.jpg";
import ScinCareGuideLap from "@/public/ScinCareGuideLap.jpg";
import ScinCareLaptop from "@/public/ScinCareLaptop.jpg";
import ScinCareMobile from "@/public/ScinCareMobile.jpg";
import ScinCareWireFrameMob from "@/public/ScinCareWireFrameMob.jpg";

// Import main parent image and additional images for the Secondskincare project 

import SecondScincareMain from "@/public/SecondScincareMain.jpg";

import SecondScincareAbout from "@/public/SecondScincareAbout.jpg";

import SecondScincareHero from "@/public/SecondScincareHero.jpg";

import SecondScincareProduct from "@/public/SecondScincareProduct.jpg";

// Import main parent image and additional images for the FruitResturent project 
import FruitMainPage from "@/public/FruitMainPage.jpg";
import FruitHeroPage from "@/public/FruitHeroPage.jpg";
import FruitProduct from "@/public/FruitProduct.jpg";
import FruitPopular from "@/public/FruitPopular.jpg";


// Types
interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: StaticImageData; // Use StaticImageData for images
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
  additionalImages: StaticImageData[];
  liveUrl?: string;
  githubUrl?: string;
}

// Type for ProjectDetail component (expects string for image)
interface ProjectDetailProps {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
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
  additionalImages: string[];
  liveUrl?: string;
  githubUrl?: string;
}

type Category = "All" | "Branding" | "Web Design" | "Websites" ;

// Mock data for projects
const projectsData: Project[] = 
[
  {
  id: 1,
  title: "Eora Skincare Website UI",
  subtitle: "Eora Rice Toner",
  category: "Web Design",
  tags: ["UI/UX Design", "Figma", "Skincare Branding"],
  image: ScinCareMain,  // variable pointing to main image import
  description: "Clean and elegant skincare brand website UI/UX design concept",
  detailedDescription: "Eora Skincare is a refined, minimalist web design concept for a premium skincare line focused on rice-based toners. This project highlights soothing colors, a luxurious layout, and modern typography to communicate trust, softness, and visible skin benefits. The design guides users toward purchasing while showcasing key product ingredients and benefits.",
  niche: "Beauty & Skincare",
  clientName: "Eora Skincare (Demo Project)",
  projectDuration: "1 week",
  projectYear: "2025",
  challenge: "Develop a website interface that evokes clarity, purity, and the nourishing qualities of Eora's rice toner products, driving conversions through a luxurious and modern design.",
  solution: "Created a clean hero section with a high-quality product shot, clear call-to-action, and informative ingredients section. Emphasized a pastel palette and balanced whitespace for a premium feel. Integrated subtle animations for interactive engagement.",
  results: [
    "Crafted a design that exudes softness and luxury",
    "Enhanced visual storytelling to highlight skincare benefits",
    "Built a strong portfolio piece for beauty & skincare projects"
  ],
  technologies: ["Figma", "Adobe Photoshop", "Illustrator"],
  additionalImages: [
  ScinCareGuideMo,
  ScinCareGuideLap,
  ScinCareLaptop,
  ScinCareMobile,
  ScinCareWireFrameMob
],
  liveUrl: "https://www.figma.com/design/your-eora-skincare-design-link" // Replace with actual Figma or portfolio link
},
{
  id: 2,
  title: "MAVKA Lip Balm Website UI",
  subtitle: "MAVKA Pink Grapefruit Lip Balm",
  category: "Web Design",
  tags: ["UI/UX Design", "Figma", "Natural Skincare"],
  image: SecondScincareMain,  // variable pointing to main image import
  description: "Nature-inspired lip balm website UI/UX design concept",
  detailedDescription: "MAVKA Lip Balm project centers on a natural, eco-friendly brand identity with a soothing yet modern design. The website concept highlights plant-based ingredients, clean typography, and soft color palettes to connect emotionally with customers seeking natural beauty products. Crafted in Figma, it seamlessly integrates e-commerce with storytelling for a smooth shopping experience.",
  niche: "Beauty & Skincare",
  clientName: "MAVKA Skincare (Demo Project)",
  projectDuration: "1.5 weeks",
  projectYear: "2025",
  challenge: "Design a website interface that blends the purity of natural ingredients with a modern shopping experience, while educating customers on product benefits and eco-friendly packaging.",
  solution: "Developed an engaging homepage with product-focused hero section, clear benefits breakdown, and direct purchase options. Used organic shapes, soft illustrations, and playful typography to evoke the freshness of MAVKA’s lip balm.",
  results: [
    "Positioned the brand as premium yet natural",
    "Created a storytelling-driven product page to boost conversions",
    "Enhanced portfolio for eco-conscious beauty brands"
  ],
  technologies: ["Figma", "Adobe XD", "Photoshop"],
  additionalImages:[
  SecondScincareAbout,
  SecondScincareHero,
  SecondScincareProduct
],
  liveUrl: "https://www.figma.com/design/your-mavka-design-link" // Replace with your actual Figma or portfolio link
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
  {
    id: 7,
    title: "Minimalist Portfolio",
    subtitle: "Creative Studio",
    category: "Websites",
    tags: ["Web Development", "UI/UX Design"],
    image: website6,
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
  id: 8,
  title: "ZestRush Energy Juice Website UI",
  subtitle: "ZestRush Energy",
  category: "Web Design",
  tags: ["UI/UX Design", "Figma", "Juice Branding"],
  image: juiceFullPage,
  description: "Energetic juice brand website UI/UX design concept",
  detailedDescription: "ZestRush is a vibrant and playful visual design concept for an energy juice brand, created to energize users through bold colors, engaging product showcases, and dynamic typography. The website mockup was designed in Figma with a focus on highlighting product benefits and enticing visuals that speak to an active, health-conscious audience.",
  niche: "Food & Beverage",
  clientName: "ZestRush Energy (Demo Project)",
  projectDuration: "2 weeks",
  projectYear: "2025",
  challenge: "Craft a website interface that captures the freshness, boldness, and vitality of ZestRush juices, while driving online sales and brand awareness.",
  solution: "Designed a bright, modern landing page with strong product hero sections, interactive carousels for popular flavors, and clear call-to-action buttons to boost conversions. Integrated social media and lifestyle imagery to connect with the target audience.",
  results: [
    "Enhanced perceived brand energy and freshness",
    "Created a visually appealing and conversion-focused UI",
    "Used as a standout portfolio piece for food & beverage brands"
  ],
  technologies: ["Figma", "Adobe Illustrator (for icons)", "Photoshop (for mockups)"],
  additionalImages: [
    HomPage , PrpductSection , IsoltedProduct, SportsECTION
  ],
  liveUrl: "https://www.figma.com/design/your-zestrush-design-link"
} , 
 {
  id: 9,
  title: "Aurelia Jewelry Design Concept",
  subtitle: "Aurelia Jewelry",
  category: "Web Design",
  tags: ["UI/UX Design", "Figma", "Jewelry Branding"],
  image: webdesign1, // Replace with your main mockup
  description: "Luxury jewelry brand website UI/UX design concept",
  detailedDescription: "Aurelia is a visual design concept for a luxury jewelry brand, created to showcase high-end products in a refined, elegant interface. The website mockup was designed in Figma, focusing on aesthetics, layout harmony, and user engagement tailored to premium clientele.",
  niche: "Jewelry & Luxury Goods",
  clientName: "Aurelia Jewelry (Demo Project)",
  projectDuration: "2 weeks",
  projectYear: "2025",
  challenge: "Create a visual identity and user interface that reflects the elegance and craftsmanship of a high-end jewelry brand.",
  solution: "Designed a sleek and modern landing page with soft typography, a luxurious color palette, and product showcase sections enhanced by lifestyle imagery and minimal layout.",
  results: [
    "Presented in client pitches as a sample jewelry design",
    "Showcases high-end design skills for luxury markets",
    "Used as a visual reference for future brand identity work"
  ],
  technologies: ["Figma", "Mockup Presentation Tools", "Adobe Photoshop (for visuals)"],
  additionalImages: [laptop3, phone3, imageLayout1, imageLayout2], // Replace with real mockup images
  liveUrl: "https://www.figma.com/design/27RapOo6gPFPEmsEvh4UYl/Untitled?node-id=0-1&t=FWgX8vSsK9NXcn6Y-1", // Use your actual Figma link or portfolio preview
},
{
  id: 10,
  title: "Fruit Bowl Website UI",
  subtitle: "Healthy & Colorful Bowls",
  category: "Web Design",
  tags: ["UI/UX Design", "Figma", "Food Branding"],
  image: FruitMainPage,  // variable pointing to main image import
  description: "Bright and fresh fruit bowl website UI/UX design concept",
  detailedDescription: "This project presents a vibrant and appetizing website design concept for a fruit bowl brand, aimed at showcasing colorful, nutrient-rich bowls in an engaging and modern layout. Crafted in Figma, the design combines playful fruit imagery with clean typography, ensuring an easy and delightful user experience that highlights the health benefits of each bowl.",
  niche: "Food & Beverage",
  clientName: "Fruit Bowl Brand (Demo Project)",
  projectDuration: "1 week",
  projectYear: "2025",
  challenge: "Create a website design that visually captures the freshness and vibrancy of fruit bowls, while delivering a clear and smooth user experience across desktop and mobile.",
  solution: "Designed a responsive website with a captivating hero section, engaging product showcases, and bright visuals of fresh fruit bowls. Balanced whitespace and color to keep the focus on the products, and integrated easy calls-to-action to drive orders.",
  results: [
    "Showcased bright, colorful branding to attract health-conscious consumers",
    "Created a mobile-friendly design for better accessibility",
    "Enhanced portfolio for food-focused web design"
  ],
  technologies: ["Figma", "Adobe Photoshop"],
  additionalImages: [
  FruitHeroPage,
  FruitProduct,
  FruitPopular
],
  liveUrl: "https://www.figma.com/design/your-fruitbowl-design-link" // Replace with your actual Figma or portfolio link
}









];

const categories: Category[] = ["All","Web Design", "Websites"];

// Helper function to convert StaticImageData to string
const getImageSrc = (image: StaticImageData): string => {
  if (typeof image === 'string') return image;
  return image.src || '';
};

// Helper function to convert Project to ProjectDetailProps
const convertProjectForDetail = (project: Project): ProjectDetailProps => ({
  ...project,
  image: getImageSrc(project.image),
  additionalImages: project.additionalImages.map(img => getImageSrc(img))
});

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

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectClick }) => (
  <div 
    className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    onClick={() => onProjectClick(project)}
  >
    <div className="relative overflow-hidden h-[700px]"> {/* Set a fixed height */}
      <Image
        src={project.image}
        alt={project.title}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
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
          project={convertProjectForDetail(selectedProject)} 
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
import React from "react";

// Inline SVG components replacing lucide-react to resolve missing dependency error
const Bot = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;
const Map = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>;
const Crop = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></svg>;
const Database = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>;
const Cloud = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>;
const LinkIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const ShieldCheck = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>;
const Briefcase = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;

export const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};

export const servicesData = [
  {
    category: "Artificial Intelligence",
    icon: Bot,
    items: [
      "AI Agents Development",
      "Custom AI Solutions",
      "Enterprise AI Automation",
      "AI Chatbots",
      "Voice AI Assistants",
      "AI Workflow Automation",
      "Generative AI Applications",
      "AI Consulting",
    ]
  },
  {
    category: "GIS & Geospatial Services",
    icon: Map,
    items: [
      "GIS Mapping",
      "Geospatial Intelligence",
      "Satellite Image Analysis",
      "Remote Sensing",
      "Road & Building Mapping",
      "Land Parcel Mapping",
      "Utility Mapping",
      "Spatial Data Analytics",
      "Location Intelligence",
      "GIS Consulting",
    ]
  },
  {
    category: "Data Annotation",
    icon: Crop,
    items: [
      "Image Annotation",
      "Video Annotation",
      "Text Annotation",
      "Audio Annotation",
      "3D LiDAR Annotation",
      "Polygon Annotation",
      "Bounding Box Annotation",
      "Semantic Segmentation",
      "Keypoint Annotation",
      "OCR Annotation",
    ]
  },
  {
    category: "AI Data Services",
    icon: Database,
    items: [
      "Dataset Collection",
      "Dataset Cleaning",
      "Data Validation",
      "Data Labeling",
      "AI Model Evaluation",
      "Human-in-the-Loop (HITL)",
      "RLHF Services",
      "Data Quality Assurance",
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "Cloud Infrastructure",
      "AI Infrastructure",
      "DevOps Services",
      "CI/CD Automation",
      "Docker & Kubernetes",
      "Database Architecture",
      "Server Management",
      "Cloud Migration",
    ]
  },
  {
    category: "Blockchain",
    icon: LinkIcon,
    items: [
      "Smart Contract Development",
      "DApp Development",
      "Web3 Solutions",
      "Blockchain Consulting",
    ]
  },
  {
    category: "Cybersecurity",
    icon: ShieldCheck,
    items: [
      "Security Assessment",
      "API Security",
      "Cloud Security",
      "Identity & Access Management",
    ]
  },
  {
    category: "Consulting",
    icon: Briefcase,
    items: [
      "AI Strategy Consulting",
      "Digital Transformation",
      "Technology Consulting",
      "Product Consulting",
      "Startup MVP Development",
      "CTO as a Service",
    ]
  }
];

// Helper to find service details by slug
export const getServiceBySlug = (slug) => {
  for (const category of servicesData) {
    for (const item of category.items) {
      if (generateSlug(item) === slug) {
        return {
          title: item,
          category: category.category,
          Icon: category.icon
        };
      }
    }
  }
  return null;
};

import { 
  HeartPulse, 
  Car, 
  ShoppingCart, 
  Landmark, 
  ShieldAlert, 
  Factory, 
  Truck, 
  HardHat, 
  Home, 
  Tractor, 
  Zap, 
  Map, 
  Building2, 
  Wifi, 
  Plane, 
  Ship, 
  Coffee, 
  GraduationCap, 
  Smartphone, 
  Cpu, 
  Timer, 
  Video, 
  Pill, 
  TreePine 
} from "lucide-react";

export const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};

export const industriesData = [
  {
    category: "Healthcare",
    icon: HeartPulse,
    items: ["Hospitals", "Radiology", "Medical Imaging", "Diagnostics", "Medical AI", "Telemedicine"]
  },
  {
    category: "Automotive",
    icon: Car,
    items: ["Autonomous Vehicles", "ADAS", "Fleet Management"]
  },
  {
    category: "Retail & E-commerce",
    icon: ShoppingCart,
    items: ["Product AI", "Inventory", "Recommendation Systems"]
  },
  {
    category: "Banking & Finance",
    icon: Landmark,
    items: ["FinTech", "Fraud Detection", "Risk Analytics"]
  },
  {
    category: "Insurance",
    icon: ShieldAlert,
    items: ["Claims Automation", "Damage Assessment", "Document AI"]
  },
  {
    category: "Manufacturing",
    icon: Factory,
    items: ["Quality Inspection", "Predictive Maintenance", "Industrial Automation"]
  },
  {
    category: "Logistics & Supply Chain",
    icon: Truck,
    items: ["Route Optimization", "Warehouse AI", "Fleet Intelligence"]
  },
  {
    category: "Construction & Infrastructure",
    icon: HardHat,
    items: ["BIM", "Site Monitoring", "Progress Tracking"]
  },
  {
    category: "Real Estate",
    icon: Home,
    items: ["Property Intelligence", "GIS Mapping", "Land Analytics"]
  },
  {
    category: "Agriculture",
    icon: Tractor,
    items: ["Precision Farming", "Crop Monitoring", "Satellite Analytics"]
  },
  {
    category: "Energy & Utilities",
    icon: Zap,
    items: ["Power Grid Mapping", "Asset Monitoring", "Renewable Energy Analytics"]
  },
  {
    category: "GIS & Mapping",
    icon: Map,
    items: ["Geospatial Intelligence", "Remote Sensing", "Spatial Analytics"]
  },
  {
    category: "Government & Smart Cities",
    icon: Building2,
    items: ["Urban Planning", "Land Records", "Smart City Solutions"]
  },
  {
    category: "Telecom",
    icon: Wifi,
    items: ["Network Planning", "Tower Mapping", "Coverage Analysis"]
  },
  {
    category: "Aviation & Aerospace",
    icon: Plane,
    items: ["Drone Mapping", "Airport Analytics", "Satellite Data Processing"]
  },
  {
    category: "Maritime & Ports",
    icon: Ship,
    items: ["Port Operations", "Vessel Tracking", "Coastal Mapping"]
  },
  {
    category: "Hospitality & Travel",
    icon: Coffee,
    items: ["Hotel Automation", "Travel AI", "Customer Intelligence"]
  },
  {
    category: "Education",
    icon: GraduationCap,
    items: ["EdTech Platforms", "AI Learning Systems"]
  },
  {
    category: "Consumer Technology",
    icon: Smartphone,
    items: ["Mobile Apps", "SaaS Platforms", "AI Products"]
  },
  {
    category: "Robotics",
    icon: Cpu,
    items: ["Computer Vision", "Sensor Data", "Robot Training"]
  },
  {
    category: "Quick Commerce & Delivery",
    icon: Timer,
    items: ["Delivery Optimization", "Route Intelligence", "Demand Forecasting"]
  },
  {
    category: "Security & Surveillance",
    icon: Video,
    items: ["CCTV Analytics", "Face & Object Detection", "Incident Intelligence"]
  },
  {
    category: "Pharmaceutical & Life Sciences",
    icon: Pill,
    items: ["Drug Research Data", "Medical AI Datasets", "Clinical Data Processing"]
  },
  {
    category: "Environmental & Climate",
    icon: TreePine,
    items: ["Climate Monitoring", "Forest Mapping", "Disaster Management"]
  }
];

// Helper to find industry details by slug
export const getIndustryBySlug = (slug) => {
  for (const group of industriesData) {
    for (const item of group.items) {
      if (generateSlug(item) === slug) {
        return {
          title: item,
          category: group.category,
          Icon: group.icon
        };
      }
    }
  }
  return null;
};

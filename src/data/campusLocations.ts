// Enhanced campus locations data for ABU Zaria
export interface CampusLocation {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude] for Mapbox
  description: string;
  type: 'department' | 'facility' | 'landmark' | 'administrative' | 'academic';
  category: 'education' | 'administration' | 'services' | 'recreation' | 'accommodation';
  hours?: string;
  contact?: string;
  imageUrl?: string;
  features: string[];
  buildingNumber?: string;
  capacity?: number;
  accessibility?: boolean;
}

// ABU Zaria campus coordinates (approximate center)
export const CAMPUS_CENTER: [number, number] = [7.6393, 11.1531];
export const CAMPUS_BOUNDS = {
  north: 11.1600,
  south: 11.1450,
  east: 7.6500,
  west: 7.6300
};

export const campusLocations: CampusLocation[] = [
  {
    id: 'main-gate',
    name: 'ABU Main Gate',
    coordinates: [7.6383, 11.1531],
    description: 'Main entrance to Ahmadu Bello University with 24/7 security checkpoint and visitor registration',
    type: 'landmark',
    category: 'services',
    hours: '24/7',
    features: ['Security Checkpoint', 'Visitor Registration', 'Parking Area', 'Information Desk'],
    accessibility: true
  },
  {
    id: 'geography-department',
    name: 'Department of Geography & Environmental Management',
    coordinates: [7.6403, 11.1541],
    description: 'Modern department building with state-of-the-art GIS laboratories, research facilities, and lecture halls',
    type: 'department',
    category: 'education',
    buildingNumber: 'GEM-01',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 3:00 PM',
    contact: '+234 xxx xxx xxxx',
    features: ['GIS Laboratory', 'Remote Sensing Lab', 'Cartography Studio', 'Research Centers', 'Lecture Halls', 'Faculty Offices'],
    capacity: 1500,
    accessibility: true
  },
  {
    id: 'geography-garden',
    name: 'Geography Teaching & Research Garden',
    coordinates: [7.6408, 11.1545],
    description: 'Botanical research garden for environmental studies, plant geography, and ecological research',
    type: 'facility',
    category: 'education',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    features: ['Native Plant Species', 'Research Plots', 'Weather Station', 'Greenhouse', 'Study Areas'],
    accessibility: false
  },
  {
    id: 'cisco-center',
    name: 'CISCO Networking Academy',
    coordinates: [7.6395, 11.1535],
    description: 'Advanced ICT training center with modern networking equipment and computer laboratories',
    type: 'facility',
    category: 'education',
    buildingNumber: 'ICT-02',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM',
    features: ['Networking Labs', 'Computer Labs', 'Training Rooms', 'Certification Center', 'Technical Support'],
    capacity: 300,
    accessibility: true
  },
  {
    id: 'senate-building',
    name: 'University Senate Building',
    coordinates: [7.6388, 11.1525],
    description: 'Administrative headquarters housing the Vice-Chancellor\'s office and key university management',
    type: 'administrative',
    category: 'administration',
    buildingNumber: 'ADM-01',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    contact: '+234 xxx xxx xxxx',
    features: ['VC Office', 'Senate Chambers', 'Registry', 'Bursary', 'Conference Rooms', 'Reception'],
    accessibility: true
  },
  {
    id: 'library-main',
    name: 'Kashim Ibrahim Library',
    coordinates: [7.6398, 11.1520],
    description: 'Main university library with extensive digital collections, study spaces, and research resources',
    type: 'facility',
    category: 'education',
    buildingNumber: 'LIB-01',
    hours: 'Mon-Thu: 8:00 AM - 10:00 PM, Fri-Sat: 8:00 AM - 6:00 PM, Sun: 2:00 PM - 8:00 PM',
    features: ['Digital Collections', 'Study Halls', 'Research Rooms', 'Computer Labs', 'Archives', 'Cafe'],
    capacity: 2000,
    accessibility: true
  },
  {
    id: 'student-center',
    name: 'Student Affairs Complex',
    coordinates: [7.6413, 11.1551],
    description: 'Central hub for student services, activities, and campus life coordination',
    type: 'facility',
    category: 'services',
    buildingNumber: 'STU-01',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM',
    features: ['Student Services', 'Activities Center', 'Counseling Services', 'Career Center', 'Recreation Area'],
    accessibility: true
  },
  {
    id: 'sports-complex',
    name: 'University Sports Complex',
    coordinates: [7.6420, 11.1525],
    description: 'Modern sports facilities including gymnasium, swimming pool, and outdoor courts',
    type: 'facility',
    category: 'recreation',
    hours: 'Mon-Fri: 6:00 AM - 10:00 PM, Sat-Sun: 8:00 AM - 8:00 PM',
    features: ['Gymnasium', 'Swimming Pool', 'Tennis Courts', 'Football Field', 'Basketball Courts', 'Fitness Center'],
    capacity: 1000,
    accessibility: true
  },
  {
    id: 'medical-center',
    name: 'University Health Center',
    coordinates: [7.6375, 11.1538],
    description: 'Primary healthcare facility serving the university community with 24/7 emergency services',
    type: 'facility',
    category: 'services',
    buildingNumber: 'MED-01',
    hours: '24/7 Emergency, Regular: Mon-Fri 8:00 AM - 6:00 PM',
    contact: '+234 xxx xxx xxxx (Emergency)',
    features: ['Emergency Services', 'General Medicine', 'Pharmacy', 'Laboratory', 'Dental Services', 'Mental Health'],
    accessibility: true
  },
  {
    id: 'dining-hall',
    name: 'University Dining Hall',
    coordinates: [7.6410, 11.1530],
    description: 'Main cafeteria serving diverse meals to students, staff, and visitors',
    type: 'facility',
    category: 'services',
    hours: 'Breakfast: 7:00 AM - 10:00 AM, Lunch: 12:00 PM - 3:00 PM, Dinner: 6:00 PM - 9:00 PM',
    features: ['Multiple Cuisines', 'Halal Options', 'Vegetarian Menu', 'Catering Services', 'Event Space'],
    capacity: 800,
    accessibility: true
  }
];

// Location categories for filtering
export const locationCategories = {
  education: { label: 'Educational', color: '#059669', icon: 'GraduationCap' },
  administration: { label: 'Administrative', color: '#dc2626', icon: 'Building' },
  services: { label: 'Services', color: '#2563eb', icon: 'Heart' },
  recreation: { label: 'Recreation', color: '#7c3aed', icon: 'Dumbbell' },
  accommodation: { label: 'Accommodation', color: '#ea580c', icon: 'Home' }
};

// Get locations by category
export const getLocationsByCategory = (category: keyof typeof locationCategories) => {
  return campusLocations.filter(location => location.category === category);
};

// Get location by ID
export const getLocationById = (id: string) => {
  return campusLocations.find(location => location.id === id);
};

// Search locations by name or description
export const searchLocations = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return campusLocations.filter(location => 
    location.name.toLowerCase().includes(lowercaseQuery) ||
    location.description.toLowerCase().includes(lowercaseQuery) ||
    location.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Phone, Globe, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Lecturers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');

  const lecturers = [
    {
      id: 1,
      name: 'Prof. S. Abbas',
      position: 'Professor & Head of Department',
      specialization: 'Climate Change & Environmental Policy',
      email: 's.abbas@abu.edu.ng',
      phone: '+234 803 123 4567',
      office: 'Room 201, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Prof. Abbas has over 25 years of experience in climate change research and environmental policy. He leads several international research collaborations.',
      research: ['Climate Change Adaptation', 'Environmental Policy', 'Sustainable Development'],
      publications: 85,
      yearsOfExperience: 25
    },
    {
      id: 2,
      name: 'Dr. Fatima Abubakar',
      position: 'Associate Professor',
      specialization: 'GIS & Remote Sensing',
      email: 'fatima.abubakar@abu.edu.ng',
      phone: '+234 803 234 5678',
      office: 'Room 205, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop',
      bio: 'Dr. Abubakar specializes in GIS applications for urban planning and environmental monitoring. She heads the GIS Laboratory.',
      research: ['Geographic Information Systems', 'Remote Sensing', 'Urban Planning'],
      publications: 52,
      yearsOfExperience: 18
    },
    {
      id: 3,
      name: 'Dr. Ibrahim Musa',
      position: 'Senior Lecturer',
      specialization: 'Urban Geography & Planning',
      email: 'ibrahim.musa@abu.edu.ng',
      phone: '+234 803 345 6789',
      office: 'Room 103, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      bio: 'Dr. Musa focuses on urban development patterns and sustainable city planning. He has consulted for several state governments.',
      research: ['Urban Geography', 'City Planning', 'Transportation Geography'],
      publications: 38,
      yearsOfExperience: 15
    },
    {
      id: 4,
      name: 'Dr. Aisha Yusuf',
      position: 'Senior Lecturer',
      specialization: 'Hydrology & Water Resources',
      email: 'aisha.yusuf@abu.edu.ng',
      phone: '+234 803 456 7890',
      office: 'Room 108, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e6b14e?w=300&h=400&fit=crop',
      bio: 'Dr. Yusuf is an expert in water resource management and hydrological modeling, with focus on arid and semi-arid regions.',
      research: ['Hydrology', 'Water Resource Management', 'Drought Assessment'],
      publications: 45,
      yearsOfExperience: 16
    },
    {
      id: 5,
      name: 'Dr. Mohammed Salim',
      position: 'Lecturer I',
      specialization: 'Economic Geography',
      email: 'mohammed.salim@abu.edu.ng',
      phone: '+234 803 567 8901',
      office: 'Room 110, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Dr. Salim researches economic development patterns and regional economics in West Africa.',
      research: ['Economic Geography', 'Regional Development', 'Trade Geography'],
      publications: 28,
      yearsOfExperience: 12
    },
    {
      id: 6,
      name: 'Dr. Halima Ahmed',
      position: 'Lecturer I',
      specialization: 'Environmental Management',
      email: 'halima.ahmed@abu.edu.ng',
      phone: '+234 803 678 9012',
      office: 'Room 115, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
      bio: 'Dr. Ahmed specializes in environmental impact assessment and natural resource management.',
      research: ['Environmental Impact Assessment', 'Natural Resource Management', 'Ecosystem Services'],
      publications: 32,
      yearsOfExperience: 14
    },
    {
      id: 7,
      name: 'Dr. Usman Bello',
      position: 'Lecturer I',
      specialization: 'Geomorphology',
      email: 'usman.bello@abu.edu.ng',
      phone: '+234 803 789 0123',
      office: 'Room 120, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      bio: 'Dr. Bello studies landform evolution and surface processes in tropical environments.',
      research: ['Geomorphology', 'Soil Erosion', 'Landscape Evolution'],
      publications: 25,
      yearsOfExperience: 11
    },
    {
      id: 8,
      name: 'Dr. Zainab Garba',
      position: 'Lecturer II',
      specialization: 'Population Geography',
      email: 'zainab.garba@abu.edu.ng',
      phone: '+234 803 890 1234',
      office: 'Room 125, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e6b14e?w=300&h=400&fit=crop',
      bio: 'Dr. Garba specializes in demographic analysis and population dynamics in Nigeria.',
      research: ['Population Geography', 'Migration Studies', 'Demographic Analysis'],
      publications: 22,
      yearsOfExperience: 9
    },
    {
      id: 9,
      name: 'Dr. Aminu Hassan',
      position: 'Lecturer II',
      specialization: 'Climatology',
      email: 'aminu.hassan@abu.edu.ng',
      phone: '+234 803 901 2345',
      office: 'Room 130, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Dr. Hassan researches climate patterns and weather systems in the Sahel region.',
      research: ['Climatology', 'Weather Systems', 'Climate Modeling'],
      publications: 19,
      yearsOfExperience: 8
    },
    {
      id: 10,
      name: 'Dr. Khadijah Umar',
      position: 'Lecturer II',
      specialization: 'Agricultural Geography',
      email: 'khadijah.umar@abu.edu.ng',
      phone: '+234 803 012 3456',
      office: 'Room 135, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
      bio: 'Dr. Umar studies agricultural systems and rural development in Northern Nigeria.',
      research: ['Agricultural Geography', 'Rural Development', 'Food Security'],
      publications: 24,
      yearsOfExperience: 10
    },
    {
      id: 11,
      name: 'Dr. Aliyu Sani',
      position: 'Assistant Lecturer',
      specialization: 'Surveying & Cartography',
      email: 'aliyu.sani@abu.edu.ng',
      phone: '+234 803 123 4567',
      office: 'Room 140, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      bio: 'Dr. Sani specializes in modern surveying techniques and digital cartography.',
      research: ['Surveying', 'Cartography', 'GPS Technology'],
      publications: 15,
      yearsOfExperience: 6
    },
    {
      id: 12,
      name: 'Dr. Maryam Idris',
      position: 'Assistant Lecturer',
      specialization: 'Tourism Geography',
      email: 'maryam.idris@abu.edu.ng',
      phone: '+234 803 234 5678',
      office: 'Room 145, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop',
      bio: 'Dr. Idris researches sustainable tourism development and cultural geography.',
      research: ['Tourism Geography', 'Cultural Geography', 'Heritage Management'],
      publications: 18,
      yearsOfExperience: 7
    },
    {
      id: 13,
      name: 'Dr. Yakubu Mahmud',
      position: 'Assistant Lecturer',
      specialization: 'Political Geography',
      email: 'yakubu.mahmud@abu.edu.ng',
      phone: '+234 803 345 6789',
      office: 'Room 150, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Dr. Mahmud studies political processes and territorial organization in Africa.',
      research: ['Political Geography', 'Territorial Studies', 'Governance'],
      publications: 16,
      yearsOfExperience: 6
    },
    {
      id: 14,
      name: 'Dr. Hauwa Abdullahi',
      position: 'Assistant Lecturer',
      specialization: 'Medical Geography',
      email: 'hauwa.abdullahi@abu.edu.ng',
      phone: '+234 803 456 7890',
      office: 'Room 155, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
      bio: 'Dr. Abdullahi researches health geography and disease distribution patterns.',
      research: ['Medical Geography', 'Health Systems', 'Disease Mapping'],
      publications: 21,
      yearsOfExperience: 8
    },
    {
      id: 15,
      name: 'Dr. Suleiman Garba',
      position: 'Assistant Lecturer',
      specialization: 'Transportation Geography',
      email: 'suleiman.garba@abu.edu.ng',
      phone: '+234 803 567 8901',
      office: 'Room 160, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      bio: 'Dr. Garba studies transportation networks and accessibility patterns.',
      research: ['Transportation Geography', 'Network Analysis', 'Accessibility Studies'],
      publications: 13,
      yearsOfExperience: 5
    },
    {
      id: 16,
      name: 'Dr. Fatima Lawal',
      position: 'Graduate Assistant',
      specialization: 'Biogeography',
      email: 'fatima.lawal@abu.edu.ng',
      phone: '+234 803 678 9012',
      office: 'Room 165, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e6b14e?w=300&h=400&fit=crop',
      bio: 'Dr. Lawal studies plant and animal distribution patterns in West Africa.',
      research: ['Biogeography', 'Species Distribution', 'Conservation Biology'],
      publications: 9,
      yearsOfExperience: 3
    },
    {
      id: 17,
      name: 'Dr. Ahmad Tukur',
      position: 'Graduate Assistant',
      specialization: 'Disaster Management',
      email: 'ahmad.tukur@abu.edu.ng',
      phone: '+234 803 789 0123',
      office: 'Room 170, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Dr. Tukur specializes in natural hazard assessment and disaster risk reduction.',
      research: ['Disaster Management', 'Risk Assessment', 'Emergency Planning'],
      publications: 11,
      yearsOfExperience: 4
    },
    {
      id: 18,
      name: 'Dr. Aisha Danjuma',
      position: 'Graduate Assistant',
      specialization: 'Soil Geography',
      email: 'aisha.danjuma@abu.edu.ng',
      phone: '+234 803 890 1234',
      office: 'Room 175, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
      bio: 'Dr. Danjuma studies soil formation and degradation processes.',
      research: ['Soil Geography', 'Land Degradation', 'Soil Conservation'],
      publications: 8,
      yearsOfExperience: 3
    },
    {
      id: 19,
      name: 'Dr. Nura Yakubu',
      position: 'Graduate Assistant',
      specialization: 'Oceanography',
      email: 'nura.yakubu@abu.edu.ng',
      phone: '+234 803 901 2345',
      office: 'Room 180, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      bio: 'Dr. Yakubu researches coastal and marine environments.',
      research: ['Oceanography', 'Coastal Processes', 'Marine Geography'],
      publications: 7,
      yearsOfExperience: 2
    },
    {
      id: 20,
      name: 'Dr. Bilkisu Shehu',
      position: 'Graduate Assistant',
      specialization: 'Land Use Planning',
      email: 'bilkisu.shehu@abu.edu.ng',
      phone: '+234 803 012 3456',
      office: 'Room 185, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop',
      bio: 'Dr. Shehu specializes in land use planning and spatial analysis.',
      research: ['Land Use Planning', 'Spatial Analysis', 'Urban Growth'],
      publications: 10,
      yearsOfExperience: 4
    },
    {
      id: 21,
      name: 'Dr. Yusuf Adamu',
      position: 'Lecturer III',
      specialization: 'Regional Geography',
      email: 'yusuf.adamu@abu.edu.ng',
      phone: '+234 803 123 4567',
      office: 'Room 190, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Dr. Adamu studies regional development and spatial organization.',
      research: ['Regional Geography', 'Development Planning', 'Spatial Organization'],
      publications: 20,
      yearsOfExperience: 9
    },
    {
      id: 22,
      name: 'Dr. Sadiya Balarabe',
      position: 'Lecturer III',
      specialization: 'Industrial Geography',
      email: 'sadiya.balarabe@abu.edu.ng',
      phone: '+234 803 234 5678',
      office: 'Room 195, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e6b14e?w=300&h=400&fit=crop',
      bio: 'Dr. Balarabe researches industrial location and manufacturing geography.',
      research: ['Industrial Geography', 'Manufacturing', 'Location Analysis'],
      publications: 17,
      yearsOfExperience: 7
    },
    {
      id: 23,
      name: 'Dr. Kabiru Aliyu',
      position: 'Lecturer III',
      specialization: 'Quaternary Studies',
      email: 'kabiru.aliyu@abu.edu.ng',
      phone: '+234 803 345 6789',
      office: 'Room 200, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      bio: 'Dr. Aliyu studies paleoenvironments and Quaternary landscape evolution.',
      research: ['Quaternary Studies', 'Paleoenvironments', 'Landscape Evolution'],
      publications: 14,
      yearsOfExperience: 6
    },
    {
      id: 24,
      name: 'Dr. Rakiya Sani',
      position: 'Lecturer III',
      specialization: 'Gender Geography',
      email: 'rakiya.sani@abu.edu.ng',
      phone: '+234 803 456 7890',
      office: 'Room 205, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
      bio: 'Dr. Sani researches gender issues in spatial development and planning.',
      research: ['Gender Geography', 'Social Geography', 'Development Studies'],
      publications: 12,
      yearsOfExperience: 5
    },
    {
      id: 25,
      name: 'Dr. Tijjani Musa',
      position: 'Lecturer III',
      specialization: 'Atmospheric Science',
      email: 'tijjani.musa@abu.edu.ng',
      phone: '+234 803 567 8901',
      office: 'Room 210, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Dr. Musa studies atmospheric processes and air quality monitoring.',
      research: ['Atmospheric Science', 'Air Quality', 'Environmental Monitoring'],
      publications: 16,
      yearsOfExperience: 7
    },
    {
      id: 26,
      name: 'Dr. Salamatu Ibrahim',
      position: 'Senior Lecturer',
      specialization: 'Coastal Geography',
      email: 'salamatu.ibrahim@abu.edu.ng',
      phone: '+234 803 678 9012',
      office: 'Room 215, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop',
      bio: 'Dr. Ibrahim specializes in coastal processes and marine environment management.',
      research: ['Coastal Geography', 'Marine Environment', 'Coastal Management'],
      publications: 29,
      yearsOfExperience: 13
    },
    {
      id: 27,
      name: 'Dr. Ismail Garba',
      position: 'Senior Lecturer',
      specialization: 'Geoinformatics',
      email: 'ismail.garba@abu.edu.ng',
      phone: '+234 803 789 0123',
      office: 'Room 220, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      bio: 'Dr. Garba develops geospatial technologies and information systems.',
      research: ['Geoinformatics', 'Spatial Databases', 'Web GIS'],
      publications: 34,
      yearsOfExperience: 15
    },
    {
      id: 28,
      name: 'Dr. Amina Suleiman',
      position: 'Senior Lecturer',
      specialization: 'Environmental Economics',
      email: 'amina.suleiman@abu.edu.ng',
      phone: '+234 803 890 1234',
      office: 'Room 225, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
      bio: 'Dr. Suleiman studies the economic aspects of environmental resources and policies.',
      research: ['Environmental Economics', 'Resource Valuation', 'Policy Analysis'],
      publications: 31,
      yearsOfExperience: 14
    },
    {
      id: 29,
      name: 'Dr. Nasir Abdullahi',
      position: 'Senior Lecturer',
      specialization: 'Spatial Statistics',
      email: 'nasir.abdullahi@abu.edu.ng',
      phone: '+234 803 901 2345',
      office: 'Room 230, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Dr. Abdullahi develops statistical methods for spatial data analysis.',
      research: ['Spatial Statistics', 'Geostatistics', 'Data Analysis'],
      publications: 27,
      yearsOfExperience: 12
    },
    {
      id: 30,
      name: 'Dr. Hauwa Usman',
      position: 'Associate Professor',
      specialization: 'Sustainable Development',
      email: 'hauwa.usman@abu.edu.ng',
      phone: '+234 803 012 3456',
      office: 'Room 235, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e6b14e?w=300&h=400&fit=crop',
      bio: 'Dr. Usman leads research on sustainable development and environmental planning.',
      research: ['Sustainable Development', 'Environmental Planning', 'Green Technology'],
      publications: 48,
      yearsOfExperience: 19
    }
  ];

  const specializations = [
    'All', 'Climate Change & Environmental Policy', 'GIS & Remote Sensing', 'Urban Geography & Planning', 
    'Hydrology & Water Resources', 'Economic Geography', 'Environmental Management', 'Geomorphology',
    'Population Geography', 'Climatology', 'Agricultural Geography', 'Surveying & Cartography',
    'Tourism Geography', 'Political Geography', 'Medical Geography', 'Transportation Geography',
    'Biogeography', 'Disaster Management', 'Soil Geography', 'Oceanography', 'Land Use Planning',
    'Regional Geography', 'Industrial Geography', 'Quaternary Studies', 'Gender Geography',
    'Atmospheric Science', 'Coastal Geography', 'Geoinformatics', 'Environmental Economics',
    'Spatial Statistics', 'Sustainable Development'
  ];

  const filteredLecturers = lecturers.filter(lecturer => {
    const matchesSearch = lecturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecturer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === 'All' || lecturer.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Meet our distinguished faculty of 30 members who are leaders in their fields, 
            committed to excellence in teaching and groundbreaking research.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search faculty by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {specializations.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLecturers.map((lecturer) => (
              <div key={lecturer.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={lecturer.image} 
                  alt={lecturer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{lecturer.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{lecturer.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{lecturer.specialization}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="mr-2 text-green-500" size={16} />
                      <span className="truncate">{lecturer.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="mr-2 text-green-500" size={16} />
                      <span>{lecturer.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="mr-2 text-green-500" size={16} />
                      <span>{lecturer.publications} Publications</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Research Interests:</h4>
                    <div className="flex flex-wrap gap-1">
                      {lecturer.research.slice(0, 2).map((area, index) => (
                        <span key={index} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          {area}
                        </span>
                      ))}
                      {lecturer.research.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{lecturer.research.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{lecturer.bio}</p>
                  
                  <Link 
                    to={`/lecturers/${lecturer.id}`}
                    className="block w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                  >
                    View Full Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredLecturers.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No faculty found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Faculty Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30</div>
              <div className="text-gray-600">Total Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-600">Professors & Associates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">650+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Research Areas</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lecturers;

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
      name: 'Dr. S. Abbas',
      position: 'Professor & Head of Department',
      specialization: 'Climate Change & Environmental Policy',
      email: 's.abbas@abu.edu.ng',
      phone: '+234 803 123 4567',
      office: 'Room 201, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop',
      bio: 'Dr. S. Abbas has over 20 years of experience in climate change research and environmental policy. He leads several international research collaborations.',
      research: ['Climate Change Adaptation', 'Environmental Policy', 'Sustainable Development'],
      publications: 45
    },
    {
      id: 2,
      name: 'Prof. Bernedine Akpu',
      position: 'Senior Lecturer',
      specialization: 'GIS & Remote Sensing',
      email: 'fatima.abubakar@abu.edu.ng',
      phone: '+234 803 234 5678',
      office: 'Room 205, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop',
      bio: 'Dr. Abubakar specializes in GIS applications for urban planning and environmental monitoring. She heads the GIS Laboratory.',
      research: ['Geographic Information Systems', 'Remote Sensing', 'Urban Planning'],
      publications: 32
    },
    {
      id: 3,
      name: 'Dr. A. Balarebe',
      position: 'Lecturer',
      specialization: 'Urban Geography & Planning',
      email: 'ibrahim.musa@abu.edu.ng',
      phone: '+234 803 345 6789',
      office: 'Room 103, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop',
      bio: 'Dr. Musa focuses on urban development patterns and sustainable city planning. He has consulted for several state governments.',
      research: ['Urban Geography', 'City Planning', 'Transportation Geography'],
      publications: 28
    },
    {
      id: 4,
      name: 'Dr. Muktar',
      position: 'Lecturer',
      specialization: 'Hydrology & Water Resources',
      email: 'aisha.yusuf@abu.edu.ng',
      phone: '+234 803 456 7890',
      office: 'Room 108, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop',
      bio: 'Dr. Yusuf is an expert in water resource management and hydrological modeling, with focus on arid and semi-arid regions.',
      research: ['Hydrology', 'Water Resource Management', 'Drought Assessment'],
      publications: 25
    },
    {
      id: 5,
      name: 'Dr. Muhammed Ismail',
      position: 'Lecturer',
      specialization: 'Economic Geography',
      email: 'mohammed.salim@abu.edu.ng',
      phone: '+234 803 567 8901',
      office: 'Room 110, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop',
      bio: 'Dr. Salim researches economic development patterns and regional economics in West Africa.',
      research: ['Economic Geography', 'Regional Development', 'Trade Geography'],
      publications: 18
    },
    {
      id: 6,
      name: 'Dr. Muhammed Ismail',
      position: 'Lecturer',
      specialization: 'Economic Geography',
      email: 'mohammed.salim@abu.edu.ng',
      phone: '+234 803 567 8901',
      office: 'Room 110, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop',
      bio: 'Dr. Salim researches economic development patterns and regional economics in West Africa.',
      research: ['Economic Geography', 'Regional Development', 'Trade Geography'],
      publications: 18
    },
    {
      id: 7,
      name: 'Dr. Muhammed Ismail',
      position: 'Lecturer',
      specialization: 'Economic Geography',
      email: 'mohammed.salim@abu.edu.ng',
      phone: '+234 803 567 8901',
      office: 'Room 110, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop',
      bio: 'Dr. Salim researches economic development patterns and regional economics in West Africa.',
      research: ['Economic Geography', 'Regional Development', 'Trade Geography'],
      publications: 18
    },
    {
      id: 8,
      name: 'Dr. Muhammed Ismail',
      position: 'Lecturer',
      specialization: 'Economic Geography',
      email: 'mohammed.salim@abu.edu.ng',
      phone: '+234 803 567 8901',
      office: 'Room 110, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop',
      bio: 'Dr. Salim researches economic development patterns and regional economics in West Africa.',
      research: ['Economic Geography', 'Regional Development', 'Trade Geography'],
      publications: 18
    },
    {
      id: 9,
      name: 'Dr. Muhammed Ismail',
      position: 'Lecturer',
      specialization: 'Economic Geography',
      email: 'mohammed.salim@abu.edu.ng',
      phone: '+234 803 567 8901',
      office: 'Room 110, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop',
      bio: 'Dr. Salim researches economic development patterns and regional economics in West Africa.',
      research: ['Economic Geography', 'Regional Development', 'Trade Geography'],
      publications: 18
    },
    {
      id: 10,
      name: 'Dr. Amina Maiwada',
      position: 'Lecturer',
      specialization: 'Environmental Management',
      email: 'halima.ahmed@abu.edu.ng',
      phone: '+234 803 678 9012',
      office: 'Room 115, Environmental Design Building',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop',
      bio: 'Dr. Ahmed specializes in environmental impact assessment and natural resource management.',
      research: ['Environmental Impact Assessment', 'Natural Resource Management', 'Ecosystem Services'],
      publications: 22
    }
  ];

  const specializations = ['All', 'Climate Change & Environmental Policy', 'GIS & Remote Sensing', 'Urban Geography & Planning', 'Hydrology & Water Resources', 'Economic Geography', 'Environmental Management'];

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
            Meet our distinguished faculty members who are leaders in their fields, 
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
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{lecturer.name}</h3>
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

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{lecturer.bio}</p>
                  
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
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Total Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600">Professors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
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

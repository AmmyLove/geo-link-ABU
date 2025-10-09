import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Phone, Globe, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profMamman from '../images/profMamman.jpeg';
import AHA from '../images/AHA.jpg';
import profSawa from '../images/prof-b-a-sawa.jpg';
import drAJ from '../images/drAJ.jpg';
import AKHADELOR from '../images/AKHADELOR.jpg';
import drHamza from '../images/drHamza.jpg';
import drMI from '../images/drMI.jpg';
import razak from '../images/razak.jpg';
import gani from '../images/gani.jpg';
import ABalarebe from '../images/ABalarebe.jpeg';
import BA from '../images/BA.jpg';
import Mairo from '../images/Mairo.jpg';
import ROY from '../images/ROY.jpg';
import Buba from '../images/Buba.jpg';
import SMB from '../images/SMB.jpeg';
import Nura from '../images/Nura.jpg';
import YYO from '../images/YYO.jpeg';
import Maiwada from '../images/Maiwada.jpeg';
import IGUISI from '../images/IGUISI.jpg';

const Lecturers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');

  const lecturers = [
    {
      id: 2,
      name: 'Prof. Moses Mamman',
      position: 'Professor',
      specialization: 'Population & Demographic Studies, Resources & Environment, Gender & Development issues',
      email: 'mammanmoses@gmail.com',
      image: profMamman,
      research: ['Population & Demographic Studies', 'Resources & Environment', 'Gender & Development issues'],
      publications: '40+',
      yearsOfExperience: 37,
      gender: 'Male'
    },
    {
      id: 3,
      name: 'Prof. Edwin Osawe Iguisi ',
      position: 'Professor',
      specialization: 'Climate Change Adaptation & Vulnerability Assessment, Disaster Risk Reduction & Management, Hydrology, Soil & Water Resource Management, Remote Sensing / GIS Applications in Environmental Science, Environmental Planning & Policy',
      email: '',
      image: IGUISI,
      research: ['Climate Change Adaptation & Vulnerability Assessment', 'Disaster Risk Reduction & Management', 'Hydrology, Soil & Water Resource Management', 'Remote Sensing / GIS Applications in Environmental Science', 'Environmental Planning & Policy'],
      publications: '100+',
      yearsOfExperience: '30+',
      gender: 'Male'
    },
    {
      id: 6,
      name: 'Prof. Sawa Bulus Ajiya',
      position: 'Professor',
      specialization: 'Climate Change Studies',
      email: 'senatorsawa@gmail.com',
      image: profSawa,
      research: ['Climate Change Adaptation & Resilience'],
      publications: '71',
      yearsOfExperience: 26,
      gender: 'Male'
    },
    {
      id: 8,
      name: 'Prof. Rafiu Yusuf',
      position: 'Professor',
      specialization: 'Development Studies, Rural Development and Agricultural Geography',
      email: 'royusoba@yahoo.co.uk',
      image: ROY,
      research: ['Rural development issues', 'Development issues', 'Agricultural Issues'],
      publications: 'Several',
      yearsOfExperience: 18,
      gender: 'Male'
    },
    {
      id: 9,
      name: 'Prof. Yusuf Yakubu Obadaki',
      position: 'Professor',
      specialization: 'Hydrology, Fluvial Geomorphology and Water Resources Management',
      email: 'yyobadaki@abu.edu.ng',
      image: YYO,
      research: ['Drainage Basin Geomorphology', 'Reservoir Monitoring and Management', 'Water Quality and Quantity Studies', 'Waste Management'],
      publications: '86',
      yearsOfExperience: 24,
      gender: 'Male'
    },
    {
      id: 10,
      name: 'Prof. Benedine Akpu',
      position: 'Professor',
      specialization: 'Environmental Management, Urban studies, Remote Sensing and GIS',
      email: 'benyb4real@gmail.com',
      image: BA,
      research: ['Environmental modeling', 'Urban Analysis', 'Disaster mapping and monitoring', 'Landuse and land cover modelling'],
      publications: '41',
      yearsOfExperience: 19,
      gender: 'Female'
    },
    {
      id: 12,
      name: 'Dr. Abdullahi Jibrin',
      position: 'Associate Professor',
      specialization: 'Biogeography, Pedology, Environmental Management & Climate change',
      email: 'ajibrin@abu.edu.ng',
      office: 'Room 140, Environmental Design Building',
      image: drAJ,
      research: ['Biomass Carbon stock and Sequestration  Assessment for Climate Change Mitigation and Adaptation through Monitoring, Reporting and Verification (MRV)'],
      publications: '37 Peer Reviewed Journal Publications and 16 Conference Proceedings Publications',
      yearsOfExperience: 14,
      gender: 'Male'
    },
    {
      id: 13,
      name: 'Dr. Muhammad Isma’il',
      position: 'Associate Professor',
      specialization: 'Energy Geographies, Economic Geography, Remote Sensing & GIS',
      email: 'migeogjameel@gmail.com',
      image: drMI,
      research: ['Energy Geographies', 'Economic Geography', 'Remote Sensing', 'GIS'],
      publications: '80',
      yearsOfExperience: 14,
      gender: 'Male'
    },
    {
      id: 14,
      name: 'Dr. Hamza Mohammed',
      position: 'Senior Lecturer',
      specialization: 'Climatology, Agro Climatology, Climates, Transport, Transport Management, Environmental Management, Climate Change, Sustainable Environmental Management',
      email: 'mhamza@abu.edu.ng',
      image: drHamza,
      research: ['Climatology', 'Agro Climatology', 'Climates', 'Transport', 'Transport Management', 'Environmental Management', 'Climate Change', 'Sustainable Environmental Management'],
      publications: '30+ Journal Publications and Proceedings & 1 Book',
      yearsOfExperience: 12,
      gender: 'Male'
    },
    {
      id: 16,
      name: 'Dr. Buba Adamu Ndawayo',
      position: 'Reader',
      specialization: 'Environmental Management',
      email: 'adamububandawayo2013@gmail.com',
      image: Buba,
      research: ['Modelling', 'Environmental Management'],
      publications: '20',
      yearsOfExperience: 6,
      gender: 'Male'
    },
    {
      id: 18,
      name: 'Dr. Mairo Abubakar',
      position: 'Senior Lecturer',
      specialization: 'Population and Medical Geography',
      email: 'maryamabubakar08@gmail.com',
      image: Mairo,
      research: ['Population Studies'],
      publications: '12 peer reviewed journal papers',
      yearsOfExperience: 18,
      gender: 'Female'
    },
    {
      id: 19,
      name: 'Dr. Amina Maiwada',
      position: 'Senior Lecturer',
      specialization: 'Population Geography',
      email: 'amaiwada@gmail.com',
      image: Maiwada,
      research: ['Population & Demography'],
      publications: '29',
      yearsOfExperience: 12,
      gender: 'Female'
    },
    {
      id: 20,
      name: 'Dr. Suleiman Musa Balarebe',
      position: 'Lecturer II',
      specialization: 'Climate Change & Development',
      email: 'suleimansmb69@gmail.com',
      image: SMB,
      research: ['Climate Change & Development'],
      publications: '17',
      yearsOfExperience: 9,
      gender: 'Male'
    },
    {
      id: 21,
      name: 'Dr. Ahmad Hamza Abdullahi',
      position: 'Lecturer II',
      specialization: 'Energy Geographies, Economic Geography, Remote Sensing & GIS',
      email: 'ahmadhamzaabdul@gmail.com',
      image: AHA,
      research: ['Environmental Health'],
      publications: '31',
      yearsOfExperience: 7,
      gender: 'Male'
    },
    {
      id: 22,
      name: 'Dr. Muhammad Oyale Akhadelor',
      position: 'Dr.',
      specialization: 'Economic Geography, Transport Geography & Environmental Management',
      email: 'msakhadelor@gmail.com',
      image: AKHADELOR,
      research: ['Transport Economic', 'Policy and Planning', 'Development and Environment'],
      publications: '36',
      yearsOfExperience: 1,
      gender: 'Male'
    },
    {
      id: 24,
        name: 'Dr. Usman Jibrin Gani',
        position: 'Lecturer',
        specialization: 'Transport Geography',
        email: 'ardomodii@yahoo.com',
        image: gani,
        research: ['Transport Smart', 'AI'],
        publications: '21',
        yearsOfExperience: 12,
        gender: 'Male'
    },
    {
      id: 25,
      name: 'Dr. Abdullahi Balarabe',
      position: 'Dr.',
      specialization: 'Environmental management, Hydrology',
      email: 'abalarabe@abu.edu.ng',
      image: ABalarebe,
      research: ['Transport Economic', 'Policy and Planning', 'Development and Environment'],
      publications: '30',
      yearsOfExperience: 12,
      gender: 'Male'
    },
    {
    id: 26,
      name: 'Mr. Nuraddin Ibrahim Muhammad',
      position: '',
      specialization: 'Pedology',
      email: 'muhdnuraddin13@gmail.com',
      image: Nura,
      research: ['Soil Analysis using Geospatial Techniques'],
      publications: '5',
      yearsOfExperience: 7,
      gender: 'Male'
    },
    {
      id: 27,
      name: 'Mr. Abdulrazak Ahmed Kumo',
      position: '',
      specialization: 'Environmental Management',
      email: 'talk2abdulkumo@gmail.com',
      image: razak,
      research: ['Renewable Energies', 'Environmental Impact Assessment (EIA)', 'Energy Transition', 'Energy Poverty'],
      publications: '38 Journals & 8 Conferences',
      yearsOfExperience: 6,
      gender: 'Male'
    }
  ];

  const positions = [
    'All', 
    'Professor', 
    'Associate Professor',
    'Reader', 
    'Senior Lecturer',
    'Lecturer I', 
    'Lecturer II', 
    'Assistant Lecturer', 
    'Graduate Assistant'
  ];

  const filteredLecturers = lecturers.filter(lecturer => {
    const matchesSearch = lecturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecturer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPosition === 'All' || lecturer.position === selectedPosition;
    const matchesGender = selectedGender === 'All' || lecturer.gender === selectedGender;
    return matchesSearch && matchesPosition && matchesGender;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Academic Team</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Meet our distinguished academic team of over 20 members who are leaders in their fields, 
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
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {positions.map(pos => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="All">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
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
      {/*<section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
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
      </section>*/}

      <Footer />
    </div>
  );
};

export default Lecturers;


import React, { useState } from 'react';
import { Search, BookOpen, Clock, Users, Star, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    {
      id: 1,
      code: 'GEO 101',
      title: 'Introduction to Physical Geography',
      level: '100',
      category: 'Physical Geography',
      credits: 3,
      duration: '15 weeks',
      description: 'Discover the dynamic forces shaping our planet! Explore landforms, climate patterns, and natural processes that create the diverse landscapes around us.',
      highlights: ['Field trips to local landforms', 'Weather station operations', 'Geological mapping exercises'],
      prerequisites: 'None',
      careerRelevance: 'Essential foundation for environmental consulting, geological surveys, and climate research careers.'
    },
    {
      id: 2,
      code: 'GEO 201',
      title: 'Geographic Information Systems (GIS)',
      level: '200',
      category: 'GIS & Remote Sensing',
      credits: 4,
      duration: '15 weeks',
      description: 'Master the technology transforming how we understand our world! Learn cutting-edge mapping software used by top companies globally.',
      highlights: ['Hands-on ArcGIS training', 'Drone mapping projects', 'Real-world spatial analysis'],
      prerequisites: 'GEO 101',
      careerRelevance: 'High-demand skills for tech companies, government agencies, and environmental firms. Starting salaries: ₦2-4M annually.'
    },
    {
      id: 3,
      code: 'GEO 301',
      title: 'Urban Planning and Development',
      level: '300',
      category: 'Human Geography',
      credits: 3,
      duration: '15 weeks',
      description: 'Shape the cities of tomorrow! Design sustainable urban spaces and solve complex metropolitan challenges facing Nigeria and Africa.',
      highlights: ['City planning simulations', 'Community engagement projects', 'Smart city technologies'],
      prerequisites: 'GEO 201, GEO 202',
      careerRelevance: 'Direct pathway to urban planning careers with government and private development firms.'
    },
    {
      id: 4,
      code: 'GEO 302',
      title: 'Environmental Impact Assessment',
      level: '300',
      category: 'Environmental Management',
      credits: 4,
      duration: '15 weeks',
      description: 'Become an environmental guardian! Learn to assess and mitigate the environmental impacts of major development projects.',
      highlights: ['Real EIA case studies', 'Environmental monitoring techniques', 'Stakeholder consultation methods'],
      prerequisites: 'GEO 101, GEO 205',
      careerRelevance: 'High-paying opportunities with oil companies, construction firms, and international organizations.'
    },
    {
      id: 5,
      code: 'GEO 401',
      title: 'Climate Change and Adaptation',
      level: '400',
      category: 'Environmental Management',
      credits: 3,
      duration: '15 weeks',
      description: 'Join the fight against climate change! Develop innovative solutions for climate adaptation and mitigation in Africa.',
      highlights: ['Climate modeling software', 'Renewable energy projects', 'Policy development workshops'],
      prerequisites: 'GEO 301, GEO 302',
      careerRelevance: 'Growing field with opportunities in international NGOs, government agencies, and green technology firms.'
    },
    {
      id: 6,
      code: 'GEO 205',
      title: 'Remote Sensing Applications',
      level: '200',
      category: 'GIS & Remote Sensing',
      credits: 3,
      duration: '15 weeks',
      description: 'See the world from space! Use satellite imagery and aerial photography to monitor environmental changes and natural resources.',
      highlights: ['Satellite image analysis', 'Landsat data processing', 'Change detection techniques'],
      prerequisites: 'GEO 101',
      careerRelevance: 'Essential for careers in agriculture monitoring, disaster management, and environmental research.'
    },
    {
      id: 7,
      code: 'GEO 303',
      title: 'Hydrology and Water Resources',
      level: '300',
      category: 'Physical Geography',
      credits: 4,
      duration: '15 weeks',
      description: 'Master water - our most precious resource! Study water cycles, river systems, and sustainable water management strategies.',
      highlights: ['River flow measurements', 'Groundwater exploration', 'Flood modeling exercises'],
      prerequisites: 'GEO 101, GEO 201',
      careerRelevance: 'Critical for water management agencies, environmental consulting, and drought mitigation programs.'
    },
    {
      id: 8,
      code: 'GEO 402',
      title: 'Research Methods in Geography',
      level: '400',
      category: 'Research Methods',
      credits: 3,
      duration: '15 weeks',
      description: 'Become a research expert! Master both quantitative and qualitative research methods essential for your final year project and career.',
      highlights: ['Statistical analysis software', 'Survey design techniques', 'Data visualization methods'],
      prerequisites: 'All 300-level courses',
      careerRelevance: 'Research skills valued across all geography career paths, especially for pursuing postgraduate studies.'
    }
  ];

  const levels = ['All', '100', '200', '300', '400'];
  const categories = ['All', 'Physical Geography', 'Human Geography', 'Environmental Management', 'GIS & Remote Sensing', 'Research Methods'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover exciting courses that will prepare you for a successful career in geography and environmental management. 
            Each course combines theory with practical skills that employers value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <div className="flex items-center justify-center">
              <BookOpen className="mr-2" size={20} />
              <span>30+ Specialized Courses</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="mr-2" size={20} />
              <span>Small Class Sizes</span>
            </div>
            <div className="flex items-center justify-center">
              <Star className="mr-2" size={20} />
              <span>Industry-Relevant Skills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses by name, code, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level} value={level}>
                  {level === 'All' ? 'All Levels' : `${level} Level`}
                </option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{course.code}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">{course.title}</h4>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                      {course.level} Level
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      <span>{course.credits} Credits</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-4">
                    {course.category}
                  </span>

                  <p className="text-gray-700 mb-4 leading-relaxed">{course.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Course Highlights:</h5>
                    <ul className="space-y-1">
                      {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <ChevronRight size={14} className="mr-2 text-green-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="mb-2">
                      <span className="font-medium text-gray-700">Prerequisites: </span>
                      <span className="text-gray-600">{course.prerequisites}</span>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                      <h6 className="font-medium text-yellow-800 mb-1">Career Relevance:</h6>
                      <p className="text-yellow-700 text-sm">{course.careerRelevance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;


import React, { useState } from 'react';
import { Search, BookOpen, Clock, Users, Star, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    // 100 Level First Semester (10 courses)
    { id: 1, code: 'GENS101', title: 'Nationalism', level: '100', semester: 'First', category: 'General', credits: 1, prerequisites: 'None', description: 'Fundamental concepts of physical geography including landforms, climate, and natural processes.' },
    { id: 2, code: 'GENS102', title: 'Environmental Health', level: '100', semester: 'First', category: 'General', credits: 1, prerequisites: 'None', description: 'Introduction to sanitation, pollution control, and environmental factors affecting public health.' },
    { id: 3, code: 'GENS103', title: 'English & Communication Skills', level: '100', semester: 'First', category: 'General', credits: 2, prerequisites: 'O/L Credit English', description: 'Development of oral and written communication for academic and professional purposes.' },
    { id: 4, code: 'GENS107', title: 'History & Philosophy of Science ', level: '100', semester: 'First', category: 'General', credits: 1, prerequisites: 'None', description: 'Historical and philosophical foundations of scientific inquiry.' },
    { id: 5, code: 'GEOG101', title: 'Introduction to Human Geography', level: '100', semester: 'First', category: 'Core', credits: 2, prerequisites: 'O/L Credit Geography', description: 'Basic principles of human geography covering population, culture, and settlement patterns.' },
    { id: 6, code: 'GEOG103', title: "Man’s Physical Environment I", level: '100', semester: 'First', category: 'Core', credits: 2, prerequisites: 'O/L Credit Geography', description: 'Introduction to physical elements of the environment including landforms, climate, and vegetation.' },
    { id: 7, code: 'GEOG105', title: 'Introduction to Practical Geography', level: '100', semester: 'First', category: 'Core', credits: 2, prerequisites: 'O/L Credit Geography', description: 'Basic skills in map reading, scale, direction, and interpretation of physical and human landscapes.' },
    { id: 8, code: 'GEOG107', title: 'Zaria and Its Region', level: '100', semester: 'First', category: 'Core', credits: 1, prerequisites: 'O/L Credit Geography', description: 'Study of the physical, economic, and social characteristics of Zaria and its surrounding areas.' },
    { id: 9, code: 'BIOL111', title: 'Plant Biology', level: '100', semester: 'First', category: 'Cognate Core', credits: 2, prerequisites: 'O/L Credit Biology', description: 'Structure, classification, and functions of plants; introduction to plant ecology and physiology' },
    { id: 10, code: 'GEOL101', title: 'Introduction to Physical Geology', level: '100', semester: 'First', category: 'Cognate Core', credits: 1, prerequisites: 'O/L Credit Geography', description: 'Basic principles of geology including earth materials, plate tectonics, and geologic time.' },

    // 100 Level Second Semester (10 courses)
    { id: 11, code: 'GEOG102', title: 'Man, Location and Resources', level: '100', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'O/L Credit Geography', description: 'Analysis of human activity in relation to location and resource availability.' },
    { id: 12, code: 'GEOG104', title: 'Man’s Physical Environment II', level: '100', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'O/L Credit Geography', description: 'Continuation of physical geography including climate and geomorphology.'},
    { id: 13, code: 'GEOG106', title: 'Introduction to Environmental Resources', level: '100', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'O/L Credit Geography', description: 'Overview of natural resource types and their conservation.' },
    { id: 14, code: 'GEOG108', title: 'Elementary Statistics for Geographers', level: '100', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'O/L Credit Geography', description: 'Introductory stats methods for spatial data analysis.'},
    { id: 15, code: 'GEOG112', title: 'Introduction to Cartography', level: '100', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'O/L Credit Geography', description: 'Basics of map-making: scale, symbols, and geographic projections.' },
    { id: 16, code: 'BIOL112', title: 'Introductory Ecology', level: '100', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'O/L Credit Biology', description: 'Study of ecosystems, energy flow, population dynamics, and organism-environment interactions.' },
    { id: 17, code: 'GEOL102', title: 'Introduction to Petrology and Mineralogy ', level: '100', semester: 'Second', category: 'Core', credits: 1, prerequisites: 'O/L Credit Geography', description: 'Examination of rock-forming processes and minerals.' },
    { id: 18, code: 'STAT102', title: 'Statistics', level: '100', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'O/L Credit Mathematics', description: 'Fundamental tools and methods for data analysis in scientific research.' },

    // 200 Level First Semester (10 courses)
    { id: 19, code: 'GENS201', title: 'Moral Philosophy', level: '200', semester: 'First', category: 'Core', credits: 1, prerequisites: 'GEOG101', description: 'Study of ethical theories and moral reasoning within individual and social contexts.' },
    { id: 20, code: 'GEOG201', title: 'Spatial Organization of Society', level: '200', semester: 'First', category: 'Core', credits: 2, prerequisites: 'None', description: 'Examination of spatial patterns in human activity and societal structures.' },
    { id: 21, code: 'GEOG203', title: 'Introduction to Geomorphology & Soil Geography', level: '200', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG103', description: 'Study of landforms, soil properties, and distribution.' },
    { id: 22, code: 'GEOG205', title: 'Quantitative Techniques ', level: '200', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG108', description: 'Application of mathematical and statistical methods in geographic analysis.' },
    { id: 23, code: 'GEOG207', title: 'Local Field Course', level: '200', semester: 'First', category: 'Core', credits: 2, prerequisites: 'None', description: 'Practical field experience in local geographic research and data collection.' },
    { id: 24, code: 'GEOG209', title: ' Introduction to Elementary Land Surveying', level: '200', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG105', description: 'Fundamentals of surveying techniques and instruments.' },
    { id: 25, code: 'BIOL211', title: 'General Ecology ', level: '200', semester: 'First', category: 'Core', credits: 2, prerequisites: 'BIOL112',description: 'Comprehensive examination of ecological principles and interrelationships.' },


    // 200 Level Second Semester (10 courses)
    { id: 26, code: 'GEOG202', title: 'Man & His Environment', level: '200', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG102', description: 'Evaluation of how human activities interact with environmental systems.' },
    { id: 27, code: 'GEOG204', title: 'Introduction to Climate & Biogeography', level: '200', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG104', description: 'Study of climate systems and geographic distribution of life.' },
    { id: 28, code: 'GEOG206', title: 'Introduction to Remote Sensing', level: '200', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'None', description: 'Fundamentals of acquiring geographic data through aerial and satellite imagery.' },
    { id: 29, code: 'GEOG208', title: 'Spatial Analysis', level: '200', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG108', description: 'Techniques for analyzing spatial patterns and processes in geographic data.' },
    { id: 30, code: 'GEOG212', title: 'Geography of African Development', level: '200', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'None', description: ' Exploration of socio-economic and political development issues across Africa.' },
    { id: 31, code: 'GEOG214', title: 'Population Geography', level: '200', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG101', description: 'Study of population distribution, growth, and migration dynamics.' },
    { id: 32, code: 'GEOL208', title: 'Geology & Mineral Resources of Nigeria', level: '200', semester: 'Second', category: 'Cognate Core', credits: 2, prerequisites: 'GEOL102', description: 'Survey of Nigeria’s geology and major mineral deposits.' },

    // 300 Level First Semester (10 courses)
    { id: 33, code: 'GEOG301', title: 'Research Methods', level: '300', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG205', description: 'Introduction to geographic research design, methods, and writing proposals.' },
    { id: 34, code: 'GEOG303', title: 'Soil Geography ', level: '300', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG203', description: 'In-depth study of soil types, formation, and environmental importance.' },
    { id: 35, code: 'GEOG305', title: 'Economic Geography', level: '300', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG201', description: 'Examination of global economic activities and spatial distribution.' },
    { id: 36, code: 'GEOG307', title: 'Field Course', level: '300', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG207', description: ' Advanced fieldwork emphasizing geographic research methodologies.' },
    { id: 37, code: 'GEOG309', title: 'Biogeography', level: '300', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG204', description: 'Study of geographic distributions of organisms and ecosystems.' },
    { id: 38, code: 'GEOG311', title: 'Climatology', level: '300', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG204', description: 'Analysis of atmospheric processes and global climate systems.' },
    { id: 39, code: 'GEOG313', title: 'Geographic Information Systems (GIS)', level: '300', semester: 'First', category: ' Core', credits: 2, prerequisites: 'GEOG206', description: 'Introduction to GIS concepts and spatial data techniques.' },
    { id: 40, code: 'GEOG315', title: 'Transportation Geography', level: '300', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG205', description: 'Study of transport networks and their influence on spatial interaction.' },
    { id: 41, code: 'GEOG317', title: 'Geomorphology', level: '300', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG203', description: "Detailed analysis of Earth's surface processes and landform development." },

    // 300 Level Second Semester - IT/SIWES
    { id: 42, code: 'GEOG300', title: 'Industrial Training (IT/SIWES)', level: '300', semester: 'Second', category: 'Professional Training', credits: 6, prerequisites: 'None', description: 'SIWES – Supervised Industrial Work Experience Scheme for practical workplace training. Practical work experience in geographical and environmental organizations.' },

    // 400 Level First Semester (12 courses)
    { id: 43, code: 'GEOG401', title: 'Systematic Geography of Nigeria I', level: '400', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG208', description: 'Study of Nigeria’s regional physical and human geography.' },
    { id: 44, code: 'GEOG403', title: 'Philosophy & Methodology in Geography', level: '400', semester: 'First', category: 'Core', credits: 2, prerequisites: 'None', description: 'Examination of theoretical and methodological approaches in geography.' },
    { id: 45, code: 'GEOG405', title: 'Advanced Remote Sensing', level: '400', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG305', description: 'The Developing World' },
    { id: 46, code: 'GEOG407', title: 'Pedology', level: '400', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG303', description: 'Scientific study of soil formation, classification, and land use.' },
    { id: 47, code: 'GEOG409', title: 'Tropical Climatology', level: '400', semester: 'First', category: 'Core', credits: 2, prerequisites: 'GEOG311', description: 'Examination of tropical climate characteristics and systems.' },
    { id: 48, code: 'GEOG411', title: 'Population, Resources & Environment ', level: '400', semester: 'First', category: 'Elective', credits: 2, prerequisites: 'GEOG212', description: 'Study of the interactions between population growth, resources, and the environment.' },
    { id: 49, code: 'GEOG413', title: 'Fluvial Geomorphology', level: '400', semester: 'First', category: 'Elective', credits: 2, prerequisites: 'GEOG317', description: 'Analysis of river systems and processes shaping them.' },
    { id: 50, code: 'GEOG415', title: ' Industrial Location', level: '400', semester: 'First', category: 'Elective', credits: 2,prerequisites: 'GEOG305',  description: 'Study of spatial factors influencing industrial placement and development.' },
    { id: 51, code: 'GEOG417', title: 'Urbanization', level: '400', semester: 'First', category: 'Elective', credits: 2, prerequisites: 'GEOG305', description: 'Examination of urban growth, spatial structure, and planning.' },
    { id: 52, code: 'GEO419', title: 'Political Geography', level: '400', semester: 'First', category: 'Elective', credits: 2, prerequisites: 'GEOG305', description: 'Geopolitical analysis of power, territory, and boundaries.' },
    { id: 53, code: 'GEOG421', title: 'Medical Geography', level: '400', semester: 'First', category: 'Elective', credits: 2, prerequisites: 'GEOG212', description: 'Study of health outcomes and disease patterns in spatial contexts.' },
    { id: 54, code: 'GEOG423', title: 'Environmental Hazard', level: '400', semester: 'First', category: 'Core', credits: 2, prerequisites: 'None',  description: 'Analysis of natural and human-induced environmental risk and mitigation.' },
    { id: 55, code: 'GEOG425', title: 'Field & Laboratory Techniques in Physical Geography', level: '400', semester: 'First', category: 'Elective', credits: 2, prerequisites: 'GEOG205', description: 'Practical training in geographic field and lab methods.' },

    // 400 Level Second Semester (8 courses)
    { id: 56, code: 'GEOG400', title: 'Research Project', level: '400', semester: 'Second', category: 'Core', credits: 6, prerequisites: 'GEOG300', description: 'Independent supervised research culminating in a geographic study report.' },
    { id: 57, code: 'GEOG402', title: 'Systematic Geography of Nigeria II', level: '400', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG208', description: 'Continued regional geographic studies focusing on Nigeria.' },
    { id: 58, code: 'GEOG404', title: 'The Developed World', level: '400', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG208', description: 'Analysis of development issues and spatial patterns in industrialized countries.' },
    { id: 59, code: 'GEOG406', title: 'Applied Climatology', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG311', description: 'Practical application of climatological data in planning contexts.' },
    { id: 60, code: 'GEOG408', title: 'Soil Survey & Land Evaluation', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG303', description: 'Techniques for soil classification and land use assessment.' },
    { id: 61, code: 'GEOG412', title: 'Hydrology & Water Resources', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG311', description: 'Study of water cycle, management, and resource planning.' },
    { id: 62, code: 'GEOG414', title: 'Tropical Geomorphology', level: '400', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG207', description: 'Examination of geomorphological features in tropical environments.' },
    { id: 63, code: 'GEOG416', title: 'Agricultural Geography', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG305', description: 'Study of agricultural land use and food production patterns.' },
    { id: 64, code: 'GEOG418', title: 'Population & Migration', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG214', description: 'Analysis of migration trends and population distribution drivers.' },
    { id: 65, code: 'GEOG422', title: 'Rural Geography', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG305', description: 'Study of rural settlement patterns, land-use change, and rural development.' },
    { id: 66, code: 'GEOG424', title: 'City Structure & Organization', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG304', description: 'Investigation of urban spatial structure and functional organization.' },
    { id: 67, code: 'GEOG426', title: 'Regional Development', level: '400', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG305', description: 'Study of regional policies and economic development strategies.' },
    { id: 68, code: 'GEOG428', title: 'Geography of Economic Development', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG305', description: 'Examination of economic growth from a spatial perspective.' },
    { id: 69, code: 'GEOG432', title: 'Application of GIS & Remote Sensing', level: '400', semester: 'Second', category: 'Elective', credits: 2, prerequisites: 'GEOG313', description: 'Integrative use of GIS and remote sensing for geographic analysis.' },
    { id: 70, code: 'GEOG434', title: 'Ecosystem', level: '400', semester: 'Second', category: 'Core', credits: 2, prerequisites: 'GEOG309', description: 'Study of ecosystem components, functions, and biotic-abiotic interactions.' }
  ];

  const levels = ['All', '100', '200', '300', '400'];
  const semesters = ['All', 'First', 'Second'];
  const categories = ['All', 'Physical Geography', 'Human Geography', 'Environmental Management', 'GIS & Remote Sensing', 'Research Methods', 'Cartography', 'Surveying', 'Professional Skills', 'Professional Training'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSemester = selectedSemester === 'All' || course.semester === selectedSemester;
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesSemester && matchesCategory;
  });

  // Group courses by level and semester
  const groupedCourses = filteredCourses.reduce((acc, course) => {
    const key = `${course.level}-${course.semester}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(course);
    return acc;
  }, {} as Record<string, typeof courses>);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Explore our comprehensive curriculum of 70+ courses designed to prepare you for a successful career in geography and environmental management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <div className="flex items-center justify-center">
              <BookOpen className="mr-2" size={20} />
              <span>70+ Specialized Courses</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="mr-2" size={20} />
              <span>4 Academic Levels</span>
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level} value={level}>
                  {level === 'All' ? 'All Levels' : `${level} Level`}
                </option>
              ))}
            </select>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {semesters.map(semester => (
                <option key={semester} value={semester}>
                  {semester === 'All' ? 'All Semesters' : `${semester} Semester`}
                </option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
          {Object.keys(groupedCourses).length > 0 ? (
            Object.entries(groupedCourses).map(([key, courses]) => {
              const [level, semester] = key.split('-');
              const sectionTitle = semester === 'Second' && level === '300' ? 
                `${level} Level - IT/SIWES` : 
                `${level} Level - ${semester} Semester`;
              
              return (
                <div key={key} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
                    {sectionTitle} ({courses.length} courses)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <div key={course.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">{course.code}</h3>
                              <h4 className="text-sm font-semibold text-green-600 mb-2">{course.title}</h4>
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                              {course.credits} Credits
                            </span>
                          </div>

                          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mb-3">
                            {course.category}
                          </span>

                          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4">{course.description}</p>

                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                           Prerequisites: {course.prerequisites}
                          </span>

                          {/* <Link
                            to={`/courses/${course.code.toLowerCase()}`}
                            className="inline-flex items-center bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
                          >
                            View Details
                            <ArrowRight className="ml-1" size={14} />
                          </Link> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
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

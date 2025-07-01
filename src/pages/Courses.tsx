
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
    { id: 1, code: 'GEO101', title: 'Introduction to Physical Geography', level: '100', semester: 'First', category: 'Physical Geography', credits: 3, description: 'Fundamental concepts of physical geography including landforms, climate, and natural processes.' },
    { id: 2, code: 'GEO102', title: 'Introduction to Human Geography', level: '100', semester: 'First', category: 'Human Geography', credits: 3, description: 'Basic principles of human geography covering population, culture, and settlement patterns.' },
    { id: 3, code: 'GEO103', title: 'Cartography and Map Reading', level: '100', semester: 'First', category: 'Cartography', credits: 2, description: 'Fundamentals of map construction, interpretation, and spatial representation.' },
    { id: 4, code: 'GEO104', title: 'Mathematical Geography', level: '100', semester: 'First', category: 'Mathematical Geography', credits: 2, description: 'Mathematical concepts applied to geographical problems and spatial analysis.' },
    { id: 5, code: 'GEO105', title: 'Introduction to Geology', level: '100', semester: 'First', category: 'Physical Geography', credits: 3, description: 'Basic geological processes and rock formations affecting landscape development.' },
    { id: 6, code: 'GEO106', title: 'Introduction to Statistics', level: '100', semester: 'First', category: 'Research Methods', credits: 2, description: 'Statistical methods for geographical data analysis and interpretation.' },
    { id: 7, code: 'GEO107', title: 'Geography of Nigeria', level: '100', semester: 'First', category: 'Regional Geography', credits: 3, description: 'Physical and human geography of Nigeria including resources and development.' },
    { id: 8, code: 'GEO108', title: 'Introduction to Meteorology', level: '100', semester: 'First', category: 'Physical Geography', credits: 2, description: 'Weather and climate patterns, atmospheric processes and phenomena.' },
    { id: 9, code: 'GEO109', title: 'Soil Geography', level: '100', semester: 'First', category: 'Physical Geography', credits: 2, description: 'Soil formation, classification, and distribution patterns.' },
    { id: 10, code: 'GEO110', title: 'Introduction to Surveying', level: '100', semester: 'First', category: 'Surveying', credits: 3, description: 'Basic surveying techniques and equipment for spatial measurement.' },

    // 100 Level Second Semester (10 courses)
    { id: 11, code: 'GEO111', title: 'Geomorphology', level: '100', semester: 'Second', category: 'Physical Geography', credits: 3, description: 'Landform development and surface processes shaping the Earth.' },
    { id: 12, code: 'GEO112', title: 'Population Geography', level: '100', semester: 'Second', category: 'Human Geography', credits: 3, description: 'Population distribution, growth patterns, and demographic processes.' },
    { id: 13, code: 'GEO113', title: 'Biogeography', level: '100', semester: 'Second', category: 'Physical Geography', credits: 2, description: 'Distribution of plants and animals and their environmental relationships.' },
    { id: 14, code: 'GEO114', title: 'Economic Geography', level: '100', semester: 'Second', category: 'Human Geography', credits: 3, description: 'Spatial patterns of economic activities and resource distribution.' },
    { id: 15, code: 'GEO115', title: 'Introduction to Oceanography', level: '100', semester: 'Second', category: 'Physical Geography', credits: 2, description: 'Ocean processes, marine environments, and coastal systems.' },
    { id: 16, code: 'GEO116', title: 'Cultural Geography', level: '100', semester: 'Second', category: 'Human Geography', credits: 2, description: 'Cultural patterns, diffusion, and landscape modifications.' },
    { id: 17, code: 'GEO117', title: 'Introduction to GIS', level: '100', semester: 'Second', category: 'GIS & Remote Sensing', credits: 3, description: 'Basic geographic information systems concepts and applications.' },
    { id: 18, code: 'GEO118', title: 'Field Work Methods', level: '100', semester: 'Second', category: 'Research Methods', credits: 2, description: 'Field techniques for geographical data collection and analysis.' },
    { id: 19, code: 'GEO119', title: 'Introduction to Remote Sensing', level: '100', semester: 'Second', category: 'GIS & Remote Sensing', credits: 2, description: 'Satellite imagery and aerial photography interpretation.' },
    { id: 20, code: 'GEO120', title: 'Geography of Africa', level: '100', semester: 'Second', category: 'Regional Geography', credits: 3, description: 'Physical and human geography of the African continent.' },

    // 200 Level First Semester (10 courses)
    { id: 21, code: 'GEO201', title: 'Advanced Physical Geography', level: '200', semester: 'First', category: 'Physical Geography', credits: 3, description: 'Advanced concepts in physical geography and Earth system interactions.' },
    { id: 22, code: 'GEO202', title: 'Urban Geography', level: '200', semester: 'First', category: 'Human Geography', credits: 3, description: 'Urban development, planning, and metropolitan area analysis.' },
    { id: 23, code: 'GEO203', title: 'Hydrology', level: '200', semester: 'First', category: 'Physical Geography', credits: 3, description: 'Water cycle, river systems, and water resource management.' },
    { id: 24, code: 'GEO204', title: 'Agricultural Geography', level: '200', semester: 'First', category: 'Human Geography', credits: 3, description: 'Agricultural systems, food production, and rural development.' },
    { id: 25, code: 'GEO205', title: 'Advanced Cartography', level: '200', semester: 'First', category: 'Cartography', credits: 2, description: 'Advanced map design and digital cartographic techniques.' },
    { id: 26, code: 'GEO206', title: 'Climatology', level: '200', semester: 'First', category: 'Physical Geography', credits: 3, description: 'Climate systems, patterns, and climate change analysis.' },
    { id: 27, code: 'GEO207', title: 'Transportation Geography', level: '200', semester: 'First', category: 'Human Geography', credits: 2, description: 'Transportation networks, accessibility, and mobility patterns.' },
    { id: 28, code: 'GEO208', title: 'Quantitative Methods', level: '200', semester: 'First', category: 'Research Methods', credits: 2, description: 'Statistical analysis and quantitative techniques for geography.' },
    { id: 29, code: 'GEO209', title: 'Environmental Geography', level: '200', semester: 'First', category: 'Environmental Management', credits: 3, description: 'Human-environment interactions and environmental systems.' },
    { id: 30, code: 'GEO210', title: 'Geographic Thought', level: '200', semester: 'First', category: 'Theory', credits: 2, description: 'Evolution of geographical thought and theoretical frameworks.' },

    // 200 Level Second Semester (10 courses)
    { id: 31, code: 'GEO211', title: 'Applied Geomorphology', level: '200', semester: 'Second', category: 'Physical Geography', credits: 3, description: 'Practical applications of geomorphological principles in development.' },
    { id: 32, code: 'GEO212', title: 'Settlement Geography', level: '200', semester: 'Second', category: 'Human Geography', credits: 3, description: 'Rural and urban settlement patterns and development.' },
    { id: 33, code: 'GEO213', title: 'GIS Applications', level: '200', semester: 'Second', category: 'GIS & Remote Sensing', credits: 3, description: 'Practical applications of GIS in various geographical problems.' },
    { id: 34, code: 'GEO214', title: 'Industrial Geography', level: '200', semester: 'Second', category: 'Human Geography', credits: 2, description: 'Location and distribution of industries and manufacturing.' },
    { id: 35, code: 'GEO215', title: 'Weather and Climate', level: '200', semester: 'Second', category: 'Physical Geography', credits: 3, description: 'Advanced weather systems and climate analysis.' },
    { id: 36, code: 'GEO216', title: 'Resource Geography', level: '200', semester: 'Second', category: 'Human Geography', credits: 3, description: 'Natural resource distribution, exploitation, and management.' },
    { id: 37, code: 'GEO217', title: 'Remote Sensing Applications', level: '200', semester: 'Second', category: 'GIS & Remote Sensing', credits: 3, description: 'Satellite imagery analysis and remote sensing techniques.' },
    { id: 38, code: 'GEO218', title: 'Research Methods', level: '200', semester: 'Second', category: 'Research Methods', credits: 2, description: 'Research design and methodology in geographical studies.' },
    { id: 39, code: 'GEO219', title: 'Political Geography', level: '200', semester: 'Second', category: 'Human Geography', credits: 2, description: 'Political processes, boundaries, and geopolitical analysis.' },
    { id: 40, code: 'GEO220', title: 'Coastal Geography', level: '200', semester: 'Second', category: 'Physical Geography', credits: 2, description: 'Coastal processes, management, and environmental issues.' },

    // 300 Level First Semester (10 courses)
    { id: 41, code: 'GEO301', title: 'Advanced GIS', level: '300', semester: 'First', category: 'GIS & Remote Sensing', credits: 3, description: 'Advanced GIS analysis, modeling, and spatial database management.' },
    { id: 42, code: 'GEO302', title: 'Urban Planning', level: '300', semester: 'First', category: 'Human Geography', credits: 3, description: 'Urban planning principles, design, and development strategies.' },
    { id: 43, code: 'GEO303', title: 'Environmental Impact Assessment', level: '300', semester: 'First', category: 'Environmental Management', credits: 3, description: 'EIA procedures, methodologies, and environmental monitoring.' },
    { id: 44, code: 'GEO304', title: 'Water Resources Management', level: '300', semester: 'First', category: 'Physical Geography', credits: 3, description: 'Water resource planning, conservation, and management strategies.' },
    { id: 45, code: 'GEO305', title: 'Land Use Planning', level: '300', semester: 'First', category: 'Human Geography', credits: 3, description: 'Land use classification, planning, and zoning principles.' },
    { id: 46, code: 'GEO306', title: 'Disaster Risk Management', level: '300', semester: 'First', category: 'Environmental Management', credits: 2, description: 'Natural hazards assessment and disaster preparedness.' },
    { id: 47, code: 'GEO307', title: 'Tourism Geography', level: '300', semester: 'First', category: 'Human Geography', credits: 2, description: 'Tourism patterns, impacts, and sustainable tourism development.' },
    { id: 48, code: 'GEO308', title: 'Digital Cartography', level: '300', semester: 'First', category: 'Cartography', credits: 2, description: 'Computer-aided mapping and digital map production.' },
    { id: 49, code: 'GEO309', title: 'Regional Planning', level: '300', semester: 'First', category: 'Human Geography', credits: 3, description: 'Regional development planning and spatial organization.' },
    { id: 50, code: 'GEO310', title: 'Geographical Information Science', level: '300', semester: 'First', category: 'GIS & Remote Sensing', credits: 2, description: 'Theoretical foundations of GIS and spatial analysis.' },

    // 300 Level Second Semester - IT/SIWES
    { id: 51, code: 'GEO311', title: 'Industrial Training (IT/SIWES)', level: '300', semester: 'Second', category: 'Professional Training', credits: 6, description: 'Practical work experience in geographical and environmental organizations.' },

    // 400 Level First Semester (12 courses)
    { id: 52, code: 'GEO401', title: 'Advanced Research Methods', level: '400', semester: 'First', category: 'Research Methods', credits: 3, description: 'Advanced research design, data analysis, and thesis preparation.' },
    { id: 53, code: 'GEO402', title: 'Climate Change Studies', level: '400', semester: 'First', category: 'Environmental Management', credits: 3, description: 'Climate change science, impacts, and adaptation strategies.' },
    { id: 54, code: 'GEO403', title: 'Advanced Remote Sensing', level: '400', semester: 'First', category: 'GIS & Remote Sensing', credits: 3, description: 'Advanced satellite imagery analysis and digital image processing.' },
    { id: 55, code: 'GEO404', title: 'Sustainable Development', level: '400', semester: 'First', category: 'Environmental Management', credits: 3, description: 'Sustainable development principles and environmental planning.' },
    { id: 56, code: 'GEO405', title: 'Spatial Analysis', level: '400', semester: 'First', category: 'GIS & Remote Sensing', credits: 3, description: 'Advanced spatial statistical analysis and modeling techniques.' },
    { id: 57, code: 'GEO406', title: 'Environmental Management', level: '400', semester: 'First', category: 'Environmental Management', credits: 3, description: 'Environmental policy, management systems, and conservation.' },
    { id: 58, code: 'GEO407', title: 'GPS and Surveying', level: '400', semester: 'First', category: 'Surveying', credits: 2, description: 'Global positioning systems and advanced surveying techniques.' },
    { id: 59, code: 'GEO408', title: 'Hydrogeology', level: '400', semester: 'First', category: 'Physical Geography', credits: 2, description: 'Groundwater systems, aquifer management, and water quality.' },
    { id: 60, code: 'GEO409', title: 'Geographic Information Analysis', level: '400', semester: 'First', category: 'GIS & Remote Sensing', credits: 3, description: 'Advanced GIS analysis and spatial data interpretation.' },
    { id: 61, code: 'GEO410', title: 'Environmental Policy', level: '400', semester: 'First', category: 'Environmental Management', credits: 2, description: 'Environmental legislation, policy analysis, and governance.' },
    { id: 62, code: 'GEO411', title: 'Geospatial Technology', level: '400', semester: 'First', category: 'GIS & Remote Sensing', credits: 3, description: 'Integration of GPS, GIS, and remote sensing technologies.' },
    { id: 63, code: 'GEO412', title: 'Project Management', level: '400', semester: 'First', category: 'Professional Skills', credits: 2, description: 'Project planning, management, and implementation skills.' },

    // 400 Level Second Semester (8 courses)
    { id: 64, code: 'GEO413', title: 'Research Project I', level: '400', semester: 'Second', category: 'Research Methods', credits: 4, description: 'Independent research project and thesis writing.' },
    { id: 65, code: 'GEO414', title: 'Geographic Information Systems Project', level: '400', semester: 'Second', category: 'GIS & Remote Sensing', credits: 3, description: 'Applied GIS project with real-world applications.' },
    { id: 66, code: 'GEO415', title: 'Environmental Monitoring', level: '400', semester: 'Second', category: 'Environmental Management', credits: 3, description: 'Environmental monitoring techniques and data analysis.' },
    { id: 67, code: 'GEO416', title: 'Professional Practice', level: '400', semester: 'Second', category: 'Professional Skills', credits: 2, description: 'Professional ethics, career development, and industry practices.' },
    { id: 68, code: 'GEO417', title: 'Seminar', level: '400', semester: 'Second', category: 'Research Methods', credits: 2, description: 'Research presentation and academic discourse.' },
    { id: 69, code: 'GEO418', title: 'Advanced Field Studies', level: '400', semester: 'Second', category: 'Research Methods', credits: 3, description: 'Advanced field research techniques and data collection.' },
    { id: 70, code: 'GEO419', title: 'Geographic Consulting', level: '400', semester: 'Second', category: 'Professional Skills', credits: 2, description: 'Consulting practices and client relationship management.' },
    { id: 71, code: 'GEO420', title: 'Research Project II', level: '400', semester: 'Second', category: 'Research Methods', credits: 3, description: 'Continuation and completion of research project.' }
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

                          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{course.description}</p>

                          <Link
                            to={`/courses/${course.code.toLowerCase()}`}
                            className="inline-flex items-center bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
                          >
                            View Details
                            <ArrowRight className="ml-1" size={14} />
                          </Link>
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

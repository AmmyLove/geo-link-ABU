
import React from 'react';
import { Briefcase, TrendingUp, Users, Award, MapPin, Building, Globe, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  const careerPaths = [
    {
      title: 'Environmental Consulting',
      icon: Globe,
      description: 'Lead environmental assessments and sustainability projects for major corporations and government agencies.',
      averageSalary: '₦3.5M - ₦8M annually',
      growthRate: '15% annually',
      opportunities: ['Environmental Impact Assessment', 'Sustainability Consulting', 'Environmental Auditing', 'Remediation Planning'],
      employers: ['Chevron Nigeria', 'Shell Petroleum', 'ExxonMobil', 'Environmental consultancies'],
      skills: ['EIA expertise', 'Environmental law', 'Project management', 'Stakeholder engagement']
    },
    {
      title: 'GIS Analysis & Cartography',
      icon: MapPin,
      description: 'Create digital maps and analyze spatial data for decision-making in various industries.',
      averageSalary: '₦2.8M - ₦6M annually',
      growthRate: '22% annually',
      opportunities: ['GIS Analyst', 'Remote Sensing Specialist', 'Cartographer', 'Spatial Data Scientist'],
      employers: ['Google Earth', 'Esri Nigeria', 'Survey departments', 'Tech companies'],
      skills: ['ArcGIS/QGIS', 'Python/R programming', 'Remote sensing', 'Database management']
    },
    {
      title: 'Urban Planning & Development',
      icon: Building,
      description: 'Design sustainable cities and communities while addressing housing, transportation, and infrastructure challenges.',
      averageSalary: '₦3M - ₦7M annually',
      growthRate: '12% annually',
      opportunities: ['Urban Planner', 'Development Officer', 'Smart City Consultant', 'Housing Specialist'],
      employers: ['State governments', 'Development banks', 'Real estate firms', 'International organizations'],
      skills: ['Planning software', 'Policy analysis', 'Community engagement', 'Project management']
    },
    {
      title: 'Climate Change Research',
      icon: TrendingUp,
      description: 'Research climate patterns and develop adaptation strategies for communities and organizations.',
      averageSalary: '₦3M - ₦9M annually',
      growthRate: '18% annually',
      opportunities: ['Climate Scientist', 'Adaptation Specialist', 'Carbon Analyst', 'Policy Researcher'],
      employers: ['NIMET', 'International NGOs', 'Research institutes', 'UN agencies'],
      skills: ['Climate modeling', 'Data analysis', 'Policy development', 'Grant writing']
    },
    {
      title: 'Government Agencies',
      icon: Award,
      description: 'Shape national policy and lead government initiatives in environmental protection and spatial planning.',
      averageSalary: '₦2.5M - ₦12M annually',
      growthRate: '8% annually',
      opportunities: ['Policy Analyst', 'Program Manager', 'Environmental Officer', 'Survey Officer'],
      employers: ['NASRDA', 'Federal Ministry of Environment', 'NIMET', 'State planning commissions'],
      skills: ['Policy analysis', 'Public administration', 'Project management', 'Research methods']
    },
    {
      title: 'Academia & Research',
      icon: Users,
      description: 'Teach the next generation while conducting cutting-edge research in geography and environmental sciences.',
      averageSalary: '₦2M - ₦15M annually',
      growthRate: '10% annually',
      opportunities: ['University Lecturer', 'Research Fellow', 'Department Head', 'International Researcher'],
      employers: ['Universities', 'Research institutes', 'International organizations', 'Think tanks'],
      skills: ['Research methods', 'Academic writing', 'Grant acquisition', 'Teaching excellence']
    }
  ];

  const alumniStories = [
    {
      name: 'Dr. Amina Hassan',
      graduation: '2010',
      currentRole: 'Senior Environmental Consultant',
      company: 'Shell Petroleum Development Company',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      story: 'After graduating with first-class honors, Dr. Hassan joined Shell as a graduate trainee. She now leads environmental impact assessments for major oil and gas projects across West Africa, earning over ₦12M annually.',
      achievements: ['Led 15+ major EIA projects', 'Published 25 research papers', 'Trained 100+ junior consultants']
    },
    {
      name: 'Engr. Musa Abdullahi',
      graduation: '2008',
      currentRole: 'GIS Manager',
      company: 'Google Nigeria',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      story: 'Musa started as a GIS analyst and worked his way up to managing Google\'s mapping operations in Nigeria. His expertise in spatial analysis and programming has made him one of the most sought-after GIS professionals in Africa.',
      achievements: ['Mapped 50+ Nigerian cities', 'Led Google Street View expansion', 'Mentored 200+ GIS professionals']
    },
    {
      name: 'Prof. Khadijah Ibrahim',
      graduation: '2005',
      currentRole: 'Professor of Urban Planning',
      company: 'University of Cape Town',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      story: 'After completing her PhD at Oxford University, Prof. Ibrahim became one of Africa\'s leading urban planning experts. She has consulted for the World Bank and designed smart city projects across three continents.',
      achievements: ['Published 45 research papers', 'Consulted for 10+ governments', 'Received UN-Habitat award']
    },
    {
      name: 'Dr. Fatima Aliyu',
      graduation: '2012',
      currentRole: 'Climate Policy Director',
      company: 'African Development Bank',
      image: 'https://images.unsplash.com/photo-1594736797933-d0fce2b5db6e?w=150&h=150&fit=crop&crop=face',
      story: 'Dr. Aliyu leads climate adaptation projects worth over $500M across Africa. Her work on drought-resistant agricultural systems has helped over 2 million farmers adapt to climate change.',
      achievements: ['Managed $500M+ projects', 'Impacted 2M+ farmers', 'Advised 15 African governments']
    }
  ];

  const industryStats = [
    { metric: '92%', label: 'Graduate Employment Rate', description: 'Within 6 months of graduation' },
    { metric: '₦4.2M', label: 'Average Starting Salary', description: 'For fresh graduates in 2024' },
    { metric: '65%', label: 'Career Advancement', description: 'Promoted within 3 years' },
    { metric: '78%', label: 'International Opportunities', description: 'Work abroad or with global organizations' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-800 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Prospects & Alumni</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Our graduates are making significant impacts across diverse sectors. Discover the exciting career 
            opportunities awaiting you and get inspired by our alumni success stories.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-cyan-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Career Paths</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore diverse career opportunities in the rapidly growing geography and environmental sectors
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <path.icon className="text-blue-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{path.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{path.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {path.averageSalary}
                      </div>
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        Growth: {path.growthRate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Job Opportunities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.opportunities.map((opp, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                          {opp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Top Employers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.employers.map((employer, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {employer}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Skills:</h4>
                    <ul className="space-y-1">
                      {path.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <ChevronRight size={14} className="mr-2 text-green-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Alumni Success Stories</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Be inspired by our graduates who are making significant impacts in their chosen fields worldwide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumniStories.map((alumni, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{alumni.name}</h3>
                    <p className="text-blue-600 font-medium">{alumni.currentRole}</p>
                    <p className="text-gray-600 text-sm">{alumni.company}</p>
                    <p className="text-gray-500 text-xs">Class of {alumni.graduation}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{alumni.story}</p>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {alumni.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Award size={14} className="mr-2 text-yellow-500" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-cyan-100 mb-8">
            Join our alumni network and become the next success story. Your career in geography 
            and environmental management starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-800 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
              Apply for Admission
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-800 transition-colors">
              Connect with Alumni
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

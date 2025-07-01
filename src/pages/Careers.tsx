
import React from 'react';
import { Briefcase, TrendingUp, Users, Award, MapPin, Building, Globe, ChevronRight, DollarSign, Clock, Target, Zap } from 'lucide-react';
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
      skills: ['EIA expertise', 'Environmental law', 'Project management', 'Stakeholder engagement'],
      dayInLife: 'Your geography and environmental management degree is crucial as you start each day reviewing environmental impact assessments using spatial analysis skills. The geographical understanding of ecosystem interactions helps you conduct field surveys, while your environmental management training guides data analysis. You meet with clients to discuss sustainability strategies, leveraging your knowledge of human-environment relationships. The comprehensive understanding of physical and human geography acquired in your degree is essential for preparing regulatory compliance reports that consider both environmental and socioeconomic factors.',
      careerProgression: [
        { level: 'Graduate Trainee', salary: '₦1.8M - ₦2.5M', years: '0-2' },
        { level: 'Environmental Analyst', salary: '₦2.5M - ₦4M', years: '2-5' },
        { level: 'Senior Consultant', salary: '₦4M - ₦6.5M', years: '5-8' },
        { level: 'Principal Consultant', salary: '₦6.5M - ₦10M', years: '8+' }
      ],
      requirements: [
        'Bachelor\'s degree in Geography/Environmental Science',
        'Professional certification (EIA, ISO 14001)',
        'Strong analytical and communication skills',
        'Knowledge of environmental regulations'
      ],
      companies: [
        { name: 'Chevron Nigeria', positions: 'Environmental Specialists', salary: '₦4.5M - ₦8M', website: 'https://www.chevron.com/worldwide/nigeria' },
        { name: 'Shell Petroleum', positions: 'EIA Consultants', salary: '₦5M - ₦9M', website: 'https://www.shell.com.ng' },
        { name: 'Environmental Resources Managers', positions: 'Senior Consultants', salary: '₦3.5M - ₦6M', website: 'https://www.erm.com' }
      ]
    },
    {
      title: 'GIS Analysis & Cartography',
      icon: MapPin,
      description: 'Create digital maps and analyze spatial data for decision-making in various industries.',
      averageSalary: '₦2.8M - ₦6M annually',
      growthRate: '22% annually',
      opportunities: ['GIS Analyst', 'Remote Sensing Specialist', 'Cartographer', 'Spatial Data Scientist'],
      employers: ['Google Earth', 'Esri Nigeria', 'Survey departments', 'Tech companies'],
      skills: ['ArcGIS/QGIS', 'Python/R programming', 'Remote sensing', 'Database management'],
      dayInLife: 'Your geography degree provides the theoretical foundation as you begin with spatial data analysis, applying geographical concepts learned in physical and human geography courses. The cartography and mathematical geography knowledge from your studies guides you in creating interactive maps and processing satellite imagery. Your environmental management background helps in developing GIS applications for environmental monitoring. When collaborating with teams on spatial solutions, your comprehensive understanding of geographical processes and human-environment interactions, gained through your degree, enables you to present meaningful findings to stakeholders.',
      careerProgression: [
        { level: 'GIS Technician', salary: '₦1.5M - ₦2.2M', years: '0-2' },
        { level: 'GIS Analyst', salary: '₦2.2M - ₦3.8M', years: '2-4' },
        { level: 'Senior GIS Specialist', salary: '₦3.8M - ₦5.5M', years: '4-7' },
        { level: 'GIS Manager', salary: '₦5.5M - ₦8M', years: '7+' }
      ],
      requirements: [
        'Proficiency in GIS software (ArcGIS, QGIS)',
        'Programming skills (Python, R, SQL)',
        'Understanding of spatial analysis',
        'Cartographic design principles'
      ],
      companies: [
        { name: 'Esri Nigeria', positions: 'GIS Developers', salary: '₦3.5M - ₦6M', website: 'https://www.esri.com/en-us/about/offices/nigeria' },
        { name: 'Nigerian Geological Survey', positions: 'Cartographers', salary: '₦2.8M - ₦4.5M', website: 'https://www.ngs.gov.ng' },
        { name: 'Google', positions: 'Spatial Data Scientists', salary: '₦4M - ₦7M', website: 'https://about.google/intl/en_ng/' }
      ]
    },
    {
      title: 'Urban Planning & Development',
      icon: Building,
      description: 'Design sustainable cities and communities while addressing housing, transportation, and infrastructure challenges.',
      averageSalary: '₦3M - ₦7M annually',
      growthRate: '12% annually',
      opportunities: ['Urban Planner', 'Development Officer', 'Smart City Consultant', 'Housing Specialist'],
      employers: ['State governments', 'Development banks', 'Real estate firms', 'International organizations'],
      skills: ['Planning software', 'Policy analysis', 'Community engagement', 'Project management'],
      dayInLife: 'Your geography and environmental management degree is fundamental as you review development proposals, applying urban geography principles learned in your studies. The human geography knowledge helps you conduct site visits and understand settlement patterns, while environmental management training guides sustainable development decisions. Community engagement draws on your understanding of cultural geography and population dynamics. When developing master plans and coordinating with officials, your comprehensive geographical education helps you consider spatial relationships, environmental impacts, and socioeconomic factors that only a geography degree can provide.',
      careerProgression: [
        { level: 'Planning Assistant', salary: '₦2M - ₦3M', years: '0-2' },
        { level: 'Urban Planner', salary: '₦3M - ₦4.5M', years: '2-5' },
        { level: 'Senior Planner', salary: '₦4.5M - ₦6.5M', years: '5-8' },
        { level: 'Planning Director', salary: '₦6.5M - ₦10M', years: '8+' }
      ],
      requirements: [
        'Bachelor\'s/Master\'s in Urban Planning',
        'Professional registration (if applicable)',
        'Knowledge of planning laws and regulations',
        'Community engagement skills'
      ],
      companies: [
        { name: 'Lagos State Government', positions: 'Urban Planners', salary: '₦3.5M - ₦6M', website: 'https://lagosstate.gov.ng' },
        { name: 'World Bank', positions: 'Development Specialists', salary: '₦5M - ₦8M', website: 'https://www.worldbank.org/en/country/nigeria' },
        { name: 'Julius Berger', positions: 'Project Planners', salary: '₦4M - ₦7M', website: 'https://www.julius-berger.com' }
      ]
    },
    {
      title: 'Climate Change Research',
      icon: TrendingUp,
      description: 'Research climate patterns and develop adaptation strategies for communities and organizations.',
      averageSalary: '₦3M - ₦9M annually',
      growthRate: '18% annually',
      opportunities: ['Climate Scientist', 'Adaptation Specialist', 'Carbon Analyst', 'Policy Researcher'],
      employers: ['NIMET', 'International NGOs', 'Research institutes', 'UN agencies'],
      skills: ['Climate modeling', 'Data analysis', 'Policy development', 'Grant writing'],
      dayInLife: 'Your geography and environmental management degree is essential as you analyze climate data, using climatology and meteorology knowledge from your physical geography courses. Running climate models requires the mathematical geography and statistical skills developed during your studies. Writing research papers and attending conferences builds on the research methodology training from your degree. Your environmental management background is crucial when collaborating with international researchers and developing policy recommendations, as you understand the complex interactions between climate, environment, and human systems that only a comprehensive geography education provides.',
      careerProgression: [
        { level: 'Research Assistant', salary: '₦2.2M - ₦3.2M', years: '0-2' },
        { level: 'Climate Analyst', salary: '₦3.2M - ₦5M', years: '2-5' },
        { level: 'Senior Researcher', salary: '₦5M - ₦7.5M', years: '5-8' },
        { level: 'Research Director', salary: '₦7.5M - ₦12M', years: '8+' }
      ],
      requirements: [
        'Advanced degree in Climate Science/Geography',
        'Statistical analysis skills',
        'Research methodology expertise',
        'Grant writing experience'
      ],
      companies: [
        { name: 'NIMET', positions: 'Climate Scientists', salary: '₦3.5M - ₦6M', website: 'https://www.nimet.gov.ng' },
        { name: 'UNDP', positions: 'Climate Specialists', salary: '₦5M - ₦9M', website: 'https://www.undp.org/nigeria' },
        { name: 'CGIAR', positions: 'Research Scientists', salary: '₦4M - ₦7M', website: 'https://www.cgiar.org' }
      ]
    },
    {
      title: 'Government Agencies',
      icon: Award,
      description: 'Shape national policy and lead government initiatives in environmental protection and spatial planning.',
      averageSalary: '₦2.5M - ₦12M annually',
      growthRate: '8% annually',
      opportunities: ['Policy Analyst', 'Program Manager', 'Environmental Officer', 'Survey Officer'],
      employers: ['NASRDA', 'Federal Ministry of Environment', 'NIMET', 'State planning commissions'],
      skills: ['Policy analysis', 'Public administration', 'Project management', 'Research methods'],
      dayInLife: 'Your geography and environmental management degree provides the interdisciplinary foundation needed for government work. When developing policy frameworks, you apply knowledge of human geography, environmental systems, and spatial planning gained from your studies. Coordinating with stakeholders requires understanding of political geography and regional development concepts from your degree. Managing government programs and conducting research builds on the research methodology and project management skills developed during your geography education. The holistic understanding of environmental and social systems that your degree provides is essential for preparing briefings for officials and overseeing policy implementation.',
      careerProgression: [
        { level: 'Assistant Officer', salary: '₦1.8M - ₦2.5M', years: '0-3' },
        { level: 'Principal Officer', salary: '₦2.5M - ₦4M', years: '3-6' },
        { level: 'Deputy Director', salary: '₦4M - ₦7M', years: '6-10' },
        { level: 'Director', salary: '₦7M - ₦15M', years: '10+' }
      ],
      requirements: [
        'Bachelor\'s degree in relevant field',
        'Civil service entry requirements',
        'Strong analytical skills',
        'Knowledge of government procedures'
      ],
      companies: [
        { name: 'NASRDA', positions: 'Space Scientists', salary: '₦3M - ₦8M', website: 'https://nasrda.gov.ng' },
        { name: 'Federal Ministry of Environment', positions: 'Environmental Officers', salary: '₦2.5M - ₦6M', website: 'https://environment.gov.ng' },
        { name: 'NIMET', positions: 'Meteorologists', salary: '₦3M - ₦7M', website: 'https://www.nimet.gov.ng' }
      ]
    },
    {
      title: 'Academia & Research',
      icon: Users,
      description: 'Teach the next generation while conducting cutting-edge research in geography and environmental sciences.',
      averageSalary: '₦2M - ₦15M annually',
      growthRate: '10% annually',
      opportunities: ['University Lecturer', 'Research Fellow', 'Department Head', 'International Researcher'],
      employers: ['Universities', 'Research institutes', 'International organizations', 'Think tanks'],
      skills: ['Research methods', 'Academic writing', 'Grant acquisition', 'Teaching excellence'],
      dayInLife: 'Your geography and environmental management degree forms the core of your academic career. Conducting lectures draws directly on the comprehensive knowledge gained from your studies in physical geography, human geography, and environmental management. Supervising students requires the research methodology and analytical skills developed during your degree program. Carrying out research and writing academic papers builds on the interdisciplinary foundation that geography provides, allowing you to address complex environmental and spatial problems. Your degree\'s broad scope enables you to collaborate with international colleagues across multiple disciplines, making you uniquely qualified for academic leadership roles.',
      careerProgression: [
        { level: 'Graduate Assistant', salary: '₦1.2M - ₦2M', years: '0-2' },
        { level: 'Assistant Lecturer', salary: '₦2M - ₦3.5M', years: '2-4' },
        { level: 'Senior Lecturer', salary: '₦3.5M - ₦6M', years: '4-8' },
        { level: 'Professor', salary: '₦6M - ₦20M', years: '8+' }
      ],
      requirements: [
        'Master\'s/Ph.D. in relevant field',
        'Research experience',
        'Teaching skills',
        'Publication record'
      ],
      companies: [
        { name: 'University of Ibadan', positions: 'Lecturers/Professors', salary: '₦2M - ₦15M', website: 'https://www.ui.edu.ng' },
        { name: 'Nigerian Institute for Social and Economic Research', positions: 'Research Fellows', salary: '₦3M - ₦8M', website: 'https://www.niser.org.ng' },
        { name: 'UNESCO', positions: 'Research Specialists', salary: '₦5M - ₦12M', website: 'https://en.unesco.org/fieldoffice/abuja' }
      ]
    },
    {
      title: 'Disaster Risk Management',
      icon: Target,
      description: 'Develop strategies to prevent, prepare for, and respond to natural disasters and emergencies.',
      averageSalary: '₦3.2M - ₦7.5M annually',
      growthRate: '16% annually',
      opportunities: ['Disaster Risk Analyst', 'Emergency Planning Manager', 'Hazard Assessment Specialist', 'Recovery Coordinator'],
      employers: ['NEMA', 'Red Cross', 'UN-OCHA', 'International NGOs'],
      skills: ['Risk assessment', 'Emergency planning', 'Community engagement', 'Crisis management'],
      dayInLife: 'Your geography and environmental management degree is vital for disaster risk management. Assessing disaster risks requires the geomorphology, climatology, and hazard geography knowledge from your physical geography courses. Developing emergency response plans draws on your understanding of human geography, settlement patterns, and population dynamics. Training communities builds on the environmental management and social geography components of your degree. Your geographical education provides the spatial thinking and environmental awareness essential for analyzing hazard data and implementing disaster preparedness programs that consider both physical processes and human vulnerability.',
      careerProgression: [
        { level: 'Risk Analyst', salary: '₦2.5M - ₦3.5M', years: '0-2' },
        { level: 'Emergency Planner', salary: '₦3.5M - ₦5M', years: '2-5' },
        { level: 'Program Manager', salary: '₦5M - ₦7M', years: '5-8' },
        { level: 'Director', salary: '₦7M - ₦10M', years: '8+' }
      ],
      requirements: [
        'Bachelor\'s in Geography/Emergency Management',
        'Disaster management certification',
        'Crisis communication skills',
        'Multi-agency coordination experience'
      ],
      companies: [
        { name: 'NEMA', positions: 'Emergency Managers', salary: '₦3.5M - ₦6M', website: 'https://nema.gov.ng' },
        { name: 'UN-OCHA', positions: 'Humanitarian Officers', salary: '₦5M - ₦8M', website: 'https://www.unocha.org/nigeria' },
        { name: 'Nigerian Red Cross', positions: 'Disaster Specialists', salary: '₦3M - ₦5.5M', website: 'https://www.redcross.org.ng' }
      ]
    },
    {
      title: 'Agricultural Geography',
      icon: Zap,
      description: 'Optimize agricultural production and sustainability through spatial analysis and environmental management.',
      averageSalary: '₦2.8M - ₦6.5M annually',
      growthRate: '14% annually',
      opportunities: ['Agricultural Analyst', 'Precision Agriculture Specialist', 'Food Security Researcher', 'Rural Development Officer'],
      employers: ['FAO', 'IITA', 'Agricultural companies', 'Development organizations'],
      skills: ['Crop modeling', 'GIS applications', 'Climate analysis', 'Agricultural economics'],
      dayInLife: 'Your geography and environmental management degree provides the essential foundation for agricultural geography work. Analyzing agricultural data requires the climatology, soil geography, and biogeography knowledge from your physical geography courses. Conducting field surveys builds on the field methods and research techniques learned during your studies. Developing crop models draws on your understanding of environmental systems and statistical analysis from your degree. Working with farmers requires the rural geography and community engagement skills developed through your geographical education. Your comprehensive understanding of human-environment interactions, gained from your degree, is crucial for designing sustainable farming systems.',
      careerProgression: [
        { level: 'Agricultural Analyst', salary: '₦2M - ₦3M', years: '0-2' },
        { level: 'Specialist', salary: '₦3M - ₦4.5M', years: '2-5' },
        { level: 'Senior Specialist', salary: '₦4.5M - ₦6M', years: '5-8' },
        { level: 'Program Director', salary: '₦6M - ₦9M', years: '8+' }
      ],
      requirements: [
        'Bachelor\'s in Agricultural Geography',
        'GIS and remote sensing skills',
        'Understanding of agricultural systems',
        'Statistical analysis capabilities'
      ],
      companies: [
        { name: 'IITA', positions: 'Research Scientists', salary: '₦3.5M - ₦6M', website: 'https://www.iita.org' },
        { name: 'FAO', positions: 'Agricultural Officers', salary: '₦4M - ₦7M', website: 'https://www.fao.org/nigeria/en/' },
        { name: 'Olam Nigeria', positions: 'Sustainability Managers', salary: '₦3M - ₦5.5M', website: 'https://www.olamgroup.com/locations/nigeria.html' }
      ]
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
      achievements: ['Led 15+ major EIA projects', 'Published 25 research papers', 'Trained 100+ junior consultants'],
      careerPath: 'Graduate Trainee → Environmental Analyst → Senior Consultant → Principal Consultant'
    },
    {
      name: 'Engr. Musa Abdullahi',
      graduation: '2008',
      currentRole: 'GIS Manager',
      company: 'Google Nigeria',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      story: 'Musa started as a GIS analyst and worked his way up to managing Google\'s mapping operations in Nigeria. His expertise in spatial analysis and programming has made him one of the most sought-after GIS professionals in Africa.',
      achievements: ['Mapped 50+ Nigerian cities', 'Led Google Street View expansion', 'Mentored 200+ GIS professionals'],
      careerPath: 'GIS Analyst → Senior Analyst → Team Lead → GIS Manager'
    },
    {
      name: 'Prof. Khadijah Ibrahim',
      graduation: '2005',
      currentRole: 'Professor of Urban Planning',
      company: 'University of Cape Town',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      story: 'After completing her PhD at Oxford University, Prof. Ibrahim became one of Africa\'s leading urban planning experts. She has consulted for the World Bank and designed smart city projects across three continents.',
      achievements: ['Published 45 research papers', 'Consulted for 10+ governments', 'Received UN-Habitat award'],
      careerPath: 'Research Assistant → Lecturer → Senior Lecturer → Professor'
    },
    {
      name: 'Dr. Fatima Aliyu',
      graduation: '2012',
      currentRole: 'Climate Policy Director',
      company: 'African Development Bank',
      image: 'https://images.unsplash.com/photo-1594736797933-d0fce2b5db6e?w=150&h=150&fit=crop&crop=face',
      story: 'Dr. Aliyu leads climate adaptation projects worth over $500M across Africa. Her work on drought-resistant agricultural systems has helped over 2 million farmers adapt to climate change.',
      achievements: ['Managed $500M+ projects', 'Impacted 2M+ farmers', 'Advised 15 African governments'],
      careerPath: 'Climate Analyst → Program Officer → Senior Specialist → Director'
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
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Prospects & Alumni Success</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Explore exciting career opportunities in geography and environmental management. 
            Our graduates are making significant impacts across diverse sectors worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-green-200">{stat.description}</div>
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
            Discover detailed career opportunities in the rapidly growing geography and environmental sectors
          </p>
          
          <div className="space-y-12">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-green-100 p-4 rounded-lg">
                      <path.icon className="text-green-600" size={40} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{path.title}</h3>
                      <p className="text-gray-600 mb-4">{path.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center">
                          <DollarSign size={14} className="mr-1" />
                          {path.averageSalary}
                        </div>
                        <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center">
                          <TrendingUp size={14} className="mr-1" />
                          Growth: {path.growthRate}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Briefcase size={16} className="mr-2 text-green-600" />
                          A Day in the Life
                        </h4>
                        <p className="text-gray-600 text-sm">{path.dayInLife}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Target size={16} className="mr-2 text-blue-600" />
                          Requirements
                        </h4>
                        <ul className="space-y-1">
                          {path.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <ChevronRight size={14} className="mr-2 text-green-500" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map((skill, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Clock size={16} className="mr-2 text-purple-600" />
                          Career Progression
                        </h4>
                        <div className="space-y-2">
                          {path.careerProgression.map((level, idx) => (
                            <div key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <div>
                                <div className="font-medium text-sm">{level.level}</div>
                                <div className="text-xs text-gray-500">{level.years} years</div>
                              </div>
                              <div className="text-sm font-medium text-green-600">{level.salary}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Top Employers</h4>
                        <div className="space-y-2">
                          {path.companies.map((company, idx) => (
                            <div key={idx} className="p-2 bg-gray-50 rounded">
                              <div className="font-medium text-sm">
                                <a 
                                  href={company.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-green-600 hover:text-green-700 hover:underline"
                                >
                                  {company.name}
                                </a>
                              </div>
                              <div className="text-xs text-gray-600">{company.positions}</div>
                              <div className="text-xs text-green-600">{company.salary}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
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
                    <p className="text-green-600 font-medium">{alumni.currentRole}</p>
                    <p className="text-gray-600 text-sm">{alumni.company}</p>
                    <p className="text-gray-500 text-xs">Class of {alumni.graduation}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{alumni.story}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Career Path:</h4>
                  <p className="text-sm text-green-600">{alumni.careerPath}</p>
                </div>

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
      <section className="py-16 px-4 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-green-100 mb-8">
            Join our alumni network and become the next success story. Your career in geography 
            and environmental management starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Apply for Admission
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors">
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

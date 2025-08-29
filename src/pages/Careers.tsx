import React from 'react';
import { 
  Building2, 
  Globe, 
  GraduationCap, 
  Users, 
  MapPin, 
  TrendingUp, 
  Briefcase, 
  Landmark,
  Leaf,
  BarChart3,
  Map,
  Zap,
  Shield,
  Waves,
  Mountain,
  Award
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  const governmentAgencies = [
    { name: "Federal Inland Revenue Service (FIRS)", roles: "Revenue Officers, Tax Analysts" },
    { name: "Independent National Electoral Commission (INEC)", roles: "Electoral Officers, Boundary Demarcation Specialists" },
    { name: "National Population Commission", roles: "Demographers, Census Officers, Data Analysts" },
    { name: "National Boundaries Commission", roles: "Boundary Survey Officers, Cartographers" },
    { name: "Nigerian Meteorological Agency (NIMET)", roles: "Meteorologists, Weather Forecasters, Climate Analysts" },
    { name: "National Centre for Remote Sensing (NCRS)", roles: "Remote Sensing Specialists, GIS Analysts" },
    { name: "Nigerian National Petroleum Corporation (NNPC)", roles: "Environmental Officers, GIS Specialists" },
    { name: "Nigerian Maritime Administration & Safety Agency (NIMASA)", roles: "Marine Environmental Officers" },
    { name: "Federal Ministry of Environment", roles: "Environmental Officers, Policy Analysts" },
    { name: "National Emergency Management Agency (NEMA)", roles: "Disaster Risk Analysts, Emergency Planners" },
    { name: "Nigerian Geological Survey Agency", roles: "Geological Surveyors, Mineral Resource Analysts" }
  ];

  const academicInstitutions = [
    { name: "Universities (Federal, State, Private)", roles: "Lecturers, Researchers, Academic Officers" },
    { name: "Research Institutions", roles: "Research Fellows, Principal Investigators" },
    { name: "Secondary Schools", roles: "Geography Teachers, Academic Coordinators" },
    { name: "International Research Centers", roles: "Research Scientists, Postdoctoral Fellows" }
  ];

  const privateSector = [
    { name: "Commercial Banks", roles: "Risk Analysts, Branch Managers, Credit Officers" },
    { name: "Technology Companies", roles: "GIS Developers, Spatial Data Scientists, Product Managers" },
    { name: "Consulting Firms", roles: "Environmental Consultants, Management Consultants" },
    { name: "Oil & Gas Companies", roles: "Environmental Specialists, GIS Analysts, HSE Officers" },
    { name: "Real Estate Firms", roles: "Site Analysts, Property Developers, Urban Planners" },
    { name: "Environmental Management Companies", roles: "EIA Specialists, Sustainability Consultants" },
    { name: "Telecommunications", roles: "Network Planning Officers, Site Engineers" },
    { name: "Mining Companies", roles: "Environmental Officers, Land Use Planners" }
  ];

  const agricultureSector = [
    { name: "Agricultural Development Programs", roles: "Extension Officers, Project Managers" },
    { name: "Land Use Planning Agencies", roles: "Land Use Planners, Agricultural Zoning Specialists" },
    { name: "Water Resource Management", roles: "Hydrologists, Water Resource Engineers" },
    { name: "Sustainability Projects", roles: "Sustainability Officers, Climate Adaptation Specialists" },
    { name: "Agribusiness Companies", roles: "Supply Chain Analysts, Market Research Specialists" }
  ];

  const politicsPolicy = [
    { name: "Legislative Positions", roles: "Senators, House of Representatives Members" },
    { name: "Policy Development", roles: "Policy Advisers, Legislative Assistants" },
    { name: "Government Advisory Roles", roles: "Special Advisers, Technical Assistants" },
    { name: "Local Government", roles: "Council Members, Development Officers" }
  ];

  const internationalOrgs = [
    { name: "United Nations (UN)", roles: "Program Officers, Research Analysts" },
    { name: "World Bank Group", roles: "Development Specialists, Environmental Safeguards" },
    { name: "Food and Agriculture Organization (FAO)", roles: "Agricultural Officers, Rural Development Specialists" },
    { name: "World Health Organization (WHO)", roles: "Environmental Health Officers" },
    { name: "UNDP", roles: "Climate Change Specialists, Sustainable Development Officers" },
    { name: "Environmental NGOs", roles: "Project Managers, Conservation Officers" },
    { name: "Development NGOs", roles: "Community Development Officers, Program Coordinators" }
  ];

  const jobTitles = [
    { title: "GIS Analyst", icon: Map, sector: "Technology/Government" },
    { title: "Environmental Consultant", icon: Leaf, sector: "Private/Consulting" },
    { title: "Urban Planner", icon: Building2, sector: "Government/Private" },
    { title: "Meteorologist", icon: Waves, sector: "Government/Research" },
    { title: "Research Officer", icon: BarChart3, sector: "Academia/Research" },
    { title: "Policy Analyst", icon: Landmark, sector: "Government/NGO" },
    { title: "Resource Manager", icon: Mountain, sector: "Government/Private" },
    { title: "Climate Change Specialist", icon: TrendingUp, sector: "NGO/International" },
    { title: "Remote Sensing Specialist", icon: Globe, sector: "Technology/Research" },
    { title: "Cartographer", icon: MapPin, sector: "Government/Private" },
    { title: "Environmental Impact Assessor", icon: Shield, sector: "Consulting" },
    { title: "Disaster Risk Manager", icon: Zap, sector: "Government/NGO" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white py-20 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 opacity-10">
          <Briefcase size={150} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <TrendingUp size={120} />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Career Prospects
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-4">
            Geography & Environmental Management
          </p>
          <p className="text-lg text-green-200 mb-8">
            Ahmadu Bello University, Zaria
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Explore the limitless opportunities that await graduates of Geography and Environmental Management 
            from Ahmadu Bello University, Zaria
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Versatility of Your Degree</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <Globe className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Relevance</h3>
              <p className="text-gray-600 leading-relaxed">
                A degree in Geography and Environmental Management is one of the most versatile and relevant 
                qualifications in today's interconnected world, addressing climate change, urbanization, and resource management.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Interdisciplinary Foundation</h3>
              <p className="text-gray-600 leading-relaxed">
                Graduates understand complex relationships between human societies and their physical environment, 
                opening doors across government, private sector, academia, and international organizations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <Map className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Integration of GIS, remote sensing, and digital mapping technologies ensures graduates have 
                cutting-edge technical skills highly sought after in the modern job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Sectors */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Career Opportunities by Sector
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the diverse range of sectors where Geography and Environmental Management graduates excel
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Government Agencies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Landmark className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Government Agencies</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Government agencies offer stable career paths with opportunities to serve the nation and contribute 
                to policy development and implementation.
              </p>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {governmentAgencies.map((agency, index) => (
                  <div key={index} className="border-l-4 border-green-300 pl-4 hover:border-green-500 transition-colors">
                    <h4 className="font-semibold text-gray-800 mb-1">{agency.name}</h4>
                    <p className="text-sm text-gray-600">{agency.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academia & Research */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Academia & Research</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Shape the future through teaching and research while contributing to scientific advancement 
                and knowledge creation.
              </p>
              <div className="space-y-4">
                {academicInstitutions.map((institution, index) => (
                  <div key={index} className="border-l-4 border-blue-300 pl-4 hover:border-blue-500 transition-colors">
                    <h4 className="font-semibold text-gray-800 mb-1">{institution.name}</h4>
                    <p className="text-sm text-gray-600">{institution.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Sector */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Private Sector & Industries</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The private sector offers dynamic opportunities with competitive compensation and 
                career advancement prospects.
              </p>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {privateSector.map((company, index) => (
                  <div key={index} className="border-l-4 border-purple-300 pl-4 hover:border-purple-500 transition-colors">
                    <h4 className="font-semibold text-gray-800 mb-1">{company.name}</h4>
                    <p className="text-sm text-gray-600">{company.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agriculture & Resource Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Mountain className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Agriculture & Resource Management</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Contribute to food security and sustainable resource management through innovative 
                agricultural and environmental solutions.
              </p>
              <div className="space-y-4">
                {agricultureSector.map((sector, index) => (
                  <div key={index} className="border-l-4 border-emerald-300 pl-4 hover:border-emerald-500 transition-colors">
                    <h4 className="font-semibold text-gray-800 mb-1">{sector.name}</h4>
                    <p className="text-sm text-gray-600">{sector.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Politics & Policy Making */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Politics & Policy Making</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lead change at the highest levels of government and influence policies that shape 
                Nigeria's future development.
              </p>
              <div className="space-y-4">
                {politicsPolicy.map((role, index) => (
                  <div key={index} className="border-l-4 border-indigo-300 pl-4 hover:border-indigo-500 transition-colors">
                    <h4 className="font-semibold text-gray-800 mb-1">{role.name}</h4>
                    <p className="text-sm text-gray-600">{role.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* International Organizations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                  <Globe className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">International Organizations & NGOs</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Make a global impact through international development, humanitarian work, and 
                environmental conservation efforts.
              </p>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {internationalOrgs.map((org, index) => (
                  <div key={index} className="border-l-4 border-cyan-300 pl-4 hover:border-cyan-500 transition-colors">
                    <h4 className="font-semibold text-gray-800 mb-1">{org.name}</h4>
                    <p className="text-sm text-gray-600">{org.roles}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Titles Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Popular Job Titles for Graduates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the diverse range of professional roles available to Geography and 
              Environmental Management graduates across different sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobTitles.map((job, index) => {
              const IconComponent = job.icon;
              const colors = [
                'bg-green-100 text-green-600',
                'bg-blue-100 text-blue-600', 
                'bg-purple-100 text-purple-600',
                'bg-emerald-100 text-emerald-600',
                'bg-indigo-100 text-indigo-600',
                'bg-cyan-100 text-cyan-600'
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${colorClass}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm">{job.title}</h3>
                  <p className="text-xs text-gray-600 font-medium">{job.sector}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GIS Integration Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <Map size={150} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <BarChart3 size={120} />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Power of GIS Integration & Digital Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Industry-Standard Tools</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">ArcGIS Professional</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">QGIS & Open Source GIS</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      <Mountain className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Google Earth Engine</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <Waves className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">Remote Sensing Platforms</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The integration of Geographic Information Systems (GIS) and digital mapping technologies 
                in our curriculum significantly enhances graduate employability. In today's data-driven 
                world, professionals who can analyze spatial data, create digital maps, and use remote 
                sensing technologies are in high demand across all sectors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our graduates are proficient in industry-standard software including ArcGIS, QGIS, 
                Google Earth Engine, and various remote sensing platforms. These technical skills, 
                combined with strong analytical and problem-solving abilities, make our graduates 
                highly competitive in the job market.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether working in urban planning, environmental consulting, disaster management, 
                or agricultural development, the ability to visualize, analyze, and interpret 
                geographical data gives our graduates a distinct advantage in their chosen careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Key Skills That Set Our Graduates Apart
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum develops both technical expertise and essential soft skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Spatial Analysis</h3>
              <p className="text-gray-600">Advanced GIS and remote sensing capabilities</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Analysis</h3>
              <p className="text-gray-600">Statistical analysis and data visualization</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Environmental Assessment</h3>
              <p className="text-gray-600">EIA, sustainability, and conservation expertise</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Project Management</h3>
              <p className="text-gray-600">Leadership and cross-functional team coordination</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Perspective</h3>
              <p className="text-gray-600">Understanding of global environmental challenges</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Research & Innovation</h3>
              <p className="text-gray-600">Scientific methodology and critical thinking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 opacity-10">
          <Award size={150} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Globe size={120} />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Your Future Awaits
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-left">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                As a graduate of Geography and Environmental Management from Ahmadu Bello University, 
                you are entering a field with exceptional growth potential and societal impact. The 
                challenges of the 21st century—from climate change adaptation to sustainable urban 
                development—require professionals with your unique skill set and perspective.
              </p>
              <p className="text-md text-green-200 leading-relaxed">
                Whether you choose to serve in government, innovate in the private sector, advance 
                knowledge through research, or lead change through international organizations, your 
                geography and environmental management degree provides the foundation for a fulfilling 
                and impactful career.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-300 mb-2">92%</div>
                  <div className="text-green-200 text-sm">Employment Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-300 mb-2">100+</div>
                  <div className="text-green-200 text-sm">Partner Organizations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-300 mb-2">6</div>
                  <div className="text-green-200 text-sm">Major Sectors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-300 mb-2">∞</div>
                  <div className="text-green-200 text-sm">Opportunities</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-xl md:text-2xl font-semibold text-white mb-4">
              The world needs geographical thinkers and environmental stewards.
            </p>
            <p className="text-lg text-green-200">
              The future is bright for Geography and Environmental Management graduates!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
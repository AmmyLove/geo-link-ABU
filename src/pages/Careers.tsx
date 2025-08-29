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
  Mountain
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Career Prospects in Geography & Environmental Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore the limitless opportunities that await graduates of Geography and Environmental Management 
            from Ahmadu Bello University, Zaria
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">The Versatility of Your Degree</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A degree in Geography and Environmental Management is one of the most versatile and relevant 
                qualifications in today's interconnected world. As we face global challenges such as climate 
                change, urbanization, resource depletion, and environmental degradation, the skills and knowledge 
                acquired through this program have never been more valuable.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Geography and Environmental Management graduates are uniquely positioned to understand the complex 
                relationships between human societies and their physical environment. This interdisciplinary foundation 
                opens doors to diverse career paths across government, private sector, academia, international 
                organizations, and non-profit sectors.
              </p>
              <p className="text-lg leading-relaxed">
                The integration of Geographic Information Systems (GIS), remote sensing, and digital mapping 
                technologies in our curriculum ensures that graduates are equipped with cutting-edge technical 
                skills that are highly sought after in the modern job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Sectors */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Career Opportunities by Sector
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Government Agencies */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <Landmark className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Government Agencies</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Government agencies offer stable career paths with opportunities to serve the nation and contribute 
                to policy development and implementation.
              </p>
              <div className="space-y-4">
                {governmentAgencies.map((agency, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{agency.name}</h4>
                    <p className="text-sm text-muted-foreground">{agency.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academia & Research */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Academia & Research</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Shape the future through teaching and research while contributing to scientific advancement 
                and knowledge creation.
              </p>
              <div className="space-y-4">
                {academicInstitutions.map((institution, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{institution.name}</h4>
                    <p className="text-sm text-muted-foreground">{institution.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Sector */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Private Sector & Industries</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                The private sector offers dynamic opportunities with competitive compensation and 
                career advancement prospects.
              </p>
              <div className="space-y-4">
                {privateSector.map((company, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{company.name}</h4>
                    <p className="text-sm text-muted-foreground">{company.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agriculture & Resource Management */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <Mountain className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Agriculture & Resource Management</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Contribute to food security and sustainable resource management through innovative 
                agricultural and environmental solutions.
              </p>
              <div className="space-y-4">
                {agricultureSector.map((sector, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{sector.name}</h4>
                    <p className="text-sm text-muted-foreground">{sector.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Politics & Policy Making */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Politics & Policy Making</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Lead change at the highest levels of government and influence policies that shape 
                Nigeria's future development.
              </p>
              <div className="space-y-4">
                {politicsPolicy.map((role, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{role.name}</h4>
                    <p className="text-sm text-muted-foreground">{role.roles}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* International Organizations */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">International Organizations & NGOs</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Make a global impact through international development, humanitarian work, and 
                environmental conservation efforts.
              </p>
              <div className="space-y-4">
                {internationalOrgs.map((org, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{org.name}</h4>
                    <p className="text-sm text-muted-foreground">{org.roles}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Titles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Popular Job Titles for Graduates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the diverse range of professional roles available to Geography and 
              Environmental Management graduates across different sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobTitles.map((job, index) => {
              const IconComponent = job.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{job.title}</h3>
                  <p className="text-sm text-primary font-medium">{job.sector}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GIS Integration Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">
              The Power of GIS Integration & Digital Skills
            </h2>
            <div className="text-lg text-foreground space-y-6">
              <p>
                The integration of Geographic Information Systems (GIS) and digital mapping technologies 
                in our curriculum significantly enhances graduate employability. In today's data-driven 
                world, professionals who can analyze spatial data, create digital maps, and use remote 
                sensing technologies are in high demand across all sectors.
              </p>
              <p>
                Our graduates are proficient in industry-standard software including ArcGIS, QGIS, 
                Google Earth Engine, and various remote sensing platforms. These technical skills, 
                combined with strong analytical and problem-solving abilities, make our graduates 
                highly competitive in the job market.
              </p>
              <p>
                Whether working in urban planning, environmental consulting, disaster management, 
                or agricultural development, the ability to visualize, analyze, and interpret 
                geographical data gives our graduates a distinct advantage in their chosen careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Key Skills That Set Our Graduates Apart
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Spatial Analysis</h3>
                <p className="text-muted-foreground">Advanced GIS and remote sensing capabilities</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                <p className="text-muted-foreground">Statistical analysis and data visualization</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Environmental Assessment</h3>
                <p className="text-muted-foreground">EIA, sustainability, and conservation expertise</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Project Management</h3>
                <p className="text-muted-foreground">Leadership and cross-functional team coordination</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
                <p className="text-muted-foreground">Understanding of global environmental challenges</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Research & Innovation</h3>
                <p className="text-muted-foreground">Scientific methodology and critical thinking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">
              Your Future Awaits
            </h2>
            <p className="text-xl text-foreground leading-relaxed mb-8">
              As a graduate of Geography and Environmental Management from Ahmadu Bello University, 
              you are entering a field with exceptional growth potential and societal impact. The 
              challenges of the 21st century—from climate change adaptation to sustainable urban 
              development—require professionals with your unique skill set and perspective.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you choose to serve in government, innovate in the private sector, advance 
              knowledge through research, or lead change through international organizations, your 
              geography and environmental management degree provides the foundation for a fulfilling 
              and impactful career.
            </p>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border">
              <p className="text-2xl font-semibold text-primary">
                The world needs geographical thinkers and environmental stewards. 
                The future is bright for Geography and Environmental Management graduates!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
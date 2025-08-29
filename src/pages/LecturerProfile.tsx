
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, BookOpen, ExternalLink, Download, Award, Users, Calendar, Globe, GraduationCap, Trophy } from 'lucide-react';
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

const LecturerProfile = () => {
  const { id } = useParams();

  const lecturers = [
    {
      id: 1,
      name: 'Dr. I. Mukhtar',
      position: 'Senior Lecturer',
      specialization: 'Biogeography, Pedology, Environmental Management & Climate change',
      email: 'i.mukhtar@abu.edu.ng',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bio: 'Dr. Mukhtar has over 25 years of distinguished experience in climate change research and environmental policy. He leads several international research collaborations and has been instrumental in developing climate adaptation strategies for West African communities. His work has influenced policy at national and international levels, and he serves as a consultant to multiple government agencies and international organizations.',
      research: ['Climate Change Adaptation', 'Environmental Policy', 'Sustainable Development', 'Water Resource Management', 'Ecosystem Services'],
      publications: 85,
      yearsOfExperience: 25,
      education: [
        { degree: 'Ph.D. Environmental Geography', institution: 'University of Cambridge', year: '1999' },
        { degree: 'M.Sc. Climate Science', institution: 'University of Reading', year: '1995' },
        { degree: 'B.Sc. Geography', institution: 'Ahmadu Bello University', year: '1993' }
      ],
      courses: [
        'GEO 401: Climate Change and Environment', 
        'GEO 502: Environmental Policy Analysis', 
        'GEO 601: Advanced Climate Modeling',
        'GEO 701: Research Methods in Environmental Science'
      ],
      awards: [
        'Excellence in Research Award 2023 - Nigerian Academy of Science',
        'International Climate Leadership Award 2021 - World Climate Council',
        'Distinguished Service Award 2020 - African Climate Research Network',
        'Best Paper Award 2019 - International Journal of Climate Change'
      ],
      recentPublications: [
        {
          title: 'Climate Change Adaptation Strategies in West Africa: A Comprehensive Analysis',
          journal: 'Environmental Research Letters',
          year: '2024',
          doi: '10.1088/1748-9326/abc123',
          citations: 156
        },
        {
          title: 'Water Resource Management Under Climate Change: Lessons from the Sahel',
          journal: 'Journal of Hydrology',
          year: '2023',
          doi: '10.1016/j.jhydrol.2023.129456',
          citations: 89
        },
        {
          title: 'Policy Frameworks for Climate Resilience in Developing Countries',
          journal: 'Global Environmental Change',
          year: '2023',
          doi: '10.1016/j.gloenvcha.2023.102567',
          citations: 112
        }
      ],
      currentProjects: [
        'Climate Adaptation Strategies for Nigerian Cities (₦450M, 2024-2027)',
        'Sustainable Water Management in Arid Regions (€2.5M, EU-funded)',
        'Policy Framework for Climate Resilience in West Africa (UNEP-funded)'
      ],
      teachingPhilosophy: 'I believe in fostering critical thinking and practical problem-solving skills. My approach combines theoretical knowledge with real-world applications, encouraging students to become change agents in environmental sustainability.',
      professionalMemberships: [
        'Nigerian Academy of Science (Fellow)',
        'International Association of Geographers',
        'World Climate Research Programme',
        'African Climate Research Network (Board Member)'
      ]
    },
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

      education: [
        { degree: 'BA(Ed). Geography', institution: 'Ahmadu Bello University, Zaria', year: '1980' },
        { degree: 'M.A. Geography', institution: 'Ahmadu Bello University, Zaria', year: '1985' },
        { degree: 'Ph.D. Geography', institution: 'Ahmadu Bello University, Zaria', year: '1994' }
      ],
      courses: [
        'GEOG 214: Population Geography', 
        'GEOG 411: Population, Resources & Environment', 
        'GEOG 212: Geography of African Development',
        'GEOG 402: Systematic Geography of Nigeria II'
      ],
      
      recentPublications: [
        {
          title: 'Perceptual Investigation of Gender-Based Violence among Women during COVID-19 lockdown in the FCT, Nigeria.',
          journal: 'Book of Proceedings 46th Annual Conference of Soil Science Society of Nigeria Institute for Agricultural Research, Ahmadu Bello University, Zaria, Nigeria',
          year: '2022'
        },
        {
          title: 'An Assessment of the influence of climate change on farmers/Pastoralists conflict in Benue state, Nigeria.',
          journal: 'Book of Proceedings 3rd School of Physical Sciences Biennial International Conference Federal University of Technology, Minna.',
          year: '2021'
          
        },
        {
          title: 'An Analysis of animal waste and its management in Ikara LGA, Kaduna State.',
          journal: 'Ife Research Publications in Geography. Vol. 16 (1) Page 54-64.',
          year: '2018'
        }
      ],
      
      teachingPhilosophy: 'I believe in shaping the thinking of young people and developing their skills to be able to contribute positively to the development of Nigeria.',
      professionalMemberships: [
        'Association of Nigerian Geographers (ANG)',
        'Population Association of Nigeria (PAN)'
      ]
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

      education: [
        { degree: 'Ph.D. Climatology', institution: 'FUTI', year: '2009' },
        { degree: 'M.Sc. Geography', institution: 'Ahmadu Bello University, Zaria', year: '1985' },
        { degree: 'PGDE', institution: 'Ahmadu Bello University, Zaria', year: '2001' },
        { degree: 'B.Sc. Geography', institution: 'Ahmadu Bello University, Zaria', year: '1986' }
      ],
      courses: [
        'GEOG 101: Introduction to Human Geography',
        'GEOG 105: Introduction to Practical Geography',
        'GEOG 107: Zaria and its Region ',
        'GEOG 104: Man’s Physical Environment II',
        'GEOG 108: Elementary Statistics for Geographers',
        'GEOG 112: Introduction to Cartography',
        'GEOG 205: Quantitative Techniques',
        'GEOG 207: Local Field Course',
        'GEOG 204: Introduction to Climate & Biography',
        'GEOL 208: Geology & Mineral Resources of Nigeria',
        'GEOG 303: Soil Geography',
        'GEOG 305: Economic Geography',
        'GEOG 307: Field Course',
        'GEOG 309: Biogeography',
        'GEOG 311: Climatology',
        'GEOG 401: Systematic Geography of Nigeria I',
        'GEOG 403: Philosophy & Methodology in Geography',
        'GEOG 406: Applied Climatology'
        ],
      
      recentPublications: [
        {
          title: 'Soil Organic Carbon Stock and Sequestration Potential in Guinea Savanna Ecological Zone, Nigeria',
          journal: 'Book of Proceedings 46th Annual Conference of Soil Science Society of Nigeria Institute for Agricultural Research, Ahmadu Bello University, Zaria, Nigeria',
          year: '2022'
        },
        {
          title: 'Urban Forest Degradation and Vulnerability to Pandemic Nexus in Minna Town, Niger State, Nigeria ',
          journal: 'Book of Proceedings 3rd School of Physical Sciences Biennial International Conference Federal University of Technology, Minna.',
          year: '2021'
          
        },
        {
          title: 'Spatial Variation of Carbon Stock Density in Guinea Savanna Landscape of Niger State, Nigeria',
          journal: 'Ife Research Publications in Geography. Vol. 16 (1) Page 54-64.',
          year: '2018'
        }
      ],
      
      teachingPhilosophy: 'I believe in impacting knowledge.',
      professionalMemberships: [
        'Member, Association of Nigerian Geographers (MANG)',
        'Member, Nigerian Meteorological Society (MNiMetS) ',
        'Member, Nigerian Association of Hydrological Science (MNAHS) ',
        'Member, International Society of Agrometeorology (INSAM)',
      ]
    },
     {
      id: 11,
      name: 'Dr. Abdullahi Jibrin',
      position: 'Associate Professor',
      specialization: 'Biogeography, Pedology, Environmental Management & Climate change',
      email: 'ajibrin@abu.edu.ng',
      image: drAJ,
      research: ['Biomass Carbon stock and Sequestration Assessment for Climate Change Mitigation and Adaptation through Monitoring Reporting and Verification (MRV)'],
      publications: '37 Peer Reviewed Journal Publications and 16 Conference Proceedings Publications',
      yearsOfExperience: 14,

      education: [
        { degree: 'Ph.D. Environmental Geography', institution: 'University of Cambridge', year: '1999' },
        { degree: 'M.Sc. Climate Science', institution: 'University of Reading', year: '1995' },
        { degree: 'B.Sc. Geography', institution: 'Ahmadu Bello University', year: '1993' }
      ],
      courses: [
        'GEOG 309: Biogeography', 
        'GEOG 407: Pedology', 
        'GEOG 434: Ecosystem',
        'GEOG 423: Environmental hazards',
        'GEOG 408: Land Survey',
        'GEOG 425: Laboratory and Field techniques'
      ],
      
      recentPublications: [
        {
          title: 'Soil Organic Carbon Stock and Sequestration Potential in Guinea Savanna Ecological Zone, Nigeria',
          journal: 'Book of Proceedings 46th Annual Conference of Soil Science Society of Nigeria Institute for Agricultural Research, Ahmadu Bello University, Zaria, Nigeria',
          year: '2022'
        },
        {
          title: 'Urban Forest Degradation and Vulnerability to Pandemic Nexus in Minna Town, Niger State, Nigeria ',
          journal: 'Book of Proceedings 3rd School of Physical Sciences Biennial International Conference Federal University of Technology, Minna.',
          year: '2021'
          
        },
        {
          title: 'Spatial Variation of Carbon Stock Density in Guinea Savanna Landscape of Niger State, Nigeria',
          journal: 'Ife Research Publications in Geography. Vol. 16 (1) Page 54-64.',
          year: '2018'
        }
      ],
      
      teachingPhilosophy: 'I believe in scholarly search for facts / valuable knowledge and teaching/training of minds for the advancement of human civilization. This belief is backed by the values of working diligently in a challenging and dynamic environment, developing skills and competence in order to provide world-class solutions for the attainment of an organization’s corporate goals.',
      professionalMemberships: [
        'Member, Association of Nigerian Geographers (MANG)',
        'Member, International Biogeography Society (IBS)	',
        'Member, Forests and Forest Products Society (FFPS) ',
        'Member, Soil Science Society of Nigeria (SSSN)',
        'Teachers’ Registration Council of Nigeria (TRCN)'
      ]
    },
    {
      id: 12,
      name: 'Dr. Muhammad Isma’il',
      position: 'Dr.',
      specialization: 'Energy Geographies, Economic Geography, Remote Sensing & GIS',
      email: 'migeogjameel@gmail.com',
      image: drMI,
      research: ['Energy Geographies', 'Economic Geography', 'Remote Sensing', 'GIS'],
      publications: '80',
      yearsOfExperience: 14,

      education: [
        { degree: 'Ph.D. Geography', institution: 'Ahmadu Bello University, Zaria', year: '2017' },
        { degree: 'M.Sc. GIS', institution: 'University of Leicester, UK', year: '2011' },
        { degree: 'B.Sc. Geography', institution: 'Ahmadu Bello  University, Zaria', year: '2007' }
      ],
      courses: [
        'GEOG 402: Systematic Geography of Nigeria II',
        'GEOG 415: Industrial Location',
        'GEOG 428: Geography of Economic Development',
        'GEOG 432: Application of GIS & Remote Sensing',
        'GEOG 206: Introduction to Remote Sensing',
        'GEOG 212: Geography of African Development',
        'GEOG 315: Transportation Geography'
      ],
      
      recentPublications: [
        {
          title: 'Site Suitability Analysis for Municipal Solid Waste Dumpsites in Kaduna Metropolis, Kaduna State, Nigeria.',
          journal: 'Journal of Material Cycles and Waste Management 26, 96–108',
          year: '2024'
        }
      ],
      
      teachingPhilosophy: 'I believe that the essence of teaching is to impact positively on the learner by transforming his negative thought into a positive one',
      professionalMemberships: [
        'Member, Association of Nigerian Geographers (ANG)',
        'Geoinformation Society of Nigeria (GEOSON)'
      ]
    },
    {
      id: 13,
      name: 'Dr. Hamza Mohammed',
      position: 'Dr.',
      specialization: 'Climatology, Agro Climatology, Climates, Transport, Transport Management, Environmental Management, Climate Change, Sustainable Environmental Management',
      email: 'mhamza@abu.edu.ng',
      image: drHamza,
      research: ['Climatology', 'Agro Climatology', 'Climates', 'Transport', 'Transport Management', 'Environmental Management', 'Climate Change', 'Sustainable Environmental Management'],
      publications: '30+ Journal Publications and Proceedings & 1 Book',
      yearsOfExperience: 12,

      education: [
        { degree: 'Ph.D. Geography', institution: 'Ahmadu Bello University, Zaria', year: '2018' },
        { degree: 'M.Sc. Geography', institution: 'Ahmadu Bello University, Zaria', year: '2012' },
        { degree: 'B.Sc. Geography', institution: 'Ahmadu Bello  University, Zaria', year: '2006' }
      ],
      courses: [
        'GEOG 204: Introduction to Climate & Biogeography',
        'GEOG 311: Climatology',
        'GEOG 409: Tropical Climatology',
        'GEOG 426: Regional Development'
      ],
      
      recentPublications: [
        {
          title: 'Socio-economic Impact of flood and Severity Level in Jigawa State, Nigeria.',
          journal: 'Journal of Pure and Applied Sciences, Federal University, Dutse vol.11 no.2b range.97-112',
          year: '2025'
        },
        {
          title: 'Assessment of the extent of Community Preparedness to Flood Risk in Jigawa State, Nigeria.',
          journal: 'Journal of Pure and Applied Sciences, Federal University, Dutse vol.10 no.3 range.42-48 ',
          year: '2024'
        },
        {
          title: 'Multi-criteria analysis and mapping of the vulnerable flood risk areas of Jigawa State, Nigeria.',
          journal: 'Journal of Pure and Applied Sciences, Federal University, Dutse vol.10 no.3c range.39-54',
          year: '2024'
        }
      ],
      
      teachingPhilosophy: 'I believe that we must be serious about anything we do. Whatever is worth doing is worth doing very well. This is pretty simple.',
      professionalMemberships: [
        'Member, Association of Nigerian Geographers (ANG)',
        'Member, Nigerian Meteorological Society (NMetS)',
        'Member, Open and Distance e-Learning Association of Nigeria (ODeLAN)'
      ]
    },
    {
      id: 20,
      name: 'Dr. Ahmad Hamza Abdullahi',
      position: 'Dr.',
      specialization: 'Energy Geographies, Economic Geography, Remote Sensing & GIS',
      email: 'ahmadhamzaabdul@gmail.com',
      image: AHA,
      research: ['Environmental Health'],
      publications: '31',
      yearsOfExperience: 7,

      education: [
        { degree: 'Ph.D. Geography', institution: 'Ahmadu Bello University, Zaria', year: '' },
        { degree: 'M.Sc.Remote Sensing and GIS', institution: 'Ahmadu Bello University, Zaria', year: '' },
        { degree: 'B.Sc. Geography', institution: 'Bayero University, Kano', year: '' }
      ],
      courses: [
        'GEOG 313: Geographic Information Systems (GIS)',
        'GEOG 432: Application of GIS & Remote Sensing',
        'GEOG 204: Introduction to Climate & Biogeography',
        'GEOG 311: Climatology',
        'GEOG 409: Tropical Climatology',
        'GEOG 406: Applied Climatology'
      ],
      
      recentPublications: [
        {
          title: 'GIS-Based Determination of Urban Heat Island inKaduna Metropolis',
          journal: '',
          year: ''
        },
        {
          title: 'Perceptions on Climate Variability and its Impact on Measles Outbreak in Kano State',
          journal: '',
          year: ''
        },
        {
          title: 'Open Defeacation as a Challenge to Public Health in Giwa LGA ',
          journal: '',
          year: ''
        }
      ],
      
      teachingPhilosophy: 'I believe that teaching and learning are the background of all development.',
      professionalMemberships: [
        'Member, Association of Nigerian Geographers (ANG)',
        'Teachers Registration Council of Nigeria '
      ]
    },
    {
      id: 21,
      name: 'Dr. Muhammad Oyale Akhadelor',
      position: 'Dr.',
      specialization: 'Economic Geography, Transport Geography & Environmental Management',
      email: 'msakhadelor@gmail.com',
      image: AKHADELOR,
      research: ['Transport Economic', 'Policy and Planning', 'Development and Environment'],
      publications: '36',
      yearsOfExperience: 18,

      education: [
        { degree: 'Ph.D. Geography', institution: 'Ahmadu Bello University, Zaria', year: '2016' },
        { degree: 'M.Sc. Climate Science', institution: 'Ahmadu Bello  University, Zaria', year: '2011' },
        { degree: 'PGDE', institution: 'Usumanu Danfodio University, Sokoto', year: '2010' },
        { degree: 'B.Sc. Geography', institution: 'Ahmadu Bello  University, Zaria', year: '2005' }
      ],
      courses: [
        'GEOG 101: Introduction to Human Geography',
        'GEOG 102: Man, Location and Resources',
        'GEOG 112: Introduction to Cartography',
        'GEOG 202: Man & His Environment',
        'GEOG 205: Quantitative Techniques',
        'GEOG 207: Local Field Course',
        'GEOG 305: Economic Geography',
        'GEOG 307: Field Course',
        'GEOG 315: Transportation Geography'
      ],
      
      recentPublications: [
        {
          title: 'Barriers to Health Care Utilisation among Women in Rural Communities in Nigeria',
          journal: 'Journal of Management and Social Sciences',
          year: ''
        },
        {
          title: 'Assessment of the Impact of Lagged Precipitation, Dry Spell and Evaporatio Rate in the Occurance of Road Accident in Zaria, Nigeria.',
          journal: '',
          year: ''
          
        },
        {
          title: 'Component of Non – Revenue Water, Its Management, As a Tool for Sustainable Water Resources: A Case Study of Doka District, Kaduna North L.G.A. ',
          journal: '',
          year: ''
        }
      ],
      
      teachingPhilosophy: 'I believe that teachers should be accountable for effective teaching and learners should take responsibility for their own progress and actively engaged through questioning, experimenting, and applying knowledge rather than just memorizing',
      professionalMemberships: [
        'Member, Association of Nigerian Geographers (ANG)',
        'Member, Teachers Registration Council of Nigeria (TRCN)',
        'Member, Student Seminar Committee, FCFM, Afaka, Kaduna',
        'Member, Academic Staff Union of Research Institute (ASURI) Electoral Committee.',
        'Member, Horticultural Society of Nigeria (HORTSON','Member, Bye-Law Committee (ASURI)',
        'Member, Nigerian Meteorological Society (NmetS)',
        'Member, MCAN, Okene Zone, Kogi State',
        'Member, Chartered Institute of Logistics and Transport (CILT)'
      ]
    },
    {
      id: 23,
      name: 'Dr. Usman Jibrin Gani',
      position: 'Lecturer',
      specialization: 'Transport Geography',
      email: 'ardomodii@yahoo.com',
      image: gani,
      research: ['Transport Smart', 'AI'],
      publications: '21',
      yearsOfExperience: 12,

      education: [
        { degree: 'Ph.D. Geography', institution: 'Ahmadu Bello University, Zaria', year: '' }
      ],
      courses: [
        'All human geography courses'
      ],
      
      recentPublications: [
        {
          title: 'Geospatial analysis of the effects on insecurity on road transportation in Kaduna state',
          journal: '',
          year: ''
        }
      ],
      
      teachingPhilosophy: 'Good',
      professionalMemberships: [
        'Member, Association of Nigerian Geographers (ANG)',
        'Member, Chartered Institute of Logistics and Transport (CILT)'
      ]
    },
    {
      id: 26,
      name: 'Mal. Abdulrazak Ahmed Kumo',
      position: '',
      specialization: 'Environmental Management',
      email: 'talk2abdulkumo@gmail.com',
      image: razak,
      research: ['Renewable Energies', 'Environmental Impact Assessment (EIA)', 'Energy Transition', 'Energy Poverty'],
      publications: '38 Journals & 8 Conferences',
      yearsOfExperience: 6,

      education: [
        { degree: 'Ph.D. Environmental Management (ongoing)', institution: 'Bayero University, Kano', year: '2025' },
        { degree: 'M.Sc. Environmental Management', institution: 'Ahmadu Bello  University, Zaria', year: '2024' },
        { degree: 'B.Sc. Geography', institution: 'Ahmadu Bello  University, Zaria', year: '2015' }
      ],
      courses: [
        'GEOG 105: Introduction to Practical Geography',
        'GEOG 102: Man, Location and Resources',
        'GEOG 112: Introduction to Cartography',
        'GEOG 209: Introduction to Elementary Land Surveying',
        'GEOG 104: Man’s Physical Environment II',
        'GEOG 207: Local Field Course',
        'GEOG 106: Introduction to Environmental Resources',
        'GEOG 404: The Developed World',
        'GEOG 307: Field Course'
      ],
      
      recentPublications: [
        {
          title: 'Exploring the Drivers for Household Cooking Energy Transition in Gombe Metropolis, Gombe State',
          journal: '',
          year: ''
        },
        {
          title: 'Assessing the Prevalence of Smoke Exposure Emanating from Household Cooking Practices in North-Western States of Nigeria.',
          journal: '',
          year: ''
          
        }
      ],
      
      teachingPhilosophy: '',
      professionalMemberships: [
        'Environmental Management Association of Nigeria',
        'Association of Nigerian Geographers (ANG)'
      ]
    }
    // Add more detailed profiles for other lecturers...
  ];

  const lecturer = lecturers.find(l => l.id === parseInt(id || ''));

  if (!lecturer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Lecturer Not Found</h1>
          <Link to="/lecturers" className="text-green-600 hover:text-green-700">
            Back to Faculty Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/lecturers" className="inline-flex items-center text-green-100 hover:text-white mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to Faculty Directory
          </Link>
          
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img 
              src={lecturer.image} 
              alt={lecturer.name}
              className="w-48 h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{lecturer.name}</h1>
              <p className="text-xl text-green-100 mb-2">{lecturer.position}</p>
              <p className="text-lg text-green-200 mb-6">{lecturer.specialization}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Mail className="mr-2 text-green-300" size={16} />
                  <span>{lecturer.email}</span>
                </div>
                
                <div className="flex items-center">
                  <BookOpen className="mr-2 text-green-300" size={16} />
                  <span>{lecturer.publications} Publications</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 text-green-300" size={16} />
                  <span>{lecturer.yearsOfExperience} Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Teaching Philosophy */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Teaching Philosophy</h2>
                <p className="text-gray-700 leading-relaxed">{lecturer.teachingPhilosophy}</p>
              </div>

              {/* Research Interests */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Research Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {lecturer.research.map((area, index) => (
                    <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Publications */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Publications</h2>
                <div className="space-y-4">
                  {lecturer.recentPublications.map((pub, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-semibold text-gray-800">{pub.title}</h3>
                      <p className="text-gray-600 text-sm">{pub.journal} ({pub.year})</p>
                      
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <a href={`mailto:${lecturer.email}`} className="flex items-center text-green-600 hover:text-green-700">
                    <Mail className="mr-2" size={16} />
                    Send Email
                  </a>
                </div>
              </div>


              
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              
              {/* Education */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <GraduationCap className="mr-2 text-green-600" size={20} />
                  Education
                </h2>
                <div className="space-y-3">
                  {lecturer.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-3">
                      <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                      <p className="text-sm text-gray-600">{edu.institution}</p>
                      <p className="text-xs text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>


              {/* Professional Memberships */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Globe className="mr-2 text-blue-500" size={20} />
                  Professional Memberships
                </h2>
                <div className="space-y-2">
                  {lecturer.professionalMemberships.map((membership, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <span className="mr-2 text-blue-500">•</span>
                      <span className="text-sm">{membership}</span>
                    </div>
                  ))}
                </div>
              </div>


              {/* Courses Taught */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Courses Taught</h2>
                <ul className="space-y-2">
                  {lecturer.courses.map((course, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <BookOpen className="mr-2 text-green-500" size={16} />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>    

              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LecturerProfile;

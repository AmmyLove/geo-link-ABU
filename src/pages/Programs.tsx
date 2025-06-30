
import React from 'react';
import { GraduationCap, Award, Users, BookOpen, MapPin, Clock, ChevronRight, Shield, Globe, Microscope } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Centre for Risk and Disaster Management',
      type: 'Research Center',
      icon: Shield,
      description: 'Leading research center specializing in risk assessment, disaster preparedness, and emergency response strategies for Nigeria and West Africa.',
      features: [
        'Disaster risk assessment and mapping',
        'Emergency response training programs',
        'Community resilience building',
        'Hazard monitoring and early warning systems',
        'Post-disaster recovery planning'
      ],
      highlights: {
        established: '2010',
        projects: '25+ active projects',
        partnerships: 'NEMA, NIMET, UN-DRR',
        impact: '500+ communities reached'
      },
      admissionInfo: 'Open to researchers, government officials, and NGO workers',
      duration: 'Ongoing research programs and short courses',
      careerOutcomes: 'Disaster management specialists, emergency coordinators, risk analysts',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600'
    },
    {
      id: 2,
      title: 'Postgraduate Programs',
      type: 'Graduate Studies',
      icon: GraduationCap,
      description: 'Advanced degrees preparing scholars and professionals for leadership roles in geography, environmental management, and related fields.',
      features: [
        'MSc Geography (Physical/Human specializations)',
        'MSc Environmental Management',
        'PhD Geography and Environmental Studies',
        'Research supervision by leading experts',
        'International collaboration opportunities'
      ],
      highlights: {
        established: '1985',
        graduates: '800+ alumni',
        research: '50+ ongoing thesis projects',
        funding: 'Scholarships available'
      },
      admissionInfo: 'Bachelor\'s degree with 2nd class upper or equivalent',
      duration: 'MSc: 18-24 months, PhD: 3-5 years',
      careerOutcomes: 'University lecturers, senior researchers, policy makers, consultants',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 3,
      title: 'Undergraduate Programs',
      type: 'Bachelor\'s Degree',
      icon: BookOpen,
      description: 'Comprehensive undergraduate education combining theoretical knowledge with practical skills for the modern geography and environmental professional.',
      features: [
        'BSc Geography (4-year program)',
        'Environmental Management track',
        'Field work and practical training',
        'Industry attachment opportunities',
        'Research project in final year'
      ],
      highlights: {
        established: '1972',
        students: '400+ current students',
        placement: '85% graduate employment',
        accreditation: 'NUC approved'
      },
      admissionInfo: 'JAMB score 180+, O\'Level credits in Math, English, Geography, and 2 science subjects',
      duration: '4 years (8 semesters)',
      careerOutcomes: 'GIS analysts, environmental consultants, urban planners, teachers',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 4,
      title: 'Professional Development Center',
      type: 'Continuing Education',
      icon: Award,
      description: 'Short courses, workshops, and certification programs for working professionals seeking to upgrade their skills and knowledge.',
      features: [
        'GIS and Remote Sensing workshops',
        'Environmental Impact Assessment certification',
        'Project management for geographers',
        'Climate change adaptation training',
        'Professional certification programs'
      ],
      highlights: {
        established: '2015',
        participants: '1200+ trained',
        courses: '15+ specialized programs',
        partnerships: 'Industry collaborations'
      },
      admissionInfo: 'Open to professionals, minimum HND/BSc',
      duration: '1 week to 6 months programs',
      careerOutcomes: 'Career advancement, skill certification, professional networking',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      id: 5,
      title: 'Climate Research Institute',
      type: 'Research Center',
      icon: Globe,
      description: 'Cutting-edge research on climate change, adaptation strategies, and sustainable development solutions for the Sahel region.',
      features: [
        'Climate modeling and prediction',
        'Renewable energy research',
        'Carbon footprint assessment',
        'Community-based adaptation projects',
        'Policy development support'
      ],
      highlights: {
        established: '2018',
        funding: '₦2.5B research grants',
        publications: '150+ peer-reviewed papers',
        impact: 'National climate policy input'
      },
      admissionInfo: 'Research collaborations welcome',
      duration: 'Long-term research programs',
      careerOutcomes: 'Climate scientists, policy advisors, international consultants',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 6,
      title: 'Urban Studies Laboratory',
      type: 'Research Facility',
      icon: Microscope,
      description: 'State-of-the-art facility for urban planning research, smart city technologies, and sustainable development studies.',
      features: [
        'Urban modeling and simulation',
        'Smart city technology research',
        'Transportation planning studies',
        'Housing and settlement analysis',
        'Community development projects'
      ],
      highlights: {
        established: '2020',
        equipment: '₦500M modern facilities',
        projects: '20+ city planning projects',
        collaborations: 'Municipal governments'
      },
      admissionInfo: 'Open to students and researchers',
      duration: 'Project-based engagements',
      careerOutcomes: 'Urban planners, smart city specialists, municipal consultants',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Discover diverse academic and research programs designed to prepare you for leadership roles 
            in geography, environmental management, and sustainable development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-emerald-200">Specialized Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-emerald-200">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1500+</div>
              <div className="text-emerald-200">Alumni Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.id} className={`${program.bgColor} border-2 ${program.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${program.iconColor} bg-white p-3 rounded-lg shadow-sm`}>
                    <program.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{program.title}</h3>
                    <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {program.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight size={16} className="mr-2 mt-0.5 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white rounded-lg">
                  {Object.entries(program.highlights).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-semibold text-gray-800 text-sm">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="font-medium text-gray-700">Duration: </span>
                    <span className="text-gray-600">{program.duration}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Admission: </span>
                    <span className="text-gray-600">{program.admissionInfo}</span>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <h5 className="font-medium text-blue-800 mb-2">Career Outcomes:</h5>
                  <p className="text-blue-700 text-sm">{program.careerOutcomes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Join Our Programs?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the next step in your academic and professional journey. Our programs are designed 
            to provide you with the skills and knowledge needed for success in today's world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;

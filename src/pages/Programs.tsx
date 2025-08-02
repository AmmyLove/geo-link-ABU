
import React from 'react';
import { GraduationCap, Award, Users, BookOpen, MapPin, Clock, ChevronRight, Shield, Globe, Microscope } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'BSc Geography',
      type: 'Undergraduate Degree',
      icon: BookOpen,
      description: 'A comprehensive 4-year undergraduate program that provides students with a solid foundation in both physical and human geography, preparing them for diverse career paths in the geographical sciences.',
      features: [
        'Core courses in Physical Geography',
        'Human Geography specializations',
        'GIS and Remote Sensing training',
        'Field work and practical training',
        'Industry attachment (SIWES)',
        'Final year research project'
      ],
      highlights: {
        established: '1962',
        students: '300+ current students',
        placement: '90% graduate employment',
        accreditation: 'NUC Approved'
      },
      admissionInfo: 'JAMB UTME with minimum of 180 points, O\'Level credits in Mathematics, English, Geography, and two Science subjects',
      duration: '4 years (8 semesters)',
      careerOutcomes: 'Cartographers, GIS specialists, environmental consultants, urban planners, teachers, researchers',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'MSc Environmental Management',
      type: 'Postgraduate Degree',
      icon: Globe,
      description: 'An advanced program designed to train skilled manpower capable of monitoring and managing environmental challenges. Focuses on sustainable development and environmental assessment methodologies.',
      features: [
        'Environmental Assessment (EIA and SEA)',
        'Environmental monitoring and evaluation',
        'Resource management strategies',
        'Climate change adaptation',
        'Environmental policy and legislation',
        'Field research and thesis writing'
      ],
      highlights: {
        established: '1985',
        graduates: '500+ alumni',
        research: '30+ ongoing projects',
        partnerships: 'Government agencies & NGOs'
      },
      admissionInfo: 'Bachelor\'s degree with Second Class Upper or equivalent in relevant fields',
      duration: '18-24 months (3-4 semesters)',
      careerOutcomes: 'Environmental managers, policy analysts, EIA consultants, sustainable development specialists',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'MSc Geography',
      type: 'Postgraduate Degree',
      icon: GraduationCap,
      description: 'Advanced study in geographical sciences with options for specialization in physical geography, human geography, or geographic information systems.',
      features: [
        'Physical Geography specialization',
        'Human Geography specialization',
        'Advanced GIS and Remote Sensing',
        'Research methodology training',
        'Statistical analysis techniques',
        'Comprehensive thesis research'
      ],
      highlights: {
        established: '1975',
        graduates: '400+ alumni',
        specializations: '3 major tracks',
        publications: '50+ research papers annually'
      },
      admissionInfo: 'Bachelor\'s degree with Second Class Upper in Geography or related fields',
      duration: '18-24 months (3-4 semesters)',
      careerOutcomes: 'University lecturers, senior researchers, GIS analysts, development planners',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      title: 'PhD Geography and Environmental Studies',
      type: 'Doctoral Degree',
      icon: Award,
      description: 'The highest level of academic achievement in geographical and environmental sciences, preparing scholars for leadership in research, academia, and policy development.',
      features: [
        'Advanced research methodologies',
        'Independent research supervision',
        'Teaching assistantship opportunities',
        'Conference presentation requirements',
        'International collaboration projects',
        'Original thesis contribution'
      ],
      highlights: {
        established: '1980',
        graduates: '150+ PhDs',
        faculty: '20+ expert supervisors',
        impact: 'National policy influence'
      },
      admissionInfo: 'Master\'s degree with distinction or very good grade in relevant fields',
      duration: '3-5 years minimum',
      careerOutcomes: 'University professors, senior researchers, policy makers, international consultants',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600'
    },
    {
      id: 5,
      title: 'Postgraduate Diploma (PGD) Geography',
      type: 'Postgraduate Diploma',
      icon: Users,
      description: 'A conversion program designed for graduates from other disciplines who wish to pursue advanced studies in Geography and Environmental Management.',
      features: [
        'Foundation courses in Geography',
        'Environmental science principles',
        'Research methods introduction',
        'Practical field work',
        'GIS fundamentals',
        'Project-based learning'
      ],
      highlights: {
        established: '1990',
        graduates: '200+ conversions',
        success: '85% proceed to MSc',
        duration: 'Fast-track option'
      },
      admissionInfo: 'Bachelor\'s degree in any discipline with Second Class Lower minimum',
      duration: '12 months (2 semesters)',
      careerOutcomes: 'Pathway to MSc programs, environmental officers, planning assistants',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      id: 6,
      title: 'Professional Development Programs',
      type: 'Continuing Education',
      icon: Shield,
      description: 'Short-term specialized training programs and workshops designed for working professionals seeking to enhance their skills in specific areas of geography and environmental management.',
      features: [
        'GIS and Remote Sensing workshops',
        'Environmental Impact Assessment training',
        'Climate change adaptation seminars',
        'Disaster risk management courses',
        'Urban planning workshops',
        'Professional certification programs'
      ],
      highlights: {
        established: '2000',
        participants: '1000+ trained',
        programs: '15+ specialized courses',
        partnerships: 'Industry collaborations'
      },
      admissionInfo: 'Open to professionals with minimum HND/BSc qualification',
      duration: '1 week to 6 months',
      careerOutcomes: 'Professional advancement, skill certification, networking opportunities',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600'
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

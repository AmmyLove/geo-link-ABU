
import React from 'react';
import { Users, Target, Award, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const milestones = [
    { year: '1972', event: 'Department established as part of Faculty of Environmental Design' },
    { year: '1985', event: 'First PhD program launched in Geography' },
    { year: '1998', event: 'GIS Laboratory established' },
    { year: '2005', event: 'Environmental Management program introduced' },
    { year: '2015', event: 'Remote Sensing Center inaugurated' },
    { year: '2020', event: 'Digital mapping and drone technology integration' },
  ];

  const faculty = [
    {
      name: 'Prof. Aminu Hassan',
      position: 'Head of Department',
      specialization: 'Climate Change & Environmental Policy',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop'
    },
    {
      name: 'Dr. Fatima Abubakar',
      position: 'Associate Professor',
      specialization: 'GIS & Remote Sensing',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop'
    },
    {
      name: 'Dr. Ibrahim Musa',
      position: 'Senior Lecturer',
      specialization: 'Urban Geography & Planning',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Department</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Leading geographical education and environmental research for over 50 years, 
            shaping the future of sustainable development in Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Department History */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Heritage</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 1972, the Department of Geography and Environmental Management at Ahmadu Bello University 
                has been at the forefront of geographical education and environmental research in West Africa. We have 
                consistently produced graduates who have gone on to become leaders in academia, government, and the 
                private sector.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our department combines traditional geographical knowledge with cutting-edge technology, including GIS, 
                remote sensing, and environmental modeling, to address contemporary challenges in sustainable development, 
                climate change, and urban planning.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Users className="text-green-600 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-green-600">2000+</div>
                  <div className="text-gray-600">Alumni</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Award className="text-green-600 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-gray-600">Publications</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=500&fit=crop" 
                alt="University Building"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="text-green-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class education and conduct cutting-edge research in geography and environmental 
                management, developing professionals who can address complex environmental challenges and contribute 
                to sustainable development in Nigeria and the global community.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="text-green-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leading center of excellence in geographical education and environmental research in Africa, 
                recognized globally for innovation, academic rigor, and contributions to sustainable environmental 
                management and spatial science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white border border-green-200 rounded-lg p-4 shadow-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our distinguished faculty members bring decades of experience and expertise to guide students 
              in their academic and research endeavors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="/lecturers" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              View All Faculty
              <Calendar className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

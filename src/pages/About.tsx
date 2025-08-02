
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
                The Department of Geography, Ahmadu Bello University started on September 26th 1962 using the classrooms formerly used in teaching ‘A’ Level Geography at the Nigerian College of Arts, Science and Technology. The first two lecturers were M.B. Thorp and M. Mortimore from Liverpool and Leeds respectively. Prof H.A. Moisley joined the Department as the first Professor of Geography in 1963 from the University of Glasgow and was later joined by P.N. Hore as a Senior Lecturer with a Ph.D from the University of London. By the time the first class of undergraduates moved into part III of the degree programme in October 1964, there were four academic staff in the department. The staff strength has grown to 26 academic staff, 6 technologists, 3 library staff, 7 secretarial staff and a driver.

                The Departmental Library is the largest Geography Departmental Library in the country. The Department also has a comprehensive map Library.

                Staff-Student relation is friendly and undergraduates run the socially and academically active National Association of Geography Students (NAGS), A.B.U Chapter.


              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Geography Department was under the Faculty of arts and Social Sciences offering the degree of B.A (Honours) and B.Sc (Honours) in geography respectively. Presently, the department is under the Faculty Science offering only B.Sc in Geography. Apart from the undergraduate degree, the department offers Postgraduate Diplomas in GIS and Rural Development respectively and Masters of Science in Geography, GIS, Transport Management, Population and Demographic studies, Rural Development and Environmental Management respectively. We also offer Ph.D in Geography and Rural Development.

                These courses have made the Department a haven of postgraduate students that are eager to attain the training and have been tremendously relevant in all spheres of their endeavours.
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
                src="https://physicalsciences.abu.edu.ng/department/geography/public/assets/images/geo2.jpg"
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
              <div className="text-gray-600 leading-relaxed">
                The mission of our department is to:
                  <ul>
                    <li> Advance the frontier of knowledge in geography and environmental management through teaching and research by employing the state-of-the-art technology in the process. </li>
                    <li> Use an interactive practical field-based courses for hand on experience.  </li>
                    <li> Produce highly skilled manpower that can contribute to development at every level of society for the present and future needs of the country through basic and applied research trials and findings in transport, agriculture, water resource management, weather etc. </li>
                    <li> Demonstrate the relevance of geography and environmental education and skills in the planning and management of global resources and environment establishing the purpose and relevance of department of geography and environmental management. </li>
                    <li> Be in a state of preparedness to render service to the community whenever called upon through applied geography and environmental research confirming the reason for the existence of the department. </li>
                    <li> Consequently, the department will advance the frontier of knowledge for the benefits of students and society as a whole to combat present and future challenges be it natural or human. </li>
                  </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="text-green-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The vision of Department of Geography and Environmental Management in this 21st century are to:

                Be a department of geography and environmental management of international repute that will be recognized nationally and internationally as a center of excellence with dynamic educational programmes.
                Build a department that is able to disseminate its research findings and learning activities through publications such as books, journals, conference and workshop proceedings, occasional papers and internet based platforms.
                Have a department made up of high calibre and highly motivated staff and students.
                Have a department where collaborative research is highly encouraged.
                Produce highly skilled manpower that can contribute to the development of society at every level.
                Involvement in community and outreach services throughout Kaduna State, the nation and internationally. 
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

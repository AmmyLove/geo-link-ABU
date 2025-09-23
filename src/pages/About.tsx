import React from 'react';
import { Users, Target, Award, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  // Add page metadata for SEO
  React.useEffect(() => {
    document.title = 'About Us - Department of Geography, ABU Zaria';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about the Department of Geography and Environmental Management at Ahmadu Bello University, Zaria. Over 50 years of excellence in geographical education and environmental research.');
    }
  }, []);

  const milestones = [
    { year: '1962', event: 'Department established on September 26th' },
    { year: '1963', event: 'First Professor of Geography appointed' },
    { year: '1964', event: 'First undergraduate class graduated' },
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              About Our Department
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              Leading geographical education and environmental research for over 60+ years, 
              shaping the future of sustainable development in Nigeria and beyond.
            </p>
          </div>
        </section>

        {/* Department History */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <article className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Heritage</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The Department of Geography, Ahmadu Bello University started on September 26th, 1962, using classrooms formerly used in teaching 'A' Level Geography at the Nigerian College of Arts, Science and Technology. The first two lecturers were M.B. Thorp and M. Mortimore from Liverpool and Leeds respectively.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Prof H.A. Moisley joined the Department as the first Professor of Geography in 1963 from the University of Glasgow and was later joined by P.N. Hore as a Senior Lecturer with a Ph.D from the University of London. By October 1964, when the first class of undergraduates moved into part III of the degree programme, there were four academic staff in the department.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    The staff strength has grown to 26 academic staff, 6 technologists, 3 library staff, 7 secretarial staff and a driver. The Departmental Library is the largest Geography Departmental Library in the country, and the Department also has a comprehensive map Library.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <Users className="text-green-600 mx-auto mb-3" size={40} />
                    <div className="text-3xl font-bold text-green-600 mb-1">2000+</div>
                    <div className="text-gray-600 font-medium">Alumni Worldwide</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <Award className="text-green-600 mx-auto mb-3" size={40} />
                    <div className="text-3xl font-bold text-green-600 mb-1">100+</div>
                    <div className="text-gray-600 font-medium">Research Publications</div>
                  </div>
                </div>
              </article>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://physicalsciences.abu.edu.ng/department/geography/public/assets/images/geo2.jpg"
                    alt="Geography Department Building at ABU Zaria"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-green-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guiding principles that drive our commitment to excellence in geographical education and research
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <article className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
                <header className="flex items-center mb-8">
                  <div className="p-3 bg-green-100 rounded-xl mr-4">
                    <Target className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                </header>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p className="mb-4">The mission of our department is to:</p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Advance the frontier of knowledge in geography and environmental management through teaching and research by employing state-of-the-art technology</li>
                    <li>Provide interactive practical field-based courses for hands-on experience</li>
                    <li>Produce highly skilled manpower that can contribute to development at every level of society</li>
                    <li>Demonstrate the relevance of geography and environmental education in global resource management</li>
                    <li>Render service to the community through applied geography and environmental research</li>
                    <li>Combat present and future challenges, both natural and human, for the benefit of society</li>
                  </ul>
                </div>
              </article>
              
              <article className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
                <header className="flex items-center mb-8">
                  <div className="p-3 bg-green-100 rounded-xl mr-4">
                    <Award className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                </header>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p className="mb-4">The vision of our Department in the 21st century:</p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Be a department of international repute, recognized as a center of excellence</li>
                    <li>Disseminate research findings through publications, conferences, and digital platforms</li>
                    <li>Maintain high-calibre and motivated staff and students</li>
                    <li>Encourage collaborative research initiatives</li>
                    <li>Produce graduates who contribute to societal development</li>
                    <li>Engage in community outreach services across Kaduna State, Nigeria, and internationally</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey Through Time</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones that have shaped our department's growth and excellence
              </p>
            </header>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-green-600 mb-3">{milestone.year}</div>
                      <p className="text-gray-600 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Overview */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="container mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our distinguished faculty members bring decades of experience and expertise to guide students 
                in their academic and research endeavors
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {faculty.map((member, index) => (
                <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={`Portrait of ${member.name}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-green-600 font-semibold mb-2">{member.position}</p>
                    <p className="text-gray-600">{member.specialization}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <a 
                href="/lecturers" 
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                View All Faculty Members
                <Calendar className="ml-3" size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
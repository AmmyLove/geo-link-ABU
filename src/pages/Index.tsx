
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar, BookOpen, ChevronRight, Globe, Leaf, Mountain } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const quickLinks = [
    { title: 'Academic Calendar', icon: Calendar, href: '/noticeboard' },
    { title: 'Faculty Profiles', icon: Users, href: '/lecturers' },
    { title: 'Campus Maps', icon: MapPin, href: '/maps' },
    { title: 'Latest News', icon: BookOpen, href: '/news' },
  ];

  const featuredProjects = [
    {
      title: 'Climate Change Impact Assessment',
      student: 'Aisha Muhammad',
      description: 'Analysis of climate patterns in Northern Nigeria using GIS technology.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop'
    },
    {
      title: 'Urban Growth Mapping',
      student: 'Ibrahim Sani',
      description: 'Mapping urban expansion in Zaria using satellite imagery and remote sensing.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop'
    },
    {
      title: 'Water Resource Management',
      student: 'Fatima Aliyu',
      description: 'Sustainable water management strategies for rural communities.',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop'
    }
  ];

  const news = [
    {
      title: 'Department Receives Research Grant',
      date: 'November 15, 2024',
      summary: 'N5 million grant awarded for climate resilience research in the Sahel region.'
    },
    {
      title: 'International Conference Participation',
      date: 'November 10, 2024',
      summary: 'Faculty members present research at African Geographic Conference in Lagos.'
    },
    {
      title: 'New GIS Laboratory Inaugurated',
      date: 'November 5, 2024',
      summary: 'State-of-the-art GIS lab officially opened with latest mapping technology.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 opacity-10">
          <Globe size={200} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Mountain size={150} />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="mr-3 text-green-300" size={48} />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              GeoLink
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-green-100 mb-4">
            Department of Geography and Environmental Management
          </p>
          <p className="text-lg text-green-200 mb-8">
            Ahmadu Bello University, Zaria
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Exploring our world through cutting-edge research, innovative technology, and sustainable solutions for environmental challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Learn More
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/lecturers" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center justify-center"
            >
              Meet Our Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <link.icon className="text-green-600 mb-4 group-hover:text-green-700 transition-colors" size={32} />
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-800 transition-colors">
                  {link.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Department</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Department of Geography and Environmental Management at Ahmadu Bello University is a leading center for geographical education and environmental research in West Africa. We combine traditional geographical knowledge with modern technology to address contemporary environmental challenges.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-gray-600">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Research Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1972</div>
                  <div className="text-gray-600">Established</div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Read More
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop" 
                alt="University Campus"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Student Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Student Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-green-600 font-medium mb-3">By {project.student}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
            <Link 
              to="/news" 
              className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
            >
              View All News
              <ChevronRight className="ml-1" size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-sm text-green-600 font-medium mb-2">{item.date}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

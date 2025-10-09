
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar, BookOpen, ChevronRight, Globe, Leaf, Mountain, GraduationCap, Briefcase, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/FeaturedProjects';

const Index = () => {
  const quickLinks = [
    { title: 'Our Courses', icon: BookOpen, href: '/courses', description: 'Explore exciting courses' },
    { title: 'Academic Programs', icon: GraduationCap, href: '/programs', description: 'Discover our programs' },
    { title: "Lecturer's Profiles", icon: Users, href: '/lecturers', description: 'Meet our experts' },
    { title: 'Career Prospects', icon: Briefcase, href: '/careers', description: 'Your future awaits' },
    { title: 'Campus Maps', icon: MapPin, href: '/maps', description: 'Navigate our campus' },
    { title: 'Latest News', icon: Calendar, href: '/news', description: 'Stay updated' },
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

  const highlights = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: '50+ years of excellence in geography education with internationally recognized programs.',
      link: '/programs'
    },
    {
      icon: Users,
      title: 'Expert Academic Team',
      description: '25+ distinguished lecturers conducting cutting-edge research worldwide.',
      link: '/lecturers'
    },
    {
      icon: Briefcase,
      title: 'Career Success',
      description: '92% graduate employment rate with alumni working in top organizations globally.',
      link: '/careers'
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
              to="/programs" 
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Explore Programs
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/courses" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center justify-center"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <link.icon className="text-green-600 mb-4 group-hover:text-green-700 transition-colors" size={32} />
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-800 transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Department?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine traditional geographical knowledge with modern technology to prepare you for success in today's world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 mb-4">{highlight.description}</p>
                <Link 
                  to={highlight.link}
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">25+</div>
              <div className="text-gray-600">Academic team</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">1972</div>
              <div className="text-gray-600">Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Student Projects - Now using the new component */}
      {/* <FeaturedProjects /> */}

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

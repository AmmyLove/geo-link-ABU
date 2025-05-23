
import React, { useState } from 'react';
import { Bell, Calendar, Download, Pin, Clock, AlertCircle, BookOpen, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Noticeboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const notices = [
    {
      id: 1,
      title: 'Final Year Project Submission Deadline',
      category: 'Academic',
      date: '2024-12-15',
      urgent: true,
      pinned: true,
      content: 'All final year students must submit their project reports and presentations by December 15, 2024. Late submissions will not be accepted without prior approval.',
      attachment: 'project-guidelines.pdf',
      author: 'Dr. Fatima Abubakar'
    },
    {
      id: 2,
      title: 'Research Methodology Workshop',
      category: 'Events',
      date: '2024-11-30',
      urgent: false,
      pinned: true,
      content: 'Join us for a comprehensive workshop on research methodology for graduate students. Topics include data collection, analysis techniques, and thesis writing.',
      attachment: null,
      author: 'Prof. Aminu Hassan'
    },
    {
      id: 3,
      title: 'Second Semester Registration',
      category: 'Registration',
      date: '2024-12-01',
      urgent: true,
      pinned: false,
      content: 'Registration for the second semester will begin on December 1st. All students must complete their registration before the deadline to avoid late fees.',
      attachment: 'registration-guide.pdf',
      author: 'Department Secretary'
    },
    {
      id: 4,
      title: 'GIS Laboratory Safety Guidelines',
      category: 'Safety',
      date: '2024-11-20',
      urgent: false,
      pinned: false,
      content: 'New safety protocols have been implemented in the GIS laboratory. All students and faculty must review and comply with these guidelines.',
      attachment: 'safety-guidelines.pdf',
      author: 'Lab Coordinator'
    },
    {
      id: 5,
      title: 'Field Trip to Jos Plateau',
      category: 'Field Trip',
      date: '2024-12-10',
      urgent: false,
      pinned: false,
      content: 'Educational field trip to Jos Plateau for 300-level students. Registration and payment must be completed by November 25th.',
      attachment: 'fieldtrip-details.pdf',
      author: 'Dr. Ibrahim Musa'
    },
    {
      id: 6,
      title: 'Academic Calendar 2024/2025',
      category: 'Academic',
      date: '2024-11-15',
      urgent: false,
      pinned: true,
      content: 'The complete academic calendar for the 2024/2025 session has been released. Please note important dates for examinations and holidays.',
      attachment: 'academic-calendar.pdf',
      author: 'Registry'
    }
  ];

  const categories = ['All', 'Academic', 'Events', 'Registration', 'Safety', 'Field Trip'];

  const filteredNotices = notices.filter(notice => 
    selectedCategory === 'All' || notice.category === selectedCategory
  ).sort((a, b) => {
    // Sort by pinned first, then by date
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic': return BookOpen;
      case 'Events': return Calendar;
      case 'Registration': return Users;
      case 'Safety': return AlertCircle;
      case 'Field Trip': return Calendar;
      default: return Bell;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isNewNotice = (dateString: string) => {
    const noticeDate = new Date(dateString);
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    return noticeDate > threeDaysAgo;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Virtual Noticeboard</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Stay updated with the latest announcements, deadlines, and important information 
            from the Department of Geography and Environmental Management.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-16">
              <Bell className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No notices found</h3>
              <p className="text-gray-500">There are no notices in the selected category.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredNotices.map(notice => {
                const CategoryIcon = getCategoryIcon(notice.category);
                return (
                  <div
                    key={notice.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-4 ${
                      notice.urgent 
                        ? 'border-red-500' 
                        : notice.pinned 
                        ? 'border-green-500' 
                        : 'border-blue-500'
                    }`}
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${
                            notice.urgent 
                              ? 'bg-red-100 text-red-600' 
                              : notice.pinned 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            <CategoryIcon size={20} />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-xl font-semibold text-gray-800">{notice.title}</h3>
                              {notice.pinned && (
                                <Pin className="text-green-600" size={16} />
                              )}
                              {notice.urgent && (
                                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                                  URGENT
                                </span>
                              )}
                              {isNewNotice(notice.date) && (
                                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                                  NEW
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                {notice.category}
                              </span>
                              <div className="flex items-center">
                                <Clock className="mr-1" size={14} />
                                {formatDate(notice.date)}
                              </div>
                              <span>By {notice.author}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 leading-relaxed mb-4">{notice.content}</p>

                      {/* Attachment */}
                      {notice.attachment && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Download className="text-green-600" size={20} />
                            <span className="text-sm font-medium text-gray-700">{notice.attachment}</span>
                          </div>
                          <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700 transition-colors">
                            Download
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Quick Downloads */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Quick Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Academic Calendar 2024/2025', file: 'academic-calendar.pdf' },
              { title: 'Student Handbook', file: 'student-handbook.pdf' },
              { title: 'Course Registration Form', file: 'registration-form.pdf' },
              { title: 'Research Ethics Guidelines', file: 'research-ethics.pdf' },
              { title: 'Field Trip Application', file: 'fieldtrip-application.pdf' },
              { title: 'Thesis Format Guidelines', file: 'thesis-format.pdf' }
            ].map((document, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Download className="text-green-600" size={24} />
                    <div>
                      <h4 className="font-medium text-gray-800">{document.title}</h4>
                      <p className="text-sm text-gray-500">{document.file}</p>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Noticeboard;

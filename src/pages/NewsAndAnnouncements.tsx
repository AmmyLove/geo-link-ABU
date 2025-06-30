
import React, { useState } from 'react';
import { Search, Filter, Bell, Calendar, Download, Pin, Clock, AlertCircle, BookOpen, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsArticleCard from '../components/NewsArticleCard';

const NewsAndAnnouncements = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const allItems = [
    // News Articles
    {
      id: 1,
      type: 'news',
      title: 'Department Receives N5 Million Research Grant for Climate Studies',
      excerpt: 'The department has been awarded a significant research grant to study climate change impacts in the Sahel region, marking a major milestone in our research capabilities.',
      content: 'The Department of Geography and Environmental Management has received a prestigious N5 million research grant from the Nigerian Research Foundation to conduct comprehensive climate change impact studies in the Sahel region. This groundbreaking research will focus on understanding the effects of climate variability on agricultural productivity and water resources in Northern Nigeria.',
      category: 'Research',
      author: 'Prof. Aminu Hassan',
      date: '2024-11-15',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
      tags: ['Climate Change', 'Research Grant', 'Sahel Region'],
      readTime: '5 min read',
      urgent: false,
      pinned: true,
      attachment: null
    },
    {
      id: 2,
      type: 'news',
      title: 'International Conference on African Geography Hosted at ABU',
      excerpt: 'The department successfully hosted the 5th International Conference on African Geography, bringing together researchers from across the continent.',
      content: 'Over 200 researchers, academics, and policymakers from 15 African countries gathered at Ahmadu Bello University for the 5th International Conference on African Geography. The three-day conference featured presentations on sustainable development, environmental management, and geographical information systems.',
      category: 'Events',
      author: 'Dr. Fatima Abubakar',
      date: '2024-11-10',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tags: ['Conference', 'International', 'Research'],
      readTime: '3 min read',
      urgent: false,
      pinned: false,
      attachment: null
    },
    // Notices
    {
      id: 3,
      type: 'notice',
      title: 'Final Year Project Submission Deadline',
      excerpt: 'All final year students must submit their project reports and presentations by December 15, 2024.',
      content: 'All final year students must submit their project reports and presentations by December 15, 2024. Late submissions will not be accepted without prior approval.',
      category: 'Academic',
      date: '2024-12-15',
      urgent: true,
      pinned: true,
      attachment: 'project-guidelines.pdf',
      author: 'Dr. Fatima Abubakar',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      tags: ['Submission', 'Final Year', 'Deadline'],
      readTime: '2 min read'
    },
    {
      id: 4,
      type: 'notice',
      title: 'Research Methodology Workshop',
      excerpt: 'Join us for a comprehensive workshop on research methodology for graduate students.',
      content: 'Join us for a comprehensive workshop on research methodology for graduate students. Topics include data collection, analysis techniques, and thesis writing.',
      category: 'Events',
      date: '2024-11-30',
      urgent: false,
      pinned: true,
      attachment: null,
      author: 'Prof. Aminu Hassan',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
      tags: ['Workshop', 'Research', 'Graduate'],
      readTime: '3 min read'
    },
    {
      id: 5,
      type: 'notice',
      title: 'Second Semester Registration',
      excerpt: 'Registration for the second semester will begin on December 1st.',
      content: 'Registration for the second semester will begin on December 1st. All students must complete their registration before the deadline to avoid late fees.',
      category: 'Registration',
      date: '2024-12-01',
      urgent: true,
      pinned: false,
      attachment: 'registration-guide.pdf',
      author: 'Department Secretary',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      tags: ['Registration', 'Semester', 'Deadline'],
      readTime: '2 min read'
    }
  ];

  const categories = ['All', 'Research', 'Events', 'Academic', 'Registration', 'Safety', 'Field Trip'];
  const types = ['All', 'News', 'Notice'];

  const filteredItems = allItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesType = selectedType === 'All' || (selectedType === 'News' && item.type === 'news') || (selectedType === 'Notice' && item.type === 'notice');
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesType && matchesSearch;
  }).sort((a, b) => {
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
      case 'Research': return BookOpen;
      default: return Bell;
    }
  };

  const isRecentItem = (dateString: string) => {
    const itemDate = new Date(dateString);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return itemDate > oneWeekAgo;
  };

  const handleReadMore = (item: any) => {
    setSelectedArticle(item);
  };

  const handleDownload = (filename: string) => {
    const pdfContent = `%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n\n2 0 obj\n<<\n/Type /Pages\n/Kids [3 0 R]\n/Count 1\n>>\nendobj\n\n3 0 obj\n<<\n/Type /Page\n/Parent 2 0 R\n/Resources <<\n/Font <<\n/F1 4 0 R\n>>\n>>\n/MediaBox [0 0 612 792]\n/Contents 5 0 R\n>>\nendobj\n\n4 0 obj\n<<\n/Type /Font\n/Subtype /Type1\n/BaseFont /Times-Roman\n>>\nendobj\n\n5 0 obj\n<<\n/Length 44\n>>\nstream\nBT\n/F1 12 Tf\n72 720 Td\n(${filename}) Tj\nET\nendstream\nendobj\n\nxref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000274 00000 n \n0000000361 00000 n \ntrailer\n<<\n/Size 6\n/Root 1 0 R\n>>\nstartxref\n456\n%%EOF`;
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Announcements</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Stay updated with the latest news, research breakthroughs, events, and important announcements 
            from the Department of Geography and Environmental Management.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search news and announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500" size={20} />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => {
                const CategoryIcon = getCategoryIcon(item.category);
                return item.type === 'news' ? (
                  <NewsArticleCard
                    key={item.id}
                    article={item}
                    onReadMore={handleReadMore}
                    isRecentNews={isRecentItem}
                  />
                ) : (
                  <div
                    key={item.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-4 ${
                      item.urgent 
                        ? 'border-red-500' 
                        : item.pinned 
                        ? 'border-green-500' 
                        : 'border-blue-500'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${
                            item.urgent 
                              ? 'bg-red-100 text-red-600' 
                              : item.pinned 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            <CategoryIcon size={20} />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                              {item.pinned && <Pin className="text-green-600" size={16} />}
                              {item.urgent && (
                                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                                  URGENT
                                </span>
                              )}
                              {isRecentItem(item.date) && (
                                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                                  NEW
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                {item.category}
                              </span>
                              <div className="flex items-center">
                                <Clock className="mr-1" size={14} />
                                {new Date(item.date).toLocaleDateString()}
                              </div>
                              <span>By {item.author}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-4">{item.content}</p>

                      {item.attachment && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Download className="text-green-600" size={20} />
                            <span className="text-sm font-medium text-gray-700">{item.attachment}</span>
                          </div>
                          <button 
                            onClick={() => handleDownload(item.attachment)}
                            className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                          >
                            Download
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedArticle.title}</h2>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                  ×
                </button>
              </div>
              {selectedArticle.image && (
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedArticle.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAndAnnouncements;

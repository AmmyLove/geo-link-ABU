
import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, ChevronRight, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles = [
    {
      id: 1,
      title: 'Department Receives N5 Million Research Grant for Climate Studies',
      excerpt: 'The department has been awarded a significant research grant to study climate change impacts in the Sahel region, marking a major milestone in our research capabilities.',
      content: 'The Department of Geography and Environmental Management has received a prestigious N5 million research grant from the Nigerian Research Foundation to conduct comprehensive climate change impact studies in the Sahel region. This groundbreaking research will focus on understanding the effects of climate variability on agricultural productivity and water resources in Northern Nigeria.',
      category: 'Research',
      author: 'Prof. Aminu Hassan',
      date: '2024-11-15',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
      tags: ['Climate Change', 'Research Grant', 'Sahel Region']
    },
    {
      id: 2,
      title: 'International Conference on African Geography Hosted at ABU',
      excerpt: 'The department successfully hosted the 5th International Conference on African Geography, bringing together researchers from across the continent.',
      content: 'Over 200 researchers, academics, and policymakers from 15 African countries gathered at Ahmadu Bello University for the 5th International Conference on African Geography. The three-day conference featured presentations on sustainable development, environmental management, and geographical information systems.',
      category: 'Events',
      author: 'Dr. Fatima Abubakar',
      date: '2024-11-10',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tags: ['Conference', 'International', 'Research']
    },
    {
      id: 3,
      title: 'Student Wins National Geography Competition',
      excerpt: 'Final year student Aisha Muhammad has won the national undergraduate geography competition with her innovative research on urban sustainability.',
      content: 'Aisha Muhammad, a final year student in the department, has been awarded first place in the National Undergraduate Geography Competition. Her research on "Sustainable Urban Development Strategies for Nigerian Cities" impressed judges with its innovative approach and practical applications.',
      category: 'Student News',
      author: 'Dr. Ibrahim Musa',
      date: '2024-11-05',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tags: ['Student Achievement', 'Competition', 'Urban Development']
    },
    {
      id: 4,
      title: 'New GIS Laboratory Officially Opened',
      excerpt: 'State-of-the-art GIS laboratory equipped with latest mapping technology and software officially inaugurated by the Vice-Chancellor.',
      content: 'The department unveiled its new Geographic Information Systems laboratory, featuring cutting-edge technology including high-performance computers, advanced mapping software, and satellite imagery analysis tools. The facility will enhance research capabilities and provide students with hands-on experience in modern geographical analysis.',
      category: 'Infrastructure',
      author: 'Department News Team',
      date: '2024-10-28',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tags: ['GIS', 'Laboratory', 'Technology']
    },
    {
      id: 5,
      title: 'Faculty Members Present at World Climate Summit',
      excerpt: 'Three faculty members from the department presented their research findings at the World Climate Summit in Dubai.',
      content: 'Prof. Aminu Hassan, Dr. Fatima Abubakar, and Dr. Aisha Yusuf represented the department at the World Climate Summit in Dubai, presenting research on climate adaptation strategies in West Africa. Their presentations were well-received by the international scientific community.',
      category: 'Research',
      author: 'International Relations Office',
      date: '2024-10-20',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop',
      tags: ['Climate Summit', 'International', 'Faculty Research']
    },
    {
      id: 6,
      title: 'Environmental Management Program Receives Accreditation',
      excerpt: 'The Environmental Management program has received full accreditation from the Nigerian Universities Commission, ensuring quality education standards.',
      content: 'The department\'s Environmental Management program has successfully received full accreditation from the Nigerian Universities Commission (NUC). This achievement recognizes the program\'s excellence in curriculum design, faculty qualifications, and learning outcomes.',
      category: 'Academic',
      author: 'Quality Assurance Unit',
      date: '2024-10-15',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop',
      tags: ['Accreditation', 'Environmental Management', 'Quality Assurance']
    }
  ];

  const categories = ['All', 'Research', 'Events', 'Student News', 'Infrastructure', 'Academic'];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isRecentNews = (dateString: string) => {
    const newsDate = new Date(dateString);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return newsDate > oneWeekAgo;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Stay informed with the latest news, research breakthroughs, events, and achievements 
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
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
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
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Story</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <img 
                  src={filteredArticles[0].image} 
                  alt={filteredArticles[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredArticles[0].category}
                    </span>
                    {isRecentNews(filteredArticles[0].date) && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{filteredArticles[0].title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{filteredArticles[0].excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="mr-1" size={14} />
                        {filteredArticles[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {formatDate(filteredArticles[0].date)}
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">
                      Read More
                      <ChevronRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length > 1 && (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-12">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.slice(1).map(article => (
                  <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                        {isRecentNews(article.date) && (
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                            NEW
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Clock className="mr-1" size={12} />
                          {formatDate(article.date)}
                        </div>
                        <span>{article.author}</span>
                      </div>
                      
                      <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                        Read Full Article
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <Search className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-green-100 mb-8">
            Subscribe to our newsletter to receive the latest news and updates from the department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;

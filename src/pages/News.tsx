
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsArticleCard from '../components/NewsArticleCard';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

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
      tags: ['Climate Change', 'Research Grant', 'Sahel Region'],
      readTime: '5 min read'
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
      tags: ['Conference', 'International', 'Research'],
      readTime: '3 min read'
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
      tags: ['Student Achievement', 'Competition', 'Urban Development'],
      readTime: '4 min read'
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
      tags: ['GIS', 'Laboratory', 'Technology'],
      readTime: '3 min read'
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

  const isRecentNews = (dateString: string) => {
    const newsDate = new Date(dateString);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return newsDate > oneWeekAgo;
  };

  const handleReadMore = (article: any) => {
    setSelectedArticle(article);
  };

  const handleNewsletterSignup = async (email: string) => {
    // Simulate newsletter signup
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing to our newsletter!');
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
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500" size={20} />
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

      {/* News Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length > 0 ? (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-12">
                {selectedCategory === 'All' ? 'Latest News' : `${selectedCategory} News`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map(article => (
                  <NewsArticleCard
                    key={article.id}
                    article={article}
                    onReadMore={handleReadMore}
                    isRecentNews={isRecentNews}
                  />
                ))}
              </div>
            </>
          ) : (
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
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleNewsletterSignup((e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
            <button 
              onClick={(e) => {
                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                if (input?.value) {
                  handleNewsletterSignup(input.value);
                  input.value = '';
                }
              }}
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </div>
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
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
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

export default News;


import React from 'react';
import { Calendar, Clock, User, Tag, ChevronRight } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime?: string;
}

interface NewsArticleCardProps {
  article: NewsArticle;
  onReadMore: (article: NewsArticle) => void;
  isRecentNews: (date: string) => boolean;
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ 
  article, 
  onReadMore, 
  isRecentNews 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
          {isRecentNews(article.date) && (
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
              NEW
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {article.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded flex items-center">
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <User size={12} className="mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar size={12} className="mr-1" />
              {formatDate(article.date)}
            </div>
            {article.readTime && (
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                {article.readTime}
              </div>
            )}
          </div>
        </div>
        
        <button 
          onClick={() => onReadMore(article)}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center justify-center"
        >
          Read Full Article
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </article>
  );
};

export default NewsArticleCard;

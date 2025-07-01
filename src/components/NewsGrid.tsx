
import React from 'react';
import { Search, Pin, Clock, Download, BookOpen, Users, Calendar, AlertCircle, Bell } from 'lucide-react';
import NewsArticleCard from './NewsArticleCard';

interface NewsItem {
  id: number;
  type: 'news' | 'notice';
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime: string;
  urgent: boolean;
  pinned: boolean;
  attachment?: string;
}

interface NewsGridProps {
  items: NewsItem[];
  onReadMore: (item: NewsItem) => void;
  onDownload: (filename: string) => void;
}

const NewsGrid: React.FC<NewsGridProps> = ({ items, onReadMore, onDownload }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic': return BookOpen;
      case 'Events': return Calendar;
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

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <Search className="mx-auto text-gray-400 mb-4" size={64} />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
        <p className="text-gray-500">Try adjusting your search criteria or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map(item => {
        const CategoryIcon = getCategoryIcon(item.category);
        return item.type === 'news' ? (
          <NewsArticleCard
            key={item.id}
            article={item}
            onReadMore={onReadMore}
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
                    onClick={() => onDownload(item.attachment!)}
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
  );
};

export default NewsGrid;

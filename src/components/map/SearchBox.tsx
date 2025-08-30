import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, X, Navigation } from 'lucide-react';
import { CampusLocation, searchLocations, locationCategories } from '@/data/campusLocations';
import { cn } from '@/lib/utils';

interface SearchBoxProps {
  locations: CampusLocation[];
  onLocationSelect: (locationId: string) => void;
  selectedLocation: string | null;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ 
  locations, 
  onLocationSelect, 
  selectedLocation,
  className 
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<CampusLocation[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle search query changes
  useEffect(() => {
    if (query.trim().length > 0) {
      const results = searchLocations(query).slice(0, 8); // Limit to 8 results
      setSearchResults(results);
      setIsOpen(results.length > 0);
      setHighlightedIndex(-1);
    } else {
      setSearchResults([]);
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  }, [query]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || searchResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < searchResults.length) {
          handleLocationSelect(searchResults[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleLocationSelect = (location: CampusLocation) => {
    onLocationSelect(location.id);
    setQuery(location.name);
    setIsOpen(false);
    setHighlightedIndex(-1);
    inputRef.current?.blur();
  };

  const clearSearch = () => {
    setQuery('');
    setSearchResults([]);
    setIsOpen(false);
    setHighlightedIndex(-1);
    inputRef.current?.focus();
  };

  const handleQuickAccess = (locationId: string) => {
    const location = locations.find(l => l.id === locationId);
    if (location) {
      handleLocationSelect(location);
    }
  };

  // Get category info for a location
  const getCategoryInfo = (category: keyof typeof locationCategories) => {
    return locationCategories[category];
  };

  // Popular/Quick access locations
  const quickAccessLocations = [
    'geography-department',
    'library-main',
    'student-center',
    'main-gate'
  ].map(id => locations.find(l => l.id === id)).filter(Boolean) as CampusLocation[];

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={20} className="text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (searchResults.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder="Search campus locations..."
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-600 transition-colors"
          >
            <X size={18} className="text-gray-400" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <>
              <div className="px-4 py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-500">
                  Found {searchResults.length} location{searchResults.length !== 1 ? 's' : ''}
                </span>
              </div>
              {searchResults.map((location, index) => {
                const categoryInfo = getCategoryInfo(location.category);
                return (
                  <button
                    key={location.id}
                    onClick={() => handleLocationSelect(location)}
                    className={cn(
                      "w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0",
                      highlightedIndex === index && "bg-green-50",
                      selectedLocation === location.id && "bg-green-100"
                    )}
                  >
                    <div className="flex items-start space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" 
                        style={{ backgroundColor: categoryInfo.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate">
                          {location.name}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2 mt-1">
                          {location.description}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs font-medium text-gray-400 capitalize">
                            {location.type}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-xs text-gray-500 capitalize">
                            {categoryInfo.label}
                          </span>
                          {location.buildingNumber && (
                            <>
                              <span className="text-gray-300">•</span>
                              <span className="text-xs font-mono text-gray-400">
                                {location.buildingNumber}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Navigation size={16} className="text-gray-300" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </>
          ) : query.length > 0 ? (
            <div className="px-4 py-6 text-center text-gray-500">
              <MapPin size={24} className="mx-auto mb-2 text-gray-300" />
              <div className="text-sm">No locations found</div>
              <div className="text-xs text-gray-400 mt-1">
                Try searching for "geography", "library", or "center"
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* Quick Access (shown when no search query) */}
      {!query && !isOpen && (
        <div className="mt-3">
          <div className="text-xs font-medium text-gray-500 mb-2 px-1">Quick Access</div>
          <div className="grid grid-cols-2 gap-2">
            {quickAccessLocations.map(location => {
              const categoryInfo = getCategoryInfo(location.category);
              return (
                <button
                  key={location.id}
                  onClick={() => handleQuickAccess(location.id)}
                  className={cn(
                    "p-3 text-left rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors",
                    selectedLocation === location.id && "border-green-500 bg-green-50"
                  )}
                >
                  <div className="flex items-start space-x-2">
                    <div 
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" 
                      style={{ backgroundColor: categoryInfo.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {location.name}
                      </div>
                      <div className="text-xs text-gray-500 capitalize mt-0.5">
                        {location.type}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
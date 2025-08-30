import React from 'react';
import { Filter, MapPin } from 'lucide-react';
import { locationCategories, getLocationsByCategory } from '@/data/campusLocations';
import { cn } from '@/lib/utils';

interface LocationFiltersProps {
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  onClearFilters: () => void;
  className?: string;
}

const LocationFilters: React.FC<LocationFiltersProps> = ({
  selectedCategories,
  onCategoryToggle,
  onClearFilters,
  className
}) => {
  const categories = Object.entries(locationCategories);

  return (
    <div className={cn("bg-white rounded-xl p-4 shadow-lg border", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-600" />
          <h3 className="font-semibold text-gray-900">Filter Locations</h3>
        </div>
        {selectedCategories.length > 0 && (
          <button
            onClick={onClearFilters}
            className="text-xs text-green-600 hover:text-green-700 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-2">
        {categories.map(([key, category]) => {
          const isSelected = selectedCategories.includes(key);
          const locationCount = getLocationsByCategory(key as keyof typeof locationCategories).length;
          
          return (
            <label
              key={key}
              className={cn(
                "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors",
                isSelected 
                  ? "bg-green-50 border border-green-200" 
                  : "bg-gray-50 hover:bg-gray-100 border border-transparent"
              )}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onCategoryToggle(key)}
                className="hidden"
              />
              
              <div className="flex items-center space-x-3 flex-1">
                <div
                  className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: category.color }}
                />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-green-700" : "text-gray-700"
                    )}>
                      {category.label}
                    </span>
                    <span className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      isSelected 
                        ? "bg-green-200 text-green-700" 
                        : "bg-gray-200 text-gray-600"
                    )}>
                      {locationCount}
                    </span>
                  </div>
                </div>
              </div>

              <div className={cn(
                "w-4 h-4 border-2 rounded flex items-center justify-center",
                isSelected 
                  ? "border-green-500 bg-green-500" 
                  : "border-gray-300"
              )}>
                {isSelected && (
                  <svg 
                    className="w-2.5 h-2.5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                )}
              </div>
            </label>
          );
        })}
      </div>

      {/* Filter Summary */}
      {selectedCategories.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin size={14} />
            <span>
              Showing {selectedCategories.reduce((total, cat) => 
                total + getLocationsByCategory(cat as keyof typeof locationCategories).length, 0
              )} filtered locations
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationFilters;
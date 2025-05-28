
import React from 'react';
import { ChevronRight, User, Calendar, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Climate Change Impact Assessment',
      student: 'Aisha Muhammad',
      year: '2024',
      category: 'Environmental Science',
      description: 'Analysis of climate patterns in Northern Nigeria using GIS technology and satellite data to predict future environmental changes.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
      tags: ['GIS', 'Climate Change', 'Remote Sensing'],
      award: 'Best Research Project 2024',
      status: 'Published',
      paperUrl: 'https://scholar.google.com/scholar?q=climate+change+northern+nigeria+gis',
      abstract: 'This comprehensive study examines the impact of climate change on Northern Nigeria using advanced GIS technology and satellite data analysis. The research reveals significant temperature increases and changing precipitation patterns over the past two decades.'
    },
    {
      id: 2,
      title: 'Urban Growth Mapping',
      student: 'Ibrahim Sani',
      year: '2024',
      category: 'Urban Planning',
      description: 'Mapping urban expansion in Zaria using satellite imagery and remote sensing technology to understand population growth patterns.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop',
      tags: ['Urban Planning', 'Satellite Imagery', 'Population Studies'],
      award: 'Innovation Award',
      status: 'In Progress',
      paperUrl: null,
      abstract: 'This ongoing research project maps the rapid urban expansion of Zaria metropolitan area using high-resolution satellite imagery and advanced remote sensing techniques to analyze population growth trends and urban sprawl patterns.'
    },
    {
      id: 3,
      title: 'Water Resource Management',
      student: 'Fatima Aliyu',
      year: '2023',
      category: 'Hydrology',
      description: 'Sustainable water management strategies for rural communities in Northern Nigeria with focus on groundwater conservation.',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop',
      tags: ['Water Management', 'Sustainability', 'Rural Development'],
      award: 'Community Impact Award',
      status: 'Completed',
      paperUrl: 'https://scholar.google.com/scholar?q=water+resource+management+northern+nigeria',
      abstract: 'This research develops sustainable water management strategies for rural communities in Northern Nigeria, focusing on groundwater conservation and community-based water resource management approaches.'
    },
    {
      id: 4,
      title: 'Agricultural Land Use Analysis',
      student: 'Yusuf Abdullahi',
      year: '2024',
      category: 'Agricultural Geography',
      description: 'Comprehensive analysis of agricultural land use patterns and their impact on food security in the Kaduna State region.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop',
      tags: ['Agriculture', 'Land Use', 'Food Security'],
      award: null,
      status: 'Under Review',
      paperUrl: null,
      abstract: 'This study provides a comprehensive analysis of agricultural land use patterns in Kaduna State, examining their implications for regional food security and sustainable agricultural development.'
    },
    {
      id: 5,
      title: 'Transportation Network Optimization',
      student: 'Khadija Usman',
      year: '2023',
      category: 'Transport Geography',
      description: 'Optimization of transportation networks in Zaria metropolitan area using network analysis and spatial modeling techniques.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      tags: ['Transportation', 'Network Analysis', 'Urban Planning'],
      award: 'Technical Excellence Award',
      status: 'Published',
      paperUrl: 'https://scholar.google.com/scholar?q=transportation+network+optimization+zaria',
      abstract: 'This research applies advanced network analysis and spatial modeling techniques to optimize transportation networks in Zaria metropolitan area, improving connectivity and reducing travel times.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Under Review': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (project: typeof featuredProjects[0]) => {
    alert(`Project Details:\n\nTitle: ${project.title}\nStudent: ${project.student}\nYear: ${project.year}\nCategory: ${project.category}\nStatus: ${project.status}\n\nAbstract:\n${project.abstract}\n\n${project.award ? `Award: ${project.award}` : ''}`);
  };

  const handleReadPaper = (paperUrl: string) => {
    window.open(paperUrl, '_blank');
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Student Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover outstanding research projects by our students, showcasing innovative approaches to geographical and environmental challenges.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    {project.award && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Award size={12} className="mr-1" />
                          Award
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="text-sm text-green-600 font-medium mb-1">{project.category}</div>
                    <CardTitle className="text-lg leading-tight group-hover:text-green-700 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <User size={16} className="mr-2" />
                      <span className="font-medium">{project.student}</span>
                      <Calendar size={16} className="ml-4 mr-2" />
                      <span>{project.year}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {project.award && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <div className="flex items-center text-yellow-800 text-sm">
                          <Award size={16} className="mr-2" />
                          <span className="font-medium">{project.award}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-2">
                      <button 
                        onClick={() => handleViewDetails(project)}
                        className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center group"
                      >
                        View Details
                        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                      {project.status === 'Published' && project.paperUrl && (
                        <button 
                          onClick={() => handleReadPaper(project.paperUrl!)}
                          className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Read Paper
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">
            View All Projects
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

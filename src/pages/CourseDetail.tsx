
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseDetail = () => {
  const { courseCode } = useParams();

  // Sample course data - in a real app, this would come from an API
  const courseData = {
    'geo101': {
      code: 'GEO 101',
      title: 'Introduction to Physical Geography',
      level: '100',
      semester: 'First',
      category: 'Physical Geography',
      credits: 3,
      description: 'Discover the dynamic forces shaping our planet! This comprehensive course explores landforms, climate patterns, and natural processes that create the diverse landscapes around us. Students will gain fundamental understanding of Earth systems and their interactions.',
      objectives: [
        'Understand basic Earth system processes and interactions',
        'Analyze landform development and geological processes',
        'Interpret climate patterns and weather phenomena',
        'Apply geographical concepts to real-world environmental issues',
        'Develop skills in field observation and data collection'
      ],
      prerequisites: 'None - Entry level course',
      assessment: [
        { type: 'Continuous Assessment', percentage: 40, details: 'Assignments, quizzes, practical work' },
        { type: 'Mid-term Exam', percentage: 20, details: 'Theory and application questions' },
        { type: 'Final Examination', percentage: 40, details: 'Comprehensive written exam' }
      ],
      careerRelevance: 'This course provides essential foundation knowledge for careers in environmental consulting, geological surveys, climate research, urban planning, and environmental impact assessment. Graduates with strong physical geography background earn average starting salaries of ₦1.8-3.2M annually.'
    }
    // Add more courses here...
  };

  const course = courseData[courseCode?.toLowerCase() || ''];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist or has been moved.</p>
          <Link to="/courses" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Back to Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-green-600 hover:text-green-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/courses" className="text-green-600 hover:text-green-700">Courses</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{course.code}</span>
          </div>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/courses" className="inline-flex items-center text-green-200 hover:text-white mb-4">
            <ArrowLeft className="mr-2" size={20} />
            Back to Courses
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">{course.code}</h1>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.level} Level
                </span>
              </div>
              <h2 className="text-xl md:text-2xl text-green-100 mb-4">{course.title}</h2>
              <p className="text-green-100 text-lg">{course.description}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Course Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <BookOpen className="mr-3" size={16} />
                  <span>{course.credits} Credit Hours</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📅</span>
                  <span>{course.semester} Semester</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📚</span>
                  <span>{course.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Learning Objectives */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Learning Objectives</h3>
                <div className="space-y-3">
                  {course.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Assessment Structure</h3>
                <div className="space-y-4">
                  {course.assessment.map((assessment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-800">{assessment.type}</h4>
                        <p className="text-gray-600 text-sm">{assessment.details}</p>
                      </div>
                      <span className="text-2xl font-bold text-green-600">{assessment.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Prerequisites */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Prerequisites</h3>
                <p className="text-gray-600">{course.prerequisites}</p>
              </div>

              {/* Career Relevance */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">Career Relevance</h3>
                <p className="text-green-700 text-sm">{course.careerRelevance}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;

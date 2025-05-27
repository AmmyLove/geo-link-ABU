
import React from 'react';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Department Address',
      details: [
        'Department of Geography and Environmental Management',
        'Faculty of Environmental Design',
        'Ahmadu Bello University, Zaria',
        'Kaduna State, Nigeria'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main Office: +234 (0) 69 550 1111',
        'Head of Dept: +234 803 123 4567',
        'Student Affairs: +234 803 234 5678',
        'Emergency: +234 (0) 69 550 2222'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: geography@abu.edu.ng',
        'Head of Dept: hod.geography@abu.edu.ng',
        'Admissions: admissions.geography@abu.edu.ng',
        'Research: research.geography@abu.edu.ng'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed',
        'Public Holidays: Closed'
      ]
    }
  ];

  const staff = [
    {
      name: 'Prof. Aminu Hassan',
      position: 'Head of Department',
      email: 'aminu.hassan@abu.edu.ng',
      phone: '+234 803 123 4567',
      office: 'Room 201'
    },
    {
      name: 'Mrs. Fatima Abdullahi',
      position: 'Department Secretary',
      email: 'secretary.geography@abu.edu.ng',
      phone: '+234 803 345 6789',
      office: 'Room 101'
    },
    {
      name: 'Mr. Ibrahim Garba',
      position: 'Academic Officer',
      email: 'academic.geography@abu.edu.ng',
      phone: '+234 803 456 7890',
      office: 'Room 102'
    }
  ];

  const handleFormSubmit = async (formData: any): Promise<boolean> => {
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success (you can add real API integration here)
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Get in touch with the Department of Geography and Environmental Management. 
            We're here to help with your inquiries and provide the information you need.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm onSubmit={handleFormSubmit} />

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  We welcome inquiries from prospective students, researchers, and partners. 
                  Feel free to reach out to us through any of the following channels.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <info.icon className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Staff Contacts */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((person, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-green-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{person.name}</h3>
                <p className="text-green-600 font-medium mb-4">{person.position}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Mail className="mr-2 text-green-500" size={16} />
                    <a href={`mailto:${person.email}`} className="hover:text-green-600 truncate">
                      {person.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="mr-2 text-green-500" size={16} />
                    <a href={`tel:${person.phone}`} className="hover:text-green-600">
                      {person.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="mr-2 text-green-500" size={16} />
                    <span>{person.office}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Emergency Information</h2>
          <p className="text-red-700 mb-8">
            For urgent matters or emergencies on campus, please contact the following numbers immediately:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Phone className="text-red-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-red-800 mb-2">Campus Security</h3>
              <a href="tel:+2346955502222" className="text-red-700 hover:text-red-800">
                +234 (0) 69 550 2222
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Phone className="text-red-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-red-800 mb-2">Health Center</h3>
              <a href="tel:+2346955503333" className="text-red-700 hover:text-red-800">
                +234 (0) 69 550 3333
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Phone className="text-red-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-red-800 mb-2">Fire Service</h3>
              <a href="tel:+2346955504444" className="text-red-700 hover:text-red-800">
                +234 (0) 69 550 4444
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

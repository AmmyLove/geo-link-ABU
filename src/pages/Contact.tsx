
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import KeyContacts from '../components/KeyContacts';
import EmergencyInfo from '../components/EmergencyInfo';
import VirtualTour from '../components/VirtualTour';

const Contact = () => {
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
      
      <ContactHero />

      {/* Contact Form and Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm onSubmit={handleFormSubmit} />
            <ContactInfo />
          </div>
        </div>
      </section>

      <KeyContacts />
      <VirtualTour />
      <EmergencyInfo />

      <Footer />
    </div>
  );
};

export default Contact;

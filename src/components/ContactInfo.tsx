
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Department Address',
      details: [
        'Department of Geography and Environmental Management',
        'Faculty of Physical Sciences',
        'Ahmadu Bello University, Zaria',
        'Kaduna State, Nigeria'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: geography@abu.edu.ng',
        'Head of Dept: hod.geography@abu.edu.ng',
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

  return (
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
  );
};

export default ContactInfo;

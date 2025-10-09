
import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const KeyContacts = () => {
  const staff = [
    // {
    //   name: 'Prof. Aminu Hassan',
    //   position: 'Head of Department',
    //   email: 'aminu.hassan@abu.edu.ng',
    //   phone: '+234 803 123 4567',
    //   office: 'Room 201'
    // },
    // {
    //   name: 'Mrs. Fatima Abdullahi',
    //   position: 'Department Secretary',
    //   email: 'secretary.geography@abu.edu.ng',
    //   phone: '+234 803 345 6789',
    //   office: 'Room 101'
    // },
    {
      name: 'Mrs. Goodness Amarachi Edward',
      position: 'Web Developer',
      email: 'ammylove182@gmail.com',
      phone: '+234 708 817 0390',
      office: 'razeb.com'
    }
  ];

  return (
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
  );
};

export default KeyContacts;

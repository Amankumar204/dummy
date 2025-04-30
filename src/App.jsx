import React, { useState } from 'react';
import { Bell, Calendar, Clock, Edit, Heart, Mail, MapPin, Search, User, Users, X, ChevronDown, Menu } from 'lucide-react';
import event1 from './assets/techs.png';
import event2 from './assets/digital.png';
import event3 from './assets/business.png';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import team from './assets/team.png';
import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import l1 from './assets/l1.png';
import l2 from './assets/l2.png';
import l3 from './assets/l3.png';
import l4 from './assets/l4.png';
export default function EventManagementHomepage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleRegisterModal = () => setShowRegisterModal(!showRegisterModal);
  const toggleEditMode = () => setEditMode(!editMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Sample upcoming events data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "TechSquare Conference 2025",
      date: "May 15-16, 2025",
      location: "Silicon Valley Convention Center",
      description: "Join us for the biggest tech conference of the year with industry leaders and innovators.",
      image: event1,
      category: "Conference",
      attendees: 1200
    },
    {
      id: 2,
      title: "Digital Workshop",
      date: "June 5, 2025",
      location: "Digital Innovation lab",
      description: "Learn the latest web development technologies and best practices from experts.",
      image: event2,
      category: "Workshop",
      attendees: 350
    },
    {
      id: 3,
      title: "Business Workshop",
      date: "July 10-12, 2025",
      location: "Tech Center Downtown",
      description: "Explore the future of artificial intelligence and its applications across industries.",
      image: event3,
      category: "Summit",
      attendees: 800
    }
  ]);

  // Sample schedule data
  const scheduleEvents = [
    {
      id: 1,
      title: "TechSquare Conference - Opening Keynote",
      date: "May 15, 2025",
      time: "9:00 AM - 10:30 AM",
      location: "Main Hall, Silicon Valley Convention Center",
      speaker: "Dr. Sarah Chen, CTO of TechInnovate"
    },
    {
      id: 2,
      title: "Future of Web Development Panel",
      date: "June 5, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Workshop Room A, Digital Innovation Hub",
      speaker: "Panel of Industry Experts"
    },
    {
      id: 3,
      title: "AI Implementation Workshop",
      date: "July 10, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Conference Room 3, Tech Center Downtown",
      speaker: "Prof. Michael Johnson"
    },
    {
      id: 4,
      title: "Networking Lunch - AI Summit",
      date: "July 11, 2025",
      time: "12:30 PM - 2:00 PM",
      location: "Garden Terrace, Tech Center Downtown",
      speaker: "Open to All Attendees"
    }
  ];

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp",
      text: "This platform has revolutionized how we manage our tech events. Highly recommended!",
      avatar: p1
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Innovate Solutions",
      text: "The interface is intuitive and our attendance rates have increased by 40% since we started using this platform.",
      avatar: p2
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      company: "Digital Ventures",
      text: "Outstanding support team and excellent features. We've been able to streamline our entire event management process.",
      avatar: p3
    }
  ];

  // Event editing functionality
  const handleEventEdit = (id, field, value) => {
    const updatedEvents = events.map(event => 
      event.id === id ? {...event, [field]: value} : event
    );
    setEvents(updatedEvents);
  };

  // Login Modal Component
  const LoginModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <button onClick={toggleLoginModal} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium shadow-md">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account? 
            <button 
              className="text-blue-600 hover:text-blue-800 ml-1 font-medium transition-colors"
              onClick={() => {
                toggleLoginModal();
                toggleRegisterModal();
              }}
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  // Register Modal Component
  const RegisterModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex cursor-pointer items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <button onClick={toggleRegisterModal} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="regEmail" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="regPassword" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
              placeholder="Create a password"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-start">
            <input type="checkbox" id="terms" className="mt-1 mr-2 h-4 w-4 text-blue-600" />
            <label htmlFor="terms" className="text-gray-600">
              I agree to the <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Terms and Conditions</a>
            </label>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium shadow-md">
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account? 
            <button 
              className="text-blue-600 hover:text-blue-800 ml-1 font-medium transition-colors"
              onClick={() => {
                toggleRegisterModal();
                toggleLoginModal();
              }}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2">
              <Calendar className="text-blue-600" size={28} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">EventMaster</span>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#events" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Events</a>
              <a href="#schedule" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Schedule</a>
              <a href="#about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">About Us</a>
              <a href="#testimonials" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#sponsors" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Sponsors</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={toggleLoginModal}
                className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                Login
              </button>
              <button 
                onClick={toggleRegisterModal}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md"
              >
                Register
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-700">
                <Menu size={24} />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-2 border-t border-gray-100">
              <a href="#events" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Events</a>
              <a href="#schedule" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Schedule</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#sponsors" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Sponsors</a>
              <div className="flex space-x-4 pt-2">
                <button 
                  onClick={toggleLoginModal}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  Login
                </button>
                <button 
                  onClick={toggleRegisterModal}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section/Carousel */}
      <section className="">
        <div className="w-full overflow-hidden">
          {/* Autoplaying carousel without controls */}
          <div className="relative w-full">
            <div className="flex w-full transition-transform duration-1000 ease-in-out animate-carousel">
              {/* Slide 1 */}
              <div className="w-full flex-shrink-0 relative">
                <img src={s1} alt="Event Banner 1" className="w-full object-cover h-[70vh]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="container mx-auto px-8 py-16">
                    <div className="max-w-2xl">
                      <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">Featured Event</span>
                      <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Tech Conference 2025</h3>
                      <p className="text-xl text-white/90 mb-6">Join industry leaders for our premier annual technology event</p>
                      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div className="w-full flex-shrink-0 relative">
                <img src={s2} alt="Event Banner 2" className="w-full object-cover h-[70vh]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="container mx-auto px-8 py-16">
                    <div className="max-w-2xl">
                      <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">Coming Soon</span>
                      <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Digital Workshop Series</h3>
                      <p className="text-xl text-white/90 mb-6">Expand your skills with our expert-led workshop sessions</p>
                      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide 3 */}
              <div className="w-full flex-shrink-0 relative">
                <img src={s3} alt="Event Banner 3" className="w-full object-cover h-[70vh]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="container mx-auto px-8 py-16">
                    <div className="max-w-2xl">
                      <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">New Event</span>
                      <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Business Summit 2025</h3>
                      <p className="text-xl text-white/90 mb-6">Network with executives and discover new business opportunities</p>
                      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                        Get Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CSS for animation */}
            <style jsx>{`
              @keyframes carousel {
                0% { transform: translateX(0); }
                33% { transform: translateX(0); }
                36% { transform: translateX(-100%); }
                66% { transform: translateX(-100%); }
                69% { transform: translateX(-200%); }
                99% { transform: translateX(-200%); }
                100% { transform: translateX(0); }
              }
              .animate-carousel {
                animation: carousel 15s infinite;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Search Section (Optional) */}
      <section className="py-6 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-lg p-4">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <input 
                type="text" 
                placeholder="Search for events..." 
                className="w-full py-3 pl-12 pr-4 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            </div>
            <div className="flex space-x-4">
              <select className="py-3 px-4 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-none">
                <option>All Categories</option>
                <option>Conferences</option>
                <option>Workshops</option>
                <option>Seminars</option>
                <option>Summits</option>
              </select>
              <select className="py-3 px-4 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-none">
                <option>Upcoming</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Next Month</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Discover and register for the most exciting upcoming events in your industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                <div className="p-6">
                  {editMode ? (
                    <input 
                      type="text" 
                      value={event.title} 
                      onChange={(e) => handleEventEdit(event.id, 'title', e.target.value)}
                      className="w-full text-xl font-bold mb-2 border-b cursor-pointer border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  ) : (
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  )}
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2 text-blue-600" />
                    {editMode ? (
                      <input 
                        type="text" 
                        value={event.date} 
                        onChange={(e) => handleEventEdit(event.id, 'date', e.target.value)}
                        className="w-full border-b border-gray-300 cursor-pointer focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <span>{event.date}</span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2 text-blue-600" />
                    {editMode ? (
                      <input 
                        type="text" 
                        value={event.location} 
                        onChange={(e) => handleEventEdit(event.id, 'location', e.target.value)}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <span>{event.location}</span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users size={16} className="mr-2 text-blue-600" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                  {editMode ? (
                    <textarea
                      value={event.description} 
                      onChange={(e) => handleEventEdit(event.id, 'description', e.target.value)}
                      className="w-full h-24 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 mb-6"
                    />
                  ) : (
                    <p className="text-gray-600 mb-6">{event.description}</p>
                  )}
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md">
                      Register Now
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                      <Heart size={18} className="mr-1" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center mx-auto">
              View All Events
              <ChevronDown size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Schedule</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Plan your attendance with our comprehensive event schedule</p>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="shadow-xl rounded-xl overflow-hidden">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                      <th className="py-4 px-6 text-left">Event</th>
                      <th className="py-4 px-6 text-left">Date</th>
                      <th className="py-4 px-6 text-left">Time</th>
                      <th className="py-4 px-6 text-left">Location</th>
                      <th className="py-4 px-6 text-left">Speaker</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {scheduleEvents.map((event) => (
                      <tr key={event.id} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="py-4 px-6 font-medium">{event.title}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2 text-blue-600" />
                            {event.date}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <Clock size={16} className="mr-2 text-blue-600" />
                            {event.time}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-blue-600" />
                            {event.location}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <User size={16} className="mr-2 text-blue-600" />
                            {event.speaker}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
              Download Full Schedule
            </button>
          </div>
        </div>
      </section>

{/* About Us Section */}
<section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Learn about our mission and the team behind EventMaster</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src={team} alt="Event Management Team" className="rounded-xl shadow-xl w-full" />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Your Trusted Event Management Partner</h3>
              <p className="text-gray-600 mb-4">
                EventMaster was founded in 2020 with a mission to revolutionize how events are organized and experienced. 
                Our platform brings together cutting-edge technology and industry expertise to create 
                seamless event management solutions for organizers and attendees alike.
              </p>
              <p className="text-gray-600 mb-6">
                With a team of dedicated professionals who are passionate about events, we've helped 
                thousands of organizations host successful conferences, workshops, seminars, and more. 
                Our platform handles everything from registrations and payments to scheduling and attendee engagement.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">5,000+</h4>
                    <p className="text-gray-500 text-sm">Events Managed</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">1 Million+</h4>
                    <p className="text-gray-500 text-sm">Attendees</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">50+</h4>
                    <p className="text-gray-500 text-sm">Countries</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">98%</h4>
                    <p className="text-gray-500 text-sm">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Hear from organizations that have transformed their events with our platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-3 text-indigo-800">Our Sponsors</h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Trusted by leading brands around the world</p>
    <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
      {/* Using placeholder images for logos */}
      <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={l1} alt="TechCorp Logo" className="object-contain w-31" />
      </div>
      {/* <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img src="/api/placeholder/128/64" alt="Innovate Logo" className="object-contain w-24" />
      </div> */}
      {/* <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img src="/api/placeholder/128/64" alt="DigiGroup Logo" className="object-contain w-24" />
      </div> */}
      <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={l2} alt="NextWave Logo" className="object-contain w-31" />
      </div>
      <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={l3} alt="FutureX Logo" className="object-contain w-31" />
      </div>
      <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={l4} alt="Zenith Logo" className="object-contain w-31" />
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Events?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100">Join thousands of successful event organizers who trust EventMaster for seamless event management</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={toggleRegisterModal}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Get Started for Free
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white">EventMaster</span>
              </div>
              <p className="text-gray-400 mb-6">The leading platform for event management, powering successful events worldwide.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
                <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#sponsors" className="text-gray-400 hover:text-white transition-colors">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Get the latest updates and news</p>
              <form className="flex mb-4">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg focus:outline-none flex-grow bg-gray-800 text-white border-t border-b border-l border-gray-700"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                  <Mail size={18} />
                </button>
              </form>
              <p className="text-gray-400 text-sm">By subscribing, you agree to our Privacy Policy</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 EventMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showLoginModal && <LoginModal />}
      {showRegisterModal && <RegisterModal />}

      {/* Admin Toggle */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={toggleEditMode}
          className={`p-3 rounded-full shadow-lg ${editMode ? 'bg-green-600' : 'bg-blue-600'} text-white hover:opacity-90 transition-all`}
        >
          <Edit size={20} />
        </button>
      </div>
    </div>
  );
}
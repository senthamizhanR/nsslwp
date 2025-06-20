import React from 'react';

// --- SVG Icons for Research Areas ---
const IconOscillator = () => (
  <svg className="w-8 h-8 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconSync = () => (
  <svg className="w-8 h-8 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconModel = () => (
  <svg className="w-8 h-8 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconSignal = () => (
  <svg className="w-8 h-8 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" />
  </svg>
);

function App() {
  const researchAreas = [
    {
      title: 'Nonlinear Oscillators & Chaos',
      icon: <IconOscillator />,
      description: 'Exploring the complex and unpredictable behavior of dynamic systems.'
    },
    {
      title: 'Synchronization Phenomena',
      icon: <IconSync />,
      description: 'Investigating how coupled systems can adjust their rhythms and lock into a common frequency.'
    },
    {
      title: 'Mathematical Modeling & Simulations',
      icon: <IconModel />,
      description: 'Creating computational models to simulate and predict real-world phenomena.'
    },
    {
      title: 'Integrable and Non‑Integrable Systems',
      icon: <IconOscillator />,
      description: 'Analyzing systems from both classical and quantum mechanical perspectives.'
    },
    {
      title: 'Signal Processing & Systems Identification',
      icon: <IconSignal />,
      description: 'Developing algorithms to extract information and identify system characteristics from data.'
    },
    {
      title: 'Applications in Physics & Engineering',
      icon: <IconSync />,
      description: 'Applying theoretical findings to solve practical problems in various scientific fields.'
    }
  ];

  const teamMembers = [
    {
      name: 'Prof. V. K. Chandrasekar',
      role: 'Principal Investigator',
      avatarUrl: 'https://placehold.co/256x256/E2E8F0/4A5568?text=VKC',
      description: "Leads the NSS Lab with a focus on nonlinear dynamics, chaos theory, and complex systems. His work drives the lab's innovative research direction."
    },
    {
      name: 'Research Scholars',
      role: 'PhD & Masters Students',
      avatarUrl: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Team',
      description: 'A dedicated group of post-graduate students driving the day-to-day research and experimental work.'
    }
  ];

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
      <div className="bg-slate-50 text-gray-800 min-h-screen font-sans">
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 border-b border-gray-200/60 shadow-sm z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-xl font-bold text-blue-700 tracking-tight">NSS Lab · SASTRA</h1>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#research" className="hover:text-blue-600 transition-colors">Research</a>
              <a href="#team" className="hover:text-blue-600 transition-colors">Team</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="text-center px-6 py-28 md:py-36 bg-white border-b border-gray-200">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tighter mb-4">
              Nonlinear Systems & Simulations Lab
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Innovating at the intersection of nonlinear dynamics, complex simulations, and intelligent system modeling.
            </p>
          </section>

          <section id="about" className="py-24 sm:py-32 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h3 className="text-3xl font-bold tracking-tight text-blue-800 mb-6 text-center">About The Lab</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                We are a multidisciplinary research group at SASTRA Deemed University, focusing on the fundamental principles of nonlinear system dynamics, mathematical modeling, and real-world simulations. Our mission is to unravel the complexities of dynamic systems through cutting-edge analytical and computational techniques.
              </p>
            </div>
          </section>

          <section id="research" className="py-24 sm:py-32 bg-white border-y border-gray-200">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold tracking-tight text-blue-800 mb-12">Our Research Areas</h3>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {researchAreas.map((topic, index) => (
                  <div key={index} className="p-8 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all transform hover:-translate-y-1">
                    {topic.icon}
                    <h4 className="text-gray-900 font-semibold text-lg mb-2">{topic.title}</h4>
                    <p className="text-gray-600 text-sm">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="team" className="py-24 sm:py-32 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h3 className="text-3xl font-bold tracking-tight text-blue-800 mb-12">Meet the Team</h3>
              <div className="grid md:grid-cols-2 gap-10">
                {teamMembers.map((member) => (
                  <div key={member.name} className="bg-white p-8 rounded-2xl border border-gray-200 text-left shadow-sm">
                    <img className="h-20 w-20 rounded-full mb-4 mx-auto md:mx-0" src={member.avatarUrl} alt={member.name} />
                    <h4 className="font-bold text-lg text-gray-900 text-center md:text-left">{member.name}</h4>
                    <p className="text-blue-600 font-medium mb-3 text-center md:text-left">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer id="contact" className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                We are always open to collaborations, questions, and new ideas. Feel free to reach out to us.
              </p>
              <a href="mailto:nsslab@sastra.edu" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors">
                Contact Us
              </a>
              <div className="mt-12 border-t border-gray-700 pt-8 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} NSS Lab, SASTRA Deemed University. All Rights Reserved.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;

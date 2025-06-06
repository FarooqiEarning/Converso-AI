import { useEffect, useState } from 'react';
import { Heart, MessageCircle, Instagram, Send } from 'lucide-react';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Main Profile Section - 60% */}
        <div className={`mb-24 opacity-0 ${isVisible ? 'animate-slideUp' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-premium-lg">
              <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/5 to-light-accent-500/5 dark:from-dark-primary-400/5 dark:to-dark-accent-400/5"></div>
              
              <div className="relative px-8 py-12">
                <div className="md:flex items-start gap-12">
                  {/* Profile Image */}
                  <div className="md:w-1/3 mb-8 md:mb-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 rounded-xl opacity-50 group-hover:opacity-70 blur transition-all duration-500"></div>
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <img
                          src="res/me.jpg"
                          alt="Muhammad Gohar"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <a
                        href="https://api.whatsapp.com/send?phone=923164525711"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E]/90 text-black rounded-xl transition-all duration-300 shadow-premium-sm hover:shadow-premium-lg"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-medium">Contact On Whatsapp</span>
                      </a>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a
                        href="https://www.instagram.com/muhammadgohar_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 bg-[#D62976] hover:bg-[#962FBF]/90 text-white rounded-xl transition-all duration-300 flex-1"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://t.me/MuhammadGohar_Official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 bg-[#24A1DE] hover:bg-[#128C7E]/90 text-white rounded-xl transition-all duration-300 flex-1"
                      >
                        <Send className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="md:w-2/3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-primary-100/50 dark:bg-dark-primary-800/50 text-light-primary-600 dark:text-dark-primary-400 text-sm font-medium mb-6">
                      <Heart className="w-4 h-4" />
                      <span>Developer and Owner Of Converso AI</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
                      Muhammad Gohar
                      <span className="text-xl sm:text-2xl text-light-text-secondary dark:text-dark-text-secondary ml-3">(Owner)</span>
                    </h1>
                    
                    <p className="text-1xl text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                      Muhammad Gohar is the owner, developer, and trainer of Converso AI. With a strong interest in computers and AI, he is dedicated to building innovative solutions and sharing his knowledge with others.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                      {[
                        { label: 'Contributions', value: '1.1k+' },
                        { label: 'Projects', value: '8+' },
                        { label: 'Experience', value: '5+ Years' },
                        { label: 'AI Models', value: '11+' }
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className={`opacity-0 animate-slideUp delay-${(index + 1) * 100}`}
                        >
                          <div className="text-2xl font-bold text-light-text dark:text-dark-text mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'React', 'Node.js', 'Next.js', 'JavaScript', 'Java', 'Kotlin', 'Cyber Security', 'TypeScript', 'Python',
                          'AI/ML', 'AWS', 'Docker', 'MongoDB'
                        ].map((tech, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors duration-300 opacity-0 animate-slideUp delay-${(index % 4 + 1) * 100}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Contributors Section - 30% */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-4">Core Contributors</h2>
            <div className="w-24 h-1 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ahmad Shahid */}
              <div className="group">
                <div className="relative rounded-xl overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-premium-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-400/5 dark:to-pink-400/5"></div>
                  <div className="relative p-6">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative rounded-full overflow-hidden w-20 h-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <img
                          src="res/ahmad.png"
                          alt="Ahmad Shahid"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">Ahmad Shahid</h3>
                        <p className="text-purple-600 dark:text-purple-400">Admin & Tester</p>
                      </div>
                    </div>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                      The Main Tester & Manager of Converso AI .
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Html', 'Css', 'JavaScript'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Affan */}
              <div className="group">
                <div className="relative rounded-xl overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-premium-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-400/5 dark:to-cyan-400/5"></div>
                  <div className="relative p-6">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative rounded-full overflow-hidden w-20 h-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <img
                          src="res/affan.png"
                          alt="Affan"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">Affan</h3>
                        <p className="text-blue-600 dark:text-blue-400">Admin & UI Designer</p>
                      </div>
                    </div>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                      The UI Designer & Admin at Converso AI.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Html', 'Css', 'JavaScript'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

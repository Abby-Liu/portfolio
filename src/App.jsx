import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import './styles/App.css'

import project1_1 from './images/projects/project1_1.png'
import project1_2 from './images/projects/project1_2.png';
import project1_3 from './images/projects/project1_3.png';
import project2_1 from './images/projects/project2_1.png';
import project3_1 from './images/projects/project3_1.jpeg';
import project4_1 from './images/projects/project4_1.png';
import project4_2 from './images/projects/project4_2.png';
import project5_1 from './images/projects/project5_1.png';
import project5_2 from './images/projects/project5_2.png';

import thumbnail2 from './images/thumbnails/thumbnail2.jpg';

const projects = [
  {
    id: 1,
    title: "AI Policy Assistant - Smart Q&A System",
    description: `[[Product link]](http://ai.smezj.com/analysis/#/knowledge/index) [[News link 1]](https://aa.com) [[News link 2]](https://aa.com) [[News link 3]](https://aa.com)\n \
      *Core Developer - 2024/08*\n\
      Tech Stack: \`NLP\`, \`Largen Language Model Fine-tuning\`, \`RAG\`\n \
      Developed an intelligent Q&A system serving 3 million citizens, enabling precise policy interpretation and personalized recommendations.
      Built localized policy knowledge graph and optimized model fine-tuning.
      Designed multi-turn dialogue mechanism and scenario-based policy recommendations.
      Project selected as a benchmark case for Jiangsu Province's digital government initiative and was reported by many news media.`,
    thumbnail: project3_1,
    images: [
      project3_1
    ]
  },
  {
    id: 2,
    title: "Legal Case Recommendation System Based on Text Similarity",
    description: "[[Patent link]](https://patents.google.com/patent/CN111708875A)\n \
*Patent Inventor | CN111708875A - 2020/09*\n \
Tech Stack: \`NLP\`, \`Text Similarity Algorithms\`, \`Machine Learning\`\n \
Invented a novel legal case recommendation system leveraging text similarity algorithms.\n \
Designed an automated system for analyzing and matching similar law cases, improving case research efficiency.\n \
Developed text preprocessing and feature extraction methods for law document analysis.\n \
Patent granted by China National Intellectual Property Administration (CNIPA).",
    thumbnail: thumbnail2,
    images: [
      project2_1
    ]
  },
  {
    id: 3,
    title: "Video Traffic Analysis ",
    description: `[[GitHub Repo]](/Users/abby/repo/bili-data-analysis/main copy.ipynb) 
      *Core Developer - 2025/01*\n \
      Tech Stack: \`NLP\`, \`Machine Learning\`, \`Data Analysis\`\n \
      Conducted feature extraction and data analysis on multidimensional metrics (e.g., click-through rate, play rate, interaction rate) to identify key factors influencing video views. 
      Leveraged clustering and embedding analysis techniques to optimize video content strategies, enhancing user conversion rates and engagement performance.
      `,
    thumbnail: project1_1,
    images: [
      project1_2
    ]
  },

  {
    id: 4,
    title: "Automatic Comment Reply Program",
    description: "[[GitHub Repo]](/Users/abby/repo/web/bili_comments/bili_comments_app/app_copy.py) \n \
      *Core Developer - 2024/07* \n \
      Tech Stack: \`NLP\`, \`User Interface Building\` \n \
      Developed an automated video comment moderation system that leverages AI to manage and respond to comments on video platforms. \n\
      Built a **web application** using **Python Streamlit** for intuitive user interface. \n\
      Integrated **OpenAI API** to detect toxic and malicious comments automatically.\n \
      Implemented automated comment management features including: \n \
          1. Smart deletion of inappropriate content \n \
          2. AI-powered response generation \n \
          3. Comment filtering and categorization \n \
      Created automated data fetching system for video comments through API integration \n \
      ",
    thumbnail: project4_1,
    images: [
      project4_2
    ]
  },
  {
    id: 5,
    title: `Master's Thesis: Design and Implementation of A Legal Case Recommendation System Based on Graph Neural Network`,
    description: `*Writer and Core Developer - 2021/03*
      Abstract`,
    thumbnail: project5_1,
    images: [
      project5_2
    ]
  }
];


function ProjectModal({ project, onClose, onPrev, onNext }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const content = "Some **bold** content";
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        
        // className="b/-white rounded-lg w-[70vw] max-h-[90vh] overflow-hidden relative"
        className="bg-white rounded-lg w-[60vw] max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="relative h-[60vh] overflow-hidden rounded-t-lg">
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 max-h-[200px] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 whitespace-pre-line" >
            <div className="markdown">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>
          </p>
        
        </div>
        
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <p className="text-gray-600">
                A passionate developer focused on creating beautiful and functional web experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">
                Email: contact@example.com<br />
                LinkedIn: linkedin.com/in/example<br />
                GitHub: github.com/example
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onPrev={handlePrevProject}
            onNext={handleNextProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
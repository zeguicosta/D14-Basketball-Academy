import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TeamMemberModal = ({ isOpen, onClose, memberData }) => {
  if (!isOpen || !memberData) {
    return null;
  }

  // Basic handling for newlines in the description
  const formattedDescription = memberData.fullDescription
    .split('\n')
    .map((line, index, arr) => (
      <React.Fragment key={index}>
        {line}
        {index < arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close on overlay click
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative p-6 md:p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <img 
                src={memberData.image}
                alt={memberData.name}
                className="w-full md:w-1/3 h-auto object-cover rounded-md flex-shrink-0 mt-8 md:mt-0"
              />
              <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-bold mb-1">{memberData.name}</h2>
                <p className="text-lg text-[#54AE21] font-medium mb-4">{memberData.role}</p>
                {/* Render description with line breaks */}
                <div className="text-gray-700 text-sm space-y-3">
                  {/* Ideally use react-markdown here, for now, basic split/br */}
                  {formattedDescription} 
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal; 
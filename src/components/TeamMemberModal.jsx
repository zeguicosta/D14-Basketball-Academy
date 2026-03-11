import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TeamMemberModal = ({ isOpen, onClose, memberData }) => {
  if (!isOpen || !memberData) {
    return null;
  }

  const paragraphs = memberData.fullDescription
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[88vh] overflow-y-auto relative"
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors z-10 bg-white rounded-full p-1 shadow-sm"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header com imagem + nome */}
            <div className="flex flex-col sm:flex-row gap-0">
              <div className="sm:w-[220px] shrink-0">
                <img
                  src={memberData.image}
                  alt={memberData.name}
                  className="w-full h-72 sm:h-full object-cover object-top rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                />
              </div>
              <div className="flex flex-col justify-end p-6 pb-5 flex-grow">
                <p className="text-xs font-semibold tracking-widest text-[#54AE21] uppercase mb-2">{memberData.role}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{memberData.name}</h2>
                <div className="mt-3 w-10 h-[3px] bg-[#54AE21] rounded-full" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 mx-6" />

            {/* Descrição */}
            <div className="p-6 pt-5 space-y-3">
              {paragraphs.map((para, index) => {
                const isTitle = para.endsWith(':') && para.length < 60;
                if (isTitle) {
                  return (
                    <p key={index} className="text-sm font-semibold text-gray-900 uppercase tracking-wide mt-4 first:mt-0">
                      {para.replace(':', '')}
                    </p>
                  );
                }
                return (
                  <p key={index} className="text-sm text-gray-600 leading-relaxed">
                    {para}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal;

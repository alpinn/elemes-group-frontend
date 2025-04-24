'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TRENDING_ITEMS } from '../../constants/trendings';
import Button from '../../components/Button';
import Rating from '../../components/Rating';

const TrendingCard = ({ name, category, rating, image, bgColor }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="h-[120px] sm:h-[130px] md:h-[140px]"
    >
      <motion.div 
        className={`relative ${bgColor} rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 cursor-pointer h-full`}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div 
          className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden"
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/background.jpg"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 self-start mb-2 sm:mb-3">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-md sm:rounded-lg"
            />
          </div>
          <div className="mt-auto">
            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1">{name}</h3>
            <p className="text-xs sm:text-sm text-primary mb-1.5 sm:mb-2 md:mb-3">{category}</p>
            <Rating rating={rating} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Trending = () => {
  const [showAll, setShowAll] = React.useState(false);
  const displayedItems = showAll ? TRENDING_ITEMS : TRENDING_ITEMS.slice(0, 8);

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Browser Our Trending</h2>
          <p className="text-primary font-medium text-base sm:text-lg lg:text-xl">Receipt</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <TrendingCard 
                key={item.id} 
                {...item}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </AnimatePresence>
        </div>

        {!showAll && TRENDING_ITEMS.length > 8 && (
          <motion.div 
            className="mt-6 sm:mt-8 text-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button 
              variant="primary"
              className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm bg-green-600 hover:bg-green-700"
              withAnimation
              onClick={() => setShowAll(true)}
            >
              ALL Receipt
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Trending;

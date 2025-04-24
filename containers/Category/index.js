'use client';

import React from 'react';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import { CATEGORIES } from '../../constants/categories';

const Category = () => {
  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category.name);
  };

  return (
    <section className="pt-12 pb-8 lg:pt-16 lg:pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            Browser Our Category
          </h2>
          <p className="text-primary font-medium text-lg lg:text-xl">
            Receipt
          </p>
        </div>

        <div className="min-h-[280px] -mx-4">
          <Carousel>
            {CATEGORIES.map((category) => (
              <div key={category.id} className="px-2">
                <Card 
                  {...category}
                  onClick={() => handleCategoryClick(category)}
                  className="py-8 px-6 w-[220px] sm:w-[240px] md:w-[270px] lg:w-[290px]"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Category;

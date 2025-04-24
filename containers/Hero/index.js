'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-start lg:items-center overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Background Pattern"
          fill
          className="object-cover opacity-[0.02]"
          priority
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="flex flex-col lg:block">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6">
              <span className="text-primary">Good Food Us</span>
              <br />
              <span className="text-primary">Good Mood</span>
            </h1>

            <div className="relative order-2 lg:hidden my-8">
              <div className="flex justify-start">
                <div className="relative">
                  <div className="relative w-[200px] aspect-square opacity-10">
                    <Image
                      src="/images/salad.png"
                      alt="Background Salad"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[180px] aspect-square">
                      <Image
                        src="/images/salad.png"
                        alt="Green Salad Tomato"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  <div className="absolute -right-20 top-1/2 translate-y-1/2 w-[180px] bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 relative shrink-0">
                        <Image
                          src="/images/salad.png"
                          alt="Green Salad Tomato"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-xs">Green Salad Tomato</h3>
                        <p className="text-[10px] text-gray-500">Tomato</p>
                        <div className="flex items-center">
                          <span className="text-[#FF8412] text-xs">{'★'.repeat(4)}</span>
                          <span className="text-gray-300 text-xs">{'★'.repeat(1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-3 lg:order-none">
              <p className="text-gray-600 text-sm lg:text-xl max-w-[300px] lg:max-w-lg mb-4 lg:mb-6">
                I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <Button 
                  variant="primary" 
                  className="text-sm lg:text-base rounded-full px-5 py-2"
                  withAnimation={true}
                >
                  Daftar Sekarang
                </Button>
                <Button 
                  variant="grey" 
                  className="text-sm lg:text-base rounded-full px-5 py-2"
                  withAnimation={true}
                  customShadow="0 0 20px rgba(139, 172, 62, 0.35)"
                >
                  About Us
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative lg:translate-y-8">
            <div className="relative flex items-center justify-center">
              <div className="relative w-[500px] aspect-square opacity-10">
                <Image
                  src="/images/salad.png"
                  alt="Background Salad"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[400px] aspect-square">
                  <Image
                    src="/images/salad.png"
                    alt="Green Salad Tomato"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -bottom-2 left-0 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image
                      src="/images/salad.png"
                      alt="Green Salad Tomato"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-base">Green Salad Tomato</h3>
                    <p className="text-sm text-gray-500">Tomato</p>
                    <div className="flex items-center">
                      <span className="text-[#FF8412] text-base">{'★'.repeat(4)}</span>
                      <span className="text-gray-300 text-base">{'★'.repeat(1)}</span>
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

export default Hero; 
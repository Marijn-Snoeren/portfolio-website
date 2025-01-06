'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ProjectProps {
  id: string;
  title: string;
  number: number;
  imageSrc: string;
  imageOnLeft: boolean;
}

export default function Project({ id, title, number, imageSrc, imageOnLeft }: ProjectProps) {
  const [imageError, setImageError] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push(`/project/${id}`);
    }, 500);
  };

  useEffect(() => {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, [imageSrc]);

  const TextContent = () => (
    <div className="relative p-4 w-full h-full flex flex-col justify-end">
      <div className="text-2xl font-bold flex justify-between items-center">
        <h1>{title}</h1>
        <div className="flex items-center gap-4">
          <p>{number}</p>
        </div>
      </div>
    </div>
  );

  const ImageContent = () => (
    <motion.div
      className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden"
      animate={isAnimating ? { scale: 0.8 } : { scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="photo-card relative cursor-pointer w-full h-screen flex items-center justify-center overflow-hidden"
        onClick={handleClick}
      >
        <AnimatePresence>
          {isImageLoaded && !imageError && (
            <motion.div
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src={imageSrc}
                alt={`Project ${title}`}
                objectFit="cover"
                onError={() => setImageError(true)}
                priority
                loading="eager"
                layout="fill" // Zorgt ervoor dat de afbeelding de container vult
              />
            </motion.div>
          )}
        </AnimatePresence>
        {(imageError || !isImageLoaded) && (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            {imageError ? 'Image not available' : 'Loading...'}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white text-black project-container grid grid-cols-2 h-screen w-full overflow-hidden snap-start">
      {imageOnLeft ? <ImageContent /> : <TextContent />}
      {imageOnLeft ? <TextContent /> : <ImageContent />}
    </div>
  );
}
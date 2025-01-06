'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface ProjectDetailsProps {
  id: string;
  title: string;
  number: number;
  description: string;
  imageSrc: string;
  additionalImages: string[];
  imageOnLeft: boolean;
}

export default function ProjectDetails({ 
  title, 
  number, 
  description, 
  imageSrc, 
  additionalImages,
  imageOnLeft
}: ProjectDetailsProps) {
  const [imageError, setImageError] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isAtBottom) {
        setIsAtBottom(true);
        setTimeout(() => {
          router.push(`/?project=${number}`);
        }, 400);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router, number]);

  const TextContent = () => {
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
<div className="sticky top-0 p-4 w-full h-screen flex flex-col justify-end">
<div className="absolute top-10 inset-x-0 flex items-center justify-center p-4">
  <p className='text-xs font-thin'>scroll down</p>
</div>
  <div>
    <div className="text-2xl font-bold flex justify-between items-center">
      <h1>{title}</h1>
      <div className="flex items-center gap-4">
        <p>{number}</p>
      </div>
    </div>
  </div>
<motion.div 
  className="absolute inset-0 flex flex-col items-center justify-center px-16 space-y-2"
  style={{ opacity }}
>
  <p className="text-xs max-w-md">{description}</p>
  <Link href="https://marketingloom.vercel.app/" className="pt-8 text-xs font-thin">
    visit website →
  </Link>
</motion.div>
</div>
    );
  };

  const ImageContent = () => (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="w-full h-screen">
        <div className="photo-card relative cursor-pointer w-full h-full flex items-center justify-center transform scale-80">
          {imageError ? (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              Image not available
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={`Project ${title}`}
              layout="fill"
              objectFit="cover"
              onError={() => setImageError(true)}
              priority
              loading="eager"
            />
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-0 px-0">
          {additionalImages.map((img, index) => (
            <div key={index} className="w-full h-screen">
              <motion.div
                className="photo-card relative cursor-pointer w-full h-full flex items-center justify-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: isAtBottom ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={img}
                  alt={`Additional image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority
                  loading="eager"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="project-container grid grid-cols-2 w-full">
        {imageOnLeft ? <ImageContent /> : <TextContent />}
        {imageOnLeft ? <TextContent /> : <ImageContent />}
      </div>
    </div>
  );
}


'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ProjectList from '../components/ProjectList';

const projects = [
  {
    id: "project-one",
    title: "LOOM",
    number: 1,
    imageSrc: "/loom-5.png",
    imageOnLeft: true
  },
  {
    id: "project-two",
    title: "UPENDO",
    number: 2,
    imageSrc: "/upendo-1.png",
    imageOnLeft: false
  },
  {
    id: "project-three",
    title: "LEVENSGLOED",
    number: 3,
    imageSrc: "/levensgloed.jpg", // Assuming you've downloaded this image
    imageOnLeft: true
  }
];

export default function Home() {
  const projectListRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const projectParam = searchParams.get('project');
    if (projectParam && projectListRef.current) {
      const projectIndex = projects.findIndex(p => p.number === parseInt(projectParam, 10));
      if (projectIndex !== -1) {
        const scrollPosition = projectIndex * window.innerHeight;
        projectListRef.current.scrollTop = scrollPosition; // Instant scroll without animation
      }
    } else if (projectListRef.current) {
      projectListRef.current.scrollTop = 0; // Scroll to the top if no project specified
    }
  }, [searchParams]);

  return (
    <main className="h-screen overflow-hidden">
      <ProjectList projects={projects} ref={projectListRef} />
    </main>
  );
}


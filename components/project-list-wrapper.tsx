'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import ProjectList from './ProjectList';

interface ProjectData {
  id: string;
  title: string;
  number: number;
  imageSrc: string;
  imageOnLeft: boolean;
}

interface ProjectListWrapperProps {
  projects: ProjectData[];
}

export default function ProjectListWrapper({ projects }: ProjectListWrapperProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const projectParam = searchParams.get('project');
    if (projectParam && listRef.current) {
      const projectIndex = projects.findIndex(p => p.number === parseInt(projectParam, 10));
      if (projectIndex !== -1) {
        const scrollPosition = projectIndex * window.innerHeight;
        listRef.current.scrollTop = scrollPosition;
      }
    } else if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [searchParams, projects]);

  return <ProjectList ref={listRef} projects={projects} />;
}


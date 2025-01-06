import React, { forwardRef, useEffect, useRef } from 'react';
import Project from './Project';

interface ProjectData {
  id: string;
  title: string;
  number: number;
  imageSrc: string;
  imageOnLeft: boolean;
}

interface ProjectListProps {
  projects: ProjectData[];
}

const ProjectList = forwardRef<HTMLDivElement, ProjectListProps>(({ projects }, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && 'current' in ref && ref.current && innerRef.current) {
      ref.current.scrollTop = innerRef.current.scrollTop;
    }
  }, [ref]);

  return (
    <div ref={ref} className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div ref={innerRef}>
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            number={project.number}
            imageSrc={project.imageSrc}
            imageOnLeft={project.imageOnLeft}
          />
        ))}
      </div>
    </div>
  );
});

ProjectList.displayName = 'ProjectList';

export default ProjectList;


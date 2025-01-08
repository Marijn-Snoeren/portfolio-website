import { Suspense } from 'react';
import ProjectListWrapper from '../components/project-list-wrapper';

const projects = [
  {
    id: "project-one",
    title: "LOOM",
    number: 1,
    imageSrc: "/loom-5.png",
  },
  {
    id: "project-two",
    title: "UPENDO",
    number: 2,
    imageSrc: "/upendo-1.png",
  },
  {
    id: "project-three",
    title: "LEVENSGLOED",
    number: 3,
    imageSrc: "/levensgloed.jpg",
  }
];

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectListWrapper projects={projects} />
      </Suspense>
    </main>
  );
}


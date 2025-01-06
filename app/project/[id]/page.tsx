'use client';

import { useParams } from 'next/navigation';
import ProjectDetails from '../../../components/ProjectDetails';

const projects = [
  {
    id: "project-one",
    title: "LOOM",
    number: 1,
    description: "Quis ex tempor aute velit amet adipisicing sit. Occaecat fugiat tempor labore incididunt Lorem commodo cillum dolor adipisicing nostrud sint do exercitation qui laboris.",
    imageSrc: "/loom-5.png",
    additionalImages: [
      "/loom-1.png",
      "/loom-2.png",
      "/loom-3.png",
      "/loom-4.png",
      "/loom-5.png",
    ],
    imageOnLeft: true
  },
  {
    id: "project-two",
    title: "UPENDO",
    number: 2,
    description: "Duis dolore dolor non qui eiusmod irure proident quis mollit Lorem ad incididunt deserunt nostrud. Enim sit minim anim. Non ullamco ipsum mollit.",
    imageSrc: "https://images.unsplash.com/photo-1735598417949-d22e9f8092ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    additionalImages: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "https://images.unsplash.com/photo-1735598417949-d22e9f8092ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    ],
    imageOnLeft: false
  },
  {
    id: "project-three",
    title: "PROJECT THREE",
    number: 3,
    description: "Commodo adipisicing culpa velit Lorem sunt ea consequat deserunt excepteur magna officia quis ex. Ad et laboris et exercitation deserunt commodo velit laborum fugiat minim officia ex.",
    imageSrc: "/placeholder.svg?height=800&width=600",
    additionalImages: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    imageOnLeft: true
  },
  {
    id: "project-four",
    title: "PROJECT FOUR",
    number: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageSrc: "/placeholder.svg?height=800&width=600",
    additionalImages: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    imageOnLeft: false
  },
  {
    id: "project-five",
    title: "PROJECT FIVE",
    number: 5,
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSrc: "/placeholder.svg?height=800&width=600",
    additionalImages: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    imageOnLeft: true
  }
];

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails {...project} />;
}


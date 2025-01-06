'use client';

import { useParams } from 'next/navigation';
import ProjectDetails from '../../../components/ProjectDetails';

const projects = [
  {
    id: "project-one",
    title: "LOOM",
    number: 1,
    description: "The Marketing News Website is a hub for professionals to stay up-to-date on the latest trends, insights, and strategies in the marketing world. With daily articles, expert interviews, and interactive webinars, the platform serves the growing marketing professional community in the Netherlands. It's designed for clarity and speed, ensuring a smooth user experience while providing valuable interaction and real-time news, social sharing, and community engagement features.",
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
    description: "Upendo is a data services label focused on simplifying complex data insights for businesses. It provides solutions in five core areas: Configuration: Setting up tools like Google Analytics 4 and Looker Studio. Optimization: Identifying and fixing data issues. Visualization: Creating real-time dashboards from multiple channels. Analysis: Offering detailed reports with expert insights. Training: Equipping teams to handle their own data efficiently.",
    imageSrc: "/upendo-1.png",
    additionalImages: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/upendo-1.png",
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


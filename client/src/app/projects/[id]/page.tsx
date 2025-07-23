import dynamic from "next/dynamic";

// Dynamically import the Client Component
const Project = dynamic(() => import("../../_components/project"), { ssr: false });

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <Project params={params} />;
}
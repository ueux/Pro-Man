// app/projects/[id]/page.tsx
import Project from "../../_components/project"; // Move client logic here

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <Project id={params.id} />;
}

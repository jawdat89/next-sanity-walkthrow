import { Project } from "@/interfaces";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {

  const projects: Project[] = await getProjects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          {project.name}
        </div>
      ))}
    </div>
  )
}
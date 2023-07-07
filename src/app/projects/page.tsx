import Header from '@/components/Header';
import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/service/projects';

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <section>
      <Header headerTitle='Projects'>
        <div className='w-full h-[0.8px] dark:bg-gray-600 bg-gray-300 mt-10' />
      </Header>
      <ProjectList projects={projects} total={projects.total} />
    </section>
  );
}

import Header from '@/components/Header';
import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/service/projects';

export default async function ProjectsPage() {
  const projects = await getProjects();
  const hasNotProjects = projects.total === 0 || projects.data.length === 0;
  return (
    <section>
      <Header headerTitle='Projects'>
        <div className='w-full h-[0.8px] dark:bg-gray-600 bg-gray-300 mt-10' />
      </Header>
      {hasNotProjects ? (
        <div>
          <p className='text-neutral-300 text-xl'>
            현재 프로젝트 업데이트 중입니다. 🔥🔥🔥
          </p>
        </div>
      ) : (
        <ProjectList projects={projects} total={projects.total} />
      )}
    </section>
  );
}

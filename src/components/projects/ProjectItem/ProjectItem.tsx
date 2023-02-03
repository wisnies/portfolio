import { useAppContext } from '../../../context/appContext';
import type { Project } from '../../../libs/types/project.type';
import {
  PIContainer,
  PIDescription,
  PILink,
  PILinkContainer,
  PITag,
  PITagContainer,
  PITitle,
  PIYear,
} from './ProjectItem.style';

type ProjectItemProps = {
  project: Project;
};

export const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
}: ProjectItemProps) => {
  const {
    locale: { id, projectItem },
  } = useAppContext();
  return (
    <PIContainer>
      <PITitle>{project.title[id]}</PITitle>
      <PIYear>{project.year}</PIYear>
      <PITagContainer>
        {project.tags.map((t) => (
          <PITag key={t}>{t}</PITag>
        ))}
      </PITagContainer>
      <PIDescription>{project.description[id]}</PIDescription>
      <PILinkContainer>
        <PILink href={project.link.deployed} target='_blank' rel='norefferer'>
          {projectItem.visit}
        </PILink>
        <PILink href={project.link.github} target='_blank' rel='norefferer'>
          github
        </PILink>
      </PILinkContainer>
    </PIContainer>
  );
};

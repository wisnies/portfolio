import { projects } from '../../../libs/data/projects.data';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import {
  PLOuter,
  PLInner,
  PLOverlayBottom,
  PLOverlayTop,
} from './ProjectList.style';

export const ProjectList: React.FC = () => {
  return (
    <PLOuter>
      <PLInner>
        {projects
          .sort((p) => p.id)
          .map((p) => (
            <ProjectItem key={p.id} project={p} />
          ))}
      </PLInner>
      <PLOverlayTop />
      <PLOverlayBottom />
    </PLOuter>
  );
};

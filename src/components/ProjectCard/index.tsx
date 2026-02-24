import { FiExternalLink, FiFigma, FiGithub } from 'react-icons/fi';
import { IconBox } from '../IconBox';
import { IProject } from '@/types/interfaces/common';
import { useThemeStore } from '@/stores/themeStore';

interface Props {
  isReversed: boolean;
  project: IProject;
}

export function ProjectCard({ isReversed, project }: Props) {
  const {
    src,
    uptitle,
    title,
    description,
    tags,
    deployURL,
    figmaURL,
    githubURL,
  } = project;

  const { theme } = useThemeStore();

  const gridCols = isReversed ? 'grid-cols-[1fr_1.25fr]' : 'grid-cols-[1.25fr_1fr]';
  const imgCol = isReversed ? 'col-[2/3]' : 'col-[1/2]';
  const infoCol = isReversed ? 'col-[1/2]' : 'col-[2/3]';
  const infoAlign = isReversed ? 'items-start' : 'items-end';

  return (
    <div
      className={`grid ${gridCols} items-center w-full mb-16 max-md:grid-cols-1 max-md:mb-12`}
    >
      <div
        className={`w-full rounded overflow-hidden max-md:col-[1/2] ${imgCol} row-[1/2]`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={deployURL || githubURL || figmaURL}
        >
          <img
            src={src}
            alt="project-preview"
            className={`w-full object-contain transition-opacity cursor-pointer ${
              theme === 'dark' ? 'opacity-25 hover:opacity-100' : 'opacity-100'
            }`}
          />
        </a>
      </div>

      <div
        className={`flex flex-col ${infoAlign} max-md:items-center max-md:mt-10 max-md:col-[1/2] ${infoCol}`}
      >
        <p className="text-base text-caption">{uptitle}</p>
        <h4 className="text-[2.625rem] text-whiteText">{title}</h4>

        <p className="flex justify-center items-center py-10 px-10 min-h-[8rem] my-6 bg-surface border border-border w-full z-10 rounded shadow-md text-body">
          {description}
        </p>

        <div className="flex justify-center gap-6 flex-wrap m-2">
          {tags.map((tag) => (
            <p key={tag} className="text-caption">
              {tag}
            </p>
          ))}
        </div>

        <div className="flex gap-4 mt-6 [&_.icon]:w-8 [&_.icon]:h-8">
          {figmaURL && (
            <IconBox href={figmaURL}>
              <FiFigma className="icon" />
            </IconBox>
          )}
          {githubURL && (
            <IconBox href={githubURL}>
              <FiGithub className="icon" />
            </IconBox>
          )}
          {deployURL && (
            <IconBox href={deployURL}>
              <FiExternalLink className="icon" />
            </IconBox>
          )}
        </div>
      </div>
    </div>
  );
}

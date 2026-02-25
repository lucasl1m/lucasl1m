import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '@/components/ProjectCard';
import { TitleSection } from '@/components/TitleSection';
import { PROJECTS } from '@/types/constants/projects';

export function Project() {
  const { t } = useTranslation();
  return (
    <motion.section
      id="projects"
      className="w-full flex flex-col items-center gap-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <TitleSection title={t('projects.title')} />

      <div className="w-full flex flex-col">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 1 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <ProjectCard project={project} isReversed={i % 2 === 1} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

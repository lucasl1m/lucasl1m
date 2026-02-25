import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SkillCard } from '@/components/SkillCard';
import { TitleSection } from '@/components/TitleSection';
import { SKILLS } from '@/types/constants/skills';
import { containerVariants, itemVariants } from '@/utils';

export function Skills() {
  const { t } = useTranslation();
  return (
    <motion.section
      id="skills"
      className="w-full flex flex-col items-center gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <TitleSection
        title={t('skills.title')}
        caption={t('skills.caption')}
      />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {SKILLS.map(({ src, title, description, borderColor }, i) => (
          <motion.div key={i} variants={itemVariants} className="h-full">
            <SkillCard
              src={src}
              title={title}
              description={description}
              borderColor={borderColor}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

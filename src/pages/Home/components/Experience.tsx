import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { TitleSection } from '@/components/TitleSection';
import { EXPERIENCES, type ExperienceEntry } from '@/data/experiences';
import { formatPeriodWithMonth, containerVariantsTight, itemVariantsFromLeft } from '@/utils';

function TimelineCard({ entry }: { entry: ExperienceEntry }) {
  const { t } = useTranslation();
  const period = formatPeriodWithMonth(
    entry.startMonth,
    entry.startYear,
    entry.endMonth,
    entry.endYear,
    t('experience.present'),
    (n) => t(`experience.months.${n}` as const)
  );

  return (
    <motion.article
      variants={itemVariantsFromLeft}
      className="relative flex gap-6 pl-8 sm:pl-10 before:absolute before:left-[7px] sm:before:left-[9px] before:top-6 before:bottom-0 before:w-px before:bg-border last:before:hidden mb-14 last:mb-0"
    >
      <span
        className="absolute left-0 top-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-button bg-surface ring-4 ring-surface"
        aria-hidden
      />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="text-lg font-semibold text-whiteText">{entry.company}</h3>
          <span className="text-sm text-caption">{period}</span>
        </div>
        <p className="text-sm font-medium text-button mb-0.5">{t(entry.roleKey)}</p>
        {entry.locationKey && (
          <p className="text-xs text-caption mb-3">{t(entry.locationKey)}</p>
        )}
        {entry.descriptionKey && (
          <p className="text-sm leading-relaxed text-body mb-2">{t(entry.descriptionKey)}</p>
        )}
        {entry.detailsKey && (
          <div className="whitespace-pre-line text-sm leading-relaxed text-caption">
            {t(entry.detailsKey)}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Experience() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="experience"
      className="flex flex-col items-center gap-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariantsTight}
    >
      <TitleSection
        icon={<HiOutlineBriefcase className="w-12 h-12 text-button" />}
        title={t('experience.title')}
        caption={t('experience.caption')}
      />
      <div className="w-full max-w-2xl">
        {EXPERIENCES.map((entry) => (
          <TimelineCard key={`${entry.company}-${entry.startYear}`} entry={entry} />
        ))}
      </div>
    </motion.section>
  );
}

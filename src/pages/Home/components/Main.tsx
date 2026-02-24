import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Annotation } from '@/components/Annotation';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PROFILE } from '@/data/profile';
import { useGithubBio } from '@/hooks/useGithubBio';
import { sectionMotion } from '@/utils';

function renderIntroText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    const match = part.match(/\*\*(.*?)\*\*/);
    if (match) return <b key={i}>{match[1]}</b>;
    return part;
  });
}

export function Main() {
  const { t } = useTranslation();
  const { bio } = useGithubBio();

  return (
    <motion.section
      className="relative w-full h-[90vh] gap-6 flex items-center justify-between max-md:flex-wrap"
      {...sectionMotion}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold leading-[130%] text-whiteText">
            <Trans i18nKey="intro.greeting" components={{ br: <br /> }} />
          </span>

          <div className="w-full flex items-center gap-4">
            <div className="flex rounded-full shrink-0 overflow-hidden">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <section className="flex flex-col">
              <strong className="text-base font-semibold leading-[130%] text-whiteText">
                {PROFILE.name}
              </strong>
              <small className="text-sm leading-[150%] text-body">{bio}</small>
            </section>
          </div>

          <Annotation>{renderIntroText(t('intro.bio'))}</Annotation>
        </div>

        <a
          href={PROFILE.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants(), 'z-0 no-underline inline-flex')}
        >
          {t('intro.curriculum')}
        </a>
      </div>
    </motion.section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { FiDownload, FiMail, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Annotation } from '@/components/Annotation';
import { Button, buttonVariants } from '@/components/ui/button';
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
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <motion.section
      className="relative w-full mx-auto min-h-[70vh] flex flex-col justify-center gap-8"
      {...sectionMotion}
    >
      <div className="w-full mx-auto flex flex-col gap-8 text-left max-md:text-center">
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

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PROFILE.resumeUrl}
            download
            rel="noreferrer"
            className={cn(
              buttonVariants(),
              'z-0 no-underline inline-flex items-center gap-2'
            )}
          >
            <FiDownload className="w-4 h-4" aria-hidden />
            <span>Baixar CV</span>
          </a>

          <Button
            type="button"
            variant="outline"
            onClick={() => setIsContactOpen(true)}
          >
            Entrar em contato
          </Button>
        </div>
      </div>

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-sm rounded-lg border border-border bg-surface p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-whiteText">
                Entrar em contato
              </h3>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="text-xs text-caption hover:text-body"
              >
                Fechar
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:"
                className="flex items-center justify-between rounded-md border border-border px-3 py-2 no-underline text-body hover:bg-surface/60"
              >
                <span className="flex items-center gap-2">
                  <FiMail className="w-4 h-4" aria-hidden />
                  <span>Email</span>
                </span>
                <span className="text-xs text-caption">
                  Abrir cliente de e-mail
                </span>
              </a>

              <a
                href={PROFILE.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-md border border-border px-3 py-2 no-underline text-body hover:bg-surface/60"
              >
                <span className="flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4" aria-hidden />
                  <span>WhatsApp</span>
                </span>
                <span className="text-xs text-caption">Abrir conversa</span>
              </a>

              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-md border border-border px-3 py-2 no-underline text-body hover:bg-surface/60"
              >
                <span className="flex items-center gap-2">
                  <FiLinkedin className="w-4 h-4" aria-hidden />
                  <span>LinkedIn</span>
                </span>
                <span className="text-xs text-caption">Ver perfil</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}

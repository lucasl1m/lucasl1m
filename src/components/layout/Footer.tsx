import { useTranslation } from 'react-i18next';
import { PROFILE } from '@/data/profile';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex items-center justify-center w-full gap-2 py-14 px-6">
      <p className="text-base text-body">{t('footer.developedBy')}</p>
      <a
        href={PROFILE.social.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-base font-medium no-underline text-button hover:underline"
      >
        Lucas Araujo
      </a>
    </footer>
  );
}


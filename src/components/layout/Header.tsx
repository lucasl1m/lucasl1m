import { useTranslation } from 'react-i18next';
import { CircleFlag } from 'react-circle-flags';
import { FiSun, FiMoon } from 'react-icons/fi';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { useThemeStore } from '@/stores/themeStore';

const LANGUAGES = [
  { code: 'pt-BR', flagCode: 'br', labelKey: 'language.pt' as const },
  { code: 'en', flagCode: 'us', labelKey: 'language.en' as const },
] as const;

const THEMES = [
  { value: 'light' as const, labelKey: 'theme.light' as const, Icon: FiSun },
  { value: 'dark' as const, labelKey: 'theme.dark' as const, Icon: FiMoon },
] as const;

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useThemeStore();

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];
  const currentTheme = THEMES.find((th) => th.value === theme) ?? THEMES[0];
  const ThemeIcon = currentTheme.Icon;

  function handleChangeLanguage(value: string) {
    i18n.changeLanguage(value);
  }

  return (
    <header className="flex items-center justify-between w-full mt-7 px-16 z-[1] max-md:px-4">
      <img src="/assets/svg/avatar.svg" alt="Logo" className="h-12 w-12" />
      

      <div className="flex items-center gap-6 max-md:gap-4">
        <div className="flex items-center gap-2">
          <Select
            value={theme}
            onValueChange={(value) => setTheme(value as 'light' | 'dark')}
          >
            <SelectTrigger aria-label={t('theme.label')}>
              <span className="flex items-center gap-1.5 text-xs">
                <ThemeIcon className="h-4 w-4 shrink-0 text-icon" aria-hidden />
                {t(currentTheme.labelKey)}
              </span>
            </SelectTrigger>
            <SelectContent>
              {THEMES.map((th) => (
                <SelectItem key={th.value} value={th.value}>
                  <span className="flex items-center gap-1.5 text-xs">
                    <th.Icon className="h-4 w-4 shrink-0 text-icon" aria-hidden />
                    {t(th.labelKey)}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={i18n.language} onValueChange={handleChangeLanguage}>
            <SelectTrigger aria-label="Idioma / Language">
              <span className="flex items-center gap-1.5 text-xs">
                <span className="h-4 w-4 shrink-0 overflow-hidden rounded-full">
                  <CircleFlag countryCode={currentLang.flagCode} height="14" />
                </span>
                {t(currentLang.labelKey)}
              </span>
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <span className="flex items-center gap-1.5 text-xs">
                    <span className="h-4 w-4 shrink-0 overflow-hidden rounded-full">
                      <CircleFlag countryCode={lang.flagCode} height="14" />
                    </span>
                    {t(lang.labelKey)}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}


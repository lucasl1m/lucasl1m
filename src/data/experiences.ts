/**
 * Experiência profissional (fonte: currículo e LinkedIn).
 * Meses: 1 = Jan, 12 = Dez.
 */
export interface ExperienceEntry {
  company: string;
  roleKey: string;
  startMonth: number;
  startYear: number;
  endMonth: number | null;
  endYear: number | null;
  descriptionKey?: string;
  detailsKey?: string;
  url?: string;
  locationKey?: string;
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    company: 'Blockfy',
    roleKey: 'experience.roles.frontendDev',
    startMonth: 8,
    startYear: 2025,
    endMonth: null,
    endYear: null,
    descriptionKey: 'experience.descriptions.blockfy',
    detailsKey: 'experience.details.blockfy',
    locationKey: 'experience.locations.hybrid',
  },
  {
    company: 'Beeteller',
    roleKey: 'experience.roles.frontendDev',
    startMonth: 4,
    startYear: 2023,
    endMonth: 8,
    endYear: 2025,
    descriptionKey: 'experience.descriptions.beeteller',
    detailsKey: 'experience.details.beeteller',
    locationKey: 'experience.locations.hybrid',
  },
  {
    company: 'Educbank',
    roleKey: 'experience.roles.productDesigner',
    startMonth: 9,
    startYear: 2022,
    endMonth: 1,
    endYear: 2023,
    descriptionKey: 'experience.descriptions.educbank',
    detailsKey: 'experience.details.educbank',
    locationKey: 'experience.locations.remote',
  },
];

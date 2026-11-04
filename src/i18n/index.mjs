import { LANDING_EN_UK } from './landing-en-uk.mjs';
import { LANDING_DE_ES } from './landing-de-es.mjs';
import { LANDING_FR_IT } from './landing-fr-it.mjs';
import { LANDING_NL_PL } from './landing-nl-pl.mjs';
import { LANDING_PT_RO } from './landing-pt-ro.mjs';

export const LANDING_I18N = {
  ...LANDING_EN_UK,
  ...LANDING_DE_ES,
  ...LANDING_FR_IT,
  ...LANDING_NL_PL,
  ...LANDING_PT_RO,
};

export function getLandingStrings(lang) {
  return LANDING_I18N[lang] || LANDING_I18N.en;
}

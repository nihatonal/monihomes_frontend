import ru from './ru.json';
import en from './en.json';
import tr from './tr.json';

export const dictionaryList = { en, ru, tr };

export const languageOptions = {
  en: { country: 'En', flag: require('../icons/united-kingdom.png'), name: 'English' },
  ru: { country: 'Ru', flag: require('../icons/russian.png'), name: 'Русский' },
  tr: { country: 'Tr', flag: require('../icons/turkey.png'), name: 'Türkçe' },
};

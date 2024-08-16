import {createI18n} from "vue-i18n";
import {ru} from "@/app/providers/localization/index";

const i18n = createI18n({
  locale: 'ru',
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: {

    },
    ru: {
      ...ru
    }
  }
})

export default i18n
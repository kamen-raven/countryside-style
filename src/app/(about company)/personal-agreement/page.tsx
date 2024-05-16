import { Metadata } from "next";
import { PersonalAgreementPage } from "~pages/index";

export const metadata: Metadata = {
  title: 'Политика обработки персональных данных',
  description: 'Агентство недвижимости «Загородный Стиль». Санкт-Петербург, пр. Просвещения, дом 80, к. 1, «Прометей», 3 этаж, офис 3.1',
};
export default function PagePersonalAgreement() {

  return (
    <PersonalAgreementPage />
  );
}

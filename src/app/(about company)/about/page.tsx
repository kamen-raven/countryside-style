import { Metadata } from "next";
import { AboutUsPage } from "~pages/index";

// temp
import teamMembersData from '~data/temp/employeesList/teamMembersData';
import aboutUsPageAdvantages from "~data/constant/servicesBlock/advantagesList/aboutUsPage/aboutUsPageAdvantages";
import aboutUsPageFacts from '~data/constant/servicesBlock/advantagesList/aboutUsPage/aboutUsPageFacts';

export const metadata: Metadata = {
  title: 'О компании',
  description: 'Загородный стиль – это специализированное агентство по загородной недвижимости.',
};




export default function PageAbout() {

  return (
    <AboutUsPage
    employeesData={teamMembersData}
    advantagesListData={aboutUsPageAdvantages}
    aboutUsPageFacts={aboutUsPageFacts} />
  );
}

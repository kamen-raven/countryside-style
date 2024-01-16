import { Metadata } from "next";
import { AboutUsPage } from "~pages/index";

// temp
import teamMembersData from '~data/EmployeesList/teamMembersData';

export const metadata: Metadata = {
  title: 'О компании',
  description: 'Загородный стиль – это специализированное агентство по загородной недвижимости.',
};




export default function PageAbout() {

  return (
    <AboutUsPage employeesData={teamMembersData} />
  );
}

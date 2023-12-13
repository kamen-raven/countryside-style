import { StaticImageData } from 'next/image';
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';


export interface teamMembersDataInterface {
  _id: number,
  role: 'owner' | 'employee',
  name: string,
  jobTitle: string,
  quote: string,
  photo: StaticImageData,
  contacts: {
    phone: string,
    telegram: string,
    whatsapp: string
  }
}


export interface TeamMemberCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: teamMembersDataInterface;
  children?: ReactNode;
}

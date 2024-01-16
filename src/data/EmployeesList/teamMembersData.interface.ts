import { StaticImageData } from 'next/image';

export interface teamMembersDataInterface {
  _id: number,
  role: 'owner' | 'employee',
  name: string,
  jobTitle: string,
  quote: string,
  photo: StaticImageData,
  contacts: {
    phone: string,
    whatsapp: string,
    telegram: string,
  }
}

export interface ApiUsersInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: UsersInterface[];
}

export interface UsersInterface {
  uuid: string;
  first_name: string;
  last_name: string;
  job_title: string | null;
  work_email: string | null;
  phone_number: string | null;
  telegram_link: string;
  whatsapp_link: string;
  description: string | null;
  location: string | null;
  avatars: AvatarInterface[];
}

export interface AvatarInterface {
  uuid: string;
  profile: string;
  image: string;
  blurredDataUrl?: string;
}

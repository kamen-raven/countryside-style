export interface ApiApplicationsFeedbackInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApplicationFeedbackInterface[];
}

export interface ApplicationFeedbackInterface {
  text: string;
  applicant: string;
  contact: string;
}

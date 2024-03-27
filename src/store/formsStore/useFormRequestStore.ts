import { create } from "zustand";
import { ApplicationFeedbackInterface } from "~interfaces/applicationsFeedback.interface";

interface FormRequestStore {
  text: string;  // name
  applicant: string;  // question
  contact: string;  // contact
  response: string;
  error: string;
  actions: {
    setText: (text:  ApplicationFeedbackInterface["text"]) => void;
    setApplicant: (applicant:  ApplicationFeedbackInterface["applicant"]) => void;
    setContact: (contact:  ApplicationFeedbackInterface["contact"]) => void;
    resetForm: () => void;
  }
}
const useFormRequestStore = create<FormRequestStore>((set) => ({
  // Состояния для значений полей формы
  text: '',
  applicant: '',
  contact: '',
  response: '',
  error: '',

  actions: {
    setText: (text) => set({ text: text }),
    setApplicant: (applicant) => set({ applicant: applicant }),
    setContact: (contact) => set({ contact: contact }),

    resetForm: () => set({ text: '', applicant: '', contact: '' }),
  }
}));

export default useFormRequestStore;

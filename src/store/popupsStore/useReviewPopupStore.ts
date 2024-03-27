import { create } from "zustand";
import { ReviewInterface } from "~interfaces/review.interface";

interface ReviewPopupState {
  popupData: ReviewInterface;
  newData: {
    setPopupData: (data: ReviewInterface) => void;
  };
}

const useReviewPopupStore = create<ReviewPopupState>((set) => ({
  popupData: {
    text: "",
    author_name: "",
    date_sale: "",
    link_to_src: "",
    photos: [
      {
        uuid: "",
        image: "",
        review: "",
      },
    ],
  },

  newData: {
    setPopupData: (data: ReviewInterface) => {
      set({
        popupData: {
          text: data.text,
          author_name: data.author_name,
          date_sale: data.date_sale,
          link_to_src: data.link_to_src,
          photos: data.photos.map((photo) => ({
            uuid: photo.uuid,
            image: photo.image,
            review: photo.review,
          })),
        },
      });
    },
  },
}));

export default useReviewPopupStore;

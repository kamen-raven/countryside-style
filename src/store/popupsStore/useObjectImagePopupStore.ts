import { create } from "zustand";
import { ImageInterface } from "~interfaces/objectImage.interface";

interface useObjectImagePopupState {
  picturesArray: ImageInterface[];

  newData: {
    setPopupData: (data: ImageInterface[]) => void;
  };
}

const useObjectImagePopupStore = create<useObjectImagePopupState>((set) => ({
  picturesArray: [],

  newData: {
    setPopupData: (data: ImageInterface[]) => {
      set({
        picturesArray: data.map((pic) => ({
          uuid: pic.uuid,
          image: pic.image,
          order: pic.order,
          objectModel: pic.objectModel
        }))
      });
    },
  },
}
));

export default useObjectImagePopupStore;

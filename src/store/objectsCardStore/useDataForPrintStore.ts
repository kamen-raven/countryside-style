// stores/searchStore.ts
import { create } from "zustand";

import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { UsersInterface } from "~interfaces/users.interface";
/* import { VillageObjectInterface } from "~interfaces/villages.interface"; */

interface useDataForPrintStateInterface {
  objectData: RealEstateObjectInterface | null;
  agentData: UsersInterface | null;
  actions: {
    setObjectData: (
      data: RealEstateObjectInterface
    ) => void;
    setAgentData: (agent: UsersInterface) => void;
  };
}

export const useDataForPrintStore = create<useDataForPrintStateInterface>(
  (set) => ({
    objectData: null,
    agentData: null,

    actions: {
      setObjectData: (data) => set({ objectData: data }),
      setAgentData: (agent) => set({ agentData: agent }),
    },
  })
);

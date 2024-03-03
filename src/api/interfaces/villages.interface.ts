export interface VillageObjectInterface {
  uuid: string;
  id: number;
  name: string;
  distance_CAD: number;
  area_of_houses: string;
  wall_material: string;
  buildings_of_villages: number;
  foundation: string;
  area_of_plot_measurement: string;
  category_land: string;
  relief_area_plot: string;
  area_of_plot: number;
  display_engineering_services: DisplayEngineeringServiceInterface[];
  photo_images: ImageInterface[];
  plans_images: ImageInterface[];
  display_agents: DisplayAgentInterface[];
  fencing_village: string;
  security_village: string;
  object_description: string;
  buildings_on_plot: string;
  you_tube_link: string;
  yandex_map_link: string;
}
interface DisplayEngineeringServiceInterface {
  engineering_service: string;
}

interface ImageInterface {
  uuid: string;
  image: string;
  village: string;
}

interface DisplayAgentInterface {
  employee: string;
}


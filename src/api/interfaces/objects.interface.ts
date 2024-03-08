export interface RealEstateObjectInterface {
  uuid: string;
  created_at: string;
  id: number;
  name: string;
  category: string;
  place: string;
  distance_CAD: number;
  metro: string;
  land_category: string;
  approve_usage: string;
  ownership: string;
  area_house: number;
  land_area_measurement: string;
  area_plot: number;
  area_flat: number;
  living_area: number;
  kitchen_area: number;
  area_room: number;
  number_of_rooms: number;
  number_of_storeys: number;
  floor: number;
  window_material: string;
  windows_orientation: string;
  ceiling_height: number;
  repair: string;
  wc: string;
  balcony: string;
  sales_method: string;
  type_house: string;
  date_foundation: string;
  lift: string;
  foundation: string;
  wall_material: string;
  price: number;
  relief_area: string;
  fencing: string;
  buildings_on_plot: string;
  driveways: string;
  village_fences: string;
  object_description: string;
  coordinates: CoordinatesInterface;
  yandex_map_link: string;
  date_sale: string;
  you_tube_link: string;
  display_engineering_services: EngineeringServiceInterface[];
  display_agents: AgentInterface[];
  plans_images: ImageInterface[];
  photo_images: ImageInterface[];
  display_pages: DisplayPagesInterface[];
}

export interface CoordinatesInterface {
  uuid: string;
  yandex_latitude: number;
  yandex_longitude: number;
}

export interface EngineeringServiceInterface {
  engineering_service: string;
}

export interface AgentInterface {
  employee: string;
}

export interface ImageInterface {
  uuid: string;
  image: string;
  re_object: string;
}

export interface DisplayPagesInterface {
  display_pages: DisplayPageInterface[];
}
export interface DisplayPageInterface {
  uuid: string;
  value: string;
  type_value: string;
}

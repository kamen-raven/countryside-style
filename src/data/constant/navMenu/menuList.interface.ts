export interface MenuItemInterface {
  name: string;
  title: string;
  link: string;
  secondLevel?:
    { name: string;
      title: string;
      link: string;
    }[]

}

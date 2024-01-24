export interface titleBlockDataInterface {
  sellers: titleBlock;
  buyers: titleBlock;
  villages: titleBlock;
  developers: titleBlock;
  legalSupport: titleBlock;
}

export interface titleBlock {
  className: string;
  label: string;
  title: string;
  subtitle: string;
}

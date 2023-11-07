export interface TierItem {
  id?: string;
  image: string;
  name: string;
  url: string;
}

export interface TierRow {
  id?: string;
  background?: string;
  color?: string;
  rowBackground?: string;
  rowName: string;
  rowItems: TierItem[];
}

export type TierTable = TierRow[];

export interface TierListData {
  id?: string;
  title: string;
  items: TierItem[];
  table: TierTable;
}

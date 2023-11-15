export interface TierItem {
  _id?: string;
  image: string;
  name: string;
  url?: string;
}

export interface TierRow {
  _id?: string;
  background?: string;
  color?: string;
  rowBackground?: string;
  rowName?: string;
  rowItems: TierItem[];
}

export type TierTable = TierRow[];

export interface TierListData {
  _id?: string;
  description?: string;
  table: TierTable;
  title: string;
}

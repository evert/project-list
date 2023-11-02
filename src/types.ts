export type Project = {

  id: number;
  name: string;
  owner: string;
  developers: string[];
  scrumMaster: string;
  startDate: Date;
  methodology: 'Agile' | 'Waterfall';

}

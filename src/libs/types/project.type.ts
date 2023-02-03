export type Project = {
  id: number;
  year: number;
  title: {
    enGB: string;
    plPL: string;
  };
  tags: string[];
  description: {
    enGB: string;
    plPL: string;
  };
  link: {
    deployed: string;
    github: string;
  };
};

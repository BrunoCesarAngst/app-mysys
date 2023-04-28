export type Task = {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  discerned: boolean;
  fastAction?: boolean;
  incubate?: boolean;
  reference?: boolean;
  trash?: boolean;
  delegated?: boolean;
  actionDate?: boolean;
  context?: boolean;
  project?: boolean;
  completed?: boolean;
};

// criando o tipo de lista 2
type List = {
  browsing: string;
  number: number;
  id: string;
  name: string;
  icon: string;
};

// lista2 um array de objetos, cada objeto tem um browsing, number, id, name e icon.
export const lists: List[] = [
  {
    browsing: 'inbox',
    number: 1,
    id: 'inbox',
    name: 'Inbox',
    icon: 'inbox',
  },
  {
    browsing: 'inbox/fastaction',
    number: 2,
    id: 'fastaction',
    name: 'Fast Action',
    icon: 'fastaction',
  },
  {
    browsing: 'inbox/incubate',
    number: 3,
    id: 'incubate',
    name: 'Incubate',
    icon: 'incubate',
  },
  {
    browsing: 'inbox/reference',
    number: 4,
    id: 'reference',
    name: 'Reference',
    icon: 'reference',
  },
  {
    browsing: 'inbox/delegated',
    number: 5,
    id: 'delegated',
    name: 'Delegated',
    icon: 'delegated',
  },
  {
    browsing: 'inbox/actionDate',
    number: 6,
    id: 'actionDate',
    name: 'Action Date',
    icon: 'actionDate',
  },
  {
    browsing: 'inbox/context',
    number: 7,
    id: 'context',
    name: 'Context',
    icon: 'context',
  },
  {
    browsing: 'inbox/project',
    number: 8,
    id: 'project',
    name: 'Project',
    icon: 'project',
  },
  {
    browsing: 'inbox/trash',
    number: 9,
    id: 'trash',
    name: 'Trash',
    icon: 'trash',
  },
];

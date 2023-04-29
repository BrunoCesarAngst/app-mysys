import { TaskSchema } from '@/types/task';
import { createId } from '@paralleldrive/cuid2';
import { z } from 'zod';

// sceneFastActionsIncomplete um array de objetos
const aSceneFastActionsIncomplete = [
  {
    id: createId(),
    text: 'Action 1',
    createdAt: new Date('2023-05-15T00:00:00.000Z'),
    updatedAt: new Date('2023-05-15T00:00:00.000Z'),
    deletedAt: null,
    discerned: true,
    completed: false,
    fastAction: true,
  },
  {
    id: createId(),
    text: 'Action 2',
    createdAt: new Date('2023-05-15T00:00:00.000Z'),
    updatedAt: new Date('2023-05-15T00:00:00.000Z'),
    deletedAt: null,
    discerned: true,
    completed: false,
    fastAction: true,
  },
  {
    id: createId(),
    text: 'Action 3',
    createdAt: new Date('2023-05-15T00:00:00.000Z'),
    updatedAt: new Date('2023-05-15T00:00:00.000Z'),
    deletedAt: null,
    discerned: true,
    completed: false,
    fastAction: true,
  },
];

export const sceneFastActionsIncomplete = z
  .array(TaskSchema)
  .parse(aSceneFastActionsIncomplete);

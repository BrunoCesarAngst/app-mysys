import { z } from 'zod';

export const TaskSchema = z.object({
  id: z.string().cuid2(),
  text: z.string(),
  // tranformar a string em data
  createdAt: z
    .date()
    .optional()
    .default(() => new Date()), // a saída é um objeto Date
  updatedAt: z.date().optional().nullable(), // o valor pode ser nulo
  deletedAt: z.date().optional().nullable(),
  discerned: z.boolean().optional(),
  fastAction: z.boolean().optional(),
  incubate: z.boolean().optional(),
  reference: z.boolean().optional(),
  delegated: z.boolean().optional(),
  actionDate: z.boolean().optional(),
  context: z.boolean().optional(),
  project: z.boolean().optional(),
  completed: z.boolean().optional(),
  trash: z.boolean().optional(),
});

export type TaskInput = z.input<typeof TaskSchema>;
export type Task = z.output<typeof TaskSchema>;

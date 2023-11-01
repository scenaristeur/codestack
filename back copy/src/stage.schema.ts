import { z } from "zod";

export const createStageSchema = z.object({
  body: z.object({
    titre: z.string({
      required_error: "Title is required",
    }),
    description: z.string({
      required_error: "Content is required",
    }),
    // category: z.string().optional(),
    // published: z.boolean().optional(),
  }),
});

export const params = z.object({
  stageId: z.string(),
});

export const updateStageSchema = z.object({
  params,
  body: z
    .object({
      titre: z.string(),
      description: z.string(),
      // category: z.string(),
      // published: z.boolean(),
    })
    .partial(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsInput = z.TypeOf<typeof params>;
export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateStageInput = z.TypeOf<typeof createStageSchema>["body"];
export type UpdateStageInput = z.TypeOf<typeof updateStageSchema>;

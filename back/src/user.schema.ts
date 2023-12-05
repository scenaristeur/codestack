import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    username: z.string({
      required_error: "Username is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
    address: z.string({
      required_error: "Address is required",
    }),
    phone: z.string({
      required_error: "Phone is required",
    }),
    company: z.string().optional(),
    // published: z.boolean().optional(),
  }),
});

export const params = z.object({
  userId: z.string(),
});

export const updateUserSchema = z.object({
  params,
  body: z
    .object({
      name: z.string(),
      username: z.string(),
      email: z.string(),
      address: z.string(),
      phone: z.string(),
      company: z.string(),
    })
    .partial(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsInput = z.TypeOf<typeof params>;
export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateUserInput = z.TypeOf<typeof createUserSchema>["body"];
export type UpdateUserInput = z.TypeOf<typeof updateUserSchema>;

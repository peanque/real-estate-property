
import { z } from 'zod';

export const ListingValidator = z.object({
    title: z.string().min(10, { message: 'Title must be at least 10 characters long.'}),
    description: z.string().min(10, { message: 'Description must be at least 10 characters long.'}),
    price: z.number().nonnegative({ message: 'Price must be a positive number'})
});

export type ListingValidatorType = z.infer<typeof ListingValidator>;

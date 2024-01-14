// Zod Peer Dependencies
import { z } from "zod";
// Types And Interfaces
// enum EProfilePictureFile {
//   JPEG = 'image/jpeg',
//   PNG = 'image/png',
// }
// sign-up schema
const userSchema = z.object({
  email: z.string().email("This is not a valid email."),
  password: z.string().min(8, {
    message: "Your password must be at least 8 characters.",
  }),
});

// sign-in schema
const signInSchema = z.object({
  username: z.string().email("This is not a valid email."),
  password: z.string().min(8, "Your password must be at least 8 characters."),
});

export { signInSchema, userSchema };

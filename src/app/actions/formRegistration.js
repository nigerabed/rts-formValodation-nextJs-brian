"use server";

import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1, { message: "This fiels is requred" }),
  email: z
    .string()
    .min(1, { message: "This fiels is requred, " })
    .email({ message: "Invalid email address" }),
  guest: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive({ message: "guest must be more than 0" })
  ),
  room_type: z.enum(["normal", "luxary", "seaview"]),
  arrival_date: z.string().date({ message: "Invalid date for arraival" }),
  check_out_date: z.string().date({ message: "Invalid date for check out" }),
});

export async function userRegistration(prevState, formData) {
  // console.log(formData.get("name"));
  // console.log(formData.get("email"));
  // console.log(formData.get("number"));
  // console.log(formData.get("room_type"));
  // console.log(formData.get("arrival_date"));
  // console.log(formData.get("check_out_date"));

  const name = formData.get("name");
  const email = formData.get("email");
  const guest = formData.get("guest");
  const room_type = formData.get("room_type");
  const arrival_date = formData.get("arrival_date");
  const check_out_date = formData.get("check_out_date");

  const validated = userSchema.safeParse({
    name,
    email,
    guest,
    room_type,
    arrival_date,
    check_out_date,
  });

  if (!validated.success) {
    return validated.error.format();
  }
  return validated;
}

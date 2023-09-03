import { EmailSchema } from '$lib/validators';
import { supabase } from "$lib/providers/supabse.provider";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    try {
      const { request } = event;
      const { email } = await request.json();

      EmailSchema.parse(email);
      await supabase.from("contacts").insert({ email });
    }
    catch (err) {
      throw new Error(err)
    }
  }
};

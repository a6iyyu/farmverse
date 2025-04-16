import { Auth } from "@/utils/auth";
import { Schema } from "@/utils/schema";

export async function Support(_prev: { error?: Record<string, string>; redirect?: string; values?: Record<string, string> }, form: FormData): Promise<{ error?: Record<string, string>; redirect?: string; values?: Record<string, string> }> {
  const { error } = Auth.Validation(Schema.Feedback, Auth.ParseForm<typeof Schema.Feedback._output>(form));
  const values = {
    full_name: form.get("full_name")?.toString() ?? "",
    email: form.get("email")?.toString() ?? "",
  };

  if (error) return { error, values };

  try {
    return { redirect: "/support" };
  } catch (error) {
    throw error;
  }
}
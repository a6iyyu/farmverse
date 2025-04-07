import { ZodError } from "zod";

export class AuthUtils {
  public static FormatZodError(error: ZodError): Record<string, string> {
    const formatted: Record<string, string> = {};
    error.errors.forEach((err) => {
      if (err.path.length) formatted[String(err.path[0])] = err.message;
    });
    return formatted;
  }

  public static ParseForm<T extends Record<string, string>>(form: FormData): T {
    return Object.fromEntries(form.entries()) as unknown as T;
  }
}
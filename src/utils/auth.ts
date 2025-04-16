import { ZodError, ZodSchema } from "zod";

export class Auth {
  public static ParseForm<T extends Record<string, string>>(form: FormData): T {
    return Object.fromEntries(form.entries()) as unknown as T;
  }

  public static Validation<T>(schema: ZodSchema<T>, data: unknown): { data?: T; error?: Record<string, string> } {
    try {
      const parsed = schema.parse(data);
      return { data: parsed };
    } catch (error) {
      if (error instanceof ZodError) return { error: this.FormatZodError(error) };
      throw error;
    }
  }

  private static FormatZodError(error: ZodError): Record<string, string> {
    const formatted: Record<string, string> = {};
    error.errors.forEach((err) => {
      if (err.path.length) formatted[String(err.path[0])] = err.message;
    });
    return formatted;
  }
}
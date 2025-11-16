import type { ZodSchema } from "@/server/lib/type";

const jsonContent = <T extends ZodSchema>(schema: T, description: string) => {
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
};

export default jsonContent;

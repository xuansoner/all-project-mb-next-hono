import type { ZodSchema } from "@/server/lib/type";

import jsonContent from "./resp-json-content";

const jsonContentRequired = <T extends ZodSchema>(
  schema: T,
  description: string
) => {
  return {
    ...jsonContent(schema, description),
    required: true,
  };
};

export default jsonContentRequired;

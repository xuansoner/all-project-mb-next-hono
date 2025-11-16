import type { NotFoundHandler } from "hono";

import { NOT_FOUND } from "../constants/http-status-code";
import { NOT_FOUND as NOT_FOUND_MESSAGE } from "../constants/http-status-message";

const notFound: NotFoundHandler = (c) => {
  return c.json(
    {
      message: `${c.req.path}: ${NOT_FOUND_MESSAGE}`,
    },
    NOT_FOUND
  );
};

export default notFound;

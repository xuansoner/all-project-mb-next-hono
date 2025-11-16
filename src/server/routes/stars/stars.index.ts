import { createRouter } from "@/server/lib/create-app";

import {
  createStarHandler,
  deleteStarHandler,
  getOneStarHandler,
  getStarsHandler,
  updateStarHandler,
} from "./stars.handler";
import {
  createStar,
  deleteStar,
  getOneStar,
  getStars,
  updateStar,
} from "./stars.route";

const route = createRouter()
  .openapi(getStars, getStarsHandler)
  .openapi(createStar, createStarHandler)
  .openapi(getOneStar, getOneStarHandler)
  .openapi(updateStar, updateStarHandler)
  .openapi(deleteStar, deleteStarHandler);

export default route;

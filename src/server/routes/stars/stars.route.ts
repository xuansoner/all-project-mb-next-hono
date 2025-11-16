import { createRoute, z } from "@hono/zod-openapi";

import {
  createStarSchema,
  selectStarSchema,
  updateStarSchema,
} from "@/db/schema/star/star";
import * as HttpStatusCode from "@/server/constants/http-status-code";
import createErrorSchema from "@/server/openapi/create-error-schema";
import IdParamsSchema from "@/server/openapi/id-param-schema";
import jsonContent from "@/server/openapi/resp-json-content";
import jsonContentOneOf from "@/server/openapi/resp-json-one-of-content";

const tags = ["stars"];

export const getStars = createRoute({
  method: "get",
  path: "/stars",
  tags: tags,
  responses: {
    [HttpStatusCode.OK]: {
      content: {
        "application/json": {
          schema: z.array(
            // z.object({
            //   name: z.string(),
            //   age: z.coerce.number(),
            //   sex: z.boolean(),
            // })
            selectStarSchema
          ),
        },
      },
      description: "获取明星信息列表",
    },
  },
});

export const createStar = createRoute({
  method: "post",
  path: "/stars",
  tags: tags,
  request: {
    body: {
      content: {
        "application/json": {
          schema: createStarSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCode.OK]: {
      content: {
        "application/json": {
          schema: selectStarSchema,
        },
      },
      description: "插入明星数据成功",
    },
    [HttpStatusCode.UNPROCESSABLE_ENTITY]: {
      content: {
        "application/json": {
          schema: createErrorSchema(createStarSchema),
        },
      },
      description: "插入明星数据失败",
    },
  },
});

export const getOneStar = createRoute({
  method: "get",
  path: "/stars/{id}",
  tags: tags,
  request: {
    params: IdParamsSchema,
  },
  responses: {
    [HttpStatusCode.OK]: {
      content: {
        "application/json": {
          schema: selectStarSchema,
        },
      },
      description: "获取指定明星",
    },
    [HttpStatusCode.UNPROCESSABLE_ENTITY]: {
      content: {
        "application/json": {
          schema: createErrorSchema(IdParamsSchema),
        },
      },
      description: "传入id无效,请传入数字",
    },
    [HttpStatusCode.NOT_FOUND]: {
      content: {
        "application/json": {
          schema: z
            .object({
              message: z.string(),
            })
            .openapi({
              example: "未找到",
            }),
        },
      },
      description: "未找到指定明星",
    },
  },
});

export const updateStar = createRoute({
  method: "patch",
  path: "/stars/{id}",
  tags: tags,
  request: {
    params: IdParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: updateStarSchema,
        },
      },
    },
  },
  responses: {
    [HttpStatusCode.OK]: {
      content: {
        "application/json": {
          schema: updateStarSchema,
        },
      },
      description: "修改指定明星信息成功",
    },
    [HttpStatusCode.UNPROCESSABLE_ENTITY]: jsonContentOneOf(
      [createErrorSchema(IdParamsSchema), createErrorSchema(createStarSchema)],
      "输入的参数有误"
    ),
    [HttpStatusCode.NOT_FOUND]: {
      content: {
        "application/json": {
          schema: z
            .object({
              message: z.string(),
            })
            .openapi({
              example: "未找到",
            }),
        },
      },
      description: "未找到指定明星",
    },
  },
});

export const deleteStar = createRoute({
  method: "delete",
  path: "/stars/{id}",
  tags: tags,
  request: {
    params: IdParamsSchema,
  },
  responses: {
    [HttpStatusCode.NO_CONTENT]: {
      description: "删除指定明星信息成功",
    },
    [HttpStatusCode.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      "输入的id有误"
    ),
    [HttpStatusCode.NOT_FOUND]: {
      content: {
        "application/json": {
          schema: z
            .object({
              message: z.string(),
            })
            .openapi({
              example: "未找到",
            }),
        },
      },
      description: "无效id,未找到指定明星",
    },
  },
});

export type GetStarsRoute = typeof getStars;
export type CreateStarRoute = typeof createStar;
export type GetOneStarRoute = typeof getOneStar;
export type UpdateStarRoute = typeof updateStar;
export type deleteStarRoute = typeof deleteStar;

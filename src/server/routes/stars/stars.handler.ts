import { eq } from "drizzle-orm";

import db from "@/db";
import { stars } from "@/db/schema";
import * as HttpStatusCode from "@/server/constants/http-status-code";
import { AppRouteHandler } from "@/server/lib/type";

import {
  CreateStarRoute,
  GetOneStarRoute,
  GetStarsRoute,
  UpdateStarRoute,
  deleteStarRoute,
} from "./stars.route";

export const getStarsHandler: AppRouteHandler<GetStarsRoute> = async (ctx) => {
  ctx.var.logger.info("获取到明星列表信息");

  const stars = await db.query.stars.findMany();
  return ctx.json(stars);
};

export const createStarHandler: AppRouteHandler<CreateStarRoute> = async (
  ctx
) => {
  ctx.var.logger.info("插入明星数据");

  const star = ctx.req.valid("json");
  const [starRes] = await db.insert(stars).values(star).returning();
  return ctx.json(starRes, HttpStatusCode.OK);
};

export const getOneStarHandler: AppRouteHandler<GetOneStarRoute> = async (
  ctx
) => {
  ctx.var.logger.info("获取指定明星信息");

  const { id } = ctx.req.valid("param");
  const star = await db.query.stars.findFirst({
    where(fields, operator) {
      return operator.eq(fields.id, id);
    },
  });

  console.log(star);

  if (!star) {
    return ctx.json({ message: "没有找到该明星" }, HttpStatusCode.NOT_FOUND);
  }

  return ctx.json(star, HttpStatusCode.OK);
};

export const updateStarHandler: AppRouteHandler<UpdateStarRoute> = async (
  ctx
) => {
  ctx.var.logger.info("更新指定明星信息");

  const { id } = ctx.req.valid("param");
  const updateStar = ctx.req.valid("json");

  const [starListFirst] = await db
    .update(stars)
    .set(updateStar)
    .where(eq(stars.id, id))
    .returning();

  if (!starListFirst) {
    return ctx.json({ message: "没有找到该明星" }, HttpStatusCode.NOT_FOUND);
  }

  return ctx.json(starListFirst, HttpStatusCode.OK);
};

export const deleteStarHandler: AppRouteHandler<deleteStarRoute> = async (
  ctx
) => {
  ctx.var.logger.info("删除指定明星信息");

  const { id } = ctx.req.valid("param");

  const result = await db.delete(stars).where(eq(stars.id, id));

  console.log("=====================================", result);

  if (result.count === 0) {
    return ctx.json(
      { message: "没有找到该明星,请修改id" },
      HttpStatusCode.NOT_FOUND
    );
  }

  return ctx.body(null, HttpStatusCode.NO_CONTENT);
};

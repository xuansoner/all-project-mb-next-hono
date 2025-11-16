CREATE TABLE "next-hono-mb"."stars" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"age" numeric,
	"sex" boolean,
	"create_time" timestamp DEFAULT now(),
	"update_time" timestamp DEFAULT now()
);

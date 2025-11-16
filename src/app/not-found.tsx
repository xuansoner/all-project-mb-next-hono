"use client";

import { Card, CardBody, Spacer } from "@heroui/react";
import { IconError404 } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <Card className="mx-auto mt-5 max-w-md">
      <CardBody>
        <p className="flex flex-row items-center justify-center text-[24px]">
          <IconError404 size={38} />
          <Spacer x={5}></Spacer>
          找不到对应页面
        </p>
      </CardBody>
    </Card>
  );
}

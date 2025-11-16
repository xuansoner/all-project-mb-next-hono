import { Card, CardBody } from "@heroui/card";
import { Spacer } from "@heroui/spacer";

export default async function Home() {
  return (
    <Card className="mx-auto mt-5 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-[40px]">BKL APP Index</h1>
        <Spacer y={2} />
        <p className="text-[20px]">
          这是我的主页，我将在这个网站中填充各种内容。
        </p>
      </CardBody>
    </Card>
  );
}

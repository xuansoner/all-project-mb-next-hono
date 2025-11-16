import { redirect } from "next/navigation";

import { Card, CardBody } from "@heroui/card";
import { User } from "@heroui/user";

import { auth } from "@/config/auth";

export default async function UserInfo() {
  const session = await auth();

  console.log("=============================", session);

  if (!session?.user) return redirect("/api/auth/signin");

  return (
    <>
      <Card className="mx-auto mt-4 max-w-md">
        <CardBody>
          <User
            avatarProps={{
              showFallback: !session.user.image,
              src: session.user.image || "",
            }}
            description={session.user.email}
            name={session.user.name}
          />
        </CardBody>
      </Card>
    </>
  );
}

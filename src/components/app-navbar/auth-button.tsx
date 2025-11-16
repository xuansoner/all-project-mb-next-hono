"use client";

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spacer,
} from "@heroui/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data, status } = useSession();

  if (status == "loading") {
    return <CircularProgress />;
  }

  if (status == "authenticated") {
    if (minimal) {
      return (
        <Button
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
          color="danger"
          variant="ghost"
        >
          <IconBrandGithub />
          Sign Out
        </Button>
      );
    }

    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            src={data.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">{data.user?.name}</p>
            <Spacer />
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
            color="danger"
            key="sign-out"
          >
            <IconBrandGithub />
            <Spacer></Spacer>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Button
      // 单击进行github登录oauth认证 认证成功后通过回调函数跳转到userinfo页面
      onClick={() => signIn("github", { callbackUrl: "/userinfo" })}
      color="danger"
      variant="ghost"
    >
      <IconBrandGithub />
      Login
    </Button>
  );
}

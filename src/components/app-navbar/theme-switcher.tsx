"use client";

import { useEffect, useState } from "react";

import { Switch } from "@heroui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

import userSystemTheme from "@/hooks/user-system-theme";

export function ThemeSwitcher({ isShow }: { isShow?: boolean }) {
  const [mounted, setMounted] = useState(false);
  //   const { theme, setTheme } = userSystemTheme();
  const { theme, setTheme } = userSystemTheme();

  //   console.log({ theme });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === "light"}
      onValueChange={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      color="success"
      endContent={<IconMoon />}
      size="lg"
      startContent={<IconSun />}
    >
      {isShow && "Theme"}
    </Switch>
  );
}

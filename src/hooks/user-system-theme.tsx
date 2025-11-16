"use client";

import { Dispatch, SetStateAction, useMemo } from "react";

import { useTheme } from "next-themes";

/* eslint-disable react-hooks/rules-of-hooks */

type Theme = "dark" | "light";
type SetTheme = Dispatch<SetStateAction<Theme>>;

export default function userSystemTheme() {
  const { theme, setTheme, systemTheme } = useTheme();

  return useMemo(() => {
    return {
      theme: theme === "system" ? systemTheme : theme,
      setTheme,
    } as { theme: Theme; setTheme: SetTheme };
  }, [theme, setTheme, systemTheme]);
}

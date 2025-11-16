"use client";

import { CircularProgress } from "@heroui/react";

export default function Loading() {
  return (
    <CircularProgress
      className="mx-auto mt-4 max-w-md"
      aria-label="Loading Page..."
    />
  );
}

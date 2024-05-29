"use client";

import React, { useEffect, useState } from "react";
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { useMountedState } from "react-use";

export const SheetProvider = () => {
  //   const [isMounted, setIsMounted] = useState(false);
  const isMounted = useMountedState();

  //   useEffect(() => {
  //     setIsMounted(true);
  //   }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountSheet />
    </>
  );
};

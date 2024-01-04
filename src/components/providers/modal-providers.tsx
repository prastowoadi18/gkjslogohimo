"use client";

import React, { useEffect, useState } from "react";
import { DetailTentangModal } from "../modals/detail-tentang-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DetailTentangModal />
    </>
  );
};

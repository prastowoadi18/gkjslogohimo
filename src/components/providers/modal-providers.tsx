"use client";

import React, { useEffect, useState } from "react";
import { DetailPendetaModal } from "../modals/detail-pendeta-modal";

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
      <DetailPendetaModal />
    </>
  );
};

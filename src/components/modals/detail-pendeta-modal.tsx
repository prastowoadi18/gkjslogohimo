"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { TENTANG_GEREJA } from "@/configs";
import { useCardModal } from "@/hooks/use-card-modal";

export const DetailPendetaModal = () => {
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="text-xl font-semibold">
          Profile Lengkap Pendeta GKJ Slogohimo
        </DialogHeader>
        <DialogDescription>
          <div className="h-[35rem] overflow-y-scroll md:max-h-fit">
            <p className="text-justify text-base md:px-7">
              {TENTANG_GEREJA.profile_pendeta}
            </p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

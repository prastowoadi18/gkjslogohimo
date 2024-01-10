"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
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
          <div className="h-[35rem] md:h-[30rem] overflow-y-scroll">
            <p className="text-base text-justify md:px-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              velit, aliquam quis quos repellendus iure harum qui suscipit
              labore inventore quibusdam ullam, nisi maxime omnis magnam. Cum
              sed perspiciatis repellendus cumque tempore. Quasi rem ipsum
              aliquid inventore, tempora aliquam maxime doloribus dolorum
              cupiditate minus ullam magni harum voluptatem porro voluptate odit
              ex fugiat ipsa quaerat est. Similique, nam labore animi maiores
              illo exercitationem in necessitatibus maxime nulla quia dolorem
              pariatur sequi incidunt minus consequuntur accusantium explicabo,
              harum vitae commodi libero placeat tempore possimus earum! Nulla
              aut fugit ratione eum corporis odio laboriosam veritatis
              repellendus doloremque, consequatur assumenda in impedit est
              debitis?
              <br />
              <br />
              Nisi laborum alias tempore esse? Pariatur voluptatem eius corporis
              quaerat aliquam, nesciunt totam deserunt culpa atque optio quidem
              blanditiis, quia nisi voluptates quae incidunt. Repellendus
              necessitatibus, optio amet sequi ea consequuntur cumque deserunt,
              ducimus placeat fuga illum odit ab voluptas nam explicabo eius eum
              numquam nisi velit neque quis recusandae. Voluptatum ad laborum
              eligendi, deserunt earum nam beatae rem ex accusamus illo
              voluptatibus perspiciatis nesciunt autem aspernatur at, ipsa
              consectetur nostrum consequatur dolores laboriosam laudantium
              impedit fugiat, rerum commodi! Modi inventore laborum, animi
              eveniet voluptatibus recusandae ullam velit cupiditate autem, at
              ipsam dolores exercitationem, harum quis nobis? Quasi, fugit?
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              nihil provident odit. Sint cumque reiciendis, fugit assumenda
              repellat optio aspernatur quibusdam explicabo vel labore fugiat,
              praesentium ullam numquam voluptate, soluta autem. Eligendi
              accusantium impedit corrupti eos. Minima tempora, maxime magni,
              iusto iste sapiente ipsam quasi, dolores minus nam fuga ut.
            </p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

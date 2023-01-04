import React from "react";
import { useEffect } from "react";

type Props = {
  isShowModal: boolean;
  setIsShowModal: (isShow: any) => void;
  title: string;
};

function ScheduleModal({
  isShowModal,
  setIsShowModal,
  title = "exemplo",
}: Props) {
  return (
    <>
      <div>{title}</div>
    </>
  );
}

export default ScheduleModal;

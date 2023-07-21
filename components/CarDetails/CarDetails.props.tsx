import { CarProps } from "@/types/common";

export interface CarDetailsProps{
  isOpenModal: boolean;
  closeModal: () => void;
  item: CarProps
};
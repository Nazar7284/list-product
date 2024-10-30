import { FC, PropsWithChildren } from "react";
import { ModalProps } from "../../../hooks/useModal";
import ModalLayout from "./ModalLayout";

interface ModalComponentProps extends PropsWithChildren<ModalProps> {}

const ModalComponent: FC<ModalComponentProps> = ({
  children,
  ...layoutProps
}) => {
  return <ModalLayout {...layoutProps}>{children}</ModalLayout>;
};

export default ModalComponent;

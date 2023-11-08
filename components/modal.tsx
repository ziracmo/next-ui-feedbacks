import { Modal, ModalProps, extendVariants } from "@nextui-org/react";

export const CustomModal = Modal;

export const CustomExtendModal = extendVariants(Modal, {});

export const CustomModalWithFunction = (props:  ModalProps) => <Modal {...props} />;
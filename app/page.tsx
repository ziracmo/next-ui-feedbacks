
"use client";

import { CustomExtendModal, CustomModal, CustomModalWithFunction } from "@/components/modal";
import { Button } from "@nextui-org/button";
import { ModalHeader, useDisclosure } from "@nextui-org/react";

export default function Home() {
	const {onOpen, isOpen, onOpenChange} = useDisclosure();
	const {onOpen: onOpenVariant, isOpen: isOpenVariant, onOpenChange: onOpenChangeVariant} = useDisclosure();
	const {onOpen: onOpenFunction, isOpen: isOpenFunction, onOpenChange: onOpenChangeFunction} = useDisclosure();
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<Button onPress={onOpen}>Open Modal</Button>
			<CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalHeader>Modal Header</ModalHeader>
			</CustomModal>

			<Button onPress={onOpenVariant} color="primary">Open Modal with variants</Button>

			<CustomExtendModal isOpen={isOpenVariant} onOpenChange={onOpenChangeVariant}>
				<ModalHeader>Modal Header Variant</ModalHeader>
			</CustomExtendModal>

			<Button onPress={onOpenFunction} color="primary">Open Modal with function</Button>

			<CustomModalWithFunction isOpen={isOpenFunction} onOpenChange={onOpenChangeFunction}>
				<ModalHeader>Modal Header With Function</ModalHeader>
			</CustomModalWithFunction>
		</section>
	);
}

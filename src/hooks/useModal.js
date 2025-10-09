import { useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedItem(null);
        document.body.style.overflow = 'unset';
    };

    return {
        isOpen,
        selectedItem,
        openModal,
        closeModal
    };
};
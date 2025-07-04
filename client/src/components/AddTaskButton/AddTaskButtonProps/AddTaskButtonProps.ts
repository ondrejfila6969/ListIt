export interface AddTaskButtonProps {
    showForm: boolean | null;
    onOpen: () => void;
    onClose: () => void;
    onCreated: () => void;
} 
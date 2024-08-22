import { MutableRefObject } from 'react';

interface DropDownProps {
  isVisible: boolean;
  triggerRef: MutableRefObject<HTMLElement | null>;
  onClickOutside: () => void;
  className?: string;
  position?: 'left' | 'right';
}

export type { DropDownProps };

import { MutableRefObject } from 'react';

interface DropDownProps {
  isVisible: boolean;
  triggerRef: MutableRefObject<HTMLElement | null>; //trigger 요소 ref 값
  onClickOutside: () => void;
  className?: string;
  position?: 'left' | 'right';
}

export type { DropDownProps };

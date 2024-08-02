'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';

import * as T from './type';

export function DropDown({
  children,
  isVisible,
  triggerRef,
  onClickOutside,
  className,
  position = 'left',
}: PropsWithChildren<T.DropDownProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (e: MouseEvent) => {
      // trigger 요소 클릭 시 리턴

      if (triggerRef.current && triggerRef.current.contains(e.target as Element)) return;

      if (ref.current && !ref.current.contains(e.target as Element)) {
        e.stopPropagation();
        e.preventDefault();
        onClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside, triggerRef, isVisible]);

  return (
    <div
      ref={ref}
      className={`absolute z-50 overflow-hidden rounded-md bg-white shadow-lg transition-all duration-100 ease-in-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      } ${position === 'right' ? 'right-0' : ''} ${className ? className : ''}`}>
      {isVisible && children}
    </div>
  );
}

import CheckIcon from '@/assets/icons/check.svg';
import CrossIcon from '@/assets/icons/cross.svg';
import WaveIcon from '@/assets/icons/wave.svg';

import * as T from './type';

export function SuccessMessage({ title, message, isVisible, close }: T.SuccessMessageProps) {
  return (
    <div
      className={`fixed ${isVisible ? 'bottom-4' : '-bottom-[70px]'} right-4 z-50 transition-[bottom] duration-300 ease`}>
      <div className='relative flex items-center gap-4 w-[300px] h-[60px] rounded-lg p-[10px_15px] bg-white shadow-[0_8px_24px_rgba(149,157,165,0.2)]  overflow-hidden'>
        <WaveIcon className='absolute left-[-31px] w-[80px] fill-[#04e4003a] rotate-90' />
        <div className='flex items-center justify-center w-[35px] h-[35px] bg-[#04e40048] rounded-full ml-2'>
          <CheckIcon className='w-[17px] h-[17px] text-[#269b24]' />
        </div>
        <div className='flex flex-col justify-center items-start flex-grow'>
          <p className='m-0 text-[#269b24] text-[14px] font-bold cursor-default'>{title}</p>
          <p className='m-0 text-[#555] text-[12px] cursor-default'>{message}</p>
        </div>
        <div className='cursor-pointer p-1 rounded-[50%] hover:bg-gray-200' onClick={close}>
          <CrossIcon className='w-[18px] h-[18px] text-[#555]' />
        </div>
      </div>
    </div>
  );
}

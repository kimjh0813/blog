import SearchIcon from '@/assets/icons/search.svg';

import './css.css';
import * as T from './type';

const Input = ({ postsTitle }: T.InputProps) => {
  return (
    <div className='input-wrapper'>
      <input className='input' placeholder='제목 입력' type='text' />
      <SearchIcon className='search-icon' />
    </div>
  );
};

export default Input;

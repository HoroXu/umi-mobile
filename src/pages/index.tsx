import React from 'react';
import {Link} from 'umi'
import './index.less';

export default () => {
  return (
    <div className='page-area'>
      <Link to ='/TestPage'>
      <div className='title'>111Page index</div>
      </Link>
    </div>
  );
}

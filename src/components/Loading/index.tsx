import { memo } from 'react';

import LoadingImg from 'assets/loading.gif';

import { Image } from './style';

const Loading: React.FC = () => (
  <div className="text-center mt-5">
    <Image className="img-fluid" src={LoadingImg} alt="loading" />
  </div>
);

export default memo(Loading);

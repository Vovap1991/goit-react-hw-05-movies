import { InfinitySpin } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <InfinitySpin width="200" color="#afc7b1" />
    </Spinner>
  );
};

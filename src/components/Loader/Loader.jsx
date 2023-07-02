import { Dna } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="Dna">
      <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" />
    </div>
  );
};

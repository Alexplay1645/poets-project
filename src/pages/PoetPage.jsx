import { useParams } from 'react-router-dom';
import Shevchenko from '../components/Shevchenko';
import Lesya from '../components/Lesya';
import Franco from '../components/Franco';

function PoetPage() {
  const { poetId } = useParams();

  const renderBio = () => {
    switch (poetId) {
      case '1':
        return <Shevchenko></Shevchenko>;
      case '2':
        return <Franco></Franco>;
      case '3':
        return <Lesya></Lesya>;
        default:
          return <p>Автор не знайденый</p>
    }
  };

  return (
    <div>
      {renderBio()}
    </div>
  );
}

export default PoetPage;

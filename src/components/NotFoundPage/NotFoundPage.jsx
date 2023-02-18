import image from '../NotFoundPage/404_pages.jpg';
import { ErrorContainer } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <ErrorContainer>
      <img src={image} alt="error 404" style={{ borderRadius: '5px' }} />
    </ErrorContainer>
  );
};

export default NotFoundPage;

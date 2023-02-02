import { Container, IconRow, Row, Col } from './AnimatedBackground.style';
import {
  FaAccessibleIcon,
  FaAd,
  FaAdversal,
  FaAnchor,
  FaAccusoft,
} from 'react-icons/fa';

export const AnimatedBackground: React.FC = () => {
  return (
    <Container>
      <Col>
        <FaAccessibleIcon />
        <FaAd />
        <FaAdversal />
        <FaAnchor />
        <FaAccusoft />
        <FaAccessibleIcon />
        <FaAd />
        <FaAdversal />
        <FaAnchor />
        <FaAccusoft />
      </Col>
      <Col>
        <FaAccessibleIcon />
        <FaAd />
        <FaAdversal />
        <FaAnchor />
        <FaAccusoft />
        <FaAccessibleIcon />
        <FaAd />
        <FaAdversal />
        <FaAnchor />
        <FaAccusoft />
      </Col>
    </Container>
  );
};

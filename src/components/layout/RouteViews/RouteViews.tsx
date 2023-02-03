import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import GamePage from '../../pages/GamePage';
import HomePage from '../../pages/HomePage';
import ProjectsPage from '../../pages/ProjectsPage';

export const RouteViews: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/game' element={<GamePage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};

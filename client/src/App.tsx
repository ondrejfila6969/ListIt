import type { FC } from 'react';
import "./scss/index.scss";
import { AppRoutes } from './pages/AppRoutes';

export const App: FC = () => {
  return (
    <AppRoutes/>
  )
}

export default App;

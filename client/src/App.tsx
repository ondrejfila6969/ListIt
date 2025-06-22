import type { FC } from 'react';
import "./scss/index.scss";

/* COMPONENTS */
import { AppRoutes } from './pages/AppRoutes';
import { AuthProvider } from './context/AuthProvider/AuthProvider';

export const App: FC = () => {
  return (
    <AuthProvider>
          <AppRoutes/>
    </AuthProvider>
  )
}

export default App;

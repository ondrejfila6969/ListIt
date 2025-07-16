import type { FC } from 'react';
import "./scss/index.scss";

/* COMPONENTS */
import { AppRoutes } from './pages/AppRoutes';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import { TaskProvider } from './context/TaskProvider/TaskProvider';
export const App: FC = () => {
  return (
    <AuthProvider>
      <TaskProvider>
          <AppRoutes/>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App;

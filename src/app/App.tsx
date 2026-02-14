import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Character, CharactersList, NotFoundPage } from '@/pages';
import ErrorBoundary, { Layout } from '@/shared/components';
import { ROUTES } from '@/shared/constants/routes';

function App() {
  return (
    <>
      <BrowserRouter basename='/RickAndMorty'>
        <ErrorBoundary>
          <Layout>
            <Routes>
              <Route
                index
                element={<CharactersList />}
              />
              <Route
                path={ROUTES.CHARACTER}
                element={<Character />}
              />
              <Route
                path='*'
                element={<NotFoundPage />}
              />
            </Routes>
          </Layout>

          <Toaster />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Character, CharactersList, NotFoundPage } from '@/pages';

import ErrorBoundary from '@/shared/components';

function App() {
  return (
    <>
      <BrowserRouter basename='/RickAndMorty'>
        <ErrorBoundary>
          <Routes>
            <Route
              index
              element={<CharactersList />}
            />
            <Route
              path='/character/:id'
              element={<Character />}
            />
            <Route
              path='*'
              element={<NotFoundPage />}
            />
          </Routes>
          <Toaster />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;

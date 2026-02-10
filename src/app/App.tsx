import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@/pages';
import { Character } from '@/pages/Character/Character';
import { CharactersList } from '@/pages/CharactersList/CharactersList';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';

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
          path='/character'
          element={<Character />}
        />
      </Routes>
    </>
  );
}

export default App;

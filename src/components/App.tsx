import React from 'react';

import Header from './Header.tsx';
import Main from './Main.tsx';

function App() {
  const [popupMenu, setPopupMenu] = React.useState(false);
  const [popupSearch, setPopupSearch] = React.useState(false);
  const [popupLocation, setPopupLocation] = React.useState(false);

  function openPopupMenu() {
    setPopupMenu(true);
  }

  function openPopupSearch() {
    setPopupSearch(true);
  }

  function openPopupLocation() {
    setPopupLocation(true);
  }

  function closePopup(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (event.currentTarget === event.target) {
      setPopupMenu(false);
      setPopupSearch(false);
      setPopupLocation(false);
    }
  }

  return (
    <>
      <Header 
        isOpenPopupMenu={popupMenu}
        isOpenPopupSearch={popupSearch}
        isOpenPopupLocation={popupLocation}
        handleOpenPopupMenu={openPopupMenu}
        handleOpenPopupSearch={openPopupSearch}
        handleOpenPopupLocation={openPopupLocation}
        handleClosePopup={closePopup}
      />
      <Main />
    </>
  );
}

export default App;

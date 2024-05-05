import { useState, useEffect } from 'react';

const useMobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleEsc);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return {
    isMenuOpen,
    openMenu,
    closeMenu
  }
}

export default useMobileMenu;
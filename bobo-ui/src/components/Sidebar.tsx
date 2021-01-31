import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const Sidebar = () => {
  return (
    <Menu styles={styles}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
    </Menu>
  );
};

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
    outline: 'none',
  },
  bmBurgerBars: {
    background: '#FFF',
  },
  bmBurgerBarsHover: {
    background: '#D0D0D0',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#FFF',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#033c64',
    padding: '2.5em 1.5em 0',
    overflow: 'hidden',
  },
  bmItemList: {
    color: '#033c64',
    padding: '0.8em',
  },
  bmItem: {
    display: 'flex',
    color: '#d1d1d1',
    marginBottom: '10px',
    textAlign: 'left',
    textDecoration: 'none',
    transition: 'color 0.2s',
    outline: 'none',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

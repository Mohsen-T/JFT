import React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import SubMenu from './SubMenu';
import ConnectBtn from './ConnectBtn';

// eslint-disable-next-line react/prop-types
export default function NavMenu() {
  const { pathname } = useLocation();

  const onStaking = pathname === '/staking';
  const onBuying = pathname === '/buy-jet';
  const show = onStaking || onBuying;

  return (
    <>
      <li
        className={clsx(
          'menu-item menu-item-type-custom menu-item-object-custom menu-item-home',
          pathname === '/' && 'current-menu-item current_page_item'
        )}
      >
        <a href="/" aria-current="page">
          Home
        </a>
      </li>

      <li
        className={clsx(
          'menu-item menu-item-type-post_type menu-item-object-page',
          pathname === '/jet' && 'current-menu-item page_item current_page_item'
        )}
      >
        <a>JET</a>

        <SubMenu />
      </li>

      <li
        className="menu-item menu-item-type-custom menu-item-object-custom li-connect-btn"
        style={{ display: show ? '' : 'none' }}
      >
        <ConnectBtn />
      </li>
    </>
  );
}

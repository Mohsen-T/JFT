import React, { useEffect } from 'react';
import Logo from './Logo';
import Social from './Social';
import NavMenu from './NavMenu';
import ConnectBtn from './ConnectBtn';

export default function Header() {
  const [pageYOffset, setPageYOffset] = React.useState(0);
  const [toggleMobileNav, setToggleMobileNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setPageYOffset(window.pageYOffset);
  };

  return (
    <header
      id="main-header"
      data-height-onload={66}
      className={pageYOffset > 7 ? 'et-fixed-header' : ''}
      style={{
        top: 0,
      }}
    >
      <div className="container clearfix et_menu_container">
        <Logo />
        <div id="et-top-navigation" data-height={66} data-fixed-height={63}>
          <nav id="top-menu-nav">
            <ul id="top-menu" className="nav">
              <NavMenu />
            </ul>
          </nav>
          <div id="et_mobile_nav_menu">
            <div className={toggleMobileNav ? 'mobile_nav opened' : 'mobile_nav closed'}>
              <div className="d-flex align-items-center pb-4">
                <ConnectBtn />
                <span
                  className="mobile_menu_bar mobile_menu_bar_toggle ml-1"
                  onClick={() => setToggleMobileNav(~toggleMobileNav)}
                />
              </div>
              <ul
                id="mobile_menu"
                className={
                  toggleMobileNav ? 'et_mobile_menu et_mobile_menu_display' : 'et_mobile_menu'
                }
                // style={{display: toggleMobileNav?"block": "none"}}
              >
                <NavMenu />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Social />
    </header>
  );
}

import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop';
import Jet from './routes/Jet';
import BuyJet from './routes/BuyJet';
import Home from './routes/Home';
import Staking from './routes/Staking';
import WalletModal from './components/WalletModal';

import '../assets/css/et-core-unified-6-home.css';
import '../assets/css/et-core-unified-6-gro.css';
import '../assets/css/et-core-unified-6-ecosystem.css';

function App() {
  const { pathname } = useLocation();

  // const homeClasses = "home page-template-default page page-id-6 et_pb_button_helper_class et_fixed_nav et_show_nav et_hide_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css";
  const homeClasses =
    'page-template-default page page-id-51 et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css chrome';
  const groClasses =
    'page-template-default page page-id-51 et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css chrome';
  return (
    <div id="main" className={pathname === '/' ? homeClasses : groClasses}>
      <WalletModal />
      <div
        id="page-container"
        className="et-animated-content"
        style={{
          paddingTop: 80,
          overflowY: 'hidden',
          marginTop: -1,
        }}
      >
        <Header />
        <div id="et-main-area">
          <div id="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/jet" component={Jet} />
              <Route exact path="/buy-jet" component={BuyJet} />
              <Route exact path="/staking" component={Staking} />
            </Switch>
          </div>
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
}

export default App;

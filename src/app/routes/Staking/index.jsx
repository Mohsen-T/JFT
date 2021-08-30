import React from 'react';
import Footer from '../../components/Footer';
import useEagerConnect from '../../hooks/useEagerConnect';
import JetDefiContext from '../../contexts/jet-defi-context';
import JetDefiStaking from './lib/JetDefiStaking';

export default function Staking() {
  useEagerConnect();

  const [lastUpdatedTime, setLastUpdatedTime] = React.useState(Date.now());

  return (
    <div>
      <JetDefiContext.Provider value={{ lastUpdatedTime, setLastUpdatedTime }}>
        <JetDefiStaking />
      </JetDefiContext.Provider>

      <Footer />
    </div>
  );
}

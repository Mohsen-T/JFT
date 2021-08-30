import React from 'react';
import Footer from '../../components/Footer';
import useEagerConnect from '../../hooks/useEagerConnect';
import JetDefiContext from '../../contexts/jet-defi-context';
import JetBuy from './lib/JetBuy';

export default function BuyJet() {
  useEagerConnect();

  const [lastUpdatedTime, setLastUpdatedTime] = React.useState(Date.now());

  return (
    <div>
      <JetDefiContext.Provider value={{ lastUpdatedTime, setLastUpdatedTime }}>
        <JetBuy />
      </JetDefiContext.Provider>

      <Footer />
    </div>
  );
}

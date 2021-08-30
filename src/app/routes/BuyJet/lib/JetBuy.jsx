import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { numberWithCommas, toFixedTrunc } from '../../../util';
import { StyledPoolCard } from './styles';
import JetDefiContext from '../../../contexts/jet-defi-context';
import useBalance from '../../../hooks/useBalance';
import useGROStaking from '../../../hooks/useGROStaking';

import vdcCompound from '../../../../assets/images/vdc-compound.png';
import GlobalStyle from '../../../../assets/yield-styles';
import useAPY from '../../../hooks/useAPY';

import '../../../../assets/stylesheets/custom.css';

const StyledBalanceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.h2`
  font-family: 'Titillium Web', Helvetica, Arial, Lucida, sans-serif;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 2px;
  line-height: 1.3em;
  color: #fff !important;
  margin-bottom: 0px;
`;

export default function JetBuy() {
  const { lastUpdatedTime } = useContext(JetDefiContext);
  const { ethBalance, jetBalance, stkGROBalance, stkGRORatio, stkGROToUSD, stkTotalReserve } =
    useBalance(lastUpdatedTime);

  const { groAPY } = useAPY();

  const [bnbAmount, setBnbAmount] = useState(0);
  const [jetAmount, setJetAmount] = useState(0);
  const bnbPrice = 480;

  useEffect(() => {
    setJetAmount((bnbPrice * bnbAmount) / 0.1);
  }, [bnbAmount]);

  useEffect(() => {
    setBnbAmount((0.1 * jetAmount) / bnbPrice);
  }, [jetAmount]);

  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <div className="harvest-container">
      <div className="Uniswap container">
        <div className="row text-center margin-auto">
          <div className="col-md-12">
            <StyledTitle>Buy JET</StyledTitle>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-md-6 col-lg-4 margin-auto">
            <StyledBalanceRow>
              <span className="text-white">BNB Balance:</span>{' '}
              <span className="text-white">{toFixedTrunc(ethBalance)}</span>
            </StyledBalanceRow>
            <StyledBalanceRow>
              <span className="text-white">JET Balance:</span>{' '}
              <span className="text-white">{toFixedTrunc(jetBalance)}</span>
            </StyledBalanceRow>
            <StyledBalanceRow>
              <span className="text-white">JET Price:</span>{' '}
              <span className="text-white">{toFixedTrunc(stkGRORatio)}</span>
            </StyledBalanceRow>
          </div>
        </div>
        <div className="row margin-auto">
          <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 offset-xl-3 col-lg-6 col-xl-6">
            <div className="row text-center vdc-alert" id="statusVDC2Msg"></div>

            <div className="uniswap-container" style={{ background: 'transparent' }}>
              <div className="swap">
                <StyledPoolCard style={{ height: 'auto' }}>
                  <form action="" autoComplete="off">
                    <div className="containers">
                      <div className="row text-center">
                        <div className="col-md-4 col-sm-12">
                          <input
                            type="number"
                            placeholder="0.0"
                            value={bnbAmount}
                            onChange={(e) => setBnbAmount(e.currentTarget.value)}
                          />
                          <br />
                          <Button
                            className="lp-btn light-green-outline-button"
                            style={{ marginTop: '10px' }}
                            variant="outline-info"
                          >
                            BNB
                          </Button>

                          <br />
                        </div>

                        <div className="col-md-4 col-sm-12">{`<==>`}</div>

                        <div className="col-md-4 col-sm-12">
                          <input
                            type="number"
                            placeholder="0.0"
                            value={jetAmount}
                            onChange={(e) => setJetAmount(e.currentTarget.value)}
                          />
                          <br />
                          <Button
                            className="lp-btn btn-leaf light-green-button"
                            style={{ marginTop: '10px' }}
                          >
                            JET
                          </Button>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div align-center="center">
                      <Button
                        className="lp-btn"
                        variant="outline-info light-green-outline-button"
                        onClick={() => setShowInfoModal(true)}
                      >
                        Buy
                      </Button>
                    </div>
                  </form>
                </StyledPoolCard>

                <a
                  href="https://etherscan.io/token/0xd93f98b483cc2f9efe512696df8f5decb73f9497#balances"
                  target="_blank"
                  rel="noreferrer"
                  className="richlist-link"
                >
                  TOP HOLDERS LIST
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GlobalStyle />
    </div>
  );
}

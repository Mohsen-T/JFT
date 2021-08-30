import React, { useContext, useState } from 'react';
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

export default function JetDefiStaking() {
  const { lastUpdatedTime } = useContext(JetDefiContext);
  const { ethBalance, jetBalance, stkGROBalance, stkGRORatio, stkGROToUSD, stkTotalReserve } =
    useBalance(lastUpdatedTime);

  const { groAPY } = useAPY();

  const {
    depositAmount,
    withdrawAmount,
    setDepositAmount,
    setWithdrawAmount,
    onGRODeposit,
    onGROWithdraw,
  } = useGROStaking();

  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <div className="harvest-container">
      <div className="Uniswap container">
        <div className="row text-center margin-auto">
          <div className="col-md-12">
            <StyledTitle>JET / BEP-20 STAKING</StyledTitle>
          </div>
        </div>
        <Modal
          show={showInfoModal}
          onHide={() => {
            setShowInfoModal(false);
          }}
          backdrop="static"
          keyboard={false}
          className="info-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{`Info`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {`
              stkJET is the tokenized representation of having JET staked on the Ethereum blockchain, it has governance rights over the DAO and is always appreciating vs GRO.
              Fee structure (10% total for every stake/unstake):
              5% is burnt
              5% goes back to stkJET holders`}
          </Modal.Body>
        </Modal>
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
              <span className="text-white">JET/stkJET Ratio:</span>{' '}
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
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.currentTarget.value)}
                          />
                          <br />
                          <Button
                            className="lp-btn light-green-outline-button"
                            style={{ marginTop: '10px' }}
                            variant="outline-info"
                            onClick={onGRODeposit}
                          >
                            Deposit
                          </Button>
                          <br />
                        </div>

                        <div className="col-md-4 col-sm-12">
                          <img
                            src={vdcCompound}
                            alt="profile"
                            style={{ height: '70px', marginTop: '5px' }}
                          />
                        </div>

                        <div className="col-md-4 col-sm-12">
                          <input
                            type="number"
                            placeholder="0.0"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.currentTarget.value)}
                          />
                          <br />
                          <Button
                            className="lp-btn btn-leaf light-green-button"
                            style={{ marginTop: '10px' }}
                            onClick={onGROWithdraw}
                          >
                            Withdraw
                          </Button>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div className="row text-center">
                      <div className="col-md-12 col-md-offset-3">
                        <b className="loans-page_orange-color orange-to-white">YOUR HOLDINGS</b>
                        <br />
                      </div>
                    </div>

                    <div className="row text-center">
                      <div className="col-md-12 col-md-offset-3" id="pmine-holdings-1">
                        <p className="loans-page_orange-color orange-to-white py-0 my-0">
                          <span id="vdc1-holding-pmine">{toFixedTrunc(stkGROBalance)}</span> stkGRO
                        </p>
                        <p className="loans-page_orange-color orange-to-white">
                          <span id="vdc1-holding-pmine">
                            = {toFixedTrunc(stkGROBalance * stkGRORatio)}
                          </span>{' '}
                          JET (${toFixedTrunc(stkGROBalance * stkGROToUSD)})
                        </p>
                      </div>
                    </div>

                    <div align-center="center">
                      <Button
                        className="lp-btn"
                        variant="outline-info light-green-outline-button"
                        onClick={() => setShowInfoModal(true)}
                      >
                        Info{' '}
                      </Button>
                    </div>

                    <div className="row text-center">
                      <div className="col-md-12 col-md-offset-3">
                        <b className="loans-page_orange-color orange-to-white">
                          APY for Compounding : {numberWithCommas((groAPY * 100).toFixed(2))}%
                        </b>
                        <br />
                      </div>
                    </div>
                  </form>
                </StyledPoolCard>
                <div className="row text-center mt-2">
                  <div className="col-md-12 col-md-offset-3">
                    <b className="loans-page_orange-color orange-to-white">
                      TOTAL VALUE LOCKED IN CONTRACT
                    </b>
                    <br />
                    <p className="text-white">
                      {toFixedTrunc(stkTotalReserve)} JET ($
                      {numberWithCommas((stkTotalReserve * stkGROToUSD).toFixed(2))})
                    </p>
                  </div>
                </div>

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

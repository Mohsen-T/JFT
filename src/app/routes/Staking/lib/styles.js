import styled from 'styled-components';

export const StyledPoolCard = styled.div`
  // border: 1px solid #04fc9c;
  border-radius: 10px;
  // background-color: rgb(40, 37, 47);
  background-color: #1c1e50fa;
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
  border: 1px solid rgb(48 50 214);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;

  > div {
    flex: 2;
  }

  > hr {
    border-color: #17a2b8;
    width: 80%;
    flex: 1;
  }

  > .row {
    text-align: left;
    width: 100%;
    flex: 2;
  }

  > .row .pc-col-1 {
    text-align: left;
  }

  > .row .pc-col-2 {
    text-align: right;
  }

  > .row .col-md-6 .lp-btn {
    width: 100%;
    min-width: 90px;
  }

  > .row .col-md-6 .lp-btn:hover {
    width: 100%;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    height: 500px;
    > .row .pc-col-1 {
      text-align: center;
    }

    > .row .pc-col-2 {
      text-align: center;
    }
  }
`;

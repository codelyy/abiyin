import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 0 24px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color};

  svg {
    color: #ff385c;
  }
`;

export const LeftStyle = styled.div`
  flex: 1;
`;

export const RightStyle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .left {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    span {
      padding: 12px;
      color: ${(props) => props.theme.color};
      transition: color 0.3s ease;
      &:hover {
        color: red;
      }
    }
    svg {
      margin: 0 12px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    height: 42px;
    width: 77px;
    justify-content: center;
    border-radius: 21px;
    border: 1px solid #eee;
    box-sizing: border-box;
    cursor: pointer;
    transition: box-shadow ease 0.3s;
    &:hover {
      ${(props) => props.theme.shadowTransiton};
    }

    > svg:nth-child(2) {
      width: 30px !important;
      height: 30px !important;
      margin-left: 12px;
    }
  }
`;

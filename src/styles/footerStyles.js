import styled, { css } from 'styled-components';

export const FooterNav = styled.div`
  height: 100px;
  margin-top: 10rem;

  @media (max-width: 480px) {
    margin-top: 6rem;
  }
`;

export const FooterContent = styled.div`
  color: ${(props) => props.theme.red};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 0.5rem;
  flex: 1;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }

  span {
    @media (max-width: 900px) {
      display: none;
    }
  }

  ${(props) =>
    props.wider &&
    css`
      flex: 2;
    `}

  ${(props) =>
    props.alignRight &&
    css`
      text-align: right;
    `}
`;

export const FooterSocial = styled.div`
  display: flex;
  position: relative;

  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

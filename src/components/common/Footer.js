import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  bottom: 1.5rem;
  cursor: default;
  left: 5%;
  position: fixed;

  p {
    font-size: .7rem;
    text-transform: uppercase;

    span {
      font-size: inherit;
      letter-spacing: .3rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <span>ⓒ2020</span>
        <br />
        chaemilee
      </p>
    </StyledFooter>
  );
};

export default Footer;
import { Color } from 'contexts/Colors';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { msgOff, msgOn } from '../common/Imgs';

const StyledAside = styled.aside`
  align-items: flex-end;
  border: 1px solid #090;
  bottom: 0;
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  padding: 0 5% 1.5rem;
  position: fixed;
  right: 0;
  width: 55%;
  
  .btnMsg {
    background: transparent url(${msgOff}) center/32px no-repeat;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 40px;
    outline-style: none;
    width: 40px;

    &.active {
      background: transparent url(${msgOn}) center/32px no-repeat;
    }
  }

  .msgWrapper {
    background: ${props => props.colors.background};
    border: 1px solid ${props => props.colors.theme};
    border-radius: 10px;
    display: flex;

    h3 {
      display: none;
    }
    
    .receiver {
      display: flex;
      flex-direction: column;
      font-size:3em;
      font-weight: 600;
      justify-content: space-between;
      line-height: 1;
      padding: 2rem 1rem 2rem 2rem;
      text-align: right;
      text-transform: uppercase;

      p {
        cursor: pointer;
        font-size: 1.25rem;
        font-weight: 600;
        text-align: left;
        text-transform: uppercase;
        transition: .5s;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .sender {
      padding: 2rem 2rem 2rem 1rem;

      input {
        border-bottom: 1px solid ${props => props.colors.theme};
      }

      label {
        font-size: 1.25rem;
        text-transform: uppercase;
      }

      p {
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
      }
    }
  }
`;

const Aside = () => {
  const color = useContext(Color)
  return (
    <StyledAside colors={color}>
      <button
        type="button"
        colors={color}
        className="btnMsg"
        // className="btnMsg active"
      />
      <article className="msgWrapper">
        <h3>get in touch</h3>
        <div className="receiver">
          <p title="Copy E-mail address">
            to. chaemi lee
          </p>
          get<br/>
          in<br/>
          touch
        </div>
        <form
          method="post"
          action="/"
          name="sender"
          id="sender"
          className="sender"
        >
          <p className="sender__name">
            <label htmlFor="name">from</label>
            <input
              type="text"
              name="name"
              id="name"
              autoFocus
            />
          </p>
          <p className="sender__email">
            <label htmlFor="email">email address</label>
            <input
              type="text"
              name="email"
              id="email"
            />
          </p>
          <p className="sender__msg">
            <label htmlFor="msg">message</label>
            <textarea
              cols="30"
              rows="5"
              name="msg"
              id="msg"
            />
          </p>
        </form>
      </article>
    </StyledAside>
  );
};

export default Aside;
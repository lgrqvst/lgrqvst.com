import styled from "styled-components"
import { hideVisually } from "polished"

const ThemeSwitcher = styled.button`
  position: relative;
  width: 48px;
  height: 24px;
  border: 0;
  border-radius: 24px;
  background: var(--accent1);
  box-shadow: 0 0.1rem 0.25rem inset rgba(0, 0, 0, 0.15);
  outline: none;
  transition: background 0.25s;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    /* background: radial-gradient(
        circle at 30% 30%,
        var(--flushLight) 0,
        var(--flushLight) 5%,
        transparent 5%
      ),
      radial-gradient(
        circle at 40% 40%,
        var(--backgroundLight) 0,
        var(--backgroundLight) 40%,
        transparent 70%
      ),
      var(--backgroundLight); */
    background: var(--backgroundLight);
    transform: translateX(0);
    transition: transform 0.25s, color 0.25s;
  }

  &:hover {
    &::before {
      transform: translateX(4px);
    }
  }

  .is-theme-dark & {
    background: var(--accent2);

    &::before {
      transform: translateX(24px);
    }

    &:hover {
      &::before {
        transform: translateX(20px);
      }
    }
  }

  span {
    ${hideVisually()}
  }
`

export default ThemeSwitcher

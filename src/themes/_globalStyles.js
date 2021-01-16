import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 100ms linear;
    transition: color 200ms linear;
  }

  .opener__list ul li, .work-item {
    background-color: ${({ theme }) => theme.accentBackground};
    color: ${({ theme }) => theme.accentText};
    transition: background-color 500ms linear;
    transition: color 500ms linear;
  }

  .contact__item a svg {
    fill: ${({ theme }) => theme.accentBackground};
    transition: all 500ms linear;
  }

  .text-link {
    color: ${({ theme }) => theme.textLink};
    transition: all 500ms linear;
  }

  .btn {
    background-color: ${({ theme }) => theme.accentBackground};
    color: ${({ theme }) => theme.accentText};
    transition: all 500ms linear;
  }

  .btn-accent {
    background-color: ${({ theme }) => theme.btnBackground};
    color: ${({ theme }) => theme.accentText};
    transition: all 500ms linear;
  }

  .footer hr {
    background-color: ${({ theme }) => theme.accentBackground};
    transition: all 500ms linear;
  }
  `
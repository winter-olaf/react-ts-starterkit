import { css, Global } from '@emotion/react'

import sanitizeCSS from './sanitize'

export const globalStyles = (
  <Global
    styles={css`
      ${sanitizeCSS}
      html,
      body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        overscroll-behavior-y: none;
        -webkit-font-smoothing: antialiased;
        position: fixed;
        max-width: 100%;

        overflow: hidden;
        touch-action: manipulation;
        -webkit-user-drag: none;

        & #__next {
          height: inherit;
          width: inherit;
        }
      }

      a {
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
      }
    `}
  />
)

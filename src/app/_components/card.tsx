'use client'

import * as stylex from '@stylexjs/stylex';
import { tokens } from '../_styles/tokens.stylex';
import { useState } from 'react';

export function Card() {
  const [isDark, setIsDark] = useState<boolean>(false)
  return (
    <div {...stylex.props(styles.container, isDark ? styles.darkCard : styles.lightCard)}>
      <h2 {...stylex.props(styles.title)}>Title</h2>
      <p {...stylex.props(styles.description)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button {...stylex.props(buttonStyles.base, isDark ? buttonStyles.dark : buttonStyles.light)} type='button' onClick={() => setIsDark(current => !current)}>Change Dark</button>
    </div>
  )
}

// animation
const pulse = stylex.keyframes({
  from: {
    opacity: .5
  },
  to: {
    opacity: 1
  }
})

// media queries
const HOVER = '@media (any-hover:hover)'
const MD = '@media (min-width: 740px)'

// base styles
const styles = stylex.create({
  container: {
    width: 'min(90%, 600px)',
    padding: 20,
    display: 'grid',
    gap: 20,
    borderWidth: 2,
    marginInline: 'auto',
    borderColor: {
      default: 'transparent',
      ':hover': {
        default: null,
        [HOVER]: 'blue'
      }
    }
  },
  lightCard: {
    color: tokens.black,
    backgroundColor: '#f7f7f7',
  },
  darkCard: {
    color: tokens.white,
    backgroundColor: tokens.black,
  },
  title: {
    fontSize: {
      default: 28,
      [MD]: 40,
    },
    fontWeight: 700,
  },
  description: {
    fontWeight: 400,
    lineHeight: 1.7,
    wordBreak: 'break-all',
    fontSize: {
      default: 14,
      [MD]: 18,
    },
  }
});

// button styles
const buttonStyles = stylex.create({
  base: {
    paddingBlock: 8,
    paddingInline: 20,
    width: 'fit-content',
    borderRadius: 5,
    opacity: .5,
    animation: `${pulse} 1s ease infinite`
  },
  light: {
    background: tokens.black,
    color: tokens.white,
  },
  dark: {
    background: tokens.white,
    color: tokens.black,
  }
});

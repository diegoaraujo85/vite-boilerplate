import {describe, it, expect} from 'vitest';
import {screen, render} from '@testing-library/react';
import App from './app';

describe('App', () => {
  it('should render correctly', () => {
    render(<App />)
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})
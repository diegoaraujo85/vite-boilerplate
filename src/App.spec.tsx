import {describe, it, expect} from 'vitest';
import {screen, render} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    render(<App />)
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../src/components/Counter';

describe('Phase 2 (P1): Counter State & Integration Tests', () => {
  it('mounts and renders initial count state 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
    expect(screen.getByTestId('count-text')).toHaveTextContent('0');
  });

  it('mutates DOM count from 0 to 1 when user clicks Increment', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    await user.click(incrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
    expect(screen.getByTestId('count-text')).toHaveTextContent('1');
  });

  it('mutates DOM count sequentially: 0 -> 1 -> 2 on multiple Increment clicks', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });

    // Initial check: 0
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');

    // First click: 0 -> 1
    await user.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');

    // Second click: 1 -> 2
    await user.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('2');
  });

  it('mutates DOM count when user clicks Decrement', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={5} />);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    await user.click(decrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('4');
  });

  it('restores initial count when user clicks Reset', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={10} />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    await user.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');

    const resetBtn = screen.getByRole('button', { name: /reset/i });
    await user.click(resetBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/Button';

describe('Phase 1 (P0): Button Component Unit Tests', () => {
  it('mounts without crashing', () => {
    render(<Button text="Submit" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('accurately renders text payload passed via props (e.g. text="Login")', () => {
    render(<Button text="Login" />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('accurately renders text passed via children prop', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('handles user click event simulation', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button text="Login" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'Login' });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../components/Input';

describe('Phase 1 (P0): Input Component Unit Tests', () => {
  it('mounts without crashing', () => {
    render(<Input placeholder="Enter username" />);
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('accurately renders label payload passed via props ("Name")', () => {
    render(<Input label="Name" placeholder="Enter name" />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByTestId('input-label')).toHaveTextContent('Name');
  });

  it('accurately renders placeholder payload passed via props', () => {
    render(<Input label="Name" placeholder="Sumit" />);
    expect(screen.getByPlaceholderText('Sumit')).toBeInTheDocument();
  });

  it('simulates user typing interaction and updates state', async () => {
    const user = userEvent.setup();

    const TestForm = () => {
      const [val, setVal] = useState('');
      return (
        <Input
          label="Name"
          placeholder="Enter name"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      );
    };

    render(<TestForm />);
    const inputElement = screen.getByPlaceholderText('Enter name');
    expect(inputElement).toHaveValue('');

    await user.type(inputElement, 'Sumit');
    expect(inputElement).toHaveValue('Sumit');
  });

  it('renders validation error message when error prop is provided', () => {
    render(<Input label="Email" error="Invalid email address" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email address');
  });
});

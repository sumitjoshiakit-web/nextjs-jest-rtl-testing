import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../src/components/Card';

describe('Phase 1 (P0): Card Component Unit Tests', () => {
  it('mounts without crashing', () => {
    render(<Card title="Test Card" />);
    expect(screen.getByTestId('card-container')).toBeInTheDocument();
  });

  it('accurately renders title payload passed via props ("React Course")', () => {
    render(<Card title="React Course" description="Learn React basics" />);
    expect(screen.getByText('React Course')).toBeInTheDocument();
  });

  it('accurately renders description payload passed via props ("Learn React basics")', () => {
    render(<Card title="React Course" description="Learn React basics" />);
    expect(screen.getByText('Learn React basics')).toBeInTheDocument();
  });

  it('accurately renders children content', () => {
    render(
      <Card title="Module 1">
        <p>Advanced Testing Strategies</p>
      </Card>
    );
    expect(screen.getByText('Advanced Testing Strategies')).toBeInTheDocument();
  });
});

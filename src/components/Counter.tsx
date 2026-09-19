import React, { useState } from 'react';
import { Button } from './Button';

export interface CounterProps {
  initialCount?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  return (
    <div
      data-testid="counter-container"
      className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4 max-w-sm"
    >
      <div className="text-center space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          State &amp; Integration Test Component
        </span>
        <div
          data-testid="counter-value"
          className="text-4xl font-extrabold text-indigo-600 font-mono"
        >
          {count}
        </div>
        <p className="text-sm font-medium text-slate-700">
          Count: <span data-testid="count-text">{count}</span>
        </p>
      </div>

      <div className="flex gap-2 justify-center pt-2">
        <Button
          variant="primary"
          onClick={() => setCount((prev) => prev + 1)}
          aria-label="Increment"
          data-testid="increment-btn"
        >
          Increment
        </Button>
        <Button
          variant="outline"
          onClick={() => setCount((prev) => prev - 1)}
          aria-label="Decrement"
          data-testid="decrement-btn"
        >
          Decrement
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCount(initialCount)}
          aria-label="Reset"
          data-testid="reset-btn"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;

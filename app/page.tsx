'use client';

import React, { useState } from 'react';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { Input } from '../src/components/Input';
import { Counter } from '../src/components/Counter';
import { ProductList } from '../src/components/ProductList';
import { CheckCircle } from 'lucide-react';

export default function Page() {
  const [inputText, setInputText] = useState('Sumit');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <header className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Next.js QA Testing Sprint
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Jest &amp; React Testing Library component suite
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 self-start sm:self-auto">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Jest test setup ready</span>
          </div>
        </header>

        {/* Phase 1: Base Architecture (P0) */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 pb-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Phase 1 — Base Components
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Button */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-xs">
              <span className="text-xs font-medium text-slate-500">1. Button</span>
              <div className="flex justify-center py-2">
                <Button text="Login" />
              </div>
              <p className="text-xs text-slate-400 text-center font-mono">
                &lt;Button text="Login" /&gt;
              </p>
            </div>

            {/* Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-xs">
              <span className="text-xs font-medium text-slate-500">2. Card</span>
              <Card
                title="React Course"
                description="Learn React basics"
                className="p-3 shadow-none border-slate-100 bg-slate-50/50"
              />
              <p className="text-xs text-slate-400 text-center font-mono">
                &lt;Card title="..." /&gt;
              </p>
            </div>

            {/* Input */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-xs">
              <span className="text-xs font-medium text-slate-500">3. Input</span>
              <Input
                label="Name"
                placeholder="Enter name"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <p className="text-xs text-slate-400 text-center font-mono">
                &lt;Input label="Name" /&gt;
              </p>
            </div>
          </div>
        </section>

        {/* Phase 2: State & Integration (P1) */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 pb-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Phase 2 — State &amp; Integration (Counter)
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col items-center">
            <Counter />
            <p className="text-xs text-slate-400 mt-4 font-mono">
              userEvent.click(Increment) &rarr; DOM updates: 0 &rarr; 1 &rarr; 2
            </p>
          </div>
        </section>

        {/* Phase 3: Async Data & Mocked API (P2) */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 pb-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Phase 3 — Async Data &amp; Mocked API
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col items-center">
            <ProductList />
            <p className="text-xs text-slate-400 mt-4 font-mono">
              API requests are mocked during tests
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-2 border-t border-slate-200 pt-6 pb-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-slate-800">
                Next.js QA Testing Suite
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Built with Jest and React Testing Library
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:items-end">
              <span className="text-xs text-slate-500">Run tests with coverage</span>
              <code className="rounded-lg border border-slate-200 bg-slate-900 px-3 py-2 font-mono text-xs text-slate-100 shadow-sm">
                npm test -- --coverage
              </code>
            </div>
          </div>
          <p className="mt-5 text-center text-[11px] text-slate-400">
            Component tests · Interaction tests · Mocked API tests
          </p>
        </footer>
      </div>
    </main>
  );
}

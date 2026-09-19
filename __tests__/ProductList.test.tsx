import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductList } from '../src/components/ProductList';

describe('Phase 3 (P2): ProductList Network Mocking Tests', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    jest.restoreAllMocks();
    global.fetch = originalFetch;
  });

  it('renders loading state initially during asynchronous fetch', () => {
    // Mock fetch with an unresolved promise to inspect loading state
    global.fetch = jest.fn().mockImplementation(() => new Promise(() => {}));

    render(<ProductList autoFetch={true} />);
    expect(screen.getByTestId('product-loading')).toHaveTextContent(/loading products.../i);
  });

  it('explicitly mocks network layer and renders fake product payload ("Laptop", 50000) without internet', async () => {
    // Fake API payload requested in sprint
    const mockProductPayload = {
      title: 'Laptop',
      price: 50000,
    };

    // Explicit network layer mock
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockProductPayload,
    } as Response);

    render(<ProductList apiUrl="https://api.example.com/products" />);

    // Verified DOM payload rendering after fake network resolution
    const titleElement = await screen.findByTestId('product-title');
    expect(titleElement).toHaveTextContent('Laptop');

    const priceElement = await screen.findByTestId('product-price');
    expect(priceElement).toHaveTextContent('₹50000');

    // Confirm mock was called with exact URL without touching real internet
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/products');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('handles network failure gracefully and renders error message with retry capability', async () => {
    const user = userEvent.setup();

    // Mock network failure
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({}),
    } as Response);

    render(<ProductList />);

    // Verifies error notification in DOM
    const errorAlert = await screen.findByRole('alert');
    expect(errorAlert).toHaveTextContent(/Failed to fetch product data \(HTTP 500\)/i);

    // Mock successful recovery on retry
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ title: 'MacBook Pro', price: 150000 }),
    } as Response);

    const retryBtn = screen.getByTestId('retry-btn');
    await user.click(retryBtn);

    expect(await screen.findByText('MacBook Pro')).toBeInTheDocument();
    expect(await screen.findByText('₹150000')).toBeInTheDocument();
  });

  it('allows refetching product on manual button click', async () => {
    const user = userEvent.setup();

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ title: 'Mechanical Keyboard', price: 4500 }),
    } as Response);

    render(<ProductList />);

    expect(await screen.findByText('Mechanical Keyboard')).toBeInTheDocument();

    const refetchBtn = screen.getByTestId('refetch-btn');
    await user.click(refetchBtn);

    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});

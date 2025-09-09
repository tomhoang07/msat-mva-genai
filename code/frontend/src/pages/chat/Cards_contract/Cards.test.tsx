import { render, screen } from '@testing-library/react';
import  Cards  from './Cards';

describe('Cards Component', () => {
  beforeEach(() => {
    render(<Cards />);
  });

  test('renders the main container', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('renders "Asking about Data" card correctly', () => {
    expect(screen.getByText(/Interact with Data/i)).toBeInTheDocument();
    expect(screen.getByText(/Better understand and interpret the results/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Intract with Data/i)).toBeInTheDocument();
  });

  test('renders "Summarize Key Points" card correctly', () => {
    expect(screen.getByText(/Summarize Contracts/i)).toBeInTheDocument();
    expect(screen.getByText(/Quickly review and summarize the key points/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Summarize Contracts/i)).toBeInTheDocument();
  });

  test('renders "Quick Data Reference" card correctly', () => {
    expect(screen.getByText(/Quick Source Reference/i)).toBeInTheDocument();
    expect(screen.getByText(/Extract the original reference document/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Source Reference/i)).toBeInTheDocument();
  });
});

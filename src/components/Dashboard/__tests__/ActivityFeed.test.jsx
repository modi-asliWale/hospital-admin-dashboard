import { render, screen } from '@testing-library/react';
import ActivityFeed from '../ActivityFeed';
import { FilterProvider, defaultFilters } from '../../../context/FilterContext';

const renderFeed = (initialFilters = defaultFilters) =>
  render(
    <FilterProvider initialFilters={initialFilters}>
      <ActivityFeed />
    </FilterProvider>,
  );

describe('ActivityFeed', () => {
  it('shows filtered activity results that match the global filters', () => {
    renderFeed({
      ...defaultFilters,
      department: 'Emergency',
      shift: 'Night',
      date: '2024-01-23',
      search: 'trauma',
    });

    expect(screen.getByText(/Trauma patient in ER/i)).toBeInTheDocument();
    expect(screen.getByText(/Emergency Admission/i)).toBeInTheDocument();
    expect(screen.queryByText(/Payment Received/i)).not.toBeInTheDocument();
  });

  it('displays an empty state when no activity matches', () => {
    renderFeed({
      ...defaultFilters,
      search: 'nonexistent keyword',
    });

    expect(screen.getByText(/No activity found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Try adjusting your filters or search query/i),
    ).toBeInTheDocument();
  });
});

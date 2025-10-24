import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GlobalFilters from '../GlobalFilters';
import { FilterProvider, defaultFilters } from '../../../context/FilterContext';

const renderWithFilters = (ui, initialFilters = defaultFilters) =>
  render(<FilterProvider initialFilters={initialFilters}>{ui}</FilterProvider>);

describe('GlobalFilters', () => {
  it('allows updating and resetting filters', async () => {
    const user = userEvent.setup();
    renderWithFilters(<GlobalFilters />);

    const searchInput = screen.getByLabelText(/search dashboard/i);
    await user.type(searchInput, 'ICU');
    expect(searchInput).toHaveValue('ICU');

    const dateInput = screen.getByLabelText(/date/i);
    await user.type(dateInput, '2024-01-23');
    expect(dateInput).toHaveValue('2024-01-23');

    await user.click(searchInput);
    await user.keyboard('{Escape}');

    expect(searchInput).toHaveValue('');
    expect(dateInput).toHaveValue('');

    const resetButton = screen.getByRole('button', { name: /reset all dashboard filters/i });
    await user.click(resetButton);

    expect(searchInput).toHaveValue('');
    expect(dateInput).toHaveValue('');
    expect(screen.getByLabelText(/shift/i)).toHaveValue('All Shifts');
  });

  it('resets pre-filled filters back to defaults', async () => {
    const user = userEvent.setup();
    const initialFilters = {
      ...defaultFilters,
      search: 'cardiac',
      shift: 'Night',
      department: 'Emergency',
      date: '2024-01-23',
    };

    renderWithFilters(<GlobalFilters />, initialFilters);

    const searchInput = screen.getByLabelText(/search dashboard/i);
    const shiftInput = screen.getByLabelText(/shift/i);

    expect(searchInput).toHaveValue('cardiac');
    expect(shiftInput).toHaveValue('Night');

    const resetButton = screen.getByRole('button', { name: /reset all dashboard filters/i });
    await user.click(resetButton);

    expect(searchInput).toHaveValue('');
    expect(shiftInput).toHaveValue('All Shifts');
  });

  it('exposes stable default filter values', () => {
    expect(defaultFilters).toMatchInlineSnapshot(`
      {
        "date": "",
        "department": "All Departments",
        "search": "",
        "shift": "All Shifts",
      }
    `);
  });
});

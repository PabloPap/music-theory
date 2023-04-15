import { render, screen } from '@testing-library/react';
import Stave from './Stave';
import { userEvent } from '@testing-library/user-event';

describe('Stave', () => {
  it('should show text', () => {
    render(<Stave />);
    expect(screen.getByAltText(/headline/i)).toBeInTheDocument();
  });

  it('handle an event', async () => {
    render(<Stave />);
    expect(screen.getByRole('alert').className).toContain('none');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('alert').className).toContain('something');
  });
});

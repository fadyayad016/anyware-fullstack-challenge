import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderWithProviders } from './utils/test-utils';

describe('App login integration test', () => {
  it('should navigate to the dashboard after the user clicks login', async () => {
    // 1. Render the entire application
    renderWithProviders(<App />);
    
    // 2. Find the login button on the home page
    const loginButton = screen.getByRole('button', { name: /login to view dashboard/i });
    expect(loginButton).toBeInTheDocument();

    // 3. Simulate a user clicking the login button
    await userEvent.click(loginButton);

    // 4. Check that the "Welcome" message (which is on the dashboard) is now visible
    const welcomeMessage = await screen.findByText(/welcome talia,/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
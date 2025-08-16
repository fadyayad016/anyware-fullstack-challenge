import React from 'react';
import type { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store'; 

export function renderWithProviders(
  ui: React.ReactElement,
  renderOptions: RenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): React.ReactElement {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
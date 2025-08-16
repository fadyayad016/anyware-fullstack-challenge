import { describe, it, expect } from 'vitest';
import authReducer, { login, logout } from './authSlice';

describe('authSlice', () => {
  const initialState = {
    isLoggedIn: false,
  };

  it('should handle initial state', () => {
   
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle login action', () => {
    const actual = authReducer(initialState, login());
    expect(actual.isLoggedIn).toBe(true);
  });

  it('should handle logout action', () => {
    const loggedInState = { isLoggedIn: true };
    const actual = authReducer(loggedInState, logout());
    expect(actual.isLoggedIn).toBe(false);
  });
});
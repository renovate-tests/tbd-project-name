import SignInController from '../src/components';

describe('example test', () => {
  test('check if 1 ≠ 2', () => {
    expect(
      SignInController.sendSignupRequest('name', 'pass', 'Driver')
    ).toEqual(-2);
  });
});

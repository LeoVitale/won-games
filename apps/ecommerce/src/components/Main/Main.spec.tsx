import { render } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a title', () => {
    const { getByText } = render(<Main />);
    expect(getByText('Main')).toBeTruthy();
  });
});

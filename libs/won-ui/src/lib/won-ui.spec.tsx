import { render } from '@testing-library/react';

import WonUi from './won-ui';

describe('WonUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WonUi />);
    expect(baseElement).toBeTruthy();
  });
});

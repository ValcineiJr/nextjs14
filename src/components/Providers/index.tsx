'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;

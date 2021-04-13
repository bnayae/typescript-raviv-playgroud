import { AppInitialProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
const MyApp = ({ Component, pageProps }: AppInitialProps & any) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;

import React from 'react';
import { SampleA } from '../component';
import { Color } from '../contracts';
// import { Home } from '../component/Home';

const IndexPage = () => (
  <div>
    <h2>Infer Test 🚀</h2>
    {/* <Home /> */}
    <SampleA text="hi" color={Color.primary} />
  </div>
);

export default IndexPage;

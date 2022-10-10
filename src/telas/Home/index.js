import React from 'react';
import Produtores from './components/Produtores.js';
import Topo from './components/Topo.js';

export default function Home() {
  return (
    <>
      <Produtores topo={Topo} />
    </>
  );
}

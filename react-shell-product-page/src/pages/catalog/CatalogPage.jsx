import React, { useState } from 'react';
import SalesExperienceForm from './containers/SalesExperienceForm';
import ReactLogo from './react-logo.svg';

import './catalog.css';

const products = [
  { id: 1, name: "Angular - Concept Two" },
  { id: 2, name: "Vue - Concept Three" },
];

function CatalogPage() {
  const [productId, setProductId] = useState(null);

  const selectProduct = (id) => {
    setProductId(!productId);
  }

  return (
    <div className="page product-catalog">
      <img src={ReactLogo} />
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <a onClick={() => selectProduct(id)} alt={name}>
              {name}
            </a>
          </li>
        ))}
      </ul>
      {productId && <SalesExperienceForm id={productId} />}
    </div>
  )
}

export default CatalogPage
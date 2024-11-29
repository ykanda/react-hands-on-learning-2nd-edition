import React from "react";



// デストラクチャリングを用いて props => amount, measurement, name として展開している
export default function Ingredient({ amount, measurement, name }) {
    return (
      <li>
        {amount} {measurement} {name}
      </li>
    );
  }
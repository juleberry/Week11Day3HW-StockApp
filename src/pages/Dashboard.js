import React from "react";
import stocks from '../data'
import {Link} from 'react-router-dom'

export default function Dashboard (props) {

  const allStocks = stocks.map((element, index) => {
    return (
      <>
      <Link key={index} to={`/stocks/${element.symbol}`}>
      <li >{element.name} ({element.symbol})</li>
      </Link>
      </>
    )
  });

  return (
    <>
    <p>
      <h1>Stock List</h1>
    Select a stock to view more details
    </p>
    <ul id="stockList">{allStocks}
    </ul>
    </>
  )
}
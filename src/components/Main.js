import React from 'react'

const Main = ({id,name,image,price,symbol,marketcap,pricechange}) => {

  return (
    <div className='coin-container'>
      <div className="coin-row">
      <div className="coin">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      </div>
      <div className="coin-data">
        <p className="coin-price">{price.toLocaleString()}$</p>
        {
          pricechange < 0 ? (
            <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
          ):(
            <p className="coin-percent green">{pricechange.toFixed(2)}</p>
          )
        }
        <p className="coin-marketcap">Mkt.Cap.Rs {marketcap.toLocaleString()}</p>
      </div>
      </div>
    </div>
  )
}

export default Main
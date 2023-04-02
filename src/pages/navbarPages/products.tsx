import React from 'react'

type Props = {}

const products = (props: Props) => {
  return (
<div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Set the height of the parent element to 100% of the viewport height
      width: '100vw', // Set the width of the parent element to 100% of the viewport width
      color: '#03A062',
    }}>
      <div>Products</div>
    </div>  )
}

export default products
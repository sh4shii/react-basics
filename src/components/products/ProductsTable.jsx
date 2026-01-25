import React from 'react'
import CategoryHeader from './CategoryHeader'
import ProductRow from './ProductRow'


const ProductsTable = ({products}) => {
  let lastCategory = null

  return (
    <>
      <h1 style={{ color: 'red' }}>ProductsTable</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>

        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px' }}>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            const showCategoryHeader = product.category !== lastCategory // true
            lastCategory = product.category // null -> Fruits

            return (
              <React.Fragment key={product.name}>
                {showCategoryHeader && <CategoryHeader category={product.category} />}
                <ProductRow name={product.name} price={product.price} stocked={product.stocked} />
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </>
  )
}



{/* <React.Fragment>

</React.Fragment>


both are equal
<>

</> */}




export default ProductsTable
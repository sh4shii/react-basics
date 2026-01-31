import React from 'react'
import '../styles/Products.css'
import useSWR from 'swr'
import { swrConfig } from '../util/swrUtil'

const Products = () => {
  // const { data: products, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  const { data: products, error, isLoading: loading } = useSWR('https://jsonplaceholder.typicode.com/posts', swrConfig)

  return (
    <div className="container">
      <h1>Products List</h1>

      {loading && <p className="loading">Loading products...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.title}</h2>
              <p><strong>ID:</strong> {product.id}</p>
              <p><strong>Description:</strong> {product.body}</p>
              <p><strong>User ID:</strong> {product.userId}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products

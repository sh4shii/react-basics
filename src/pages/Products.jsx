import React, { useState, useEffect } from 'react'
import '../styles/Products.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data = await response.json()
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log("useEffect ran")
    fetchProducts()
  }, [])

  console.log("products page rendered")

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

const ProductRow = ({ name, price, stocked }) => (
  <tr style={{backgroundColor: 'yellow'}}>
    <td style={{ color: stocked ? 'black' : 'red' }}>{name}</td>
    <td>{price}</td>
  </tr>
)

// both are same
// function ProductRow ({ name, price, stocked }) {
//   <tr>
//     <td style={{ color: stocked ? 'black' : 'red' }}>{name}</td>
//     <td>{price}</td>
//   </tr>
// }

export default ProductRow;

// default export -> import without {}
// not default export -> import with {}
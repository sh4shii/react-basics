const CategoryHeader = ({ category }) => (
  <tr>
    <th colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f0f0f0', color: 'blue' }}>
      {category}
    </th>
  </tr>
)

export default CategoryHeader;
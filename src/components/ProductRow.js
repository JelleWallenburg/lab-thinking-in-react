function ProductRow (props){
    const {products}=props;
 
    return(
        products.map((product) => {
            return(
                <tbody>
                    <tr>
                        <td style={{color: product.inStock === true ? "black" : "red"}} >{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            )
        }
        )
    )
}

export default ProductRow;
import Counter from "./Counter"
import productos from "./productos.json"


const ItemDetail = () => {

  return (
    <div>
      {productos.map(ItemProducto =>
        <>
          <p key={ItemProducto.id}>
            {ItemProducto.description}
            {ItemProducto.price}
          </p>
          <img key={ItemProducto.id} src={ItemProducto.image} alt="camiseta"></img>

        </>
      )}
      <Counter />
    </div>

  )
}


export default ItemDetail

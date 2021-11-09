import { Link } from "react-router-dom"
const Category = () => {
  return (
    <div>
      <main className="main_category">
        <Link to="/categorias/Legends"><img src="img/camisetas/azul.jpeg" alt="camiseta legends" id="pho"/></Link>
        <Link to="/categorias/Bicicleta"><img src="img/camisetas/bici.jpeg" alt="camiseta logo bici" id="pho" /></Link>
        <Link to="/categorias/Deportiva"><img src="img/camisetas/depor.jpeg" alt="camiseta deportiva" id="pho" /></Link>
        <Link to="/categorias/Goku"><img src="img/camisetas/goku.jpeg" alt="camiseta logo goku" id="pho"/></Link>
      </main>
    </div>
  )
}

export default Category

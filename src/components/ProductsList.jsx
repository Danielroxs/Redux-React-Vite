import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [dispatch]);
  return (
    <>
      <h2>CRUD de Productos</h2>
      <h3>Lista de Productos</h3>
      <ul>
        <li>Productos...</li>
      </ul>
      <aside>
        <input type="text" />
        <button>Agregar Producto</button>
      </aside>
    </>
  );
};

export default ProductsList;

import ProductCard from "../components/ProductCard";
import {useEffect} from "react";
import {fetchProducts} from "../redux/productSlice.js";
import {Box, Grid, Typography} from "@mui/material";
const Home = () => {
  const dispatch = useDispatch();
  const  products  = useSelector((state) => state.products.list);
  useEffect(() => {
    if (products.length === 0) {
    dispatch(fetchProducts()) 
    .unwrap()
      .then(()=> console.log("Productos cargados"))
      .catch((error) => console.error("Error al cargar productos:", error));
  }}, [dispatch]);
  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} align="center">
        Productos
      </Typography>
      <Grid container spacing={3} justifyContent={"center"}>
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;

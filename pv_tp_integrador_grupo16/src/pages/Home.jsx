import ProductCard from "../components/ProductCard";
import {useEffect} from "react";
import {fetchProducts} from "../redux/productSlice.js";
import {Box, Grid, Typography,CircularProgress, Alert} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const { list: products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    return (
        <Box p={3}>
            <Typography variant="h4" mb={3} align="center">Productos</Typography>

            {loading && (
                <Box display="flex" justifyContent="center" my={5}>
                    <CircularProgress />
                </Box>
            )}
            {error && (
                <Box mb={2}>
                    <Alert severity="error">{error}</Alert>
                </Box>
            )}

            {!loading && !error && (
                <Grid container spacing={3} justifyContent="center">
                    {products.map(product => (
                        <Grid item key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default Home;

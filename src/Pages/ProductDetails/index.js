import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCT_DETAILS } from "../../GraphQL/Queries";
import Product from "./../../components/Product";

const ProductDetails = (props) => {
  const { productID } = useParams();
  const { loading, error, data } = useQuery(LOAD_PRODUCT_DETAILS, {
    variables: { productID },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <Product product={data.product} />
    </div>
  );
};

export default ProductDetails;

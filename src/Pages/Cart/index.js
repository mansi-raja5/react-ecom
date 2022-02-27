import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import { connect } from "react-redux";
import "./style.scss";

const Cart = ({ cart }) => {
  return (
    <section>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="page-title">
                <h1>CART</h1>
              </div>
            </div>
            {cart.length ? (
              cart.map((cartItem) => {
                return <CartItem key={cartItem.id} cartItem={cartItem} />;
              })
            ) : (
              <div>NO ITEMS IN THE CART</div>
            )}
            <div className="row mt-5">
              <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12"></div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Button>Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

import "./style.scss";

const Button = (props) => {
  return (
    <button
      type={props.buttonType || "button"}
      className="button text-uppercase"
      onClick={props.onClick}
      disabled={props.disabled || ""}
    >
      {props.children}
    </button>
  );
};

export default Button;

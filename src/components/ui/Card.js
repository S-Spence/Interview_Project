import css from "../../styles/Card.module.css";
import GradientImg from "../../assets/GradientImg.png";

const Card = () => {

  // Note: Could pass props to the card to make it more reuasble as the program grows.

  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={GradientImg} alt="gradient" />
      </div>
      <div className={css.content}>
        <h3>Card Title</h3>
        <p>Card Tag</p>
      </div>
      <div className={css.actions}>
        <button>+</button>
      </div>
    </div>
  );
}


export default Card;

import Card from "./Card";
import css from "./GridLayout.module.css";

function GridLayout(props) {

    return (

        <div className={css.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default GridLayout;

export const Button = (props) => {

  return (
    <button id={props.id} onClick={props.onClick} className={props.className}>
      {props.label}
    </button>

  );
}

// id="change-age-button" data-lowestAge="3" NOT WORKING IN REACT data-lowestAge={props.age}
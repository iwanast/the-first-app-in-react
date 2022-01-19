export const Button = (props) => {
  return (
    <button id={props.id} onClick={props.onClick} className={props.className}>
      {props.label}
    </button>

  );
}
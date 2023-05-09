type SquareProps = {
    children: string;
    handleClick?: () => void;
};

const Square = (props: SquareProps) => {
  return (
    <button 
        className="square"
        onClick={props.handleClick}
    >
        {props.children}
    </button>
    
  )
}
export default Square
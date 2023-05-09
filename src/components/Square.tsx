type SquareProps = {
    index: number
    children: React.ReactNode;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
};

const Square = (props: SquareProps) => {
  return (
    <button 
        className="square"
        onClick={(e) => props.handleClick(e, props.index)}
    >
        {props.children}
    </button>
  )
}
export default Square
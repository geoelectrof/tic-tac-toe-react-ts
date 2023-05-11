type SquareProps = {
    index: number
    children: React.ReactNode;
    handleClick: (index: number) => void;
};

const Square = (props: SquareProps) => {
  return (
    <button 
        className="square"
        onClick={() => props.handleClick(props.index)}
    >
        {props.children}
    </button>
  )
}
export default Square
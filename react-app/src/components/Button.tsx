interface ButtonProps {
  text: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  onClick: () => void;
}

const Button = ({ text, onClick, color = 'primary' }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

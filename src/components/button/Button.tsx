import { ComponentProps } from "react";

type TButton = ComponentProps<'button'>;
function Button({children,onClick}:TButton) {
  return( <button onClick={onClick}>
    {children}
  </button>);
}
export default Button;
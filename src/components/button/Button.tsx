import { ComponentProps } from "react";
type TVariant="primary" | "danger" | "warning" | "secondary" | "success"
type TButton = ComponentProps<'button'> & {
  variant?: TVariant
};
function Button({children,variant,style,...rest}:TButton) {
  return( <button {...rest} style={{borderRadius: "6px" ,padding: "4px 8px",...style,...checkVariant(variant)}}>
    {children}
  </button>);
}
export default Button;
 
function checkVariant(variant?:TVariant)
{
  if(variant==="primary"){
    return{backgroundColor:"blue" ,color:"white"}
  }
  else if(variant==="secondary"){
    return{backgroundColor:"green" ,color:"white"}
  }
  else if(variant==="danger"){
    return{backgroundColor:"red" ,color:"white"}
  }
  else if(variant==="success"){
    return{backgroundColor:"gray" ,color:"white"}
  }
}

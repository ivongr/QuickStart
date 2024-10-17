import React from "react";

const Button = ({title, style, href }) =>{
    return (
        <button style={style} href=
        {href} >
            {title}
        </button>
    )
};

export default Button;
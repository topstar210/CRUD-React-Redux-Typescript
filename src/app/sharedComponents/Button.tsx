import React from "react";
import classNames from "classnames";

interface Props {
    className?: string;
    onClick: () => void;
    children?: React.ReactNode;
}

const Button = ({
    className,
    onClick,
    children
}:Props) => {
    var btnClass = classNames(className?className:"");
    return <button 
            className={ 'px-4 py-2 font-semibold text-sm bg-cyan-500 text-white shadow-sm ' + btnClass } 
            onClick={onClick}
            >{ children }</button>
}

export default Button;
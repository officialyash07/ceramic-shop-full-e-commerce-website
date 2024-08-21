/* eslint-disable react/prop-types */
import classes from './Button.module.css';

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button className={`${className} ${classes.button}`} onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;

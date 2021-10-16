import React from 'react';

const AppButton = (props) => {
    const { buttonStyle, handleClick, title,id } = props;
    return (
        <button className={buttonStyle} onClick={() => handleClick(title, buttonStyle)}>{title}</button>
    );
};

export default AppButton;
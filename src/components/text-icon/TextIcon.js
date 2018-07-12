import React from 'react';

const TextIcon = ({icon, name}) => {
    return (<span>
        <i className="material-icons">{icon}</i>
        {name}
    </span>)
};

export default TextIcon;
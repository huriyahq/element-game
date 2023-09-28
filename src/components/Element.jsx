import React from "react";

const Element = ({ text, elementStyle }) => {
	return <div className={elementStyle}>{text}</div>;
};

export default Element;

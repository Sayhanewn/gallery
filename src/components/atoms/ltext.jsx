const LText = ({ className = '', children = null, style = {} }) => {
	return <p className={`text-xl ${className}`}>{children}</p>;
};

export default LText;

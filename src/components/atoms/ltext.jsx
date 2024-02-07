const LText = ({ className = '', children = null, style = {} }) => {
	return <span className={`text-xl font-bold ${className}`}>{children}</span>;
};

export default LText;

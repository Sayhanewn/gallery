const Button = ({ onClick = null, children = null, className = '', style = {} }) => {
	return (
		<button
			type='button'
			className={`border-2 border-blue-400 text-blue-400 px-5 py-2 font-semibold rounded-md ${className}`}
			style={style}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;

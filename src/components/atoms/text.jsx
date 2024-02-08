const Text = ({ className = '', children = null, style = {} }) => {
	return (
		<p className={`text-base ${className}`} style={style}>
			{children}
		</p>
	);
}

export default Text;
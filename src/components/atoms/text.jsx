export default function Text({ className = '', children = null, style = {} }) {
	return (
		<span className={`text-base ${className}`} style={style}>
			{children}
		</span>
	);
}

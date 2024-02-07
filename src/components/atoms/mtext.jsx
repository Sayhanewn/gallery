export default function MText({ className = '', children = null, style = {} }) {
	return (
		<span className={`text-lg font-bold ${className}`} style={style}>
			{children}
		</span>
	);
}

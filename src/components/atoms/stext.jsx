
export const SText = ({className = '', children = null, style = {}}) => {
  return (
    <p className={`text-sm ${className}`} style={style} >{children}</p>
  )
}

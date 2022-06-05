interface Props {
  breakpoint?: 'sm'|'md'|'lg'|'xl'
  children: React.ReactNode
  className? : string
  style?: React.CSSProperties
}
const Flex = ({breakpoint = 'md', children, className = '', style}: Props) => {
  const flexClass = `${breakpoint}:flex`
  return (
    <div className={`${flexClass} ${className}`} style={style}>{children}</div>
  )
}
export default Flex
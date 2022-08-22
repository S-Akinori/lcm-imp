interface Props {
  label: string
  Heading? : 'h2' | 'h3' | 'h4'
  children: React.ReactNode
}

const TitleLabel = ({label, Heading = 'h2', children}: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full bg-accent text-accent-cont">{label}</div>
      <Heading className="pl-4">{children}</Heading>
    </div>
  )
}

export default TitleLabel;
interface Props {
  label: string
  heading? : 'h2' | 'h3' | 'h4'
  children: React.ReactNode
}

const TitleLabel = ({label, heading = 'h2', children}: Props) => {
  const Heading = heading
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full bg-accent text-accent-cont">{label}</div>
      <Heading className="pl-4 pb-0 mb-0">{children}</Heading>
    </div>
  )
}

export default TitleLabel;
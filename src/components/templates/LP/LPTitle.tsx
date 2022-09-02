interface Props  {
  heading?: 'h2' | 'h3' | 'h4'
  children: React.ReactNode
}
const LPTitle = ({heading = 'h2', children}: Props) => {
  const Heading = heading
  return (
    <>
      <style jsx>{`
        h2 {
          margin-bottom: 2rem;
        }
        h2::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, var(--accent-color) 0%, var(--accent-color) 50%, var(--base-cont) 51%);
        }
      `}</style>
      <Heading className="py-4 relative text-center">{children}</Heading>
    </>
  )
}

export default LPTitle
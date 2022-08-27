interface Props  {
  children: React.ReactNode
}
const LPTitle = ({children}: Props) => {
  return (
    <>
      <style jsx>{`
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
      <h2 className="py-4 mb-8 relative text-center">{children}</h2>
    </>
  )
}

export default LPTitle
type SectionHeaderProps = {
  children: string
  highlight?: string
  className?: string
  ringPosition?: string
}

export default function SectionHeader({
  children,
  highlight,
  className,
  ringPosition
}: SectionHeaderProps) {

  const renderText = () => {
    if (!highlight) return children

    const parts = children.split(new RegExp(`(${highlight})`, "gi"))

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    )
  }

  return (
    <div className={`relative inline-flex items-center w-full py-8 ${className}`}>
      
      <div className={`absolute ${ringPosition} w-12 h-12 border-[5px] border-asdev-violet rounded-full opacity-30`}></div>

      <h2 className={`relative text-2xl font-medium tracking-tight w-full`}>
        {renderText()}
      </h2>

    </div>
  )
}
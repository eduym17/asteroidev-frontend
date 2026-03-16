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
<div className={`w-full py-8 md:py-14 ${className}`}>
  <div className="flex justify-center w-full">

    <div className="relative inline-flex items-center">
      <div
        className={`absolute -left-4 w-12 h-12 border-[7px] border-asdev-violet rounded-full opacity-30 ${ringPosition}`}
      />
      <h2 className="relative text-2xl font-medium tracking-tight">
        {renderText()}
      </h2>

    </div>

  </div>
</div>
  )
}
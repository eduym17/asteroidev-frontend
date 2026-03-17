type SectionHeaderProps = {
  children: string
  highlight?: string
  className?: string
}

export default function HighlightText({
  children,
  highlight,
  className,
}: SectionHeaderProps) {

  const renderText = () => {
    if (!highlight) return children

    const parts = children.split(new RegExp(`(${highlight})`, "gi"))

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong className="text-asdev-gray-500" key={index}>{part}</strong>
      ) : (
        part
      )
    )
  }

  return (
    <div className={`w-full py-8 md:py-14 ${className}`}>
      <div className="flex justify-center w-full">
        <div className="inline-flex items-center">
          <h2 className="w-[90%] whitespace-nowrap text-[clamp(2rem,11vw,8rem)] text-asdev-gray-200 font-extrabold">
            {renderText()}
          </h2>
        </div>
      </div>
    </div>
  )
}
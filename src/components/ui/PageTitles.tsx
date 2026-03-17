type SectionHeaderProps = {
  children: string
  titleFirstLine: string
  titleSecondLine?: string
  className?: string
}

export default function PageTitles({
  children,
  titleFirstLine,
  titleSecondLine,
  className,
}: SectionHeaderProps) {

  return (
    <div className={`w-full py-6 md:py-10 ${className}`}>
      <div className="flex justify-start w-full">

        <div className="relative flex flex-col items-start">
                <div
        className={`absolute -left-2 -top-2 md:-left-3 md:-top-3 w-12 h-32 md:w-14 md:h-38 border-[7px] border-asdev-violet rounded-full opacity-30`}
      />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {titleFirstLine}
          </h2>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {titleSecondLine}
          </h2>
          <p className="text-lg md:text-xl font-light tracking-tight">
            {children}
          </p>

        </div>

      </div>
    </div>
  )
}
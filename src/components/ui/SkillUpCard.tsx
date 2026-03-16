import { LucideIcon } from "lucide-react";

type SkillUpCardProps = {
  children: string
  header?: string
  cardIcon: LucideIcon
  hoverIcon?: LucideIcon
}

export default function SkillUpCard({
  children,
  header,
  cardIcon: Icon,
  hoverIcon: HoverIcon
}: SkillUpCardProps) {
  return (
    <div
      className={`
        group
        flex flex-col items-start
        px-6 py-6 gap-6 w-full
        bg-asdev-gray-100
        rounded-xl
        transition-all duration-500
        hover:bg-gradient-to-r
        hover:from-asdev-blue
        hover:to-asdev-night
      `}
    >
      <div className="flex items-center gap-4 w-full">

        <div className="
          flex items-center justify-center
          w-14 h-12
          rounded-lg
          bg-asdev-violet
          transition-colors duration-500
          group-hover:bg-white
        ">
          <Icon className="
            absolute
            w-7 h-7
            text-asdev-white
            transition-all duration-500
            group-hover:text-asdev-violet
            group-hover:opacity-0
          " />

          {HoverIcon && (
            <HoverIcon
              className="
                absolute
                w-7 h-7
                text-asdev-violet
                opacity-0
                scale-75
                transition-all duration-500
                group-hover:opacity-100
                group-hover:scale-100
              "
            />
          )}
        </div>

        <h2
          className="
            text-[20px] font-medium tracking-tight w-full
            transition-colors duration-500
            group-hover:text-asdev-white
          "
        >
          {header}
        </h2>

      </div>

      <p
        className="
          text-sm
          transition-colors duration-500
          group-hover:text-asdev-white
        "
      >
        {children}
      </p>

    </div>
  )
}
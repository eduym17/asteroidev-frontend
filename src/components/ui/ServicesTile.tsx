import { LucideIcon } from "lucide-react";

type SkillUpCardProps = {
  children: string
  cardIcon: LucideIcon
  hoverIcon: LucideIcon
  cardArrow: LucideIcon
  hoverArrow: LucideIcon
}

export default function ServicesCard({
  children,
  cardIcon: Icon,
  hoverIcon: HoverIcon,
  cardArrow: Arrow,
  hoverArrow: HoverArrow
}: SkillUpCardProps) {
  return (
    <div
      className={`
      group
      flex flex-col items-start
      px-4 md:px-6 py-2 md:py-3 gap-6 w-full
      bg-asdev-gray-100
      rounded-xl
      transition-all duration-500
      hover:bg-gradient-to-r
      hover:from-asdev-blue
      hover:to-asdev-night
    `}
    >
      <div className="flex items-center gap-4 md:gap-10 w-full">

        <div className="
        flex items-center justify-center
        min-w-12 min-h-12
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
          text-lg font-medium tracking-tight w-full
          transition-colors duration-500
          group-hover:text-asdev-white
        "
        >
          {children}
        </h2>

        <div className="
        flex items-center justify-center
        min-w-8 min-h-8
        rounded-lg
        transition-colors duration-500
      ">
          <Arrow className="
          absolute
          w-7 h-7
          text-asdev-gray-900
          transition-all duration-500
          group-hover:text-asdev-violet
          group-hover:opacity-0
        " />

          {HoverArrow && (
            <HoverArrow
              className="
              absolute
              w-7 h-7
              text-asdev-white
              opacity-0
              scale-75
              transition-all duration-500
              group-hover:opacity-100
              group-hover:scale-100
            "
            />
          )}
        </div>

      </div>

    </div>
    
  )
}
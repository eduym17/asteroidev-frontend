import { useEffect, useRef, useState } from "react";
import MemberCard from "./MemberCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Member = {
  name: string;
  title: string;
  image: string;
};

type Props = {
  members: Member[];
};

export default function MembersCarousel({ members }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // 📐 Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔄 Desktop auto-rotate
  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % members.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isDesktop, members.length]);

  // 📱 Scroll to index (mobile)
  const scrollToIndex = (i: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = container.children;

    const newIndex = (i + children.length) % children.length;
    setIndex(newIndex);

    const child = children[newIndex] as HTMLElement;

    container.scrollTo({
      left: child.offsetLeft,
      behavior: "smooth",
    });
  };

  // ⬅️➡️ Navigation handlers
  const handleNext = () => {
    if (isDesktop) {
      setIndex((prev) => (prev + 1) % members.length);
    } else {
      scrollToIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (isDesktop) {
      setIndex((prev) => (prev - 1 + members.length) % members.length);
    } else {
      scrollToIndex(index - 1);
    }
  };

  // 💻 Get exactly 3 items (loop safe)
  const visibleMembers =
    members.length <= 3
      ? members
      : members.slice(index, index + 3).length === 3
        ? members.slice(index, index + 3)
        : [
          ...members.slice(index),
          ...members.slice(0, 3 - (members.length - index)),
        ];

  return (
    <div className="relative flex items-center justify-center w-full md:w-[95%] gap-x-1 md:gap-x-3">

      <button
        onClick={handlePrev}
        className="
        group z-10 bg-asdev-violet/90 text-asdev-white
        hover:bg-asdev-violet min-h-10 min-w-10 rounded-md
        flex items-center justify-center absolute left-0.5
        -translate-y-1/2 md:static md:translate-y-0
        "
      >
        <ChevronLeft className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" />
      </button>


      <div
        ref={containerRef}
        className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth w-full touch-pan-y -mx-4 px-4 md:hidden
          "
        onScroll={() => {
          if (!containerRef.current) return;
          const scrollLeft = containerRef.current.scrollLeft;
          const width = containerRef.current.clientWidth;
          const newIndex = Math.round(scrollLeft / width);
          setIndex(newIndex);
        }}
      >
        {members.map((member, i) => (
          <div key={i} className="min-w-full snap-center">
            <MemberCard {...member} />
          </div>
        ))}
      </div>

      <div className="hidden md:flex gap-4 w-full">
        {visibleMembers.map((member, i) => (
          <div key={i} className="w-1/3">
            <MemberCard {...member} />
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="
        group z-10 bg-asdev-violet/90 text-asdev-white hover:bg-asdev-violet min-h-10 min-w-10 rounded-md
        flex items-center justify-center absolute right-0.5 -translate-y-1/2 md:static md:translate-y-0
        "
      >
        <ChevronRight className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" />
      </button>
    </div>
  );
}
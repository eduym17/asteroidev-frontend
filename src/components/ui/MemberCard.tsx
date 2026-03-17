import { Send } from "lucide-react";

type MemberCardProps = {
  name: string;
  title: string;
  image: string;
};

export default function MemberCard({ name, image, title }: MemberCardProps) {
  return (
    <div className="group bg-asdev-gray-200 hover:bg-asdev-gray-300 rounded-xl px-2 py-6 md:px-6 flex flex-col items-center text-center w-full hover:shadow-lg transition-shadow duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-60 h-70 md:w-65 md:h-70 object-cover rounded-lg mb-4"
      />

      <h3 className="text-lg md:text-xl font-semibold">
        {name}
      </h3>

      <p className="text-sm md:text-md font-light">
        {title}
      </p>

      <div className="group flex gap-3 mt-4">
        <button className="flex gap-2 items-center justify-center px-4 py-1.5 text-sm text-asdev-white bg-asdev-violet/90
        group-hover:bg-gradient-to-r group-hover:from-asdev-blue
        group-hover:to-asdev-night rounded-md transition-all">
          <Send />
          <a href="/" rel="noopener noreferrer">Get in touch</a>
        </button>
      </div>
    </div>
  );
}
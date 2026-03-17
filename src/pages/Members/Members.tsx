import Container from "../../components/ui/Container";
import PageTitles from "../../components/ui/PageTitles";
import { } from "lucide-react";
import { alienTwins } from '../../utils/images';
import { abelHZ, eduYM, newMember,  } from "../../utils/members";
import MembersCarousel from "../../components/ui/MembersCarousel";
import HighlightText from "../../components/ui/HighlightText";

const members = [
  { name: "Eduardo", image: eduYM, title: "Co-founder" },
  { name: "Abel", image: abelHZ, title: "Co-founder" },
  { name: "Julio César", image: newMember, title: "Full Stack Dev" },
  { name: "New Joiner", image: newMember, title: "Could be you!" },
];

export default function Members() {
  return (
    <section className="py-0 flex flex-col flex-1">
      <Container className="md:items-end md:flex-row w-full">
        <PageTitles titleFirstLine="A Constellation of" titleSecondLine="Curious Creators">
          OUR MEMBERS
        </PageTitles>
        <div className="w-full flex justify-center py-10">
          <MembersCarousel members={members} />
        </div>
        <HighlightText highlight="NERDY">
          GET NERDY!
        </HighlightText>
      </Container>
      <Container className="mt-auto flex justify-center">
        <img
          src={alienTwins}
          alt="Hero"
          className="h-[30%] md:h-[90%]"
        />
      </Container>
    </section>
  );
}
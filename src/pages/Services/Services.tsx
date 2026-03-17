import Container from "../../components/ui/Container";
import ServicesTile from "../../components/ui/ServicesTile";
import PageTitles from "../../components/ui/PageTitles";
import HighlightText from "../../components/ui/HighlightText";
import { Book, BookOpenText, ChevronRight, ChevronsRight, BriefcaseBusiness, Handshake, Users, Network, ScanEye, Sparkles } from "lucide-react";
import { alienFriendly } from '../../utils/images';

export default function Services() {
  return (
    <section className="py-0">
      <Container className="flex flex-col items-center md:items-end md:flex-row">
        <div className="flex flex-col w-full md:w-1/2">
          <PageTitles titleFirstLine="What we do and" titleSecondLine="How we do it">
            OUR SERVICES
          </PageTitles>
          <div className="flex flex-col gap-3 w-full md:w-[85%] py-6">
            <ServicesTile cardIcon={Book} hoverIcon={BookOpenText} cardArrow={ChevronRight} hoverArrow={ChevronsRight}>
              Learning
            </ServicesTile>
            <ServicesTile cardIcon={BriefcaseBusiness} hoverIcon={Handshake} cardArrow={ChevronRight} hoverArrow={ChevronsRight}>
              Business
            </ServicesTile>
            <ServicesTile cardIcon={Users} hoverIcon={Network} cardArrow={ChevronRight} hoverArrow={ChevronsRight}>
              Networking
            </ServicesTile>
            <ServicesTile cardIcon={ScanEye} hoverIcon={Sparkles} cardArrow={ChevronRight} hoverArrow={ChevronsRight}>
              Innovation
            </ServicesTile>
            <p className="py-3 md:py-8 text-sm md:text-lg">A deep dive into our services and the thoughtful process we follow—laying the foundation for exceptional results and future opportunities <span className="font-semibold">starting today</span>.</p>
          </div>

        </div>
        <div className="flex justify-center w-3/4 md:w-1/2">
          <img
            src={alienFriendly}
            alt="Hero"
            className="h-[30%] md:h-[90%]"
          />
        </div>
      </Container>
      <Container>
        <HighlightText highlight="YOU">ARE YOU READY?</HighlightText>
      </Container>
    </section>
  )
}
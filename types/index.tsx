import { Building2, Calendar } from "lucide-react";

import { Users } from "lucide-react";
import Link from "next/link";
import { HandshakeIcon, MapPin } from "lucide-react";

import { Award } from "lucide-react";
import MaleAvatar from "@/app/assets/img/avatars/male.png";
import MaleAvatar2 from "@/app/assets/img/avatars/male2.png";
import FemaleAvatar from "@/app/assets/img/avatars/female1.png";
import { BallotSVG } from "@/app/assets/svg/BallotSVG";
import { VoterSVG } from "@/app/assets/svg/VoterSVG";
import { SecureSVG } from "@/app/assets/svg/SecureSVG";
import { ComplianceSVG } from "@/app/assets/svg/ComplianceSVG";
import { TabulationSVG } from "@/app/assets/svg/TabulationSVG";
import { CompletedSVG } from "@/app/assets/svg/CompletedSVG";
import ReliableSVG from "@/app/assets/svg/ReliableSVG";
import FlexibleSVG from "@/app/assets/svg/FlexibleSVG";
import AmazingSVG from "@/app/assets/svg/AmazingSVG";
import BlogImg_2 from "@/app/assets/img/election.jpg";
import BlogImg_3 from "@/app/assets/img/blog_1.jpg";
import BlogImg_4 from "@/app/assets/img/service.jpg";
import BlogImg_5 from "@/app/assets/img/blog_2.jpg";
import BlogImg_6 from "@/app/assets/img/service_2.jpg";
import BlogImg_7 from "@/app/assets/img/BlogImg_6.jpg";
import BlogImg_8 from "@/app/assets/img/BlogImg_7.jpg";
import { BuildingSVG } from "@/app/assets/svg/BuildingSVG";
import { HomeSVG } from "@/app/assets/svg/HomeSVG";
import { TownhouseSVG } from "@/app/assets/svg/TownhouseSVG";
import { CommunitySVG } from "@/app/assets/svg/CommunitySVG";
import { NetworkSVG } from "@/app/assets/svg/NetworkSVG";

export const FEATURES = [
  "Annual Meeting Elections",
  "Amendments to Governing Documents",
  "Special Assessment Approval",
  "Recall of the Board",
  "Ballot Counting Services",
];
export const FAQs = [
  {
    question: "Why is a third party Inspector Of Elections required?",
    answer: (
      <>
        As provided for in{" "}
        <Link
          href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5110"
          className="text-primary hover:underline inline-flex items-center gap-1"
          target="_blank"
        >
          Civil Code § 5110(b)
        </Link>
        , inspectors of election must be independent third parties and are
        required for certain voting matters.
      </>
    ),
  },
  {
    question: "Who can act as the IOE for our Association?",
    answer:
      "The following can all act as IOEs: A volunteer poll worker with the county registrar of voters, a licensee of the California Board of Accountancy (a CPA)a notary public, and a member of the association (who is not a member of the board of directors or a candidate for the board of directors or related to a member of the board of directors or a candidate for the board of director). The Inspector of Election will be required to perform duties per civil code.",
  },
  {
    question: "Can a Board Member or their Spouse act as and Inspector?",
    answer:
      "Unfortunately no. Per civil code: Associations may not appoint or use inspectors who are: members of the board of directors, a candidate for the board of directors, related to a member of the board of directors, or anyone under contract with the association.",
  },
  {
    question: "What does the IOE do?",
    answer: (
      <>
        Inspectors of election must perform their duties impartially, in good
        faith, to the best of their abilities, and as expeditiously as
        practical.
        <Link
          href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5110"
          className="text-primary hover:underline inline-flex items-center gap-1"
          target="_blank"
        >
          Civ. Code § 5110(d)
        </Link>
        Inspectors must perform a long list of duties as outlined in civil code.
      </>
    ),
  },
  {
    question:
      "Can the Inspector answer my questions regarding the voting procedures?",
    answer: (
      <>
        Yes, the IOE communicates with members, the Board of Directors and
        Management and can answer questions regarding the voting procedures
      </>
    ),
  },
  {
    question: "What if I lost my ballot? Can I request a new one?",
    answer: "Yes, you can contact our office to request a new ballot.",
  },
  {
    question: "How do I know if I qualify to be on the Ballot?",
    answer:
      "You can contact our office and we can provide the qualifications per your Association's election rules, or you can visit your HOA's webpage in our website to access the elections rules and review them. The election rules provide the qualifications that need to be met to be on the Ballot.",
  },
  {
    question: "Will my Candidate Application be published with the ballot?",
    answer:
      "That is up to you. You have the choice to have us include your application for review with the ballot packet.",
  },
  {
    question:
      "I want to know how many ballots have been received, can the IOE provide this to me?",
    answer: (
      <>
        Providing members with an{" "}
        <Link
          href="https://www.davis-stirling.com/HOME/Early-Ballot-Voter-Count"
          className="text-primary hover:underline inline-flex items-center gap-1"
          target="_blank"
        >
          <u>early ballot count</u>
        </Link>{" "}
        is not one of the inspector's duties.
      </>
    ),
  },
  {
    question: "Why do we have two envelopes for the ballots?",
    answer:
      "Homeowners Association voting requires a secret ballot process using double envelopes. This ensures that the voter's choices are confidential and in doing so, the voter cannot be harassed or victimized based upon the way they voted. Secret ballots must be used in: Election of Directors/Removal (Recall) of Directors, Voting regarding assessments, Amending governing documents, Granting the exclusive right to use Common Area, Anything legally requiring a vote by the governing documents",
  },
];
export const HIGHLIGHTS = [
  {
    icon: Building2,
    title: "Family Owned",
    description:
      "Founded in 2019, we're a proud family-owned and operated business.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 20 years of collective experience in HOA Management.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Serving San Diego County and surrounding areas from our Alpine location.",
  },
];

export const FEEDBACK = [
  {
    name: "Phyllis Kossars",
    role: "Board President - BVCA",
    avatar: MaleAvatar,
    description:
      "If you need an Inspector of Elections for your HOA, you must call Joshua at The Secret Ballot. His ethics and standards of doing business are meticulous and honest. With the Secret Ballot, you will never look back!",
  },
  {
    name: "Jamie Marzion, CCAM",
    role: "Walters Management",
    avatar: MaleAvatar,
    description:
      "I have worked with Josh and The Secret Ballot for 5+ years. His knowledge of election procedure, accuracy, attention to detail and communication skills are top notch. If I could get all my Boards to use Josh and The Secret Ballot, my life would be much easier!",
  },
  {
    name: "Samantha Emig, CCAM",
    role: "Professional HOA Consultants",
    avatar: FemaleAvatar,
    description:
      "Working with The Secret Ballot makes HOA elections seamless and stress-free. Their attention to detail and expertise gives me and my clients peace of mind knowing everything is handled correctly.",
  },
  {
    name: "Martha Garcia, CMCA, AMS",
    role: "The Prescott Companies",
    avatar: MaleAvatar2,
    description:
      "I have had the pleasure of working with The Secret Ballot for a few years across multiple association's that I have managed, and it has been a pleasure. Their knowledgeable guidance makes the election process seamless for managers, providing confidence and clarity every step of the way.",
  },
  {
    name: "Mary Durante – Le Leu",
    role: "Board President – SNVHOA",
    avatar: FemaleAvatar,
    description:
      "We have worked with Josh for the past five years. The Secret Ballot has handled our HOA annual election meetings, along with anything else that requires a membership vote. Josh has always been professional, and we have always been reassured about any questions that come up. Josh has done an exceptional job, going above and beyond to meet our needs. He knows the business well and has a vast knowledge of the legal system. I would trust him with any elections for our HOA. I give The Secret Ballot five stars. ⭐⭐⭐⭐⭐",
  },
  {
    name: "Gina Falcon-Heneghan, CMCA, AMS",
    role: "N. N. Jaeschke, Inc",
    avatar: FemaleAvatar,
    description:
      "The Secret Ballot has integrity and demonstrates it through upfront/honest service options (proposals), and efficient service thereafter that provides a clear path for any board. As a manager, I totally appreciate that level of service!",
  }
];

export const PARTNERSHIPS = [
  {
    icon: Award,
    title: "Industry Partners",
    description: "Members of Community Associations Institute (CAI)",
  },
  {
    icon: HandshakeIcon,
    title: "Professional Network",
    description: "California Association of Community Managers (CACM) member",
  },
  {
    icon: Calendar,
    title: "Always Current",
    description: "Regular attendance at CAI and CACM events",
  },
];

export const SERVICES = [
  {
    title: "Annual Meeting Elections",
    description:
      "Amendments to Governing Documents Managing votes on updates to Bylaws, CC&Rs, and HOA policies ",
  },
  {
    title: "Amendments to Governing Documents",
    description: "Managing votes on updates to bylaws, CC&Rs, and HOA policies",
  },
  {
    title: "Special Assessment Approval",
    description:
      "Facilitating approval processes for Special Community Assessments",
  },
  {
    title: "Approval of Increase in Assessments",
    description: "Ensuring smooth voting for Assessment rate changes",
  },
  {
    title: "Recall of the Board",
    description:
      "Organizing and overseeing the process for board member removal",
  },
];

export const POSTS = [
  {
    title: "Elections by Acclamation",
    excerpt:
      "Understanding the process and requirements for elections by acclamation in HOA governance.",
    date: "2024-02-15",
    image: BlogImg_2,
    slug: "elections-by-acclamation",
    category: "Elections",
  },
  {
    title: "SB 323 – How it changes the game",
    excerpt:
      "An analysis of SB 323 and its impact on HOA election procedures in California.",
    date: "2024-02-10",
    image: BlogImg_3,
    slug: "sb-323-changes",
    category: "Elections",
  },
  {
    title: "The Benefits of Electronic Voting",
    excerpt:
      "Exploring how electronic voting systems are transforming HOA elections.",
    date: "2024-02-05",
    image: BlogImg_4,
    slug: "electronic-voting-benefits",
    category: "Voting",
  },
  {
    title: "Common Election Mistakes to Avoid",
    excerpt: "Key pitfalls to watch out for during HOA election processes.",
    date: "2024-01-30",
    image: BlogImg_5,
    slug: "common-election-mistakes",
    category: "Elections",
  },
  {
    title: "Why Appoint an Inspector",
    excerpt:
      "Since election procedure constantly changes, its important to have an expert on your team!",
    date: "2024-02-15",
    image: BlogImg_6,
    slug: "elections-by-acclamation",
    category: "Inspector",
  },
  {
    title: "What are the benefits of Virtual Meeting?",
    excerpt:
      "Understanding Virtual Meetings requirements is key for a successful and legal Election!",
    date: "2024-02-15",
    image: BlogImg_7,
    slug: "elections-by-acclamation",
    category: "Meeting",
  },
  {
    title: "Education and Partnership Programs",
    excerpt:
      "Proud CAI & CACM Member and Sponsor!",
    date: "2024-02-15",
    image: BlogImg_8,
    slug: "elections-by-acclamation",
    category: "Education",
  },
];

export const INDUSTRY_LIST = [
  {
    name: "Condos",
    icon: <BuildingSVG />,
  },
  {
    name: "PUDs",
    icon: <HomeSVG />,
  },
  {
    name: "Townhomes",
    icon: <TownhouseSVG />,
  },
  {
    name: "Neighborhood Elections",
    icon: <CommunitySVG />,
  },
  {
    name: "Master Associations",
    icon: <NetworkSVG />,
  },
  {
    name: " Commercial CIDs",
    icon: <AmazingSVG />,
  },
];

export const SERVICES_LIST = [
  {
    title: "Ballot preparation\nand distribution",
    icon: <BallotSVG />,
    bg: "@/app/assets/img/service-img1.png",
  },
  {
    title: "Voter eligibility\nverification",
    icon: <VoterSVG />,
    bg: "@/app/assets/img/service-img2.png",
  },
  {
    title: "Secure ballot collection\nand counting",
    icon: <SecureSVG />,
    bg: "@/app/assets/img/service-img3.png",
  },
  {
    title: "Compliance with state\nlaws and association",
    icon: <ComplianceSVG />,
    bg: "@/app/assets/img/service-img4.png",
  },
  {
    title: "Results tabulation\nand reporting",
    icon: <TabulationSVG />,
    bg: "@/app/assets/img/service-img5.png",
  },
  {
    title: "Completed election\ndocumentation",
    icon: <CompletedSVG />,
    bg: "@/app/assets/img/service-img6.png",
  },
];

export const EVOTING_FEATURES = [
  {
    title: "Secure & Reliable",
    description:
      "Third-party audited security and a 100% availability guarantee for reliable elections",
    icon: <ReliableSVG />,
  },
  {
    title: "Flexible & Easy to Use",
    description:
      "Easy voting for users, with powerful and intuitive tools for administrators",
    icon: <FlexibleSVG />,
  },
  {
    title: "Amazing Service",
    description:
      "Friendly, professional support available, all year round",
    icon: <AmazingSVG />,
  },
];

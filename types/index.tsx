import { Building2, Calendar, Link } from "lucide-react";

import { Users } from "lucide-react";

import { HandshakeIcon, MapPin } from "lucide-react";

import { Award } from "lucide-react";

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
        practical. (
        <Link
          href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5110"
          className="text-primary hover:underline inline-flex items-center gap-1"
          target="_blank"
        >
          Civ. Code § 5110(d)
        </Link>
        ) Inspectors must perform a long list of duties as outlined in civil
        code.
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
      "You can contact our office and we can provide the qualifications per your Association’s election rules, or you can visit your HOA's webpage in our website to access the elections rules and review them. The election rules provide the qualifications that need to be met to be on the Ballot.",
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

import React from "react";
import Collection, {
  CollectionProps,
} from "@/app/components/collection/collection";
import classNames from "classnames";
import { oswald } from "@/app/fonts";

interface CollectionsProps {
  collections?: CollectionProps[];
}

export const defaultCollections: CollectionProps[] = [
  {
    imageSrc: "/real_estate_projects.avif",
    imageWidth: 963,
    imageHeight: 612,
    title: "Real Estate Branding & Projects",
    type: "Multimedia Design",
    description:
      "My work as a Multimedia Artist through various projects in real " +
      "estate while working at different developer and corporate branding.",
    navigateText: "View more",
    path: "/projects/real-estate",
    layout: "image-first",
  },
  {
    imageSrc: "/finance_and_e_learning_projects.avif",
    imageWidth: 946,
    imageHeight: 612,
    title: "Finance & E-Learning Projects",
    type: "Multimedia Design",
    description:
      "My work on numerous financial institution like BPI, Security Bank and BDO, partnered with E-Learning from Lamudi Academy.",
    navigateText: "Explore",
    path: "/projects/finance-and-e-learning",
    layout: "info-first",
  },
  {
    imageSrc: "/e_commerce_and_events.avif",
    imageWidth: 1008,
    imageHeight: 610,
    title: "E-commerce & Events",
    type: "Multimedia Design",
    description:
      "Working with cross functional team across Asia, See my works from Luxasia  with known brands like Marvel, Hasbro and Swisse. You can also see my works for corporate events held across the country.",
    navigateText: "Learn more",
    path: "/projects/e-commerce-and-events",
    layout: "image-first",
  },
  {
    imageSrc: "/freelance.avif",
    imageWidth: 1008,
    imageHeight: 610,
    title: "Freelance Works",
    type: "Multimedia Design",
    description:
      "From small businesses to known brands, my collection of freelance works spans on various medium that translates messages to eye-catching details.",
    navigateText: "Discover",
    path: "https://www.behance.net/joviccudia",
    layout: "info-first",
    external: true,
  },
  {
    imageSrc: "/book_illustrations.avif",
    imageWidth: 1008,
    imageHeight: 610,
    title: "Illustration and Animation",
    type: "Multimedia Design",
    description:
      "Started accepting individual commissions for book illustration and various poster visuals, now leading a team of illustrator in creating a titled comic book.",
    navigateText: "See more",
    path: "https://www.behance.net/joviccudia",
    layout: "image-first",
    external: true,
  },
];

export default function Collections({
  collections = defaultCollections,
}: CollectionsProps) {
  return (
    <div className="flex flex-col items-center bg-dark text-primary">
      <div className="flex flex-col items-center py-24 gap-24 max-w-5xl">
        <div className="flex flex-col items-center gap-8">
          <h2
            className={classNames(oswald.className, "text-7xl font-semibold")}
          >
            Collections
          </h2>
          <p className="text-3xl text-accent">• • •</p>
        </div>
        {collections.map((collection) => (
          <Collection key={collection.title} {...collection} />
        ))}
      </div>
    </div>
  );
}

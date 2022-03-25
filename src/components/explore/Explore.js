import React from "react";
import classes from "./Explore.module.css";
import SiteItem from "./exploreItem/SiteItem";
import Card from "../UI/Card";

const DUMMY_SITES = [
  {
    id: "s1",
    name: "La Sagrada Familia",
    description: "Masterpiece of Gaudi",
    country: "Spain",
  },
  {
    id: "s2",
    name: "Tate Modern",
    description: "Impressive modern art galleries.",
    country: "London",
  },
  {
    id: "s3",
    name: "Cathedral of Santa Maria del Fiore",
    description: "Greatest artistic treasures of Italy.",
    country: "Italy",
  },
];

const Explore = () => {
  const sitesList = DUMMY_SITES.map((site) => (
    <SiteItem
      key={site.id}
      name={site.name}
      description={site.description}
      country={site.country}
    />
  ));

  return (
    <section className={classes.explore}>
      <Card>
        <ul>{sitesList}</ul>
      </Card>
    </section>
  );
};
export default Explore;

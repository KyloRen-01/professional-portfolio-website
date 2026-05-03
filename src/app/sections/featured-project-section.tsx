import React from "react";
import HeroProjectsCard from "../components/feature-project-card";
import { ProjectData } from "../../lib/project-hero";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroProjectsSection = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
      <section>
        <div className="space-y-8">
          {ProjectData.map((project, index) => (
            <HeroProjectsCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              deploymentLink={project.deploymentLink}
              badges={project.badges}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href={"/projects"}>
            <Button variant="outline" className="gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroProjectsSection;

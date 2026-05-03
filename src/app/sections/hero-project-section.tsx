import React from "react";
import HeroProjectsCard from "../components/hero-project-card";
import { FeatureProjectData } from "../../lib/project-hero";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroProjectsSection = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-3xl font-semibold font-montserrat mb-4">
        Featured Projects
      </h2>
      <section>
        <div className="space-y-8">
          {FeatureProjectData.map((project, index) => (
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
          <Button
            variant="outline"
            className="bg-white text-black font-montserrat font-semibold hover:bg-gray-200"
            asChild
          >
            <Link href={"/projects"}>
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HeroProjectsSection;

import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { techstackbadges } from "../lib/skills";

interface HeroProjectsCardProps {
  title: string;
  description: string;
  image: string;

  deploymentLink?: string;
  badges?: string[];
  alt?: string;
}

const HeroProjectsCard = ({
  title,
  description,
  image,
  deploymentLink,
  alt,
  badges = [],
}: HeroProjectsCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden md:flex-row">
      <div className="relative aspect-video md:w-1/2">
        <Image
          src={image}
          alt={alt || title + " image"}
          fill
          className="object-cover md:border-r-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6 md:w-1/2">
        <div className="mb-4 flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="flex gap-2">
            {deploymentLink && (
              <Link
                href={deploymentLink || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2.5 mt-auto">
          {badges.map((badgeName, index) => {
            const matchedSkill = techstackbadges.find(
              (s) => s.name.toLowerCase() === badgeName.toLowerCase(),
            );
            return (
              <Badge
                variant="secondary"
                key={index}
                className="font-medium text-xs md:text-sm bg-slate-100 text-slate-800 hover:bg-slate-200 pointer-events-none flex items-center gap-1.5 px-3 py-1 border-none shadow-none"
              >
                {matchedSkill?.icon && (
                  <matchedSkill.icon
                    className="h-4 w-4"
                    style={{ color: matchedSkill.color }}
                  />
                )}
                {badgeName}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroProjectsCard;

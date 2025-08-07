"use client"

import {BadgeCheckIcon} from "lucide-react"
import {Badge} from "@/components/ui/badge";
import {Skeleton} from "@/components/ui/skeleton";


type TagSearchProps = {
  loading: boolean;
  projectTags: Map<string, number>;
  selectedTags: string[];
  onTagSelection(value: string): void;
}

const isSelected = (selectedTags: string[], tagName: string) => {
  return selectedTags?.filter((selectedTag) => selectedTag === tagName).length > 0;
}

const getTagTitle = (tagEntry: [string, number]) => {
  return `${tagEntry[0]} (${tagEntry[1]})`;
}

const minimumTags = (tagMap: Map<string, number>, minimumCount = 2) => {
  const tagEntries = Array.from(tagMap.entries());
  const filteredTags = tagEntries.filter((tagEntry) => tagEntry[1] >= minimumCount);

  filteredTags.sort((a, b) => a[1] > b[1] ? -1 : 1);

  return filteredTags;
}

export function TagSearch({ loading, projectTags, selectedTags, onTagSelection } : TagSearchProps) {

  return (
    <div className="flex flex-wrap">

    {
      loading ?
        (
          <div className="flex space-y-0 space-x-2">
            <Skeleton className="h-4 w-[50px]"/>
            <Skeleton className="h-4 w-[70px]"/>
            <Skeleton className="h-4 w-[80px]"/>
          </div>
        )
        : (
          minimumTags(projectTags).map((tagEntry, index) => (
            <Badge className="cursor-pointer m-1 py-1"
                   title={getTagTitle(tagEntry)}
                   key={index}
                   variant={isSelected(selectedTags, tagEntry[0]) ? 'secondary' : 'outline'}
                   onClick={() => onTagSelection(tagEntry[0])}
            >
              {
                isSelected(selectedTags, tagEntry[0]) ? (
                  <BadgeCheckIcon className="m-0 p-0"/>
                ) : null
              }
              { getTagTitle(tagEntry) }
            </Badge>
          ))
        )
    }

    </div>
  )
}

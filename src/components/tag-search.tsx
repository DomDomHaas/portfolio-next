import {BadgeCheckIcon, Tags} from "lucide-react"
import {Badge} from "@/components/ui/badge";
/*
import {Tag} from "../../types/projectTypes";
*/


type TagSearchProps = {
  projectTags: string[];
  selectedTags: string[];
  onTagSelection(value: string): void;
}

const isSelected = (selectedTags: string[], tagName: string) => {
  return selectedTags?.filter((selectedTag) => selectedTag === tagName).length > 0;
}

export function TagSearch({ projectTags, selectedTags, onTagSelection } : TagSearchProps) {

/*
  const stuff = ['vue', 'react', 'react-dom'];
*/

  return (
    <div className="flex flex-wrap">
      <Tags className="mx-1 " />

      <div >
        {
          projectTags.map(projectTag => (
            <Badge className="m-1 py-1"
                   title={projectTag}
                   key={projectTag}
                   onClick={() => onTagSelection(projectTag)}
            >
              {
                isSelected(selectedTags, projectTag) ? (
                  <BadgeCheckIcon className="m-0 p-0"/>
                ) : null
              }
              { projectTag }
            </Badge>
          ))
        }

      </div>
    </div>
  )
}

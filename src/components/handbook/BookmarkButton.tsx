import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookmarkButtonProps {
  sectionId: string;
  isBookmarked: boolean;
  onToggle: (sectionId: string) => void;
  className?: string;
}

const BookmarkButton = ({ sectionId, isBookmarked, onToggle, className }: BookmarkButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.stopPropagation();
        onToggle(sectionId);
      }}
      className={cn("h-8 w-8", className)}
      title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {isBookmarked ? (
        <BookmarkCheck className="h-4 w-4 text-primary fill-primary" />
      ) : (
        <Bookmark className="h-4 w-4" />
      )}
    </Button>
  );
};

export default BookmarkButton;

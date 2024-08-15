// components/ReviewItem.tsx

interface ReviewItemProps {
  name: string;
  rating: number;
  text: string;
}

export default function ReviewItem({ name, rating, text }: ReviewItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </span>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{rating} out of 5 stars</p>
        </div>
      </div>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}

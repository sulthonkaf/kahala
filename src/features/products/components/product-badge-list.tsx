import { Badge } from "@/core/components/ui/badge";
export function ProductBadgeList({ badges }: { badges: string[] }) { return <div className="flex flex-wrap gap-2">{badges.map((badge) => <Badge key={badge}>{badge}</Badge>)}</div>; }

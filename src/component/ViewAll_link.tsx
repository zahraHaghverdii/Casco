import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface ViewAllLinkProps {
  link: string;
  color: string;
}

export default function ViewAll_Link({ link, color }: ViewAllLinkProps) {
  return (
    <Link href={link} className="rtl flex justify-center items-center text-xl ">
      <span className={`text-(${color})`}>مشاهده همه</span>
      <span className={color ? `text-(${color})` : "text-(--color-Dark-20)"}>
        <ChevronLeft width={15} />
      </span>
    </Link>
  );
}

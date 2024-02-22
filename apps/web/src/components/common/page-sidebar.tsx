import { getAllHookList } from "@/lib/mdx";
import Link from "next/link";

export default function PageSideBar() {
  const hooks = getAllHookList();

  return (
    <aside className="w-48 px-page border-r">
      {hooks.map((hook) => (
        <div>
          <Link href={`/${hook}`}>{hook}</Link>
        </div>
      ))}
    </aside>
  );
}

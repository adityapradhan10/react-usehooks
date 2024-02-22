import { MDXRemote } from "next-mdx-remote/rsc";
import { getHook } from "@/lib/mdx";

export default function HookSlug({ params }: { params: { slug: string } }) {
  const hookSlug = params.slug;

  if (!hookSlug) return;

  const hook = getHook(hookSlug);

  return (
    <div className="flex flex-col gap-y-2">
      <MDXRemote source={hook.doc} />
      <div className="border">
        <MDXRemote source={hook.demo} />
      </div>
      <div className="border">
        <MDXRemote source={hook.code} />
      </div>
    </div>
  );
}

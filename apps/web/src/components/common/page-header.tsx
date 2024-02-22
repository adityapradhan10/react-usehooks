import Image from "next/image";

export default function PageHeader() {
  return (
    <header className="sticky top-0 w-full z-header bg-background">
      <div className="h-16 border-b px-page flex flex-row items-center">
        <div className="flex gap-x-1 items-center">
          <Image src={"/logo.webp"} alt="Logo" width={40} height={40} />
          <h1 className="text-lg font-medium">ReactUse</h1>
        </div>
      </div>
    </header>
  );
}

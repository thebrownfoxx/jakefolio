import Abstract from "@/app/components/abstract";
import Collections from "@/app/components/collection/collections";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Abstract />
      <Collections />
    </div>
  );
}

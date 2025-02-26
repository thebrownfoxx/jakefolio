import Abstract from "@/app/components/abstract";
import Collections from "@/app/components/collection/collections";
import BackgroundVideo from "@/app/components/background-video";

export default function Home() {
  return (
    <div className="static">
      <BackgroundVideo className="-z-10 fixed top-0" />
      <div className="flex flex-col">
        <Abstract />
        <Collections />
      </div>
    </div>
  );
}

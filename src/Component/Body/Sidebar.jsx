import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  Home,
  Library,
  PlaySquare,
  Repeat,
  History,
  ListVideo,
} from "lucide-react";
import React, { Children, useState } from "react";
import { Button, buttonStyles } from "../Buttons";
import { twMerge } from "tailwind-merge";
import { playlists } from "./data";
import { useSelector } from "react-redux";
import { closeNav } from "../utils/appSlice";

const Sidebar = () => {
  const isNavOpen = useSelector((store) => store.app.isNavOpen);

  if (!isNavOpen) return null;
  return (
    <>
      <aside className={` p-4 stickytop-0 z-30 flex flex-col ml-1 lg:hidden `}>
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-auto  pb-4 flex-col gap-2 px-2 hidden lg:flex">
        <LargeSidebarSection>
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSidebarItem
            isActive
            Icon={Clapperboard}
            title="Subscription"
            url="/"
          />
          <LargeSidebarItem isActive Icon={Repeat} title="Shorts" url="/" />
        </LargeSidebarSection>
        <hr />
        <h1 className="font-bold text-lg ml-2">Explore</h1>
        <LargeSidebarSection>
          <LargeSidebarItem Icon={Library} title="Library" url="/library" />
          <LargeSidebarItem Icon={History} title="History" url="/history" />
          <LargeSidebarItem
            Icon={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />

          <LargeSidebarItem
            Icon={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={2}>
          <h1 className="font-bold text-lg ml-2">Playlist</h1>
          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              Icon={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>

        <hr />
      </aside>
    </>
  );
};

function SmallSidebarItem({ Icon, title, url }) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}
function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

function LargeSidebarItem({ Icon, title, url, isActive = false }) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}

export default Sidebar;

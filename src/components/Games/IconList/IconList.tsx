import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../../hooks/useGames";
import { IconType } from "react-icons";
import React from "react";

interface Props {
  platforms: Platform[];
}

const IconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="flex gap-2 mb-3 mr-4">
      {platforms.map((platform) => (
        <div key={platform.id} className="text-base">
          {React.createElement(iconMap[platform.slug])}
        </div>
      ))}
    </div>
  );
};

export default IconList;

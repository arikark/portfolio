import Image from "next/image"

import profilePic from "../../../public/images/profile.png"

export default function Landing() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full justify-center">
        <div className="flex w-1/3 justify-center ">
          <Image
            alt="My profile picture"
            src={profilePic}
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-4 text-center font-mono">
        <text className="text-sm text-white">{"Hello, I'm Ariel Kark"}</text>
        <text className="text-sm text-white">{"I am a Software Engineer"}</text>
      </div>
    </div>
  )
}

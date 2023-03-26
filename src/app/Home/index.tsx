import profilePic from "../../../public/images/profile.png"
import Avatar from "../components/Avatar"
import SocialMediaIcons from "../components/SocialMediaIcons"

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 sm:flex-row">
      <div className="flex w-full items-center justify-center">
        <div className="flex max-w-sm justify-center">
          <Avatar src={profilePic} />
        </div>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center font-mono">
        <text className="text-base  text-white">{"Hello, I'm Ari."}</text>
        <text className="text-base  text-white">
          {"I am a frontend focused, full stack software engineer."}
        </text>
        <SocialMediaIcons />
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center rounded-md bg-blue-300 px-8 py-3 text-base font-medium hover:bg-gray-50 hover:text-gray-600"
          href="https://drive.google.com/file/d/10Q4sIT7aOteKIXFuru6QQXf83B048oMh/view?usp=sharing"
          download
        >
          Download my CV
        </a>
      </div>
    </div>
  )
}

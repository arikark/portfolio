import { type ImageProps } from "next/image"
import Image from "next/image"

export default function Avatar(props: Omit<ImageProps, "alt">) {
  return (
    <Image
      className="rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
      {...props}
      alt="Bordered avatar"
    />
  )
}

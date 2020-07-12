import LinkCard from "../components/LinkCard"
import Link from "../components/LinkBasic"

export default {
  component: LinkCard,
  title: "LinkCard",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const labelContentsData = "Email:"

export const singleLinkData = (
  <Link href="mailto:hannah@example.com">Link 1</Link>
)

export const multipleLinksData = (
  <>
    <Link href="mailto:hannah@example.com">Link 1</Link>
    {" / "}
    <Link href="mailto:hannah@example.com">Link 2</Link>
  </>
)

export const Default = () => {
  return <LinkCard labelContents={labelContentsData}>{singleLinkData}</LinkCard>
}

export const MultipleLinks = () => {
  return (
    <LinkCard labelContents={labelContentsData}>{multipleLinksData}</LinkCard>
  )
}

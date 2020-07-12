import LinkBasic from "../components/LinkBasic"

export default {
  component: LinkBasic,
  title: "LinkBasic",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return (
    <LinkBasic href="https://www.example.com">
      https://www.example.com
    </LinkBasic>
  )
}

/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "@theme-ui/components"
import HeaderTitle from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-title"
import HeaderExternalLinks from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links"


const Header = () => {

  return (
    <header sx={{ mb: [4, 5] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle /> 
        <div
          sx={{
            boxSizing: `border-box`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            mt: 1,
            color: `secondary`,
            a: { color: `secondary`, ":hover": { color: `heading` } },
            flexFlow: `wrap`,
          }}
        >
          <HeaderExternalLinks />
        </div>
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 0,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
      </div>
    </header>
  )
}

export default Header
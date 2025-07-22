import { Header, Main } from "./app-layout"
import AppHeader from "./components/app-header"
import ExtentionsHeader from "./components/extentions-header"
import HeaderTitle from "./components/header-title"
import ButtonGroup from "./components/button-group"
import ExtentionsCards from "./components/extentions-cards"
import ExtentionCard from "./components/extention-card"
import { ExtentionProvider, useExtention } from "./contexts/extention-context"

function MainContent() {
  const { filteredExtensions } = useExtention()

  return (
    <>
      <ExtentionsHeader>
        <HeaderTitle title="Extensions" />
        <ButtonGroup />
      </ExtentionsHeader>
      <ExtentionsCards>
        {filteredExtensions.map((extension) => (
          <ExtentionCard
            key={extension.id}
            extention={extension}
          />
        ))}
      </ExtentionsCards>
    </>
  )
}

function App() {
  return (
    <>
      <Header>
        <AppHeader />
      </Header>
      <Main>
        <ExtentionProvider>
          <MainContent />
        </ExtentionProvider>
      </Main>
    </>
  )
}

export default App

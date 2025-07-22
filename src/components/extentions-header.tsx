function ExtentionsHeader({children}: {children: React.ReactNode}) {
  return (
   <header className="container flex items-center justify-between mb-8 max-sm:mb-6 max-sm:flex-col max-sm:gap-6">
    {children}
   </header>
  )
}

export default ExtentionsHeader
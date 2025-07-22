 function ExtentionsCards({children}: {children: React.ReactNode}) {
  return (
    <section className="container">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {children}
        </div> 
    </section>
  )
}

export default ExtentionsCards
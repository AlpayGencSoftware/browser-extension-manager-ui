import AppLogo from './app-logo'
import ThemeToggle from './theme-toggle'

export default function AppHeader() {
  return (
    <div className='container'>
     <div className='border border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-6 py-4 bg-neutral-0 dark:bg-neutral-800 rounded-[1.25rem] shadow-sm max-sm:py-2 max-sm:px-3'>
        <AppLogo/>  
        <ThemeToggle/>    
     </div>  
    </div>
  )
}
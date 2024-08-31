import reactLogo from '../assets/react.svg'

const Logo = () => <a href="/" className="inline-flex gap-2 items-center text-2xl" aria-label="The Boards logo">
	<img src={reactLogo} alt="" role="presentation" />
	<span>Boards</span>
</a>

const Header = () => <header className="flex sticky top-0 z-11 gap-2 p-3 border-b border-slate-200 dark:border-slate-700 h-16 bg-slate-50 dark:bg-slate-800">
	<Logo />
</header>

export default Header;

import { Link } from 'react-router-dom';
import logo from '../../public/vite.svg'
import { CogIcon } from '@heroicons/react/24/solid';

const Logo = () => <a href="/" className="inline-flex gap-2 items-center text-2xl" aria-label="The Boards logo">
	<img src={logo} alt="" role="presentation" />
	<span>Boards</span>
</a>

const Header = () => <header className="flex items-center sticky top-0 z-11 gap-2 p-3 border-b border-slate-200 dark:border-slate-700 h-16 bg-slate-50 dark:bg-slate-800">
	<Logo />
	<div className="ml-auto">
		<nav>
			<ul className="flex items-center gap-4">
				<li className="inline-flex">
					<Link to="/settings" className="inline-flex gap-2 items-center">
						<CogIcon className="w-6 h-6" /> Settings
					</Link>
				</li>
			</ul>
		</nav>
	</div>
</header>

export default Header;

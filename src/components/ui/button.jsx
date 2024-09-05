import clsx from 'clsx'
import PropTypes from 'prop-types'

/**
 * @typedef ButtonProps
 * @prop {HTMLButtonElement['type']} [type]
 * @prop {'solid' | 'outline'} [theme]
 * @prop {'primary' | 'accent' | 'danger' | 'warning' | 'info'} [color]
 * @prop {'sm' | 'md' | 'lg'} [size]
 * @prop {(event: MouseEvent) => void} [onClick]
 * @prop {boolean} [disabled]
 * @prop {any} children
 */

/** @param {ButtonProps} props */
const Button = ({ disabled = false, type = 'submit', size = 'md', color = 'primary', theme = '', onClick = () => { }, children }) => {
	const classNames = {
		'py-1 px-3': size === 'sm',
		'py-2 px-6': size === 'md',
		'py-3 px-8': size === 'lg',
		'cursor-not-allowed': disabled,
		'cursor-pointer': !disabled,
		'border border-solid': true,
		'rounded-md': true,
		'transition-colors': true,
		'focus:outline outline-1 outline-offset-2': true,
		'border-green-600 outline-green-600': color === 'accent',
		'border-blue-600 outline-blue-600': color === 'primary',
		'border-yellow-600 outline-yellow-600': color === 'warning',
		'border-red-600 outline-red-600': color === 'danger',
		'border-cyan-600 outline-cyan-600': color === 'info',
		'bg-green-800 hover:bg-green-700': color === 'accent' && theme === 'solid',
		'bg-blue-800 hover:bg-blue-700': color === 'primary' && theme === 'solid',
		'bg-yellow-800 hover:bg-yellow-700': color === 'warning' && theme === 'solid',
		'bg-red-800 hover:bg-red-700': color === 'danger' && theme === 'solid',
		'bg-cyan-800 hover:bg-cyan-700': color === 'info' && theme === 'solid',
		'text-white dark:text-white': theme === 'solid',
		'text-green-400 hover:bg-green-400/10': color === 'accent' && theme === 'outline',
		'text-blue-400 hover:bg-blue-400/10': color === 'primary' && theme === 'outline',
		'text-yellow-400 hover:bg-yellow-400/10': color === 'warning' && theme === 'outline',
		'text-red-400 hover:bg-red-400/10': color === 'danger' && theme === 'outline',
		'text-cyan-400 hover:bg-cyan-400/10': color === 'info' && theme === 'outline',
	}
	return <button className={clsx(classNames)} disabled={disabled} type={type} onClick={e => onClick(e)}>{children}</button>
}

Button.propTypes = {
	type: PropTypes.oneOf(["submit", "reset", "button"]),
	onClick: PropTypes.func,
	color: PropTypes.oneOf(['primary', 'accent', 'danger', 'warning', 'info']),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	theme: PropTypes.oneOf(['solid', 'outline']),
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired
}

export default Button

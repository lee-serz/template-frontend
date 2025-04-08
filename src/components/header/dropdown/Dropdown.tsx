import Link from 'next/link'
import { useLogout } from '@/hooks/useLogout'

export const DropdownMenu = ({ onItemClick }: { onItemClick: () => void }) => {
	const { logout, isLoading } = useLogout()

	return (
		<ul className="menu menu-sm dropdown-content mt-3 z-[1] -right-4 top-14 p-2 shadow bg-base-100 rounded-box w-52">
			<li>
				<Link href="/lk/profile" className="text-base" onClick={onItemClick}>
					Профиль
				</Link>
			</li>
			<li>
				<a className="text-base" onClick={onItemClick}>
					Настройки <span className="badge text-xs">скоро</span>
				</a>
			</li>
			<li>
				<button
					className="text-base"
					onClick={() => {
						logout()
						onItemClick()
					}}
					disabled={isLoading}
				>
					{isLoading ? 'Выход...' : 'Выход'}
				</button>
			</li>
		</ul>
	)
}

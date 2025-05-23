'use client'

import { saveTokenStorage } from '@/services/auth/auth.helper'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function SocialAuthPage() {
	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')
		if (accessToken) saveTokenStorage(accessToken)

		router.replace('/')
	}, [router, searchParams])  // Добавляем зависимости

	return <div>Загрузка...</div>
}

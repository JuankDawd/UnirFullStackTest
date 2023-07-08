import { useEffect, useState } from 'react'

import { User } from '../constants'

export default () => {
	const [data, setData] = useState({})

	useEffect(() => {
		const fetchData = () => {
			try {
				const user = User
				setData({ ...user })
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])

	return { data }
}


const formatter = new Intl.NumberFormat('es-AR')
const numberToText = (value: number): string => {
	const abs = formatter.format(Math.abs(value))
	return value < 0 ? `(${abs})` : abs
}


const TextToNumber = (value: string): number => {
	const trimmed = value.trim()
	const isNegative = /^\(.*\)$/.test(trimmed)
	const normalized = trimmed
		.replace(/[()]/g, '')
		.replace(/\./g, '')
		.replace(',', '.')

	const parsed = Number.parseFloat(normalized)
	if (Number.isNaN(parsed)) return 0

	return isNegative ? -parsed : parsed
}


function numberToTextCurrency(value: number): string {
    return new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS',
		minimumFractionDigits: 0,  // <- no obliga decimales
		maximumFractionDigits: 2   // <- si vienen, los respeta
    }).format(Number(value))
}



const dateToText = (value: string): string => {
	const [year, month, day] = value.split('-').map(Number)

	const date = new Date(year, month - 1, day)

	const monthText = new Intl.DateTimeFormat('es-AR', {
		month: 'long',
	}).format(date)

	const dayText = new Intl.DateTimeFormat('es-AR', {
		day: '2-digit',
	}).format(date)

	const yearText = new Intl.DateTimeFormat('es-AR', {
		year: 'numeric',
	}).format(date)

	return `${monthText} ${dayText}, ${yearText}`
}


const capitalizeText = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const phoneToText = (phone: number | string) => {
	const digits = phone.toString().replace(/\D/g, '')
	if (!digits) return ''

	const formattedPart = digits.slice(0, 13)
	const extra = digits.slice(13)
	let base = formattedPart

	if (formattedPart.length > 4) {
		const right = formattedPart.slice(-4)
		const left = formattedPart.slice(0, -4)

		if (formattedPart.length <= 8) {
			base = `${left}-${right}`
		} else {
			const prefix = formattedPart.slice(0, -8)
			const middle = formattedPart.slice(-8, -4)

			const p3 = prefix.slice(-2)
			const p2 = prefix.slice(-3, -2)
			const p1 = prefix.slice(0, -3)

			base = [p1, p2, p3, `${middle}-${right}`]
				.filter(Boolean)
				.join(' ')
		}
	}

	return extra ? `${base}${extra}` : base
}


// ------------------- Export -------------------
const Formats = {
	numberToText,
	TextToNumber,
	numberToTextCurrency,
	dateToText,
	capitalizeText,
	phoneToText,
}
export default Formats

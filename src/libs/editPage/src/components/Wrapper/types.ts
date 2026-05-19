
type Props = {

	/**
		Children to be rendered inside the wrapper.
	*/
	children: React.ReactNode

	/**
		Function to be called when the user saves the changes.
		If the function returns false, the user will not be redirected to the previous screen.
	*/
	onSave?: (items: (string | null | Date)[]) => boolean | void | Promise<boolean | void>
}


export type Value = {
	value?: string | null | Date
	hasChanged: boolean
	isValid: boolean
}
export type Values = Record<string, Value>

export type Store = {
	values: Values
	saveEnabled: boolean
	isUniqueItem: boolean
}

export default Props
export function mapToArray(obj) {
	return Object.keys(obj).map(id => ({...obj[id], id}))
}
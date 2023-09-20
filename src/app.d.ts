// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: String
				role: String
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };

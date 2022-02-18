export interface RoleProperties {
	guest: string;
	client: string;
	delivery: string;
	all: Function;
}

export const Role: RoleProperties = {
	guest: 'guest',
	client: 'client',
	delivery: 'delivery',
	all(): string[] {
		return [this.guest, this.client, this.delivery];
	},
};

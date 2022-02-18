export const Role = {
	guest: 'guest',
	client: 'client',
	delivery: 'delivery',
	all() {
		return [this.guest, this.client, this.delivery];
	},
};

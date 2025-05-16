export class PaginationStore {
	public page = $state(1);
	public perPage = $state(25);
	public totalRecords = $state(0);
	public totalPage = $derived(Math.floor(this.totalRecords / this.perPage));
	public startIndex = $derived(this.page * this.perPage - this.perPage);
	public endIndex = $derived(this.page * this.perPage);

	constructor(perPage = 25) {
		this.perPage = perPage;
	}

	nextPage = () => {
		console.log('next target %d', this.page);

		if (this.page <= this.totalPage) {
			this.page += 1;
		}
	};

	prevPage = () => {
		console.log('prev target %d', this.page);
		if (this.page > 1) {
			this.page -= 1;
		}
	};
}

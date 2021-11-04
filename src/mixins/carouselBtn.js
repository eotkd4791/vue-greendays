import inspectedItems from '@/static/reviews.js';
import userReviews from '@/db/review.js';

export default {
	data() {
		return {
			limit: 5,
			start: 1,
			end: 5,
			maxEnd: 5,
			transformWidth: 0,
			dataStore: [],
			photoList: [],
			transformLength: 200,
		};
	},

	methods: {
		getPrevious() {
			if (this.start === 1) return;
			this.start--;
			this.end--;

			this.transformWidth += this.transformLength;

			this.$refs.listContainer.style.transition = `300ms`;
			this.$refs.listContainer.style.transform = `translate3d(${this.transformWidth}px, 0, 0)`;
		},

		getNext() {
			if (this.end === this.dataStore.length) return;
			this.start++;
			this.maxEnd = Math.max(this.maxEnd, ++this.end);

			this.transformWidth -= this.transformLength;

			this.$refs.listContainer.style.width += this.transformLength;
			this.$refs.listContainer.style.transition = `300ms`;
			this.$refs.listContainer.style.transform = `translate3d(${this.transformWidth}px, 0, 0)`;

			if (this.end === this.maxEnd) this.photoList.push(this.dataStore[this.end - 1]);
		},
	},

	created() {
		this.componentName === 'inspectionCenter' ? (this.dataStore = inspectedItems) : (this.dataStore = userReviews);
		this.photoList = this.dataStore.slice(0, 5);
	},
};

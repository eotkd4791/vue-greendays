import Bus from '@/utils/bus.js';

export default {
	watch: {
		'$route.query': function() {
			Bus.$emit('off:toolbar-modal');
		},
	},
};

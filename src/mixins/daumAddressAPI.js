export default {
	methods: {
		openAddressSearch() {
			new window.daum.Postcode({
				oncomplete: data => {
					this.userInfo.postCode = data.zonecode;
					this.userInfo.address = `${data.roadAddress} ${data.buildingName}`;
				},
				animation: true
			}).open();
		}
	}
};

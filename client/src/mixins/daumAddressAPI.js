export default {
    methods: {
        openAddressSearch() {
            new daum.Postcode({
                oncomplete: (data => {
                    this.userInfo.postCode = data.zonecode;
                    this.userInfo.address = `${data.roadAddress} ${data.buildingName}`;
                }),
                animation: true,
            }).open();
        }
    }
}
export default {
  data() {
    return {
      years: [],
    };
  },
  created() {
    let value = 2020;
    const yearArr = new Array(80).fill(0).map(v => v = value--)
    this.years = yearArr;
  }
}
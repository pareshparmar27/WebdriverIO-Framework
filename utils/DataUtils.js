class DataUtils {
  isAscending(a) {
    return a.slice(1).every((e, i) => e > a[i]);
  }
}
module.exports = new DataUtils();

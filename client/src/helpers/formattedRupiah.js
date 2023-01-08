const rupiahFormatter = (price) => {
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

export default rupiahFormatter;

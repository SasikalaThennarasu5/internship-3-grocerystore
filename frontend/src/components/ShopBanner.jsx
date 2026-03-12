function ShopBanner({ title }) {
  return (
    <div className="bg-[#f4e2c5] py-12 text-center">
      <h1 className="text-3xl font-bold uppercase">{title}</h1>
      <p className="text-gray-600">Shop / Home</p>
    </div>
  );
}

export default ShopBanner;
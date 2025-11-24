export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("product id from param: ", id);
  return <div className="p-20 text-center">This is product details page.</div>;
}

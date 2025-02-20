import ClientComponent from "./ClientComponent";

export default async function Page({ params }) {
  // asynchronous access of `params.id`.
  const { id } = await params;
  return <ClientComponent id={id} />;
}

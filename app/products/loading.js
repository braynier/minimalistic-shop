import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="grid h-screen items-center justify-center">
      <Spinner />
      <p className="text-primary-200 text-xl">Loading products...</p>
    </div>
  );
}

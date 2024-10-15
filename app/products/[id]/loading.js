import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid h-screen items-center justify-center">
      <Spinner />
      <p className="text-primary-200 text-xl">Loading product details...</p>
    </div>
  );
}

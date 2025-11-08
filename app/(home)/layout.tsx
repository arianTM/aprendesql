import Navbar from "../_components/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex flex-col p-20 gap-20 justify-center items-center-safe h-full w-full">
        {children}
      </main>
    </div>
  );
}

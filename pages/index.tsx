import Dashboard from "../sections/Dashboard/dashboard.section";

export default function Home() {
  return (
    <main className="bg-white200">
      <div className="mx-auto overflow-x-hidden p-3 pt-0 lg:p-5 2xl:max-w-screen-2xl bg-white200">
        <Dashboard />
      </div>
    </main>
  );
}

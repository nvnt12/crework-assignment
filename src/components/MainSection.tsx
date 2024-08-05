import ContentSection from "./ContentSection";

export default function MainSection() {
  return (
    <div className="w-full h-full overflow-hidden p-8 flex flex-col gap-6">
      <h1 className=" text-4xl font-semibold text-brand-secondary">
        Welcome, Navneet!
      </h1>
      <ContentSection />
    </div>
  );
}

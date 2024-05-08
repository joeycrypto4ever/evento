type SectionProps = {
  children: {
    title?: string;
    description?: string;
  };
};
export default function Section({ children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4 flex-nowrap max-w-[600px] items-center justify-center mx-auto mt-6 mb-6">
      <h1 className="text-xl font-semibold ">{children.title}</h1>
      <p className="text-center text-white/75">{children.description}</p>
    </section>
  );
}

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col min-h-screen sm:mx-12 bg-white/[2%] ">
      {children}
    </div>
  );
}

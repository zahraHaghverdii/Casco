interface Child {
  children: React.ReactNode;
}

export default function Container({ children }: Child) {
  return (
    <>
      <div
        className="w-[95%] lg:w-[900px] xl:w-[1200px] "
        style={{ margin: "auto" }}
      >
        {children}
      </div>
    </>
  );
}

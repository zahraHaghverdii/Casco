interface Child {
  children: React.ReactNode;
}

export default function Container({ children }: Child) {
  return (
    <>
      <div className=" w-[100%] lg:w-[900px] xl:w-[1200px] m-auto">
        {children}
      </div>
    </>
  );
}

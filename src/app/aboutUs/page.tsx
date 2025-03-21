import AboutUs from "./aboutUS";
export const metadata = {
  title: {
    default: "درباره ما",
    template: "لوازم دیجیتالی| %s",
  },
  description: "لوازم دیجیتالی",
};

export default function AboutUs_page() {
  return (
    <>
      <AboutUs />
    </>
  );
}

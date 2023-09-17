import SectionOne from "@/body/SectionOne";
import FooterComponent from "@/footer/FooterComponent";
import Header from "@/header/Header";

export default function Home() {
  return (
    <>
      <Header title={"Bit.Catcher"} />
      <SectionOne />
      <FooterComponent/>
    </>
  );
}

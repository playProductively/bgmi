import Banner from "./components/banners/Banner";
import BannerTwo from "./components/banners/BannerTwo";
import Slider from "./components/slider/Slider";

export default function Home() {

  return (
    <div>
      <Banner />
      <BannerTwo />
      <Slider
        slides={[
          { link: "/register/bgmi", bgLink: "bgmi.jpg", title: "BGMI" },
          { link: "/register/ff", bgLink: "ffbanner.jpg", title: "Free Fire" },
        ]}
      />
    </div>
  );
}

"use client"
import CollectionHighlight from "./new-components/CollectionHighlight";
import Countdown from "./new-components/Countdown";
import FitYouWork from "./new-components/FitYouWork";
import Hero from "./new-components/Hero";
import ShopNowPage from "./new-components/ShopNowPage";
// import ProductZoom from "./new-components/ProductZoom";
export default function Home() {
  return (
    <div className="">
      {/* <Header /> */}
      <Hero/>
      <ShopNowPage/>
      <Countdown/>
      <CollectionHighlight/>
      <FitYouWork/>
      {/* <Navbar /> */}
      {/* <ProductZoom/> */}
    </div>
  );
}

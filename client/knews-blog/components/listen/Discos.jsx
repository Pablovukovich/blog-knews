import TiltedCard from "../IU/TiltedCard";
import Link from "next/link";

export default function Discos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
     <Link href="https://open.spotify.com/intl-es/artist/250b0Wlc5Vk0CoUsaCY84M?si=dBSvE4c4SX2N3z9oqCm1OA" target="_blank" rel="noopener noreferrer">
    <TiltedCard
      imageSrc="/jennie-album.jpg"
      altText="Jennie - RUBY Album single"
      captionText="Jennie - RUBY Album single"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      colorTitle="bg-[#b41915]"
      colorAlt="bg-[#eac2a5]"
      overlayContent={<p className="tilted-card-demo-text">Jennie - RUBY</p>}
    />
    </Link>

    <Link href="https://open.spotify.com/intl-es/artist/5L1lO4eRHmJ7a0Q6csE5cT?si=FtHcLcOSSnWFPjKdHSfpjg" target="_blank" rel="noopener noreferrer">
    <TiltedCard
      imageSrc="/lisa-album.jpg"
      altText="Lisa - Alterego Album single"
      captionText="Lisa - Alterego Album single"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      colorTitle="bg-[#e4b37b]"
      colorAlt="bg-[#b58768]"
      overlayContent={<p className="tilted-card-demo-text">Lisa - ALTEREGO</p>}
    />
    </Link>

    <Link href="https://open.spotify.com/intl-es/artist/3eVa5w3URK5duf6eyVDbu9?si=e0bkhHDWSxir2tRPizcJew" target="_blank" rel="noopener noreferrer">
    <TiltedCard
      imageSrc="/rose-album.jpg"
      altText="Rose - Rosie Album single"
      captionText="Rose - Rosie Album single"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      colorTitle="bg-[#c69c85]"
      colorAlt="bg-[#b18872]"
      overlayContent={<p className="tilted-card-demo-text">Rose - ROSIE</p>}
    />
    </Link>

    <Link href="https://open.spotify.com/intl-es/artist/6UZ0ba50XreR4TM8u322gs?si=P1hrDS7ZQyeKBuT3bsYxrA" target="_blank" rel="noopener noreferrer">
    <TiltedCard
      imageSrc="/jisoo-album.jpg"
      altText="Jisoo - Amortage Album single"
      captionText="Jisoo - Amortage Album single"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      colorTitle="bg-[#6f6c80]"
      colorAlt="bg-[#7e5e5a]"
      overlayContent={<p className="tilted-card-demo-text">Jisoo - AMORTAGE</p>}
    />
    </Link>

    <Link href="https://open.spotify.com/intl-es/artist/41MozSoPIsD1dJM0CLPjZF?si=jRkxbqLoTaeaVrE5GlNKQA" target="_blank" rel="noopener noreferrer">
    <TiltedCard
      imageSrc="/blackpink-album.jpg"
      altText="Blackpink - The Albums"
      captionText="blackpink - The Albums"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      colorTitle="bg-[#806c74]"
      colorAlt="bg-[#fbecf4]"
      overlayContent={<p className="tilted-card-demo-text">BlACKPINK</p>}
    />
    </Link>
  </div>
  );
}

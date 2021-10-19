import Image from "next/image";
function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out" >
      {/*Top */}
      <div className="relative h-80 w-80 m-3">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/*Bottom */}
      <div className="text-2xl mt-3">{title}</div>
    </div>
  );
}

export default MediumCard;

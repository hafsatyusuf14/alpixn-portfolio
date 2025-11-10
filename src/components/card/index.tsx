import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  className?: string;
}

export const Card = ({ image, title, subtitle, className }: CardProps) => {
  return (
    <div
      className={` h-auto  bg-[#0b0b0b] rounded-[10px] overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col  border-[0.5px] border-[#538bc0] bg-[linear-gradient(90deg,rgba(56,158,255,1)_0%,rgba(45,111,175,1)_0%,rgba(33,62,91,1)_0%,rgba(24,24,24,1)_53%)]
 ${className || ""}`}
    >
      {/* Image Area*/}
      <div className="relative h-[200px] sm:h-[305px] w-full shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 433px"
          priority
        />
      </div>

      {/* Title & Subtitle */}
      <div className="flex flex-col flex-1 justify-center mx-2.5 sm:py-6 md:my-0">
        <div
          className="
            text-white
           
            flex flex-col justify-center
          "
        >
          <h3
            className="
              font-medium mb-2
              text-[16px] sm:text-[16px] md:text-[18px] lg:text-[24px] text-fit
            "
          >
            {title}
          </h3>
          <p
            className="
              text-gray-400 font-normal line-clamp-3
              text-[8px] sm:text-[8px] md:text-[10px] lg:text-[13px]
            "
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

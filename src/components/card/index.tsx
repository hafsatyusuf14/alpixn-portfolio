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
      className={`h-auto cursor-pointer bg-[#0b0b0b] rounded-[10px] overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col border border-[#538bc0] bg-[linear-gradient(90deg,rgba(56,158,255,1)_0%,rgba(45,111,175,1)_0%,rgba(33,62,91,1)_0%,rgba(24,24,24,1)_53%)] ${
        className || ""
      }`}
    >
      {/* Image Area */}
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
      <div className="flex flex-col flex-1 justify-center py-6 mx-2.5 sm:py-6 md:my-0">
        <div className="text-white flex flex-col justify-center">
          <h3 className="font-medium mb-2 text-lg sm:text-lg md:text-[18px] lg:text-[24px] truncate">
            {title}
          </h3>

          <p
            className="
             font-normal text-xs sm:text-xs md:text-[12px] lg:text-[13px]
              overflow-hidden text-ellipsis
              [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]
              min-h-[3.9em] leading-[1.3em]
            "
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

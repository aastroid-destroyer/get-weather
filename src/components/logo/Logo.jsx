import React from 'react';
import { CloudRain } from 'lucide-react';
import { Link } from 'react-router';

const GetWeatherLogo = ({
    className = "",
    textSize = "responsive",
    showTagline = true,
}) => {

    const textSizes = {
        sm: {
            container: "gap-2",
            iconBox: "w-9 h-9 rounded-xl",
            icon: 20,
            title: "text-lg",
            tagline: "text-[8px]",
        },
        md: {
            container: "gap-2.5",
            iconBox: "w-11 h-11 rounded-2xl",
            icon: 24,
            title: "text-2xl",
            tagline: "text-[10px]",
        },
        lg: {
            container: "gap-3",
            iconBox: "w-14 h-14 rounded-2xl",
            icon: 30,
            title: "text-4xl",
            tagline: "text-xs",
        },
        responsive: {
            container: "gap-2 sm:gap-2.5 md:gap-3",
            iconBox:
                "w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl",
            icon: 26,
            title:
                "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
            tagline:
                "text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs",
        },
    };

    const current = textSizes[textSize];

    return (
        <Link
            className={`
        inline-flex items-center
        ${current.container}
        w-fit max-w-full
        select-none
        ${className}
      `}
        >

            <div
                className={`
          relative flex items-center justify-center
          shrink-0
          ${current.iconBox}
          bg-gradient-to-br from-blue-500 via-sky-500 to-indigo-600
          shadow-lg shadow-blue-300/40
        `}
            >
                <CloudRain
                    size={current.icon}
                    className="text-white w-[55%] h-[55%]"
                    strokeWidth={2.2}
                />

                <div className="absolute top-[14%] right-[14%] w-[18%] h-[18%] rounded-full bg-blue-100 animate-pulse" />
            </div>
            <div className="flex flex-col leading-none min-w-0">
                <h1
                    className={`
            ${current.title}
            whitespace-nowrap
            tracking-tight
            flex items-center
          `}
                >
                    <span className="font-extrabold text-slate-900 dark:text-white">
                        Get
                    </span>

                    <span className="font-light text-blue-600 dark:text-blue-400">
                        Weather
                    </span>
                </h1>

                {showTagline && (
                    <span
                        className={`
              ${current.tagline}
              mt-1
              uppercase
              tracking-[0.25em]
              text-blue-500/80
              font-semibold
              whitespace-nowrap
            `}
                    >
                    </span>
                )}
            </div>
        </Link>
    );
};

export default GetWeatherLogo;
import Link from "next/link";
import React from "react";

const STYLE_GUIDE: StyleGuideSchema = {
  primary: {
    border: "rounded-lg",
    width: "border-2",
    color: "bg-primaryPurple-active",
    hover: "hover:bg-primaryPurple-hover hover:border-primaryPurple-hover",
    text: "text-white",
    borderColor: "border-primaryPurple-active",
  },
  secondary: {
    border: "rounded-lg",
    width: "border-2",
    color: "bg-primaryWhite",
    hover: "hover:bg-primaryAlabaster",
    text: "text-primaryPurple-active",
    borderColor: "border-primaryPurple-active",
  },
  warning: {
    border: "rounded-lg",
    width: "border-2",
    color: "bg-primaryWhite",
    hover: "hover:bg-primaryAlabaster",
    text: "text-red-500",
    borderColor: "border-red-500",
  },
  ghost: {
    border: "rounded-lg",
    width: "border-0",
    color: "bg-transparent",
    text: "text-primaryPurple-active",
    hover: "hover:bg-shadesPurple",
    borderColor: "",
  },
  tab: {
    border: "rounded-lg",
    width: "border-0",
    color: "",
    text: "",
    hover: "",
    borderColor: "",
  },
  submitted: {
    border: "rounded-lg",
    width: "border-2",
    color: "bg-submitted",
    hover: "",
    text: "text-white",
    borderColor: "border-submitted",
  },
  grey: {
    border: "rounded-lg",
    width: "border-0",
    color: "bg-greyPMB",
    text: "text-white",
    hover: "hover:bg-greyPMB",
    borderColor: "",
  },
  greySubmit: {
    border: "rounded-lg",
    width: "border-0",
    color: "bg-greySubmit",
    text: "text-white",
    hover: "hover:bg-greySubmit",
    borderColor: "",
  },
  warningReversed: {
    border: "rounded-lg",
    width: "border-2",
    color: "bg-red-500",
    text: "text-white",
    hover: "hover:bg-red-600",
    borderColor: "border-red-500",
  },
  accepting: {
    border: "rounded-lg",
    width: "border-2",
    color: "bg-stateSuccess",
    text: "text-whiteShades",
    hover: "hover:bg-stateSuccessHover",
    borderColor: "border-stateSuccess",
  },
};

export const DeadButton: React.FC<ButtonRistekProps> = ({
  type,
  color,
  hover,
  additionStyle,
  children,
}) => {
  return (
    <div
      className={`md:text-base text-sm ${STYLE_GUIDE[type].text} ${STYLE_GUIDE[type].borderColor} font-semibold ${STYLE_GUIDE[type].border} ${STYLE_GUIDE[type].width} ${STYLE_GUIDE[type].hover} ${STYLE_GUIDE[type].color} md:pl-6 md:pr-6 md:pt-2.5 md:pb-2.5 pr-4 pb-3 pl-4 pt-3 ${additionStyle}`}
    >
      {children}
    </div>
  );
};

export const InvButton: React.FC<InvButtonTypes> = ({
  count = 0,
  ...props
}) => {
  return (
    <Link href={props.to}>
      <div
        {...props}
        className="gap-28 cursor-pointer top-0 left-0 absolute lg:static bg-primaryWhite flex justify-between border-r-0 border-l-0 lg:border-r lg:border-l lg:rounded-lg w-full border-primaryPurple-active lg:border-grayShades lg:max-w-sm border shadow font-semibold text-sm lg:text-lg px-6 py-2.5 lg:px-8 lg:py-11 text-primaryPurple-active lg:uppercase"
      >
        <div>invitations</div>
        <div>
          <span className="mr-2 bg-secondLightBlue rounded-full px-3 py-2 font-light text-sm lg:text-base">
            {Number(count) > 9 ? "+9" : count}
          </span>
          {">"}
        </div>
      </div>
    </Link>
  );
};

const Button: React.FC<ButtonRistekProps> = ({
  type,
  color,
  hover,
  children,
  additionStyle,
  to,
  padding,
  ...props
}) => {
  if (to) {
    return (
      <Link href={to}>
        <a>
          <button
            className={`transition-all md:text-base text-sm ${
              STYLE_GUIDE[type].text
            } ${STYLE_GUIDE[type].borderColor} font-semibold ${
              STYLE_GUIDE[type].border
            } ${STYLE_GUIDE[type].width} ${STYLE_GUIDE[type].hover} ${
              STYLE_GUIDE[type].color
            } ${
              padding
                ? padding
                : "md:pl-6 md:pr-6 md:pt-4 md:pb-4 pr-4 pb-3 pl-4 pt-3"
            } ${additionStyle}`}
            {...props}
          >
            {children}
          </button>
        </a>
      </Link>
    );
  }
  return (
    <button
      className={`transition-all md:text-base text-sm flex item-center justify-center ${
        STYLE_GUIDE[type].text
      } ${STYLE_GUIDE[type].borderColor} font-semibold ${
        STYLE_GUIDE[type].border
      } ${STYLE_GUIDE[type].width} ${STYLE_GUIDE[type].hover} ${
        STYLE_GUIDE[type].color
      } ${
        padding
          ? padding
          : "md:pl-6 md:pr-6 md:pt-2.5 md:pb-2.5 pr-4 pb-3 pl-4 pt-3"
      } ${additionStyle}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

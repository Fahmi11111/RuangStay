const Title = ({
  title,
  subTitle,
  align = "center",
  font = "font-playfair",
}) => {
  const alignmentClasses =
    align === "left"
      ? "md:items-start md:text-left text-center"
      : "items-center text-center";

  return (
    <div className={`flex flex-col justify-center ${alignmentClasses}`}>
      <h1 className={`text-3xl md:text-[40px] ${font}`}>{title}</h1>

      {subTitle && (
        <p className="text-sm md:text-base text-gray-700/90 mt-2 max-w-174">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Buttons";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TRANSLATE_AMMOUNT = 200;

const ButtonList = ({ categories, selectedCategory, onSelect }) => {
  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [translate, setTranslate] = useState(0);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current === null) return;
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container === null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);
  return (
    <div
      ref={containerRef}
      className=" hidden md:block md:overflow-x-hidden relative" //overflow-x-auto no-scrollbar
    >
      <div
        className="md:flex whitespace-nowrap gap-3 transition-transform  w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelect(category)}
            variant={selectedCategory === category ? "dark" : "default"}
            className=" py-2 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 hidden md:block top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5 "
          >
            <ChevronLeft />
          </Button>
          {/* <ChevronRight /> */}
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full md:flex justify-end">
          <Button
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTranslate = translate + TRANSLATE_AMMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronRight />
          </Button>
          {/* <ChevronRight /> */}
        </div>
      )}
    </div>
  );
};

export default ButtonList;

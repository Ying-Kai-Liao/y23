import React from "react";
import { useState, useEffect, useRef } from "react";
import useWindowSize from '../../hook/useWindowSize'

const SixthComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("小資理財");

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  const size = useWindowSize()
  const isMobile = size.width <= 768;
  const items = [
    { text: '上班族怎麼資產配置', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/125177'},
    { text: '小資族怎麼減少帳單？', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/123780'},
    { text: '投資賠錢的根本解是什麼？', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/126986'},
    { text: '夫妻談錢可以不吵架！', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/124413'},
    { text: '買房、養小孩的理財術？', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/124315'},
    { text: '父母如何幫小孩保險？', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/126839'},
    { text: '我想要好好退休！該怎麼做？', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/124132'},
    { text: '長輩幾歲前要買保險？', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/126840'},
    { text: '人生藍圖帶你全面規劃退休金', url: 'https://www.moneyweekly.com.tw/ArticleData/Info/Article/123502'},
  ]

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    Array.from(container.children).forEach((child) => {
      const parentWidth = (child as HTMLElement).offsetWidth;
      const childContent = (child as HTMLElement).querySelector('.content');

      if (childContent) {
        let fontSize = 10;
        (childContent as HTMLElement).style.fontSize = `${fontSize}px`;

        while ((childContent as HTMLElement).offsetWidth < parentWidth) {
          fontSize++;
          (childContent as HTMLElement).style.fontSize = `${fontSize}px`;
        }

        if (fontSize > 10) {
          (childContent as HTMLElement).style.fontSize = `${fontSize - 1}px`; // Revert to last fitting size
        }
      }
    });
  }, [items]);

  return (
    <div id="06"
      className={`bg-local ${isMobile ? "h-[228.8vw]" : "h-[79vw]"} flex flex-col items-center justify-center`}
      style={
        isMobile
          ? { backgroundImage: "url(/image/mobile6.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
          : { backgroundImage: "url(/image/6.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
      }
    >
      <img src="/image/lil_banner5.jpg" className="max-w-[250px] md:max-w-[300px] m-6"></img>
      <span className="md:text-2xl pb-10 md:pb-20  text-white font-bold">投資理財從心開始，學習超EASY</span>
      {!isMobile
        ? (
          <div className="container max-w-[1080px] mx-auto ">
            <div className="grid grid-cols-3 bg-[#EE87AC] text-white text-xl cursor-pointer w-full mb-10">
              <div
                className={`col-span-1 text-center border-r border-white py-4 
                            ${selectedCategory === "小資理財"
                    ? "bg-white shadow-2xl text-[#EE87AC]"
                    : "hover:text-[#EE87AC] hover:bg-white hover:shadow-2xl"
                  }`}
                onClick={() => handleCategoryClick("小資理財")}
              >
                小資理財
              </div>
              <div
                className={`col-span-1 text-center border-r border-white py-4 
                            ${selectedCategory === "家庭理財"
                    ? "bg-white shadow-2xl text-[#EE87AC]"
                    : "hover:text-[#EE87AC] hover:bg-white hover:shadow-2xl"
                  }`}
                onClick={() => handleCategoryClick("家庭理財")}
              >
                家庭理財
              </div>
              <div
                className={`col-span-1 text-center py-4 
                            ${selectedCategory === "退休"
                    ? "bg-white shadow-2xl text-[#EE87AC]"
                    : "hover:text-[#EE87AC] hover:bg-white hover:shadow-2xl"
                  }`}
                onClick={() => handleCategoryClick("退休")}
              >
                退休
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-between space-x-8">
              {selectedCategory === "小資理財" && (
                <>
                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/125177"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img01.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                      <div className="bg-orange-950 text-center text-white text-2xl py-8">
                        上班族怎麼資產配置
                      </div>
                    </a>
                  </div>
                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/123780"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img02.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                    </a>
                    <div className="bg-orange-950 text-center text-white text-2xl py-8">
                      小資族怎麼減少帳單？
                    </div>
                  </div>

                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/126986"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img03.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                    </a>
                    <div className="bg-orange-950 text-center text-white text-2xl py-8">
                      投資賠錢的根本解是什麼？
                    </div>
                  </div>
                </>
              )}
              {selectedCategory === "家庭理財" && (
                <>
                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/124413"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img04.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                      <div className="bg-orange-950 text-left text-white text-2xl py-8 px-6">
                        夫妻談錢可以不吵架！情感關係必修理財課
                      </div>
                    </a>
                  </div>
                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/124315"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img05.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                    </a>
                    <div className="bg-orange-950 text-left text-white text-2xl py-8 px-6">
                      面對買房、養小孩、長照問題，怎麼理財？
                    </div>
                  </div>

                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/126839"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img06.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                    </a>
                    <div className="bg-orange-950 text-left text-white text-2xl py-8 px-6">
                      父母如何幫小孩保險？從搖籃就開始吧！
                    </div>
                  </div>
                </>
              )}
              {selectedCategory === "退休" && (
                <>
                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/124132"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img07.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                      <div className="bg-orange-950 text-left text-white text-2xl py-8 px-6">
                        我想要好好退休！該怎麼做？
                      </div>
                    </a>
                  </div>
                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/126840"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img08.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                    </a>
                    <div className="bg-orange-950 text-left text-white text-2xl py-8 px-6">
                      長輩保險全攻略，活出精彩下半場
                    </div>
                  </div>

                  <div className="border border-white">
                    <a
                      href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/123502"
                      target="_blank"
                    >
                      <img
                        src="/image/standard_post_img09.png"
                        className=""
                        alt="Small Finance"
                      ></img>
                    </a>
                    <div className="bg-orange-950 text-left text-white text-2xl py-8 px-6">
                      人生藍圖帶你全面規劃退休金
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="">
          <div className="flex flex-col space-y-5 items-centerjustify-center max-w-[300px] " ref={containerRef}>
            {items.map((item, index) => (
              <a key={index} href={item.url} className="bg-white text-xl font-medium text-center py-2 px-2">
                {item.text}
              </a>
            ))}
          </div>
          </div>
        )
      }
    </div>
  );
};

export default SixthComponent;

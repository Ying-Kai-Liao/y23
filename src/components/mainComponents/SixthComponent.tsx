import React from "react";
import { useState } from "react";

const SixthComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("小資理財");

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };
  return (
    <div
      className="bg-local h-[79vw] flex flex-col items-center justify-center"
      style={{ backgroundImage: "url(/image/6.jpg)" }}
    >
      <img src="/image/lil_banner5.jpg" className="max-w-[300px] m-6"></img>
      <span className="text-2xl pb-20">投資理財從心開始，學習超EASY</span>
      <div className="container max-w-[1080px] mx-auto ">
        <div className="grid grid-cols-3 bg-[#EE87AC] text-white text-xl cursor-pointer w-full mb-10">
          <div
            className={`col-span-1 text-center border-r border-white py-4 
                            ${
                              selectedCategory === "小資理財"
                                ? "bg-white shadow-2xl text-[#EE87AC]"
                                : "hover:text-[#EE87AC] hover:bg-white hover:shadow-2xl"
                            }`}
            onClick={() => handleCategoryClick("小資理財")}
          >
            小資理財
          </div>
          <div
            className={`col-span-1 text-center border-r border-white py-4 
                            ${
                              selectedCategory === "家庭理財"
                                ? "bg-white shadow-2xl text-[#EE87AC]"
                                : "hover:text-[#EE87AC] hover:bg-white hover:shadow-2xl"
                            }`}
            onClick={() => handleCategoryClick("家庭理財")}
          >
            家庭理財
          </div>
          <div
            className={`col-span-1 text-center py-4 
                            ${
                              selectedCategory === "退休"
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
                  href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/125177"
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
                  href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/123780"
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
                  href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/126986"
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
    </div>
  );
};

export default SixthComponent;

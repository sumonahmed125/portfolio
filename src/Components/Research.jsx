import React from "react";

function Research() {
  return (
    <div className="sm:w-[70%] mx-auto rounded-3xl bg-stone-100 mt-16 px-16 py-10 flex sm:flex-row flex-col gap-4 ">
      <div className="sm:w-[60%]">
        <h3 className="text-2xl text-blue-950 font-bold poppins-regular">
          Research Contributions
        </h3>
        <h4 className="text-base font-semibold text-gray-700 mt-3 ">
          Thesis Title: "CricBakko:A New Bangla Dataset on Bangladesh Cricket
          for Sentiment Analysis"
        </h4>
        <p className="mt-10 text-base text-gray-600 font-semibold">
          Sentiment analysis is a powerful tool for measuring public opinion on
          various topics. People Share their thoughts in different ways. One of
          the ways is to share opinions on social media, like, Facebook,
          YouTube, Twitter, Instagram, and so on. Recently, research on
          sentiment analysis has grown rapidly. In the Bengali language,
          sentiment analysis is progressing and nowadays it is considered as a
          research interest. However, there are some barriers to sentiment
          analysis in the Bengali language such as the lack of a proper
          annotated dataset, managing lexicon such as part-of-speech, etc.
          Cricket is a famous sport in the world. It is also famous in
          Bangladesh. In this thesis, we collect comments from Facebook and
          YouTube where people share their opinions and emotions about
          Bangladesh cricket and its players. To the best of our knowledge,
          there is only one dataset(ABSA[1]) available related to Bangladesh
          cricket (data collected from newspapers) and there is no dataset
          related to Bangladesh cricket that collects comments from Facebook and
          YouTube. This thesis contributes significantly to the field of
          sentiment analysis research by introducing a novel Bangla dataset
          specifically designed for the domain of Bangladesh Cricket. This
          resource offers valuable data and insights for researchers,
          practitioners, and enthusiasts seeking to analyze sentiment within the
          Bangla-speaking context.
        </p>
      </div>
      <div className="sm:block hidden">
        <div className="flex shadow-md">
          <img
            src="./images/sentiment.png"
            alt=""
            className="relative w-[200px]"
          />
          <img
            src="./images/piachart.png"
            alt=""
            className="relative w-[200px] ml-6 top-5"
          />
        </div>
        <img
          src="./images/model.png"
          alt=""
          className="relative w-[250px] z-10 -top-5 left-16"
        />
        <div className="flex ">
          <img
            src="./images/model2.png"
            alt=""
            className="relative w-[200px] -top-28 "
          />
          <img
            src="./images/sentiment.png"
            alt=""
            className="relative w-[200px] left-3 -top-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Research;

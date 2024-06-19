"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiShuffle } from "react-icons/fi";

const NINJA_API_BASEURL = "https://api.api-ninjas.com/v1";
const NINJA_API_KEY = "BEycDtgQ1ywACU5LAGyHRA==rHPilhr99fDbreI8";
const category = "birthday";

type Quote = {
  quote: string;
  author: string;
  category: string;
};

const getQuote = async () => {
  const response = await axios.get<Quote[]>(
    `${NINJA_API_BASEURL}/quotes?category=${category}`,
    {
      headers: { "x-api-key": NINJA_API_KEY },
    }
  );
  return response.data[0];
};

const Quotes: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const fetchQuote = async () => {
    try {
      const quoteData = await getQuote();
      setQuote(quoteData);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="bg-mpurple-100 p-2 rounded-3xl mt-5 w-full max-w-md ">
      <div className="bg-mpurple-50 p-2 rounded-2xl flex items-center min-h-32 justify-center text-center flex-col gap-y-4">
        {quote ? (
          <>
            <p>{quote.quote}</p>
            <i className="text-xs">~ {quote.author}</i>
          </>
        ) : (
          <p className="text-slate-500">Loading some quotes...</p>
        )}
      </div>
      <button
        onClick={() => {
          setQuote(null);
          fetchQuote();
        }}
        className="text-xs flex items-center my-3 bg-mpurple-300 text-mpurple-50 py-1 px-2 rounded-full"
      >
        Shuffle <FiShuffle />
      </button>
    </div>
  );
};

export default Quotes;

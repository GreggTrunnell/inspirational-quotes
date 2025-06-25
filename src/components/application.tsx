//TODO wait to catch up on tutorial
import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
//typescript is trying to figure out the type. We'll put in the "quote" type
//from above. So it's either in the structure of the quote type or undefined
  // const [quote, setQuote] = useState<Quote | undefined>();

//needed to change const for multiple quotes. <Quote[]> is where the type is defined
 const [quotes, setQuotes] = useState<Quote[]>([]);

//There's a button for getting quotes in quotes comp so don't need useEffect here
  // useEffect(() => {
  //   fetchRandomQuote().then(setQuote);
  // }, []);

  //in the event that quote is undefined(or falsey) the code stops at the first return statement
  // if (!quote) return <Loading />;
  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      {/* won't need InsperationalQuote anymore */}
      {/* <InspirationalQuote content={quote.content} source={quote.source} /> */}
      <Quotes>
        <div className="grid grid-cols-2 gap-4">
          {quotes.map((quote)=>{
            return (<InspirationalQuote 
              key={quote.id} 
              content={quote.content} 
              source={quote.source}/>)
          })}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;

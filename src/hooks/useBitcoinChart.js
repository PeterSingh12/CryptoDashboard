import { useEffect, useRef, useState } from "react";

export const useBitcoinChart = (days, tabIndex) => {
  const cache = useRef({});
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!days) return;

    const cacheKey = `${days}-${tabIndex}`;

    if (cache.current[cacheKey]) {
      setPrices(cache.current[cacheKey]);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=${days}`
    )
      .then((res) => res.json())
      .then((data) => {
        const result = data.prices || [];
        cache.current[cacheKey] = result;
        setPrices(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Chart fetch failed", err);
        setPrices([]);
        setLoading(false);
      });
  }, [days, tabIndex]);

  return { prices, loading };
};

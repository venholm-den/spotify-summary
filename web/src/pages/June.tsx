import MonthlySummary from "@/components/MonthlySummary";
import { useEffect, useState } from "react";

const June = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/2024-06.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="text-white p-4">Loading...</div>;

  return (
    <MonthlySummary
      month={data.month}
      year={data.year}
      averageTrackDuration={data.averageTrackDuration}
      topArtists={data.topArtists}
      topTracks={data.topTracks}
      previousMonth={{ name: "May", path: "/may" }}
      nextMonth={{ name: "July", path: "/july" }}
    />
  );
};

export default June;

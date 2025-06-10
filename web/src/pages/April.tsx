
import MonthlySummary from "@/components/MonthlySummary";

const April = () => {
  const summaryStats = {
    averageTrackDuration: "3:15",
    topArtists: ["Billie Eilish", "Lorde", "Frank Ocean", "SZA", "Tyler, The Creator"]
  };

  const topTracks = [
    {
      id: 1,
      title: "bad guy",
      artist: ["Billie Eilish"],
      album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
      duration: "3:14",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m",
      artistUrls: ["https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"]
    },
    {
      id: 2,
      title: "Green Light",
      artist: ["Lorde"],
      album: "Melodrama",
      duration: "3:56",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3ykg3hsZIN3kJp4x4i6tUX",
      artistUrls: ["https://open.spotify.com/artist/163tK9Wjr9P9DmM0AVK7lm"]
    },
    {
      id: 3,
      title: "Nights",
      artist: ["Frank Ocean"],
      album: "Blonde",
      duration: "5:07",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/7eqoqGkKwgOaWNNHx90uEZ",
      artistUrls: ["https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"]
    },
    {
      id: 4,
      title: "Good Days",
      artist: ["SZA"],
      album: "Good Days",
      duration: "4:39",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3YJJjQPAbDT7mGpX3WtQ9A",
      artistUrls: ["https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"]
    },
    {
      id: 5,
      title: "See You Again",
      artist: ["Tyler, The Creator"],
      album: "Flower Boy",
      duration: "3:00",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2nMeu6UenVvwUktBCpLMK9",
      artistUrls: ["https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"]
    }
  ];

  return (
    <MonthlySummary
      month="April"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "March", path: "/march" }}
      nextMonth={{ name: "May", path: "/may" }}
    />
  );
};

export default April;

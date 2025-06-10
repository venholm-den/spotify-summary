
import MonthlySummary from "@/components/MonthlySummary";

const October = () => {
  const summaryStats = {
    averageTrackDuration: "3:41",
    topArtists: ["Vampire Weekend", "MGMT", "Foster the People", "Two Door Cinema Club", "Phoenix"]
  };

  const topTracks = [
    {
      id: 1,
      title: "A-Punk",
      artist: ["Vampire Weekend"],
      album: "Vampire Weekend",
      duration: "2:17",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2gyxPsYlz6cgJh6IlRVjYU",
      artistUrls: ["https://open.spotify.com/artist/6FXMGgJwohJLUSr5nVlf9X"]
    },
    {
      id: 2,
      title: "Electric Feel",
      artist: ["MGMT"],
      album: "Oracular Spectacular",
      duration: "3:49",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3FtYbEfBqAlGO46NUDQSAt",
      artistUrls: ["https://open.spotify.com/artist/0SwO7SWeDHJijQ3XNS7xEE"]
    },
    {
      id: 3,
      title: "Pumped Up Kicks",
      artist: ["Foster the People"],
      album: "Torches",
      duration: "3:59",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/7w87IxuO7BDcJ3YUqCyMTT",
      artistUrls: ["https://open.spotify.com/artist/7gP3bB2nilZXLfPHJhMdvc"]
    },
    {
      id: 4,
      title: "What You Know",
      artist: ["Two Door Cinema Club"],
      album: "Tourist History",
      duration: "3:11",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/4Tt1Krh4zbkjWUwOj0wJht",
      artistUrls: ["https://open.spotify.com/artist/536BYVgOnRky0xjsPT96zl"]
    },
    {
      id: 5,
      title: "1901",
      artist: ["Phoenix"],
      album: "Wolfgang Amadeus Phoenix",
      duration: "3:13",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/5rrmaOZ2wWkONGUWzrTwNf",
      artistUrls: ["https://open.spotify.com/artist/1xU878Z1QtBldR7ru9owdU"]
    }
  ];

  return (
    <MonthlySummary
      month="October"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "September", path: "/september" }}
      nextMonth={{ name: "November", path: "/november" }}
    />
  );
};

export default October;

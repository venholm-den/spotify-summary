
import MonthlySummary from "@/components/MonthlySummary";

const June = () => {
  const summaryStats = {
    averageTrackDuration: "3:38",
    topArtists: ["Fleetwood Mac", "The Beatles", "Led Zeppelin", "Pink Floyd", "Queen"]
  };

  const topTracks = [
    {
      id: 1,
      title: "Dreams",
      artist: ["Fleetwood Mac"],
      album: "Rumours",
      duration: "4:14",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz",
      artistUrls: ["https://open.spotify.com/artist/08GQAI4eElDnROBrJRGE0X"]
    },
    {
      id: 2,
      title: "Come As You Are",
      artist: ["Nirvana"],
      album: "Nevermind",
      duration: "3:39",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2RsAajgo0g7bMCHxwH3Sk0",
      artistUrls: ["https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh"]
    },
    {
      id: 3,
      title: "Stairway to Heaven",
      artist: ["Led Zeppelin"],
      album: "Led Zeppelin IV",
      duration: "8:02",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc",
      artistUrls: ["https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp"]
    },
    {
      id: 4,
      title: "Comfortably Numb",
      artist: ["Pink Floyd"],
      album: "The Wall",
      duration: "6:24",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/4xqrdfXkTW206X9ff0Q3x8",
      artistUrls: ["https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"]
    },
    {
      id: 5,
      title: "Bohemian Rhapsody",
      artist: ["Queen"],
      album: "A Night at the Opera",
      duration: "5:55",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/4u7EnebtmKWzUH433cf5Qv",
      artistUrls: ["https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"]
    }
  ];

  return (
    <MonthlySummary
      month="June"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "May", path: "/may" }}
      nextMonth={{ name: "July", path: "/july" }}
    />
  );
};

export default June;

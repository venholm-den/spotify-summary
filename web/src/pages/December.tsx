
import MonthlySummary from "@/components/MonthlySummary";

const December = () => {
  const summaryStats = {
    averageTrackDuration: "3:29",
    topArtists: ["Mariah Carey", "Wham!", "Bing Crosby", "Michael Bublé", "Pentatonix"]
  };

  const topTracks = [
    {
      id: 1,
      title: "All I Want for Christmas Is You",
      artist: ["Mariah Carey"],
      album: "Merry Christmas",
      duration: "4:01",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn",
      artistUrls: ["https://open.spotify.com/artist/4iHNK0tOyZPYnBU7nGAgpQ"]
    },
    {
      id: 2,
      title: "Last Christmas",
      artist: ["Wham!"],
      album: "Music from the Edge of Heaven",
      duration: "4:21",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2FRnf9qhLbvw8fu4IBXx78",
      artistUrls: ["https://open.spotify.com/artist/5lpH0xAS4fVfLkACg9DAuM"]
    },
    {
      id: 3,
      title: "White Christmas",
      artist: ["Bing Crosby"],
      album: "Merry Christmas",
      duration: "3:02",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/5hslUAKq9I9CG2bAulFkHN",
      artistUrls: ["https://open.spotify.com/artist/6GbMRW8f3y7RnohOvGZbRr"]
    },
    {
      id: 4,
      title: "It's Beginning to Look a Lot Like Christmas",
      artist: ["Michael Bublé"],
      album: "Christmas",
      duration: "3:08",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/1epuOSrOfRTJJbTdHYYOJc",
      artistUrls: ["https://open.spotify.com/artist/1GxkXlMwML1oSg5eLPiAz3"]
    },
    {
      id: 5,
      title: "Mary, Did You Know?",
      artist: ["Pentatonix"],
      album: "That's Christmas to Me",
      duration: "4:32",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0VmzPFugCo6B88YhIoieKY",
      artistUrls: ["https://open.spotify.com/artist/26AHtbjWKiwYzsoGoUZtiG"]
    }
  ];

  return (
    <MonthlySummary
      month="December"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "November", path: "/november" }}
    />
  );
};

export default December;

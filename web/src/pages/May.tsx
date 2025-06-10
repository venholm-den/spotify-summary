
import MonthlySummary from "@/components/MonthlySummary";

const May = () => {
  const summaryStats = {
    averageTrackDuration: "3:52",
    topArtists: ["Kendrick Lamar", "J. Cole", "Childish Gambino", "Anderson .Paak", "JID"]
  };

  const topTracks = [
    {
      id: 1,
      title: "HUMBLE.",
      artist: ["Kendrick Lamar"],
      album: "DAMN.",
      duration: "2:57",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/7KXjTSCq5nL1LoYtL7XAwS",
      artistUrls: ["https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"]
    },
    {
      id: 2,
      title: "No Role Modelz",
      artist: ["J. Cole"],
      album: "2014 Forest Hills Drive",
      duration: "4:51",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/7lQ8MOhq6IN2w8EYcFNSUk",
      artistUrls: ["https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5"]
    },
    {
      id: 3,
      title: "Redbone",
      artist: ["Childish Gambino"],
      album: "Awaken, My Love!",
      duration: "5:26",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0wXuerDYiBnERgIpbb3JBR",
      artistUrls: ["https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL"]
    },
    {
      id: 4,
      title: "Come Down",
      artist: ["Anderson .Paak"],
      album: "Malibu",
      duration: "4:18",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2OzhQlSqBEmt7hmkYxfT6m",
      artistUrls: ["https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa"]
    },
    {
      id: 5,
      title: "Never",
      artist: ["JID"],
      album: "The Never Story",
      duration: "4:02",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/5FkoZd7ZbgzXS0Ns1zBHXE",
      artistUrls: ["https://open.spotify.com/artist/0iOIlC0n9ZiJiqTa1GMoEO"]
    }
  ];

  return (
    <MonthlySummary
      month="May"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "April", path: "/april" }}
      nextMonth={{ name: "June", path: "/june" }}
    />
  );
};

export default May;

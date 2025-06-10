
import MonthlySummary from "@/components/MonthlySummary";

const August = () => {
  const summaryStats = {
    averageTrackDuration: "3:25",
    topArtists: ["Clairo", "Boy Pablo", "Rex Orange County", "Cuco", "The Marias"]
  };

  const topTracks = [
    {
      id: 1,
      title: "Pretty Girl",
      artist: ["Clairo"],
      album: "diary 001",
      duration: "2:44",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3ClYbQNGPjOQ2qZzYh1wFb",
      artistUrls: ["https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag"]
    },
    {
      id: 2,
      title: "Everytime",
      artist: ["Boy Pablo"],
      album: "Roy Pablo",
      duration: "3:34",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0NdnJwZEaCLRl6cLVDLZcH",
      artistUrls: ["https://open.spotify.com/artist/2Lhqmvvd24VBDZ9ck3yZem"]
    },
    {
      id: 3,
      title: "Loving Is Easy",
      artist: ["Rex Orange County"],
      album: "Apricot Princess",
      duration: "2:52",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2uf0V5726jmhA3HlE6m8ry",
      artistUrls: ["https://open.spotify.com/artist/7pbDxGE6nQSZVfiFdq9lOL"]
    },
    {
      id: 4,
      title: "Lo Que Siento",
      artist: ["Cuco"],
      album: "Para Mi",
      duration: "4:10",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/6U0FIYXCQ3TGrk4bFpZ6Gv",
      artistUrls: ["https://open.spotify.com/artist/0RpddSzUHfncUWNJoGiGJr"]
    },
    {
      id: 5,
      title: "I Don't Know You",
      artist: ["The Marias"],
      album: "Superclean Vol. I",
      duration: "3:42",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
      artistUrls: ["https://open.spotify.com/artist/2sSGPLKIoODTDFQT9xvFzD"]
    }
  ];

  return (
    <MonthlySummary
      month="August"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "July", path: "/july" }}
      nextMonth={{ name: "September", path: "/september" }}
    />
  );
};

export default August;

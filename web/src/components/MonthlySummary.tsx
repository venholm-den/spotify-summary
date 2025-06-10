
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Track {
  id: number;
  title: string;
  artist: string[];
  album: string;
  duration: string;
  coverUrl: string;
  spotifyUrl: string;
  artistUrls: string[];
}

interface MonthlySummaryProps {
  month: string;
  year: string;
  averageTrackDuration: string;
  topArtists: string[];
  topTracks: Track[];
  previousMonth?: { name: string; path: string };
  nextMonth?: { name: string; path: string };
}

const MonthlySummary = ({
  month,
  year,
  averageTrackDuration,
  topArtists,
  topTracks,
  previousMonth,
  nextMonth
}: MonthlySummaryProps) => {
  return (
    <div className="min-h-screen bg-spotify-darkgray">
      {/* Header */}
      <div className="bg-gradient-to-b from-spotify-gray to-spotify-darkgray">
        <div className="container mx-auto px-4 py-6">
          <Link to="/">
            <Button 
              variant="ghost" 
              className="mb-6 text-spotify-white hover:bg-spotify-gray hover:text-spotify-green transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to summaries
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-spotify-white mb-2 animate-fade-in">
            🎧 {month} {year} Summary
          </h1>
          
          {/* Month Navigation */}
          <div className="flex justify-between items-center mt-6">
            {previousMonth ? (
              <Link to={previousMonth.path}>
                <Button variant="outline" className="bg-spotify-darkgray border-spotify-lightgray text-spotify-white hover:bg-spotify-green hover:border-spotify-green">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {previousMonth.name}
                </Button>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextMonth ? (
              <Link to={nextMonth.path}>
                <Button variant="outline" className="bg-spotify-darkgray border-spotify-lightgray text-spotify-white hover:bg-spotify-green hover:border-spotify-green">
                  {nextMonth.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Summary Stats */}
        <Card className="bg-spotify-gray border-spotify-lightgray animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-spotify-white">Summary Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-spotify-green mb-2">Average Track Duration</h3>
                <p className="text-2xl font-bold text-spotify-white">{averageTrackDuration}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-spotify-green mb-2">Top Artists</h3>
                <p className="text-spotify-white">
                  {topArtists.join(", ")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Tracks */}
        <Card className="bg-spotify-gray border-spotify-lightgray animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-spotify-white">Top Tracks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTracks.map((track) => (
                <div
                  key={track.id}
                  className="track-row flex items-center gap-4 p-3 rounded-md group"
                >
                  {/* Track Number */}
                  <div className="w-6 text-center">
                    <span className="text-spotify-lightgray font-medium">{track.id}</span>
                  </div>

                  {/* Album Cover */}
                  <img
                    src={track.coverUrl}
                    alt={`${track.album} cover`}
                    className="w-12 h-12 rounded-md shadow-lg"
                  />

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="min-w-0">
                        <a
                          href={track.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-spotify-white hover:text-spotify-green transition-colors duration-200 hover:underline font-medium text-lg block truncate"
                        >
                          {track.title}
                        </a>
                        <div className="flex flex-wrap gap-1 text-spotify-lightgray">
                          {track.artist.map((artist, index) => (
                            <span key={index}>
                              <a
                                href={track.artistUrls[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-spotify-green transition-colors duration-200 hover:underline"
                              >
                                {artist}
                              </a>
                              {index < track.artist.length - 1 && ", "}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="text-spotify-lightgray font-medium shrink-0">
                        {track.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-spotify-black border-t border-spotify-gray mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-spotify-lightgray text-sm">
            Auto-generated daily at 00:00 GMT.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MonthlySummary;

import { PlayArrow, VolumeUp } from '@mui/icons-material';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

const AudioRestoration = () => {
  const [playingBefore, setPlayingBefore] = useState(false);
  const [playingAfter, setPlayingAfter] = useState(false);

  // Placeholder audio controls - you'll need to add actual audio files
  const handlePlayBefore = () => {
    setPlayingBefore(!playingBefore);
    // Add actual audio playback logic here
  };

  const handlePlayAfter = () => {
    setPlayingAfter(!playingAfter);
    // Add actual audio playback logic here
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Audio Restoration Services
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            Listen to the difference our professional audio restoration can make
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Before Sample */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <VolumeUp className="mr-2 text-red-500" />
                <Typography
                  variant="h5"
                  component="h3"
                  className="font-semibold"
                >
                  Before Restoration
                </Typography>
              </div>

              <div className="mb-4 rounded-lg bg-red-50 p-4">
                <ul className="text-sm text-red-700">
                  <li>• Background noise and hiss</li>
                  <li>• Crackling and pops</li>
                  <li>• Muffled audio quality</li>
                  <li>• Volume inconsistencies</li>
                </ul>
              </div>

              <Box className="flex items-center justify-center rounded-lg bg-gray-100 py-8">
                <IconButton
                  onClick={handlePlayBefore}
                  className="mr-4"
                  sx={{
                    backgroundColor: playingBefore ? '#ef4444' : '#6b7280',
                  }}
                >
                  <PlayArrow className="text-white" />
                </IconButton>
                <Typography variant="body2" className="text-gray-600">
                  {playingBefore
                    ? 'Playing original audio...'
                    : 'Click to play original sample'}
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* After Sample */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <VolumeUp className="mr-2 text-green-500" />
                <Typography
                  variant="h5"
                  component="h3"
                  className="font-semibold"
                >
                  After Restoration
                </Typography>
              </div>

              <div className="mb-4 rounded-lg bg-green-50 p-4">
                <ul className="text-sm text-green-700">
                  <li>• Crystal clear audio</li>
                  <li>• Noise reduction applied</li>
                  <li>• Enhanced clarity and detail</li>
                  <li>• Consistent volume levels</li>
                </ul>
              </div>

              <Box className="flex items-center justify-center rounded-lg bg-gray-100 py-8">
                <IconButton
                  onClick={handlePlayAfter}
                  className="mr-4"
                  sx={{ backgroundColor: playingAfter ? '#22c55e' : '#6b7280' }}
                >
                  <PlayArrow className="text-white" />
                </IconButton>
                <Typography variant="body2" className="text-gray-600">
                  {playingAfter
                    ? 'Playing restored audio...'
                    : 'Click to play restored sample'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Typography variant="body1" className="text-gray-600">
            <strong>Note:</strong> Audio samples are for demonstration purposes.
            Actual results may vary depending on the condition of original
            recordings.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export { AudioRestoration };

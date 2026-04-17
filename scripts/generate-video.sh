#!/usr/bin/env bash

echo -e "\x1b[1;34mGenerating video for $1...\x1b[0m"

cd ~/Pictures/Blender_exports/$1/

convert \
  -coalesce \
  -delay 5 \
  -loop 0 \
  -dispose Background *.png \
  -fuzz 2% -transparent "#404040" \
  -layers OptimizeTransparency \
  $1.gif

# Make mp4
ffmpeg -i $1.gif $1.mp4

# Make webm
ffmpeg -i $1.gif -c vp9 -b:v 0 -crf 41 $1.webm

rm $1.gif

cd - > /dev/null

mv -f ~/Pictures/Blender_exports/$1/$1.mp4 ./public
mv -f ~/Pictures/Blender_exports/$1/$1.webm ./public

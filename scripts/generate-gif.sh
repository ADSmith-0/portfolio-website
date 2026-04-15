#!/usr/bin/env bash

echo -e "\x1b[1;34mGenerating gif for $1...\x1b[0m"

cd ~/Pictures/Blender_exports/$1/

convert \
  -coalesce \
  -delay 5 \
  -loop 0 \
  -dispose Background *.png \
  -fuzz 2% -transparent "#404040" \
  -layers OptimizeTransparency \
  $1.gif

gifsicle -O3 --colors 128 --lossy=50 $1.gif -o $1_optimised.gif

rm $1.gif

cd - > /dev/null

mv -f ~/Pictures/Blender_exports/$1/$1_optimised.gif ./public/$1.gif

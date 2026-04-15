#!/usr/bin/env bash

echo -e "\x1b[1;34mGenerating placeholder image for $1...\x1b[0m"

cd original_assets

cp -f ~/Pictures/Blender_exports/$1/0001.png ./$1.png

# Remove background
convert -dispose Background $1.png -fuzz 2% -transparent "#404040" $1_alpha.png

# Convert to webp
imagemin $1_alpha.png --plugin=webp > $1.webp

rm $1_alpha.png

mv $1.webp ../public

cd - > /dev/null

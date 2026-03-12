# Veera Handloom

## Current State
Homepage has an Instagram Gallery section showing 6 placeholder colored boxes that link to the Instagram profile. No actual reel content is shown.

## Requested Changes (Diff)

### Add
- Embed 5 actual Instagram Reels in the Instagram section using iframe embeds:
  - DVgzx0NAVFP
  - DVjLU5VDDyJ
  - DVBuS97EtZ-
  - DVp0FSCjo61
  - DVlOl8ujGf3

### Modify
- Replace the placeholder colored box grid in the Instagram Gallery section with a responsive grid of 5 embedded Instagram Reel iframes
- Update layout to suit portrait (9:16) aspect ratio of reels

### Remove
- instagramPosts placeholder array and its colored box rendering

## Implementation Plan
1. Update HomePage.tsx Instagram section: replace placeholder boxes with 5 iframe embeds using Instagram's embed URL format (`https://www.instagram.com/reel/{ID}/embed/`)
2. Use a responsive grid (2 cols mobile, 3 cols desktop) with portrait aspect ratio containers

# Videos Folder

Place your video file here when using video hero mode.

| File | Used In |
|------|---------|
| `hero.mp4` | Hero section background video |

## Switching to Video Hero

In `src/lib/config.ts`, set:
```ts
export const heroConfig = {
  type: 'video',
  ...
}
```

## Recommendations
- Format: MP4 (H.264)
- Resolution: 1920×1080
- Duration: 10–30 seconds (loops automatically)
- File size: Under 10MB for fast loading
- Content: Aerial/cinematic shots of gemstones or Jaipur

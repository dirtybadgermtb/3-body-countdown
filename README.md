# Filament Timekeeper

A countdown timer, clock, stopwatch, Pomodoro timer and Season 2 premiere countdown whose digits are drawn live as tangled strands of amber light, inspired by the countdown in *3 Body Problem*. The digits are generated every frame from the actual time values; there are no images or video.

It is a single HTML file with no dependencies, no build step to run it, no account and no backend. Open `index.html` in a browser.

## Modes

| Mode | What it does |
| --- | --- |
| Countdown | Set hours, minutes and seconds. Start, pause, resume, reset. Shows a finished state at zero. |
| Clock | Local time with seconds, 12- or 24-hour, with AM/PM in 12-hour. |
| Stopwatch | Elapsed hours, minutes and seconds, with hundredths. |
| Pomodoro | Choose work minutes, rest minutes and number of sessions. Work and rest alternate on their own; Skip jumps to the next period. |
| Season 2 | Counts down to the *3 Body Problem* Season 2 premiere on Netflix: Thursday, January 14, 2027, at 12:00 AM Pacific. |

Each mode keeps its own state, and running timers keep going while another mode is shown. Times are worked out from the system clock, so they stay correct after the tab has been in the background, and a running timer survives a reload.

## Sound

Sound is off until you turn it on. It is a low, pulsing bass drone that plays only while the timer on screen is running (Clock and Season 2 always count). **Tune sound** opens live controls for root tone, volume, sub bass, octave and fifth harmonics, warmth, pulse rate and depth, a wandering high shimmer, and a tick tuned to the drone. A few presets set everything at once. A soft bell marks the end of a countdown, each Pomodoro period and the premiere.

## Keyboard

| Key | Action |
| --- | --- |
| 1 – 5 | Countdown, Clock, Stopwatch, Pomodoro, Season 2 |
| Space | Start or pause |
| R | Reset |
| F | Full screen |
| M | Sound on or off |
| Esc | Close the sound controls or leave full screen |

## Editing

`page.html` is the source. `index.html` is the same page wrapped in a full HTML document so it opens on its own. After editing `page.html`, rebuild with:

```bash
node build.mjs
```

The premiere date is one line in `page.html`: the `SEASON2` constant. Netflix announced the date but not the time of day; 12:00 AM Pacific is Netflix's usual release time.

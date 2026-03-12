# MyProfile Screen — V1 → V2 Change Log (Dev Handoff)

---

## 1. App Header
| | V1 | V2 |
|---|---|---|
| Header | Full native header bar (logo, bell, Reddit icon, coin balance) | Replaced with a single `mobile-header.png` image asset |

---

## 2. Top Navigation / Tab Bar
| | V1 | V2 |
|---|---|---|
| Tabs | "Your Profile" / "0 Following" pill switcher at the very top | **Removed.** Following is now a stat value in the Stats Row |

---

## 3. Avatar & Identity Block
| | V1 | V2 |
|---|---|---|
| Avatar ring | Plain circle, no border | Gradient ring: `#0083ff → #b42ef9 → #ffbe4e` |
| Name placement | Centered, below avatar | Left-aligned, inline with badge |
| Creator badge | Not shown | Inline pill next to name: `🏆 Top Creator` (gold tint, `#f4da5c`) |
| Bio | Not shown on profile | Shown truncated to 3 lines, inline below name. "Read more" opens a full BioSheet bottom drawer |
| Edit Profile button | Pill button with pencil icon + "Edit profile" label | Icon-only button (pencil SVG), no border, no background |
| Share button | Separate circle icon button | Icon-only button, same row as Edit + 3-dot menu |
| Menu / overflow | Not present | New 3-dot vertical ⋮ icon button → opens MenuSheet (Settings, Logout) |

---

## 4. Rank Banner *(new)*
- New component below header image, above avatar section
- Shows: `#12 in Today's Top Creators` with a shimmer/pulse animation on the rank badge
- Animated: `rankShimmer` sweep + `rankPulse` glow

---

## 5. Stats Row *(new)*
- 4 stats in a horizontal divided row: **Followers · Chats · Views · Following**
- Each stat shows: large value + label + trend % + directional arrow (↑/↓) + mini sparkline
- **Tooltip**: clicking the trend number + arrow shows "Updated weekly" popover (auto-dismisses after 2s). Only stats with a trend value have this. Following has no tooltip.
- **Followers** and **Following** value + label are tappable → opens Social View
- Replaces the old plain "0 Followers" text label

---

## 6. Followers & Following Social View *(new — replaces modal sheets)*
- Slides in from the right **within the content area only** — header and bottom nav stay fixed
- Slides out to the right on close (back button or swipe)
- Swipe from left edge (< 32px) + drag > 80px triggers close
- **Back button**: thin `←` arrow + "Profile" label, `fontWeight: 500`, no divider below
- **Two tabs**: Followers · `3.2k` / Following · `284` — underline style matching Characters/Stories tab bar
- Tab counts use real stat values from the profile
- **Followers tab**: "Follow back" CTA (dark: `rgba(255,255,255,0.06)` bg, white border, white text) → tap → "Following" (80% white fill, `#4a3ec6` text)
- **Following tab**: "Following" CTA (80% white fill, `#4a3ec6` text) → tap → "Follow" (dark style)
- CTA fixed width `112px` so text change doesn't shift layout
- CTA has `transition` on background/color for smooth state change
- Toggle state persists while view is open
- Empty state shown if list is empty (person icon + label)
- Row tap area has pointer cursor (profile navigation intent)

---

## 7. Active Persona Card
| | V1 | V2 |
|---|---|---|
| Layout | Full-width card, image on the left side, text right | Same horizontal layout but image is absolutely positioned, content defines card height |
| Label | "ACTIVE PERSONA" text pill button | `Label.png` image asset (height: 17px) |
| Section header | "CHAT PERSONAS" all-caps label above card | **Removed.** Card has no section header |
| Dismiss | Not present | × button (top-right) — dismisses card and shows an "Equip a persona" empty state placeholder |

---

## 8. Content Tabs
| | V1 | V2 |
|---|---|---|
| Tab labels | "MY CHARACTERS" all-caps section header (not a real tab) | Tab bar: **Characters** / **Stories** (underline active indicator, `#4a3ec6`) |
| "+ Create Character" | Link shown top-right of section | **Removed** |

---

## 9. Characters Grid
| | V1 | V2 |
|---|---|---|
| Card layout | Image + name + "X Chats" + "#XXXXX Rank" | Image (9:16 aspect ratio) + name + chat count + rank number + trend arrow (↑/↓ with color) |
| Tag badges | Not present | Colored tag pills top-left: 💬 Chat Leader / ❤️ Fan Fave / ⭐ Featured / 📈 Trending |
| 3-dot menu | Not present | Button top-right of card → opens CharacterMenuSheet (bottom drawer with actions) |
| Long-press | Not present | Long-press (500ms) also triggers the character menu sheet |
| Top gradient scrim | Not present | Dark gradient at top of card image for dot menu visibility |

---

## 10. Stories Tab *(new)*
Full vertical feed of story cards, each containing:
- **4:3 image** with top gradient scrim
- Character **avatar + name** overlaid top-left
- **Chat** pill button overlaid top-right
- **Action bar**: Like (toggleable, count), Comment (count), Share, **"Enter This Story"** CTA (`#4a3ec6` pill), 3-dot more
- **Caption** text below
- **Date + time** stamp
- Not present in V1 at all

---

## 11. Bottom Sheet Modals *(all new)*
All sheets: `slideUp` animation, drag-to-dismiss (swipe down >80px), backdrop tap to close.

| Sheet | Trigger | Contents |
|---|---|---|
| **BioSheet** | "Read more" in bio | Full bio text, scrollable, fade gradient |
| **BadgesSheet** | *(wired, not yet triggered from UI)* | 4-column emoji badge grid, tap badge for detail popover |
| **MenuSheet** | 3-dot menu button | Settings + Logout options |
| **LogoutConfirmSheet** | Logout in MenuSheet | Confirm/cancel logout |
| **CharacterMenuSheet** | 3-dot on character card | Character actions list |

---

## 12. "My Cards" Section
- Present in V1 (visible at bottom of scroll)
- **Removed** in V2

---

## 13. Bottom Navigation
| | V1 | V2 |
|---|---|---|
| Nav bar | Native component (Stories, Explore, Create, Chats, Profile) | `App Footer 2.png` image asset with blur backdrop (`backdrop-filter: blur(20px)`) |

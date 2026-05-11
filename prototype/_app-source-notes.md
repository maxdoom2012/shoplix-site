# Shoplix App — реальні віджети (з shoplix_app/lib)

Конспект для побудови faithful моків на лендінгу. Не розхідник.

## ItemCard (`presentation/widgets/item_card.dart`)
Це центральний контрол. Структура:

```
[ThemedCard rounded, surfaceContainer @ 0.98, тонкий gradient overlay primary @ 0.08]
  Row, height ~itemHeight, по handedness:
    [Claim zone, ~38px]   [Body]   [Badge cluster]   [Buy zone, ~56px]
    (left-handed flips: buyZone → ліворуч)
  + 3px secondary accent bar зліва, якщо unseen
```

**Claim zone:**
- Не claimed → person icon (primary @ 0.88)
- Claimed → AvatarImage `fill: true` — заповнює всю зону, з borderRadius лише по зовнішньому кутку картки
- Completed → buyer's avatar (static, fill)
- Ghost (deleted) → deleter's avatar OR person fallback

**Buy zone:**
- Default → cart icon (primary), animated tap
- Completed → check icon (success @ 0.95)
- Selection mode → animated checkbox (square / check_square)
- Ghost → trash icon (error @ 0.7)

**Body:**
- Optional thumbnail 28×28, BorderRadius 4
- Name: `bodyLarge`, weight 600, scale by contentSize. Completed → 50% opacity, NO strikethrough
- Optional note: `labelMedium`, 12px, onSurfaceVariant

**Badges (price + quantity stacked):**
- ВАЖЛИВО: **transparent fill + primary @ 0.5 outline** + primary @ 0.94 text
- Padding 8h × 3v, rounded `counterRadius`
- Price = `totalCost` (не raw price). Quantity з unit label.
- IntrinsicWidth робить обидва однакової ширини.

**Card backgrounds:**
- Default: `surfaceContainer @ 0.98`
- Completed: `surfaceContainerLow @ 0.96`
- Highlighted (scroll-to): `primaryContainer @ 0.42`

## QuantityChips (`widgets/quantity_chips.dart`)
- Horizontal scroll FilterChips
- Selected: `primaryContainer` fill, **bold** label, `onPrimaryContainer` color
- Не selected: M3 default outlined chip
- Tap selected → increment by `unit.increment`
- Long-press → reset
- Units depend on metric/imperial system

## AutofillMarker (`widgets/autofill_marker.dart`)
- `Icons.auto_awesome` (sparkle), 12px, primary tint
- Positioned: top:0, bottom:0, right:`-iconSize/2` (half-off the right edge)
- Opacity-based show/hide (зберігає focus у TextField)

## ParticipantsRow (`widgets/participants_row.dart`)
- Overlapping circles, default avatar 32px, overlap 8px
- Border 2px `colorScheme.surface` (white halo)
- Owner avatar має badge
- "+N" pill: `surfaceContainerHighest`, 10px radius, labelSmall 700

## OfflineBanner (`widgets/offline_banner.dart`)
- `ThemedCard surfaceLevel: level3`, padding 16h × 8v
- Centered Row: icon (16-18px) + text (13px, weight 600)
- 3 стани (priority): offline (cloud_off, error) > server unavailable (cloud_off, error) > syncing (sync_problem, neutral)
- Slide+Fade transition

## Color System (`core/theme/app_colors.dart`)
**3 semantic accent zones**, кожна як `AppColors` ThemeExtension:
- `listAccent` / `listAccentContainer` / `onListAccent` / `onListAccentContainer`
- `templateAccent` / ...
- `recipeAccent` / ...

`ColorScheme.primary` дорівнює active zone accent. Тобто:
- На List screens primary = list color
- На Template screens primary = template color
- На Recipe screens primary = recipe color

## List Skins (`core/constants/list_skin_presets.dart`)
**Кожен список має свій скін** — gradient background + border. Не темна chrome!

Standard:
| code | emoji | light gradient |
|---|---|---|
| ocean | 🌊 | #0288D1 (blue) |
| sunset | 🌅 | #E65100 (orange→pink) |
| forest | 🌲 | #388E3C (green) |
| night | 🌙 | #1A237E (indigo) |
| berry | 🫐 | #7B1FA2 (purple) |
| pastel | 🌸 | #F48FB1 (pink) |
| elegant | 🖤 | #455A64 (slate) |

Animated: christmas_animated (❄️ + ⭐), valentine_animated (💝), confetti (🎊⭐).
Кожен має light+dark variants для gradient/border/accent + optional animated particles.

## App Theme (`core/theme/app_theme.dart`)
- **DARK by default.** `ColorScheme.fromSeed(brightness: Brightness.dark)`.
- `scaffoldBackground` = `colorScheme.surface` (dark)
- ItemCard uses `surfaceContainer` (~slightly lighter than scaffold)
- ListSkin gradients overlay on top — використовуються `darkGradientStart/End` (з alpha ~0x18-0x28, тобто ледь помітні tints)
- AppColors zones map to: List = primary, Template = tertiary, Recipe = secondary

## **КРИТИЧНІ ВИСНОВКИ для лендінгу**

1. **Додаток темний** — мої dark navy mocks концептуально вірні. Але треба перевірити точні відтінки surface vs мої.
2. **Badges = transparent + outline**, НЕ filled cyan чіп.
3. **Avatar в claim zone = full-fill всієї зони**, не маленький aватарчик на бекграунді.
4. **Per-list color skin** — ключова фіча яку я НЕ показую: візуальна персоналізація списку через 10+ скінів (включно з анімованими).
5. **3 кольорові зони** (List/Template/Recipe) — додаток поліхромний по контексту, НЕ моноакцентний.
6. **Sparkle marker** — `auto_awesome` half-off правого краю поля. Я малюю як inline label — не точно.

## Price History Chart (`statistics/widgets/price_history_chart.dart`)
**ЦЕ BAR CHART, НЕ LINE!** Я малював лінію з градієнтом — це невірно.
- Vertical bars, одна на покупку
- Color: `primary` якщо ≤ avg, `error` (red) якщо > avg
- Top-corners radius 3, прямі знизу
- Y-axis sticky 52px зліва, scroll-bars справа horizontal
- 5 gridlines + tick labels (tabular figures, outlineVariant)
- Date labels (DateFormat.MMMd) під вибірковими барами
- **Summary stats row** зверху (4 tiles): Lowest (green.shade700) / Average (default) / Last (primary) / Highest (error)
- Selected bar → 2px onSurface outline
- Empty state: "Need 2+ purchases" message

## Quantity Chips — РЕАЛЬНИЙ набір
- **Metric**: pieces, liters, kilograms, grams, packs (5 chips)
- **Imperial**: pieces, fl_oz, pounds, ounces, packs (5 chips)
- Default label (unselected): `${increment.display} ${unit.label}` →
  - "1 pcs", "0.5 L", "0.5 kg", "100 g", "1 packs"
- Selected: `${value} ${unit}` (e.g. "200 g", "1.5 L")
- Tap selected → +increment; long-press → reset
- Я малював довільні "1 / 2 / 3 / 500g / 1kg / 1L / 2L" — це не існує в продукті

## Unseen highlight (з item_card.dart)
- 3px secondary accent bar по лівому краю картки (Positioned, ColoredBox)
- + slide-in animation 300ms easeOutCubic 20px from below
- + fade

## TODO для моків v3
- [ ] Перейти з navy mocks → light surface з skin gradient
- [ ] Outline badges замість filled chips
- [ ] Full-fill avatar в claim zone
- [ ] Показати ListSkin variety (мінімум 2-3 скіни як приклад)
- [ ] Sparkle на правому краю поля, не inline
- [ ] List/Template/Recipe color zones — кольорова диференціація розділів додатку

// Animated phone demo: Shoplix list with items getting bought / claimed in real-time.
// Used in hero variants 1 and 3.

const { useState, useEffect, useRef } = React;

// ── Animated list demo ────────────────────────────
function PhoneListDemo({ variant = 'household', accent = '#2F6BFF', dark = false }) {
  const [items, setItems] = useState(() => seedItems(variant));
  const [tick, setTick] = useState(0);
  const timersRef = useRef([]);

  useEffect(() => {
    setItems(seedItems(variant));
  }, [variant]);

  useEffect(() => {
    // Drive a slow autonomous demo: claim → bought → ghost → re-add
    const t1 = setInterval(() => setTick(t => t + 1), 2200);
    timersRef.current.push(t1);
    return () => timersRef.current.forEach(clearInterval);
  }, []);

  useEffect(() => {
    setItems(prev => stepItems(prev, tick, variant));
  }, [tick, variant]);

  const visible = items.filter(i => i.state !== 'gone');

  return (
    <div className="pd-screen" style={{ background: dark ? '#0E1420' : '#F6F8FB' }}>
      {/* status bar */}
      <div className="pd-status" style={{ color: dark ? '#fff' : '#0F172A' }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <i className="ph-fill ph-cell-signal-high" style={{ fontSize: 12 }} />
          <i className="ph-fill ph-wifi-high" style={{ fontSize: 12 }} />
          <i className="ph-fill ph-battery-high" style={{ fontSize: 14 }} />
        </div>
      </div>

      {/* list header */}
      <div className="pd-header" style={{ borderColor: dark ? '#1E2638' : '#E8EDF5' }}>
        <div>
          <div className="pd-title" style={{ color: dark ? '#fff' : '#0F172A' }}>
            {variant === 'event' ? 'Anna’s Birthday' : 'Weekly groceries'}
          </div>
          <div className="pd-sub" style={{ color: dark ? '#94A3B8' : '#64748B' }}>
            {variant === 'event' ? 'Saturday · 6 going' : '4 members · live'}
          </div>
        </div>
        <div className="pd-avatars">
          {['#F59E0B','#22C55E','#A855F7','#EC4899'].map((c,i) => (
            <div key={i} className="pd-avatar" style={{ background: c, zIndex: 4-i, marginLeft: i ? -8 : 0 }}>
              {['M','D','S','A'][i]}
            </div>
          ))}
        </div>
      </div>

      {/* items */}
      <div className="pd-items">
        {visible.map((item, idx) => (
          <ListItem key={item.id} item={item} accent={accent} dark={dark} idx={idx} />
        ))}
      </div>

      {/* input bar */}
      <div className="pd-input" style={{
        background: dark ? '#162033' : '#fff',
        borderColor: dark ? '#1E2638' : '#E8EDF5',
        color: dark ? '#94A3B8' : '#94A3B8',
      }}>
        <i className="ph ph-plus" style={{ fontSize: 16 }} />
        <span>Add item…</span>
        <div className="pd-input-btn" style={{ background: accent }}>
          <i className="ph-bold ph-microphone" style={{ fontSize: 14, color: '#fff' }} />
        </div>
      </div>
    </div>
  );
}

function ListItem({ item, accent, dark, idx }) {
  const isBought = item.state === 'bought';
  const isClaimed = item.state === 'claimed';
  const isGhost = item.state === 'ghost';

  return (
    <div
      className="pd-item"
      style={{
        background: dark ? '#162033' : '#fff',
        borderColor: dark ? '#1E2638' : '#EEF2F8',
        opacity: isGhost ? 0.4 : 1,
        transform: isGhost ? 'translateX(8px)' : 'translateX(0)',
        animation: `pdSlideIn 0.4s ease ${idx * 0.04}s backwards`,
      }}
    >
      <div className="pd-check"
        style={{
          background: isBought ? accent : 'transparent',
          borderColor: isBought ? accent : (dark ? '#3A4760' : '#CBD5E1'),
        }}>
        {isBought && <i className="ph-bold ph-check" style={{ color: '#fff', fontSize: 11 }} />}
      </div>
      <div className="pd-item-main">
        <div className="pd-item-name" style={{
          color: dark ? '#fff' : '#0F172A',
          textDecoration: isBought || isGhost ? 'line-through' : 'none',
          opacity: isBought ? 0.5 : 1,
        }}>
          {item.name}
        </div>
        {item.qty && <div className="pd-item-qty" style={{ color: dark ? '#64748B' : '#94A3B8' }}>{item.qty}</div>}
      </div>
      {isClaimed && (
        <div className="pd-claim" style={{ background: item.byColor }}>
          {item.by}
        </div>
      )}
      {isBought && (
        <div className="pd-by" style={{ color: dark ? '#64748B' : '#94A3B8' }}>
          by {item.by}
        </div>
      )}
      {isGhost && (
        <i className="ph-fill ph-ghost" style={{ color: dark ? '#64748B' : '#CBD5E1', fontSize: 14 }} />
      )}
    </div>
  );
}

// ── seed + stepper ────────────────────────────────
function seedItems(variant) {
  if (variant === 'event') {
    return [
      { id: 1, name: 'Birthday cake', qty: '1', state: 'claimed', by: 'M', byColor: '#F59E0B' },
      { id: 2, name: 'Champagne', qty: '2 bottles', state: 'claimed', by: 'D', byColor: '#22C55E' },
      { id: 3, name: 'Candles', qty: '30', state: 'open' },
      { id: 4, name: 'Balloons', qty: 'pack', state: 'bought', by: 'S', byColor: '#A855F7' },
      { id: 5, name: 'Paper plates', qty: '', state: 'open' },
      { id: 6, name: 'Ice', qty: '2 bags', state: 'open' },
    ];
  }
  return [
    { id: 1, name: 'Sourdough bread', qty: '1', state: 'open' },
    { id: 2, name: 'Avocados', qty: '4', state: 'claimed', by: 'M', byColor: '#F59E0B' },
    { id: 3, name: 'Oat milk', qty: '2L', state: 'bought', by: 'D', byColor: '#22C55E' },
    { id: 4, name: 'Greek yogurt', qty: '500g', state: 'open' },
    { id: 5, name: 'Cherry tomatoes', qty: '', state: 'open' },
    { id: 6, name: 'Pasta', qty: '2', state: 'open' },
  ];
}

function stepItems(items, tick, variant) {
  // Round-robin: pick next 'open' item, advance through claimed → bought → ghost → out
  // Also progress claimed→bought, ghost→gone
  let next = items.map(i => {
    if (i.state === 'ghost') return { ...i, state: 'gone' };
    return i;
  });

  // Find candidate to advance
  const advanceIdx = tick % items.length;
  const target = next[advanceIdx];
  if (target && target.state === 'open') {
    const palette = [
      { by: 'M', byColor: '#F59E0B' },
      { by: 'D', byColor: '#22C55E' },
      { by: 'S', byColor: '#A855F7' },
      { by: 'A', byColor: '#EC4899' },
    ];
    const p = palette[tick % palette.length];
    next[advanceIdx] = { ...target, state: 'claimed', by: p.by, byColor: p.byColor };
  } else if (target && target.state === 'claimed') {
    next[advanceIdx] = { ...target, state: 'bought' };
  } else if (target && target.state === 'bought' && variant === 'household') {
    next[advanceIdx] = { ...target, state: 'ghost' };
  }

  // After enough cycles, reseed
  if (next.every(i => i.state === 'gone' || i.state === 'bought')) {
    return seedItems(variant);
  }
  return next;
}

window.PhoneListDemo = PhoneListDemo;

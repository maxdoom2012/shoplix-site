// Reusable Android-style phone frame for real screenshots.
// Screen images are 540x1125 (status bar already cropped). The frame itself adds
// a 12px black bezel + rounded corners + soft shadow + optional float animation.
//
// Usage:
//   <PhoneFrame src="assets/screens/home-list.png" size="lg" tilt="-2deg" />
//   sizes: sm (180w), md (240w), lg (300w), xl (340w)

function PhoneFrame({ src, alt = '', size = 'md', tilt = '0deg', float = false, className = '', children }) {
  const widths = { sm: 180, md: 240, lg: 300, xl: 340 };
  const w = widths[size] || widths.md;
  const h = Math.round(w * (1125 / 540) + 24); // image aspect + bezel

  return (
    <div
      className={`pf-wrap ${float ? 'pf-float' : ''} ${className}`}
      style={{ width: w + 'px', transform: `rotate(${tilt})` }}
    >
      <div className="pf-frame" style={{ width: w + 'px', height: h + 'px' }}>
        <div className="pf-pinhole" />
        <div className="pf-screen">
          <img src={src} alt={alt} className="pf-img" loading="lazy" />
          {children}
        </div>
      </div>
    </div>
  );
}

window.PhoneFrame = PhoneFrame;

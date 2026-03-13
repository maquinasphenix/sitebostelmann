export function LeafPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-10"
      >
        <path
          d="M100 20C100 20 140 60 140 100C140 140 100 180 100 180C100 180 60 140 60 100C60 60 100 20 100 20Z"
          fill="currentColor"
        />
        <path
          d="M100 40C100 40 120 70 120 100C120 130 100 160 100 160"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export function CirclePattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-10"
      >
        <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="2" />
        <circle cx="150" cy="150" r="70" stroke="currentColor" strokeWidth="2" />
        <circle cx="150" cy="150" r="40" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function DotsPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-10"
      >
        {[...Array(5)].map((_, i) =>
          [...Array(5)].map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={10 + i * 20}
              cy={10 + j * 20}
              r="2"
              fill="currentColor"
            />
          ))
        )}
      </svg>
    </div>
  );
}

export function WavePattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none w-full ${className}`}>
      <svg
        width="100%"
        height="100"
        viewBox="0 0 1200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="opacity-10"
      >
        <path
          d="M0,50 Q300,10 600,50 T1200,50"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M0,70 Q300,30 600,70 T1200,70"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function FloralCorner({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        {/* Eucalyptus leaves */}
        <path
          d="M10 10 Q20 15 25 25 L30 35 Q32 40 28 45"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="18" cy="20" rx="4" ry="6" fill="currentColor" opacity="0.3" transform="rotate(-30 18 20)" />
        <ellipse cx="25" cy="28" rx="4" ry="6" fill="currentColor" opacity="0.3" transform="rotate(-20 25 28)" />
        <ellipse cx="28" cy="38" rx="4" ry="6" fill="currentColor" opacity="0.3" transform="rotate(-10 28 38)" />
        
        {/* Small flowers */}
        <circle cx="45" cy="15" r="5" fill="currentColor" opacity="0.25" />
        <circle cx="42" cy="13" r="2" fill="currentColor" opacity="0.15" />
        <circle cx="48" cy="13" r="2" fill="currentColor" opacity="0.15" />
        <circle cx="42" cy="17" r="2" fill="currentColor" opacity="0.15" />
        <circle cx="48" cy="17" r="2" fill="currentColor" opacity="0.15" />
        
        <circle cx="15" cy="50" r="4" fill="currentColor" opacity="0.25" />
        <circle cx="13" cy="48" r="1.5" fill="currentColor" opacity="0.15" />
        <circle cx="17" cy="48" r="1.5" fill="currentColor" opacity="0.15" />
        <circle cx="13" cy="52" r="1.5" fill="currentColor" opacity="0.15" />
        <circle cx="17" cy="52" r="1.5" fill="currentColor" opacity="0.15" />
      </svg>
    </div>
  );
}

export function BranchPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-8"
      >
        <path
          d="M125 50 L125 200 M125 80 Q140 90 155 85 M125 100 Q110 110 95 105 M125 130 Q145 140 165 135 M125 160 Q105 170 85 165"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <ellipse cx="155" cy="85" rx="8" ry="12" fill="currentColor" opacity="0.4" />
        <ellipse cx="95" cy="105" rx="8" ry="12" fill="currentColor" opacity="0.4" />
        <ellipse cx="165" cy="135" rx="8" ry="12" fill="currentColor" opacity="0.4" />
        <ellipse cx="85" cy="165" rx="8" ry="12" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
}

export function FloralDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <svg
        width="300"
        height="60"
        viewBox="0 0 300 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto opacity-30"
      >
        {/* Center flower */}
        <circle cx="150" cy="30" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="145" cy="26" r="4" fill="currentColor" opacity="0.2" />
        <circle cx="155" cy="26" r="4" fill="currentColor" opacity="0.2" />
        <circle cx="145" cy="34" r="4" fill="currentColor" opacity="0.2" />
        <circle cx="155" cy="34" r="4" fill="currentColor" opacity="0.2" />
        <circle cx="150" cy="30" r="3" fill="currentColor" opacity="0.4" />
        
        {/* Left vine */}
        <path
          d="M150 30 Q120 28 90 30"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse cx="110" cy="28" rx="4" ry="6" fill="currentColor" opacity="0.25" transform="rotate(-20 110 28)" />
        <ellipse cx="130" cy="29" rx="3" ry="5" fill="currentColor" opacity="0.25" transform="rotate(-10 130 29)" />
        
        {/* Right vine */}
        <path
          d="M150 30 Q180 28 210 30"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse cx="190" cy="28" rx="4" ry="6" fill="currentColor" opacity="0.25" transform="rotate(20 190 28)" />
        <ellipse cx="170" cy="29" rx="3" ry="5" fill="currentColor" opacity="0.25" transform="rotate(10 170 29)" />
        
        {/* Decorative dots */}
        <circle cx="75" cy="30" r="2" fill="currentColor" opacity="0.25" />
        <circle cx="225" cy="30" r="2" fill="currentColor" opacity="0.25" />
      </svg>
    </div>
  );
}

export function FloralWreath({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-15"
      >
        {/* Circular vine */}
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        
        {/* Flowers around circle - top */}
        <circle cx="100" cy="20" r="6" fill="currentColor" opacity="0.25" />
        <circle cx="97" cy="18" r="2.5" fill="currentColor" opacity="0.15" />
        <circle cx="103" cy="18" r="2.5" fill="currentColor" opacity="0.15" />
        
        {/* right */}
        <circle cx="180" cy="100" r="6" fill="currentColor" opacity="0.25" />
        <circle cx="178" cy="97" r="2.5" fill="currentColor" opacity="0.15" />
        <circle cx="178" cy="103" r="2.5" fill="currentColor" opacity="0.15" />
        
        {/* bottom */}
        <circle cx="100" cy="180" r="6" fill="currentColor" opacity="0.25" />
        <circle cx="97" cy="182" r="2.5" fill="currentColor" opacity="0.15" />
        <circle cx="103" cy="182" r="2.5" fill="currentColor" opacity="0.15" />
        
        {/* left */}
        <circle cx="20" cy="100" r="6" fill="currentColor" opacity="0.25" />
        <circle cx="22" cy="97" r="2.5" fill="currentColor" opacity="0.15" />
        <circle cx="22" cy="103" r="2.5" fill="currentColor" opacity="0.15" />
        
        {/* Leaves around */}
        <ellipse cx="140" cy="40" rx="6" ry="10" fill="currentColor" opacity="0.2" transform="rotate(45 140 40)" />
        <ellipse cx="160" cy="60" rx="6" ry="10" fill="currentColor" opacity="0.2" transform="rotate(60 160 60)" />
        <ellipse cx="160" cy="140" rx="6" ry="10" fill="currentColor" opacity="0.2" transform="rotate(120 160 140)" />
        <ellipse cx="140" cy="160" rx="6" ry="10" fill="currentColor" opacity="0.2" transform="rotate(135 140 160)" />
        <ellipse cx="60" cy="160" rx="6" ry="10" fill="currentColor" opacity="0.2" transform="rotate(-135 60 160)" />
        <ellipse cx="40" cy="140" rx="6" ry="10" fill="currentColor" opacity="0.2" transform="rotate(-120 40 140)" />
        <ellipse cx="40" cy="60" rx="6" ry="10" fill="currentColor" opacity="0.2" transform="rotate(-60 40 60)" />
        <ellipse cx="60" cy="40" rx="6" ry="10" fill="currentColor" opacity="0.2" transform="rotate(-45 60 40)" />
      </svg>
    </div>
  );
}

export function DelicateFlower({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        {/* Flower petals */}
        <circle cx="40" cy="40" r="12" fill="currentColor" opacity="0.2" />
        <circle cx="35" cy="32" r="8" fill="currentColor" opacity="0.15" />
        <circle cx="45" cy="32" r="8" fill="currentColor" opacity="0.15" />
        <circle cx="50" cy="40" r="8" fill="currentColor" opacity="0.15" />
        <circle cx="45" cy="48" r="8" fill="currentColor" opacity="0.15" />
        <circle cx="35" cy="48" r="8" fill="currentColor" opacity="0.15" />
        <circle cx="30" cy="40" r="8" fill="currentColor" opacity="0.15" />
        
        {/* Center */}
        <circle cx="40" cy="40" r="5" fill="currentColor" opacity="0.35" />
        
        {/* Stem */}
        <path d="M40 45 Q42 55 40 65" stroke="currentColor" strokeWidth="2" opacity="0.25" />
        
        {/* Leaves */}
        <ellipse cx="35" cy="55" rx="5" ry="8" fill="currentColor" opacity="0.2" transform="rotate(-30 35 55)" />
        <ellipse cx="45" cy="58" rx="5" ry="8" fill="currentColor" opacity="0.2" transform="rotate(30 45 58)" />
      </svg>
    </div>
  );
}
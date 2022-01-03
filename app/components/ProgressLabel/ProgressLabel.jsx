import PropTypes from 'prop-types';
import React from 'react';

function getPoint(r, degree, size, trackWidth) {
  const d = (degree / 180) * Math.PI;

  return {
    x: r * Math.sin(d) + size / 2,
    y: trackWidth / 2 + r * (1 - Math.cos(d)),
  };
}

function getPath(progress, r, startDegree, size, trackWidth, s, e) {
  let progressPath = null;
  if (progress < 50) {
    progressPath = `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}`;
  } else {
    const m = getPoint(r, startDegree + 180, size, trackWidth);
    progressPath = `M ${s.x} ${s.y} A ${r} ${r}, 0, 0, 1, ${m.x},${m.y}
        M ${m.x} ${m.y} A ${r} ${r}, 0, 0, 1, ${e.x},${e.y}`;
  }

  return progressPath;
}

function getCorners(
  progress,
  s,
  e,
  width,
  color,
  showFirstCorner,
  showLastCorner,
) {
  if (progress <= 0) return null;

  return (
    <>
      {showFirstCorner && <circle cx={s.x} cy={s.y} r={width} fill={color} />}
      {showLastCorner && <circle cx={e.x} cy={e.y} r={width} fill={color} />}
    </>
  );
}

const ProgressLabel = ({
  progress,
  progressWidth,
  progressColor,
  progressSecondary,
  progressSecondaryColor,
  trackWidth,
  cornersWidth,
  fillColor,
  trackColor,
  startDegree,
  size,
  children,
  text,
  textColor,
  fontSize,
  ...props
}) => {
  const r = size / 2 - trackWidth / 2;
  const endDegree = startDegree + (progress * 360) / 100;
  const s = getPoint(r, startDegree, size, trackWidth);
  const e = getPoint(r, endDegree, size, trackWidth);

  const endSecondaryDegree = startDegree + (progressSecondary * 360) / 100;
  const ss = getPoint(r, startDegree, size, trackWidth);
  const es = getPoint(r, endSecondaryDegree, size, trackWidth);

  const progressPath = getPath(
    progress,
    r,
    startDegree,
    size,
    trackWidth,
    s,
    e,
  );
  const progressSecondaryPath = getPath(
    progressSecondary,
    r,
    startDegree,
    size,
    trackWidth,
    ss,
    es,
  );

  const progressStyle = {
    strokeWidth: progressWidth,
    stroke: progressColor,
    fill: 'none',
  };

  const progressSecondaryStyle = {
    strokeWidth: progressWidth,
    stroke: progressSecondaryColor,
    fill: 'none',
  };

  const trackStyle = {
    fill: fillColor,
    stroke: trackColor,
    strokeWidth: trackWidth,
  };

  return (
    <svg {...props} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} style={trackStyle} />
      {progressSecondary > 0 ? (
        <path d={progressSecondaryPath} style={progressSecondaryStyle} />
      ) : null}
      {progress > 0 ? <path d={progressPath} style={progressStyle} /> : null}
      {getCorners(progress, s, e, cornersWidth, progressColor, true, true)}
      {getCorners(
        progressSecondary,
        ss,
        es,
        cornersWidth,
        progressSecondaryColor,
        false,
        progressSecondary > progress,
      )}
      {text && (
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke={textColor}
          fill={textColor}
          strokeWidth="0.1px"
          fontSize={fontSize}
          dy=".3em"
        >
          {text}
        </text>
      )}
      {children}
    </svg>
  );
};

ProgressLabel.propTypes = {
  progress: PropTypes.number,
  progressWidth: PropTypes.number,
  progressColor: PropTypes.string,
  progressSecondary: PropTypes.number,
  progressSecondaryColor: PropTypes.string,
  trackWidth: PropTypes.number,
  cornersWidth: PropTypes.number,
  fillColor: PropTypes.string,
  trackColor: PropTypes.string,
  startDegree: PropTypes.number,
  size: PropTypes.number,
  children: PropTypes.node,
  fontSize: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  textColor: PropTypes.string,
};

ProgressLabel.defaultProps = {
  startDegree: 0,
  progress: 0,
  progressSecondary: 0,
  progressWidth: 5,
  trackWidth: 20,
  cornersWidth: 10,
  size: 200,
  text: '',
  textColor: '#f5a623',
  fontSize: 12,
  fillColor: '#ffffff00',
  trackColor: '#e0e6f2',
  progressColor: '#f5a623',
  progressSecondaryColor: '#7B7B7B',
  children: '',
};

export default ProgressLabel;

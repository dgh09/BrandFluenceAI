import React from 'react';
import styles from './RangeSlider.module.css';

interface RangeSliderProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
  step?: number;
  formatValue?: (value: number) => string;
  label?: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
  step = 1,
  formatValue = (v) => v.toString(),
  label
}) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseFloat(e.target.value);
    if (newMin <= value.max) {
      onChange({ min: newMin, max: value.max });
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseFloat(e.target.value);
    if (newMax >= value.min) {
      onChange({ min: value.min, max: newMax });
    }
  };

  // Calculate percentage for the fill bar
  const minPercent = ((value.min - min) / (max - min)) * 100;
  const maxPercent = ((value.max - min) / (max - min)) * 100;

  return (
    <div className={styles.rangeSlider}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.values}>
        <span className={styles.value}>{formatValue(value.min)}</span>
        <span className={styles.separator}>-</span>
        <span className={styles.value}>{formatValue(value.max)}</span>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          <div
            className={styles.sliderRange}
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`
            }}
          />
        </div>

        <input
          type="range"
          min={min}
          max={max}
          value={value.min}
          step={step}
          onChange={handleMinChange}
          className={`${styles.slider} ${styles.sliderMin}`}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={value.max}
          step={step}
          onChange={handleMaxChange}
          className={`${styles.slider} ${styles.sliderMax}`}
        />
      </div>
    </div>
  );
};

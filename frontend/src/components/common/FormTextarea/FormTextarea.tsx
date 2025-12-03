import React from 'react';
import styles from './FormTextarea.module.css';

interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  rows?: number;
  maxLength?: number;
  showCounter?: boolean;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
  rows = 4,
  maxLength,
  showCounter = false
}) => {
  return (
    <div className={styles.formGroup}>
      <div className={styles.labelRow}>
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
        {showCounter && maxLength && (
          <span className={styles.counter}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        className={`${styles.textarea} ${error ? styles.textareaError : ''}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

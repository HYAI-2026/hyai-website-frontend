import { useState } from 'react'
import styles from '../../assets/styles/ActivityInfoTooltip.module.css'

type ActivityInfoTooltipProps = {
  description: string
  label: string
}

export default function ActivityInfoTooltip({ description, label }: ActivityInfoTooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <span
      className={styles.wrap}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={styles.button}
        aria-label={`${label} 설명`}
        aria-expanded={open}
      >
        ?
      </button>
      {open && (
        <span className={styles.tooltip} role="tooltip">
          {description}
        </span>
      )}
    </span>
  )
}

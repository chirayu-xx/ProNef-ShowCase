import React from 'react'
import styles from '../styles/Global'
const Button = ({assestUrl,link}) => {
  return (
    <div className={`${styles.btnBlack}`}
    onClick={() => window.open(link, "_blank")}
    >
      <img src={assestUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className='flex flex-col justify-start ml-4'>
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-normal text-sm`}>Expo store</p>
      </div>
    </div>
  )
}

export default Button
import { useState } from "react";
import styles from "./_remocon.module.scss";
const Remocon = () => {
  const [visible, setVisible] = useState(false);

  const customize = () => {
    setVisible(!visible);
    console.log(visible);
  }

  return (
    <div>
      
      <div onClick={customize}> 
        +
        <div className={visible ? styles.visible : styles.hidden}>
            까꿍!
        </div>
      </div>
    </div>
  )
}

export default Remocon
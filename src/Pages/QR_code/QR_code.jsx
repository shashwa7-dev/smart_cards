import React, { useContext, useEffect } from "react";
import Card from "../../Layouts/Layout";
//QR CODE GENERATOR
import QRCode from "react-qr-code";
import { AuthContext } from "../../Helper/Context";
import styles from "./QR_code.module.scss";
export default function QR_code() {
  const { user } = useContext(AuthContext);

  return (
    <Card>
      <div className={styles.container}>
        <h1>
          Scan this QR code
          <br /> to save my profile!
        </h1>
              <div className={styles.qr_code}>
          <QRCode value={`https://fir-9-be.web.app/profile/${user.uid}`} />
        </div>
        <p>
          Please use in built device QR code <br />
          scanner to read the card.
        </p>
      </div>
    </Card>
  );
}

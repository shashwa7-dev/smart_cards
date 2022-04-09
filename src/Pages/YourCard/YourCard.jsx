import React, { useContext, useEffect } from "react";
import styles from "./YourCard.module.scss";
import { AuthContext } from "../../Helper/Context";
import Card from "../../Layouts/Layout";

import { barcode_icon, editIcon, share_icon } from "../../assets/getAssests";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { useNavigate } from "react-router-dom";

export default function YourCard() {
  const navigate = useNavigate();
  const { user, card, fetchCard } = useContext(AuthContext);
  useEffect(() => {
    console.log("card", card);
    fetchCard(user?.uid);
  }, [user]);

  return (
    <Card>
      <div className={styles.container}>
        <ProfileCard card={card} />

        <div className={styles.btns}>
          <button
            className={styles.shareCardBtn}
            onClick={() => navigate("/share-profile")}
          >
            <img src={share_icon} alt="savecard_icon" />
            <span>Share</span>
          </button>
          <button
            className={styles.editCardBtn}
            onClick={() => navigate("/create-card")}
          >
            <img src={editIcon} alt="savecard_icon" />
            <span>Edit Card</span>
          </button>
        </div>
      </div>
    </Card>
  );
}

import styles from "./AskToContact.module.css";

const AskToContact = (props) => {
  return (
    <div className={styles.ask_to_contact_container}>
      <div className={styles.ask_to_contact_content_container}>
        <p className={styles.ask_to_contact_content_title}>{props.title}</p>
        <p className={styles.ask_to_contact_content_description}>
          {props.description}
        </p>
      </div>
      <button type="button" className={styles.ask_to_contact_content_button}>
        Get in touch
      </button>
    </div>
  );
};

export default AskToContact;

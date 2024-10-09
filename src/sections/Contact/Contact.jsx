import styles from "./ContactStyles.module.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xgvewlog");
  if (state.succeeded) {
    return (
      <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <p className={styles.successMessage}>Obrigado por entrar em contato!</p>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contato</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Seu Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Escreva sua mensagem aqui..."
            required
          ></textarea>
        </div>
        <div className="formGroup">
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;

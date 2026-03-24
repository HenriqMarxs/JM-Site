import "./style.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Fale Conosco!</h2>
      <div className="underline"></div>

      <form className="contact-form">
        <div className="row">
          <div className="input-group">
            <label>Nome*</label>
            <input type="text" required />
          </div>

          <div className="input-group">
            <label>E-mail*</label>
            <input type="email" required />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label>Empresa*</label>
            <input type="text" required />
          </div>

          <div className="input-group">
            <label>WhatsApp*</label>
            <input type="text" required />
          </div>
        </div>

        <div className="input-group full">
          <label>Mensagem*</label>
          <textarea rows={5} required></textarea>
        </div>

        <button type="submit">Enviar Mensagem</button>
      </form>

      <p className="contact-footer">
        Você pode nos comunicar como achar melhor, vamos procurar atendê-lo com eficiência!
        Seja Whatsapp, Telefone ou Email!
      </p>
    </section>
  );
};

export default Contact;
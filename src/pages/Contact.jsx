function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <textarea placeholder="Your message" required></textarea><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;


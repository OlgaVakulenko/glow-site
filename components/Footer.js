import { useState } from 'react';
import FormSuccess from './FormSuccess';

export default function Footer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
    };

    fetch('/contact.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsSuccess(true);
      });
  };

  if (isSuccess) {
    return <FormSuccess />;
  }

  return (
    <div>
      I&apos;m footer {name} {phone}
      <form method="POST" action="/contact.php" onSubmit={onSubmit}>
        <input
          className="border"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border"
          type="phonenumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

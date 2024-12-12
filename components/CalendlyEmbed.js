import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

const CalendlyEmbed = ({
  text = 'Book a free call',
  url = 'https://calendly.com/stas-kovalsky/meet',
  classNames,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <PopupButton
      url={url}
      rootElement={document.getElementById('__next')}
      text={text}
      className={classNames}
    />
  );
};

export default CalendlyEmbed;

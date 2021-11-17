const mobileListener = () => {
  const flipbookContentRef = document.querySelector('.js-flipbook-content');
  const flipbookSize = flipbookContentRef.getBoundingClientRect();
  // eslint-disable-next-line no-undef
  $('.flipbook').turn('size', '200vw', flipbookSize.height);
};

const handleSetDigitFormat = (digit) => ((String(digit).length === 1) ? `0${digit}` : digit);

const counterListener = (stringDate = '2040-01-13 15:30:00') => {
  const dateTarget = new Date(stringDate);
  // DOM REFERENCES
  const DOMSeconds = document.querySelector('.js-seconds');
  const DOMMinutes = document.querySelector('.js-minutes');
  const DOMHours = document.querySelector('.js-hours');
  const DOMDays = document.querySelector('.js-days');
  // TIME REFERENCES
  const milisecondsInASecond = 1000;
  const milisecondsInAMinute = milisecondsInASecond * 60;
  const milisecondsInAHour = milisecondsInAMinute * 60;
  const milisecondsInADay = milisecondsInAHour * 24;
  const processReference = () => {
    const now = new Date();
    const remainingTime = dateTarget - now;
    DOMDays.textContent = handleSetDigitFormat(
      Math.floor(remainingTime / milisecondsInADay),
    );
    DOMHours.textContent = handleSetDigitFormat(
      Math.floor((remainingTime % milisecondsInADay) / milisecondsInAHour),
    );
    DOMMinutes.textContent = handleSetDigitFormat(
      Math.floor((remainingTime % milisecondsInAHour) / milisecondsInAMinute),
    );
    DOMSeconds.textContent = handleSetDigitFormat(
      Math.floor((remainingTime % milisecondsInAMinute) / milisecondsInASecond),
    );
  };
  setInterval(processReference, milisecondsInASecond);
};

export {
  mobileListener,
  counterListener,
};

const capturingQueryParam = async () => {
  const queryParam = window.location.search;
  const urlParam = new URLSearchParams(queryParam);
  const code = urlParam.get('code');
  if (code) {
    try {
      let parsedData;
      if (!sessionStorage.getItem('WEDDING_QR_CODE')) {
        const rawData = await fetch(`http://134.122.124.135:2000/api/v1/wedding/invitation/${code}`);
        parsedData = await rawData.json();
        if (parsedData.length === 0) throw new Error();
        else sessionStorage.setItem('WEDDING_QR_CODE', JSON.stringify(parsedData));
      } else {
        const sessionData = sessionStorage.getItem('WEDDING_QR_CODE');
        parsedData = JSON.parse(sessionData);
      }
      return new Promise((resolve) => setTimeout(resolve, 1000, parsedData));
    } catch (_) {
      return new Promise((resolve) => setTimeout(resolve, 2000, false));
    }
  } else return new Promise((resolve) => setTimeout(resolve, 2000, false));
};

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

const hideLoaderListener = (callback) => {
  // animate__slow: 1s SPEED TIME
  document.querySelector('.js-loader').classList.add('animate__fadeOutDown');
  setTimeout(callback, 300);
};

const renderQRCode = (qrCodeRef) => {
  if (qrCodeRef) {
    document.querySelector('.js-qr-code').setAttribute('src', qrCodeRef[0].url);
    document.querySelector('.js-qr-passes').textContent = `Pases: ${qrCodeRef[0].passes}`;
    setTimeout(() => {
      document.querySelector('.js-qr-loader').classList.add('is-hidden');
      document.querySelector('.js-qr-code').classList.remove('is-hidden');
      document.querySelector('.js-qr-passes').classList.remove('is-hidden');
    }, 1000);
  } else document.querySelector('.js-qr-loader').classList.add('is-hidden');
};

export {
  capturingQueryParam,
  mobileListener,
  counterListener,
  hideLoaderListener,
  renderQRCode,
};

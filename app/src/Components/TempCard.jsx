import React from "react";

function TempCard({ city, temp, pressure, humidity }) {
  return (
    <div
      className="main-card"
      style={{
        background: `url(https://thumbs.gfycat.com/CharmingFairDungenesscrab-size_restricted.gif)`,
        backgroundSize: "440px 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>{city}</h1>
      <h1>{temp} °C</h1>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEmUlEQVRoge2YTWhcVRiG33NnkkySmaQMESVJq6VpEhMQK1OtVLMJihubZqEgolYFpSgoY2gRFNxUNMW6KXQjrsSFf0yqdOPCjYQiVYoQi/RnoKaNglUnTZN25p7vdZHMvXfu3L/JzOhmPrjMe38O93nv+b7vHAZoRSta0YpW1BGqloc5j3TpBvaLYB80RqkxSA1AsEgT52jipEnktjyNv5vEWxWRDHAenWYJWSnhEDV6oAE6DmiApnVegMZsqoAPVRZrTeYPN8Dv0V8ykaOJ3RasP7x9X9RZucWp9Gu4/L8Z4HcYNBVOi4mBmuC1Kp8vas09fVlcaZYBwxd+Hp0lhbk64EETg8pUufw7SPznBswiZmjivjrgy/czqTheb5YBzxTiPNLFVeQjFGwYfPl+oW2N27e81/ju5DkDpVVMNxAe1OgtGphqNLyvAdF4vIHw5a60rxkGPFPo5imcp8ZQrfBGzzDiO6YRG5yAkR6B6uoDEQPXrkGuXVyN3fnwu6T+IpFI/NpUA2tf4zo1klHhVc8Y2h88gvj2xwBlgAQAYuPH1pbkKdMwDqc6OhaaYmA1t24gHF4hfs8baHvgbSDWAdCB6qNpuyoJ+Vaqu/uoUopVEBEj7nVRNK4qjeFAeIkhPnEc8dEDEBAQ8QPd0OvntDyxDcT7hes3Rki+pJTSDTOgNH6hieGgtDHuPwJj5FmISBnTE9QFDceklJ298M/ycgFAdjMGPFNo5VM8T42PfXN+637EHv2kVlBL20MqaqNIsARgEcBPBHO3pdM5pVSxZgOFz5BWq7gEjV43PNAJ44kzQHLrBkMlXDh0aG049UWhOtR/e99XfgY814HeJ/EXNGY9+/zOZyBdAxARaBGI67CvsUK7n7Ofdd6r1FpkB0V/eWXpj6MkPVk9awAAUgaOFYpqmhoZZzfC0FOgEM42Ga3zrF/0TTlrjC0ctTVz+ervAuCwmzNwO/3nCQzEiuo0U3cPys7ngDv2gumxDSi78/n2/QDtBeqCrjZKNb19W38usoF8Pp/obpcTbO85oBwLVC3Q0UHdH6VaE7hwc2V5fHx83Cps3xTK5/OJrmTqGyEmQUIoHqB2xwkDdTSmKKCuJmC9aai9MzkF4PNQA4mu5DEtMukGjQ4dFdT9Ufxmcn2MEoYbWFpaGhORl/1BUdEaw0A3Hq8JNCDlMk5WTwOm4CAhhhvUH9oiaVhtBNRJf6gBoUzalV8fqHVWT8q5x4QZ0Jrb3KBV0Nb7WaV9VlWfrUaw9pj9in84fGZAS+XgzYE6p98ftAIuNGUVcCbcgOZvAMY2varWAVoJbY10zL6aCzdA/S2pxuoBDYeOOpMV9XSpu12dDDcAfkThqwBildDVcI0DjfCBDJV1rsJAwFbi53PnjyvwlWBQ79oIho4A6tCOGpjdu3tX1WbOdyWOSTFrIjZKYLK5oEEfaF1TqdmHMve+6cUZuJlbWFhov0V8AFEHCcb84Kq0p1FbMGy8PewCaMxM7NlVUbiRDZTjh7ML4wp8EeAjAtyliGT9oHZrdMQKiEUq/AiqXFdc5jKZTCkKYyta0YpWtGJT8S9bZpM5N52/0QAAAABJRU5ErkJggg=="
        alt="logo"
      />
      <div className="TempCard">
        <h3>Pressure : {pressure} %</h3>
        <h3>Humidity: {humidity}</h3>
      </div>
    </div>
  );
}

export default TempCard;

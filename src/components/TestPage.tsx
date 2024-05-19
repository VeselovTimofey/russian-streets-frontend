function TestPage() {
  return (
    <>
      <section className="section">
        <h1 className="title-font title-font_bold">H1 - Benzin Bold, 100/Auto</h1>
        <h1 className="title-font title-font_regular">H1 - Benzin Regular, 100/Auto</h1>
        <h2 className="title-font title-font_bold">H2 - Benzin bold, 48/44</h2>
        <h2 className="title-font title-font_regular">H2 - Benzin Regular, 48/44</h2>
        <h3 className="title-font title-font_bold">H3 - Benzin bold, 34/40</h3>
        <h3 className="title-font title-font_regular">H3 - Benzin Regular, 34/40</h3>
      </section>
      <section className="section">
        <h4 className="subtitle-font subtitle-font_medium">Subtitle - Benzin Medium, 20/Auto </h4>
        <h4 className="subtitle-font subtitle-font_regular">Subtitle - Benzin Regular, 20/Auto </h4>
      </section>
      <section className="section">
        <p className="text-font text-font_regular text-font_size_big">Body 1 – Bahnschrift Regular, 16/20</p>
        <p className="text-font text-font_bold text-font_size_big">Body 1 – Bahnschrift Bold, 16/20</p>
      </section>
      <section className="section">
        <p className="text-font text-font_regular text-font_size_medium">Body 2 – Bahnschrift Regular, 14/20</p>
        <p className="text-font text-font_bold text-font_size_medium">Body 2 – Bahnschrift Bold, 14/20</p>
        <p className="text-font text-font_regular text-font_size_small">Caption 1 – Bahnschrift Regular, 13/16</p>
        <p className="text-font text-font_bold text-font_size_small">Caption 1 – Bahnschrift Bold, 13/16</p>
        <p className="text-font text-font_regular text-font_size_tiny">Caption 2 – Bahnschrift Regular, 11/12</p>
        <p className="text-font text-font_bold text-font_size_tiny">Caption 2 – Bahnschrift Bold, 11/12</p>
      </section>
      <section className="section">
        <form className="form">
          <label className="form__input-elements" htmlFor="form-disabled">
            <p className="text-font text-font_bold text-font_size_small">Заголовок(Неактивный)</p>
            <input className="form__input text-font text-font_regular text-font_size_medium" type="text" name="disabled" id="form-disabled" placeholder="подсказка" disabled />
            <div className="text-font text-font_regular text-font_size_tiny form__input-error"></div>
          </label>
          <label className="form__input-elements" htmlFor="form-text">
            <p className="text-font text-font_bold text-font_size_small">Заголовок</p>
            <input className="form__input text-font text-font_regular text-font_size_medium" type="text" name="text" id="form-text" placeholder="подсказка" />
            <div className="text-font text-font_regular text-font_size_tiny form__input-error"></div>
          </label>
          <label className="form__input-elements" htmlFor="form-error">
            <p className="text-font text-font_bold text-font_size_small">Заголовок(Ошибка)</p>
            <input className="form__input" type="email" name="error" id="form-error" required />
            <div className="text-font text-font_regular text-font_size_tiny form__input-error">Введите адрес почты вида Ivan@mail.ru</div>
          </label>
        </form>
      </section>
      <section className="section">
        <button className="button text-font text-font_bold text-font_size_big" type="button">Понятно</button>
        <button className="button text-font text-font_bold text-font_size_big" type="button" disabled>Понятно</button>
        <button className="button button_hollow text-font text-font_bold text-font_size_big" type="button">Понятно</button>
        <button className="button button_hollow text-font text-font_bold text-font_size_big" type="button" disabled>Понятно</button>
      </section>
    </>
  );
}

export default TestPage;

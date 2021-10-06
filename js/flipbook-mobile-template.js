const flipbookMobileTemplate = () => (
  `<section class="wedding__hero-section js-hero-section"></section>
  <section class="wedding__flipbook-section js-flipbook-content">
    <div class="flipbook">
      <!-- <div ignore="1"> Something else </div> -->
      <div class="wedding__flipbook-content">
        <article class="wedding__flipbook-paragraph">
          <h3 style="text-align: center;">
            Bienvenidos a esta tarjeta
          </h3>
          <p style="text-align: center;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint earum illum autem itaque, blanditiis beatae iure quo nisi amet, atque rerum placeat et culpa. Minima earum error sint velit!
          </p>
          <button onclick="nextPage()">
            Next
          </button>
        </article>
      </div>
      <div class="wedding_principal-section"></div>
      <div class="wedding_reception-section"></div>
      <div class="wedding_godparents-section"></div>
      <div class="wedding_gifts-section"></div>
    </div>
  </section>`
);

export default flipbookMobileTemplate;

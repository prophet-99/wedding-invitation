const flipbookDesktopTemplate = () => (
  `<section class="wedding__count-section">
    <div class="wedding__count-section-clock">
      <p class="wedding__count-section-item">
        <span class="wedding__count-section-subitem">02</span>
        <span class="wedding__count-section-subitem--mod">Months</span>
      </p>
      <p class="wedding__count-section-item">
        <span class="wedding__count-section-subitem">15</span>
        <span class="wedding__count-section-subitem--mod">Days</span>
      </p>
      <p class="wedding__count-section-item">
        <span class="wedding__count-section-subitem">02</span>
        <span class="wedding__count-section-subitem--mod">Hours</span>
      </p>
      <p class="wedding__count-section-item">
        <span class="wedding__count-section-subitem">34</span>
        <span class="wedding__count-section-subitem--mod">Minutes</span>
      </p>
    </div>
  </section>
  <section class="wedding__hero-section js-hero-section"></section>
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

export default flipbookDesktopTemplate;

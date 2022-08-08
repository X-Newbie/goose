ymaps.ready(function () {
  const center = [48.70227507379034, 44.5003565];
  var squareLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="dot"></div>'
  );
  var myMap = new ymaps.Map("map-test", {
      center: center,
      zoom: 17,
      controls: [],
    }),
    ZoomLayout = ymaps.templateLayoutFactory.createClass(
      "<div id='zoom-control'>" +
        "<div id='zoom-in' class='btn'><img src='../src/img/plus.svg' /></div><br>" +
        "<div id='zoom-out' class='btn'><img src='../src/img/minus.svg' /></div>" +
        "</div>",
      {
        // Переопределяем методы макета, чтобы выполнять дополнительные действия
        // при построении и очистке макета.
        build: function () {
          // Вызываем родительский метод build.
          ZoomLayout.superclass.build.call(this);

          // Привязываем функции-обработчики к контексту и сохраняем ссылки
          // на них, чтобы потом отписаться от событий.
          this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
          this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

          // Начинаем слушать клики на кнопках макета.
          $("#zoom-in").bind("click", this.zoomInCallback);
          $("#zoom-out").bind("click", this.zoomOutCallback);
        },

        clear: function () {
          // Снимаем обработчики кликов.
          $("#zoom-in").unbind("click", this.zoomInCallback);
          $("#zoom-out").unbind("click", this.zoomOutCallback);

          // Вызываем родительский метод clear.
          ZoomLayout.superclass.clear.call(this);
        },

        zoomIn: function () {
          var map = this.getData().control.getMap();
          // Генерируем событие, в ответ на которое
          // элемент управления изменит коэффициент масштабирования карты.
          this.events.fire("zoomchange", {
            oldZoom: map.getZoom(),
            newZoom: map.getZoom() + 1,
          });
        },

        zoomOut: function () {
          var map = this.getData().control.getMap();
          this.events.fire("zoomchange", {
            oldZoom: map.getZoom(),
            newZoom: map.getZoom() - 1,
          });
        },
      }
    ),
    zoomControl = new ymaps.control.ZoomControl({
      options: { layout: ZoomLayout },
    });

  const placemark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./../src/img/papa_goose.svg",
      iconImageSize: [68, 68],
      iconImageOffset: [-35, -44],
    }
  );

  myMap.controls.add(zoomControl, {
    position: { right: "32px", top: "145px" },
  });
  myMap.geoObjects.add(placemark);
});

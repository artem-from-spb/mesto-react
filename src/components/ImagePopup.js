function ImagePopup() {
    return(
        <section className="popup popup_big-picture">
          <div className="popup__container popup__container_size_xl">
            <img
              className="popup__picture-xl"
              alt="Эльбрус"
              src="<%=require('./images/elbrus.jpg')%>"
            />
            <p className="popup__pic-caption">11111111</p>
            <button type="button" className="popup__button-close">
              <img
                src="<%=require('./images/Close_Icon.svg')%>"
                alt="Закрыть окно"
                className="popup__close-img"
              />
            </button>
          </div>
        </section>
    )
}

export default ImagePopup;
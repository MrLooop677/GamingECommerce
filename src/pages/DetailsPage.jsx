import { useDetails } from "../Hooks/use-product-details";

const DetailsPage = () => {
  const { item } = useDetails();
  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 mb-3 mt-4 ml-auto">
        <div className="shop-card" id="price_30">
          <div className="shop-card__image position-relative">
            <img src={item.mainImg ? item.mainImg : ""} alt="" />

            <div className="overlay shop-overlay"></div>
          </div>
          <div className="shop-card__desc">
            <div className="row align-items-center mt-3">
              <div className="col-6">
                <div className="card__name">
                  <h3>
                    <a href="Age-Check.html">{item.name}</a>
                  </h3>
                </div>
              </div>
              <div className="col-6">
                <div className="card__price text-end">
                  <h5>${item.price}</h5>
                </div>
              </div>
              <div className="col-12">
                <span className="card__type">Category / {item.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

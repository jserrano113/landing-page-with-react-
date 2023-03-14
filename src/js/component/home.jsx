import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (<>
		<div className="text-center">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                <ul class="navbar-nav">
                  <li class="nav-item d-flex">
                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item d-flex">
                    <a class="nav-link text-secondary" href="#">About</a>
                  </li>
                  <li class="nav-item d-flex">
                    <a class="nav-link text-secondary" href="#">Services</a>
                  </li>
                  <li class="nav-item d-flex">
                    <a class="nav-link text-secondary" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                  </li>
                </ul>
            </ul>
              </div>
            </div>
          </nav>
		</div>

		<div class="container">
            <div class="jumbotron m-3 bg-light">
                <h1 class="display-4">A Warm Welcome!</h1>
                <p class="lead">Lorem ipsum dolor sit amet. In corrupti cupiditate qui magnam exercitationem sit commodi fuga ut neque doloremque sit magnam debitis ad nihil omnis. Vel similique commodi et harum nihil et quidem sunt sit quidem exercitationem ea rerum dolores..</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>

			<div class="row row-cols-sm-1 row-cols-md-4">
	<div class="card">
	<img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg" alt="Cat"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Lorem ipsum dolor sit amet. In corrupti cupiditate qui magnam exercitationem sit commodi fuga ut neque doloremque sit magnam debitis ad nihil omnis.</p>
    <a href="#" class="btn btn-primary">Find Out More!</a>
  </div>
</div>

<div class="card">
<img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg" alt="Cat"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Lorem ipsum dolor sit amet. In corrupti cupiditate qui magnam exercitationem sit commodi fuga ut neque doloremque sit magnam debitis ad nihil omnis.</p>
    <a href="#" class="btn btn-primary">Find Out More!</a>
  </div>
</div>

<div class="card">
<img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg" alt="Cat"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Lorem ipsum dolor sit amet. In corrupti cupiditate qui magnam exercitationem sit commodi fuga ut neque doloremque sit magnam debitis ad nihil omnis.</p>
    <a href="#" class="btn btn-primary">Find Out More!</a>
  </div>
</div>

<div class="card">
<img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg" alt="Cat"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Lorem ipsum dolor sit amet. In corrupti cupiditate qui magnam exercitationem sit commodi fuga ut neque doloremque sit magnam debitis ad nihil omnis.</p>
    <a href="#" class="btn btn-primary">Find Out More!</a>
  </div>
</div>
</div>
</div>
<div class="Footer bg-dark">
            <p class="text-white text-center">Copyright &copy; Your Website 2019</p>
          </div>

		</>
	);
};

export default Home;

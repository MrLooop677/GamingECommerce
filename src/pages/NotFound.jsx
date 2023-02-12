export default function NotFound() {
    return (
        <main class="not-found d-flex justify-content-center align-items-center text-center">
        <div class="custom-container">
            <div class="not-found__contents">

                <div class="not-found__infos">
                    <h2 class="h1 text-light-color">404</h2>
                    <p class="not-found__desc mt-5 h3 fw-bold">YOU CHOSE THE WRONG PATH!</p>
                    <p class="not-found__desc mb-5 w-50 m-auto">Or such a page just doesn't exist...
                        <br/>Would you like to go back to the homepage?</p>
                    <a href="./" class="login__btn primary-btn--non-bg fs-5">Return To Home Page</a>
                </div>
            </div>
        </div>
    </main>
    )
}